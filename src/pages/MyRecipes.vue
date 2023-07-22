<template>
    <div>
        <div v-if="loading" class="d-flex justify-content-around align-items-center mt-5">
            <b-progress variant="info" :value="100" animated></b-progress>
        </div>
        <div v-else-if="recipes.length" class="d-flex align-items-center mt-5">
            <RecipePreviewList imgSide="left" title="Your Recipes" :recipes="recipes" :usersRecipe="usersRecipe" />
        </div>
        <div v-else class="d-flex justify-content-around align-items-center mt-5">
            <h2 style="text-decoration: none;">You didn't create any recipe yet... give it a try!</h2>
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
            number: '5',
            recipes: [],
            sortKey: null,
            sortAsc: false,
            searched: false,
            loading: false,
            usersRecipe: true,
        };
    },
    mounted() {
    },
    async created() {
        await this.getUserRecipes();
    },
    methods: {
        async getUserRecipes() {
            // Set this.recipes to the results
            try {
                this.loading = true;
                // Get Users Recipes from DB
                const response = await this.axios.get(
                    this.$root.store.state.server_domain + "/users/my-recipes",
                )

                console.log("This is the response: ", response)

                this.recipes = response.data;

                console.log("This is the recipes: ", this.recipes)

            } catch (err) {
                console.log(err)
            } finally {
                this.loading = false; // End loading
            }
        },
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