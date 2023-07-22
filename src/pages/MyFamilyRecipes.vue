<template>
    <div>
        <div v-if="loading" class="d-flex justify-content-around align-items-center mt-5">
            <b-progress variant="info" :value="100" animated></b-progress>
        </div>
        <div v-else-if="recipes.length" class="d-flex align-items-center mt-5">
            <RecipePreviewList imgSide="left" title="Your Favorite Recipes" :recipes="recipes" :usersRecipe="usersRecipe" />
        </div>
        <div v-else class="d-flex justify-content-around align-items-center mt-5">
            <p>No results found</p>
        </div>
    </div>
</template>
  
  
<script>
import RecipePreviewList from '../components/RecipePreviewList';
import familyRecipes from '../assets/familyRecipes';


export default {
    components: {
        RecipePreviewList,
    },
    data() {
        return {
            query: '',
            number: '5',
            recipes: familyRecipes,
            sortKey: null,
            sortAsc: false,
            searched: false,
            loading: false,
            usersRecipe: false,
        };
    },
    mounted() {
    },
    async created() {
    },
    methods: {
    },
};
</script>
  
<style scoped>
.checkbox-columns {
    column-count: 2;
    column-gap: 20px;
    padding: 15px;
}
</style>