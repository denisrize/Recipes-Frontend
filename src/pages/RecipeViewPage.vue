<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <div class="d-flex align-items-center">
          <h1  style="font-size: 4rem;margin-left: 30%;">{{ recipe.title }}</h1>
        </div>
        <div class="img-container">
          <img :src="recipe.image" class="center img-frame" />
        </div>
      </div>
      <div class="recipe-body main-container">
        <div class="d-flex justify-content-between align-items-center">
          <h2 style="font-size: 3rem;">Summary</h2>
          <b-button variant="primary" @click="addToFavorites" :disabled="isFavorite" class="favorite-button">
          <b-icon v-if="isFavorite" icon="hand-thumbs-up-fill"></b-icon>
           <span v-else>+ Add to Favorites</span>
            </b-button>
        </div>
        <div v-html="recipe.summary"></div>

        <div class="wrapper">
          <div class="wrapped">
            <h4>Preparation:</h4>
            <div class="mb-3">
              <div>Ready in: {{ recipe.readyInMinutes }} minutes</div>
              <div>Popularity: {{ recipe.aggregateLikes }} likes</div>
              <div>Number of Portions: {{ recipe.numberOfPortions }}</div>

            </div>
            <h2>Ingredients:</h2>
            <ul>
              <li v-for="(r, index) in recipe.ingredients" :key="index + '_' + r.id">
                {{ r.description }}
              </li>
            </ul>
            <h2>Equipment:</h2>
            <ul>
              <li v-for="(item, index) in recipe.equipment" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            <h2>Instructions:</h2>
            <ol>
              <li v-for="(s, index) in recipe.instructions" :key="index">
                {{ s }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import familyRecipes from "../assets/familyRecipes.js";

export default {
  data() {
    return {
      recipe: null,
      isFavorite: false
    };
  },
  props: {
    usersRecipe: {
      type: Boolean,
      default: false
    },
  },methods: {
    async addToFavorites() {
      try{
        let response;
        if (!this.usersRecipe) {
          response = await this.axios.post(
            this.$root.store.state.server_domain + "/users/favorites",
            {
              recipeId: this.recipe.id
            }
          );
          this.isFavorite = true;
      }}
      catch(error){
        console.log("error.response.status", error.response.status);
      }
    }
  },
  async created() {
    try {
      let response;
      console.log(this.usersRecipe)
      try {
        if (!this.usersRecipe) {
          response = await this.axios.get(
            this.$root.store.state.server_domain + "/recipes/" + this.$route.params.recipeId,
            {
              params: { full: true }
            }
          );

          if (response.status !== 200) this.$router.replace("/NotFound");
          console.log("This is the Full rsponse: ", response)

          this.recipe = response.data[0];
          console.log("This is the Full recipes: ", this.recipe)
        }
        else {
          this.loading = true;
          // Get Users Recipes from DB
          const response = await this.axios.get(
            this.$root.store.state.server_domain + "/users/my-recipes/" + this.$route.params.recipeId,
          )
          console.log("My response from the database: ",response)
          this.recipe = response.data;
          console.log("My recipes from the database: ",this.recipe)
        }
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }
      /*
      if (!this.usersRecipe) {
        this.recipe = response.data[0];
      }
      */
    } catch (error) {
      console.log(error);
    }
    this.isFavorite = this.recipe.favorite

  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}

.wrapped {
  width: 50%;
}

.icon {
  width: 24px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

/* .recipe-header{

} */
</style>
