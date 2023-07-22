<template>
  <b-container class="main-container">
    <b-row class="mt-4">
      <b-col>
        <h1 class="text-center" style="font-size: 4rem;color: wheat;">Check out this Blogs recipes!</h1>
        <Carousel :items="carouselItems"/>
      </b-col>
    </b-row>

  <b-row class="mt-4">
    <b-col>
      <RecipePreviewList number="3" endPoint="/recipes/random" title="Explore this recipes"  />
    </b-col>

    <b-col>
    <div v-if="!$root.store.username">
      <div class="login-form">
        <h1 class="title">Sign In</h1>
        <LoginForm />
      </div>

      <RecipePreviewList number="4" :recipes="favoriteRecipes" title="Most popular recipes"  /> 
    </div>
    <RecipePreviewList number="3" endPoint="/users/last-view" v-else title="Last viewed recipes"  />
    </b-col>
    
  </b-row>

</b-container>

</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LoginForm from '../components/LoginForm.vue';
import Carousel from '../components/Carousel.vue';
import damn from '@/assets/carousel/damn.png';
import pinch from '@/assets/carousel/pinch.png';
import gimme from '@/assets/carousel/gimm.png';


export default {
  components: {
    RecipePreviewList,
    LoginForm,
    Carousel
  }, 
  data() {
      return {
        // need to add static favorites recipes on the site.
        favoriteRecipes: [{
            "id": 721059,
            "title": "Blueberry Almond Crescent Rolls",
            "image": "https://spoonacular.com/recipeImages/721059-556x370.jpg",
            "vegetarian": false,
            "vegan": true,
            "glutenFree": true,
            "aggregateLikes": 122,
            "readyInMinutes": 45,
            "favorite": true,
            "viewed": true


        },
        {
          "id": 716409,
          "title": "Cannoli Cream-Filled Strawberries",
          "readyInMinutes": 45,
          "image": "https://spoonacular.com/recipeImages/716409-556x370.jpg",
          "vegetarian": true,
          "vegan": false,
          "glutenFree": true,
          "aggregateLikes": 1072,


        }
      ],
        // need to replace with static images for saving network request
        carouselItems: [
          {
            id: 1,
            img: pinch,
            link: 'https://pinchofyum.com',
            caption: 'Pinch-of-Yum',
          },
          {
            id: 2,
            img: damn,
            link: 'https://damndelicious.net',
            caption: 'damn-delicious',
          },
          {
            id: 3,
            img: gimme,
            link: 'https://www.gimmesomeoven.com',
            caption: 'Gimme-Some-Oven',
          },
        ],
      };
    },
};
</script>

<style lang="scss" scoped>
.login-form {
  background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid black;
    padding: 20px;
    margin-top: 9%;
    margin-bottom: 2%;
}
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
