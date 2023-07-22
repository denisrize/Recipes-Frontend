import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId", // Add the "path" property here
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/users/my-recipes",
    name: "myRecipes",
    component: () => import("./pages/MyRecipes"),
  },
  {
    path: "/users/my-recipes/:recipeId",
    name: "myRecipeFull",
    component: () => import("./pages/RecipeViewPage"),
    props: (route) => ({ usersRecipe: true})
  },
  {
    path: "/users/createRecipe/",
    name: "createRecipe",
    component: () => import("./pages/CreateRecipe"),
  },
  {
    path: "/users/favorites",
    name: "favorites",
    component: () => import("./pages/MyFavorites"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/familyRecipes",
    name: "family",
    component: () => import("./pages/MyFamilyRecipes"),
  },
];

export default routes;
