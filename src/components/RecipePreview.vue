<template>
<router-link :to="usersRecipe ? { name: 'myRecipeFull', params: { recipeId: recipe.id } } : { name: 'recipe', params: { recipeId: recipe.id } }"
  @click.native="addToLastVieW" class="links">
    <b-card :img-src="recipe.image" img-alt="Card image" class="mb-3 w-80 "
      :img-top="imgSide === 'top'" :img-left="imgSide === 'left'">

      <b-card-body class="recipe-preview">

        <b-card-title :title="recipe.title" class="mb-1">
          {{ recipe.title }}
        </b-card-title>

        <b-card-text>
          <b-row class="mb-2">
            <b-col cols="2">
            </b-col>
            <b-col cols="8">
              <div class="d-flex justify-content-center">
                <div v-if="recipe.vegan" >
                  <img class="icon info" src="@/assets/icons/vegan.png" alt="vegan">
                </div>
                <div v-if="recipe.glutenFree">
                  <img class="icon info" src="@/assets/icons/gluten-free.png" alt="gluten-free">
                </div>
                <div v-if="recipe.viewed">
                  <img class="icon info" src="@/assets/icons/view.png" alt="viewed">
                </div>
                <div v-if="recipe.favorite">
                  <img class="icon info" src="@/assets/icons/heart.png" alt="favorite">
                </div>
              </div>
            </b-col>
            <b-col cols="2">
            </b-col>
          </b-row>
          <b-row class="justify-content-center ">
            <b-col cols="6" class="text-center">
              <img class="icon" src="@/assets/icons/wall-clock.png" alt="clock">
              {{ recipe.readyInMinutes }} minutes
            </b-col>
            <b-col cols="6" class="text-center">
              <span v-for="(star, index) in stars" :key="index">
                <img v-if="star === 'full'" class="icon" src="@/assets/icons/star.png" :alt="star + ' star'">
                <img v-else-if="star === 'half'" class="icon" src="@/assets/icons/half-star.png" :alt="star + ' star'">
                <img v-else class="icon" src="@/assets/icons/empty-star.png" :alt="star + ' star'">
              </span>
          </b-col >
          </b-row>
        </b-card-text>

      </b-card-body>
      <div class="overlay">
        <b-button variant="primary" class="details-button">More Details</b-button>
      </div>
    </b-card>

  </router-link>
</template>

<script>
export default {
  // mounted() { v-if="image_load"
  //   let img = new Image();
  //   img.onload = () => {
  //     this.image_load = true;
  //   };
  //   img.src = this.recipe.image;
  // },
  data() {
    return {
      image_load: false
    };
  },
  methods: {
    async addToLastVieW() {
      try {
        if (!this.usersRecipe) {
          const response = await this.axios.post(
            this.$root.store.state.server_domain + "/users/last-view",
            {
              recipeId: this.recipe.id
            }

          );
        }
      } catch (err) {
        console.log(err.response);
      }
    }
  },
  computed: {
    stars() {
    let fullStars = Math.floor(this.recipe.aggregateLikes / 10);
    let halfStar = this.recipe.aggregateLikes % 10 >= 5;

    // Ensure that the total number of stars (full and half) does not exceed 5
    if (fullStars >= 5) {
      fullStars = 5;
      halfStar = false; // No half star if there are already 5 full stars
    } 
    const starsArray = Array(fullStars).fill('full');
    if (halfStar) {
      starsArray.push('half');
    }
        // Add empty stars to the array until its length is 5
    while (starsArray.length < 5) {
      starsArray.push('empty');
    }
    return starsArray;
  },
  },
  props: {
    recipe: {
      type: Object,
      required: true
    },
    imgSide: {
      type: String,
      default: 'top' // default value is 'top'
    },
    usersRecipe: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">

</style>
