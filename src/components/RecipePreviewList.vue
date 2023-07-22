<template>
  <b-container fluid="lg">
    <h2>
      {{ title }}:
      <slot></slot>
    </h2>
    <b-row>
      <b-col cols="12" v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" :usersRecipe="usersRecipe" :imgSide="imgSide" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  data() {
    return {
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    endPoint: {
      type: String,
      default: null
    },
    number: {
      type: String,
      default: '3'
    },
    recipes: {
      type: Array,
      default: null
    },
    imgSide: {
      type: String,
      default: 'top'
    },
    usersRecipe: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (!this.recipes && !this.usersRecipe) {
      this.updateRecipes();
    }
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.state.server_domain + this.endPoint,
          {
            params: { number: this.number }
          }
        );

        this.recipes = response.data;
        // this.recipes = [];
        // this.recipes.push(...recipes);

      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
