<template>
  <div>
    <!-- Search form -->
    <b-form @submit.prevent="loadResult" class="d-flex justify-content-around align-items-center mt-5">
      <b-col md="2"></b-col> <!-- Empty column -->
      <b-col cols="12" md="8">
        <div class="d-flex justify-content-around align-items-center">
          <b-form-input v-model="query" placeholder="Search for recipes" class="flex-grow-1"></b-form-input>
          <b-form-select v-model="number" :options="['5', '10', '15']" default="5" class="ml-1 w-auto"></b-form-select>
          <b-button class="ml-1 search-btn" type="submit" style="margin-top: 0;">Search</b-button>

          <b-dropdown id="dropdown-diet" text="Diet" variant="warning" class="ml-4">
            <div class="checkbox-columns">
              <b-form-checkbox-group v-model="diet" :options="diets" stacked></b-form-checkbox-group>
            </div>
          </b-dropdown> 

          <b-dropdown id="dropdown-cuisine" text="Cuisine" variant="warning" class="ml-1">
            <b-dropdown-group>
              <div class="checkbox-columns">
                <b-form-checkbox v-for="(option, index) in cuisines" :key="index" v-model="cuisine" :value="option">{{ option }}</b-form-checkbox>
              </div>
            </b-dropdown-group>
          </b-dropdown>

          <b-dropdown id="dropdown-intolerance" text="Intolerance" variant="warning" class="ml-1">
            <div class="checkbox-columns" >
              <b-form-checkbox-group v-model="intolerance" :options="intolerances" stacked></b-form-checkbox-group>
            </div>
          </b-dropdown>
        </div>

      </b-col>
      <b-col md="2"></b-col> <!-- Empty column -->
    </b-form>

    <!-- Selected options -->
       <b-row class="mt-4 mb-3">
        <b-col md="2"></b-col> <!-- Empty column -->
        <b-col cols="12" md="6" class="d-flex flex-wrap">
          <b-badge
            v-for="(item, index) in cuisine"
            :key="'cuisine-' + index"
            variant="info"
            class="mr-2 mb-2"
          >
            {{ item }}
            <b-button-close @click="removeCuisine(index)" />
          </b-badge>
          <b-badge
            v-for="(item, index) in diet"
            :key="'diet-' + index"
            variant="success"
            class="mr-2 mb-2"
          >
            {{ item }}
            <b-button-close @click="removeDiet(index)" />
          </b-badge>
          <b-badge
            v-for="(item, index) in intolerance"
            :key="'intolerance-' + index"
            variant="danger"
            class="mr-2 mb-2"
          >
            {{ item }}
            <b-button-close @click="removeIntolerance(index)" />
          </b-badge>
        </b-col>
        <b-col md="4"></b-col> <!-- Empty column -->

      </b-row>

        <!-- Sort buttons -->
    <div class="d-flex justify-content-around align-items-center mt-3">
      <b-button-group>
        <b-button class="search-btn"  @click="sort('readyInMinutes')" :disabled="!recipes.length">
          Sort by preparation time
          <b-icon-arrow-up v-if="sortKey === 'readyInMinutes' && sortAsc" />
          <b-icon-arrow-down v-if="sortKey === 'readyInMinutes' && !sortAsc" />
        </b-button>
        <b-button class="ml-2 search-btn" @click="sort('aggregateLikes')" :disabled="!recipes.length">
          Sort by popularity
          <b-icon-arrow-up v-if="sortKey === 'aggregateLikes' && sortAsc" />
          <b-icon-arrow-down v-if="sortKey === 'aggregateLikes' && !sortAsc" />
        </b-button>
      </b-button-group>
    </div>

    <!-- Results area
    <div v-if="recipes.length" class="d-flex align-items-center mt-5">
      <RecipePreviewList imgSide="left" title="Search Result" :recipes="recipes" />
    </div>
    <div v-else-if="searched" class="d-flex justify-content-around align-items-center mt-5">
      <p>No results found</p>
    </div> -->
    <!-- Results area -->
    <div v-if="loading" class="d-flex justify-content-around align-items-center mt-5">
      <div class="d-flex align-items-center">
        <h4 style="font-size: 3rem;">searching...</h4>
        <b-spinner class="ml-4" style="width: 3rem; height: 3rem;"></b-spinner>
      </div>
    </div>
    <div v-else-if="recipes.length" class="d-flex align-items-center mt-5">
      <RecipePreviewList imgSide="left" title="Search Result" :recipes="recipes" />
    </div>
    <div v-else-if="searched" class="d-flex justify-content-around align-items-center mt-5">
      <h4>No results found</h4>
    </div>

  </div>
</template>

<script>
import RecipePreviewList from '../components/RecipePreviewList';
import diet from "../assets/diet";
import cuisines from "../assets/cuisines";
import intolerances from "../assets/intolerances";

export default {
  components: {
    RecipePreviewList,
  },
  data() {
    return {
      query: '',
      cuisine: [],
      diet: [],
      intolerance: [],
      number: '5',
      recipes: [],
      cuisines: [],
      diets: [],
      intolerances: [],
      sortKey: null,
      sortAsc: false,
      searched: false,
      loading: false,

    };
  },
  mounted() {
    this.cuisines.push(...cuisines);
    this.diets.push(...diet);
    this.intolerances.push(...intolerances);

    // Check if there are any stored results
    const lastSearch = localStorage.getItem('lastSearch');
    if (lastSearch) {
      this.recipes = JSON.parse(lastSearch);
      this.searched = true;
    }
  },
  methods: {
    async loadResult(){
      this.loading = true;
      this.searched = false;
      console.log("search..")
      await this.searchRecipes();
      this.loading = false;
      console.log("done..")


    },
    async searchRecipes() {
      // Set this.recipes to the results
      try {
        // this.loading = true;
        let params = { 
          query: this.query,
          number : this.number
        }

        if (this.diet.length > 0) {
          params.diet = this.diet.join(",");
        }

        if (this.cuisine.length > 0) {
          params.cuisines = this.cuisine.join(",");
        }

        if (this.intolerance.length > 0) {
          params.intolerances = this.intolerance.join(",");
        }

        const response = await this.axios.get(
          this.$root.store.state.server_domain + "/recipes/search",
          { params }
        )

        this.recipes = response.data
            // Store the results in localStorage
        localStorage.setItem('lastSearch', JSON.stringify(this.recipes));
        console.log(this.recipes)
      }catch(err){
          console.log(err)
       }finally {
        this.searched = true;
    }     
    },
    sort(key) {
      if (this.sortKey === key) {
        this.sortAsc = !this.sortAsc;
      } else {
        this.sortKey = key;
        this.sortAsc = false;
      }
      this.recipes.sort((a, b) => (a[key] - b[key]) * (this.sortAsc ? 1 : -1));
    },
    removeCuisine(index) {
    this.cuisine.splice(index, 1);
    },
    removeDiet(index) {
      this.diet.splice(index, 1);
    },
    removeIntolerance(index) {
      this.intolerance.splice(index, 1);
    }
  },
};
</script>

<style lang="scss">

.checkbox-columns {
  column-count: 2;
  column-gap: 20px;
  padding: 15px;
}
</style>