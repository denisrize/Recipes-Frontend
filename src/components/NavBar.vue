<template>
    <b-navbar toggleable="lg" class="custom-navbar" type="dark" >
      <!-- Brand name -->
      <b-navbar-brand class="navbar-brand">
        <router-link :to="{ name: 'main' }" class="brand-link" >
          <div class="flex-box">
          <img src="@/assets/LG.png" alt="Logo" class="logo">
          <h3 > {{ title }} </h3> 
        </div>
        </router-link>
      </b-navbar-brand>
  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- Search button -->
          <b-nav-item >
            <router-link :to="{name : 'search'}" class="link">Search</router-link>
          </b-nav-item>
  
          <!-- Create a recipe button -->
          <b-nav-item v-if="$root.store.username">
            <router-link :to="{name : 'createRecipe'}" class="link">Create Recipe</router-link>
          </b-nav-item>
          <b-nav-item v-else>
            <router-link :to="{name : 'login'}" class="link">Create a Recipe</router-link>
          </b-nav-item>
  
          <!-- Register button -->
          <b-nav-item>
            <router-link :to="{name : 'register'}" class="link">Register</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link :to="{name : 'about'}" class="link">About</router-link>
          </b-nav-item>
  
          <!-- Login button -->
          <b-nav-item v-if="!$root.store.username" @click="$root.store.logout()">
            <router-link :to="{name : 'login'}" class="link">Login</router-link>
          </b-nav-item>
  
          <!-- User dropdown -->
          <b-nav-item-dropdown class="link" v-if="$root.store.username" :text="'Hello ' + $root.store.username" right>
            <b-dropdown-item>
              <router-link :to="{name : 'favorites'}" class="link">My Favorites</router-link>
            </b-dropdown-item>

            <b-dropdown-item>
              <router-link :to="{name : 'myRecipes'}" class="link">My Recipes</router-link>
            </b-dropdown-item>

            <b-dropdown-item>
              <router-link :to="{name : 'family'}" class="link">Family Recipes</router-link>
            </b-dropdown-item>

              <b-dropdown-item>
                <router-link :to="{name : 'main'}" class="link" @click.native="Logout">Logout</router-link>
            </b-dropdown-item>

          </b-nav-item-dropdown>

          <b-nav-item class="link" v-else>
                Welcome, Guest!
          </b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>
  
<script>
export default {
    props: {
    title: {
      type: String,
      required: true
    }
    },
    methods: {
    async Logout() {
      try {
        const response = await this.axios.post(
          this.$root.store.state.server_domain +"/logout");
        
        console.log("here")
        this.$root.store.logout();
        this.$root.toast("Logout", "User logged out successfully", "success");

        this.$router.push("/").catch(() => {
          this.$forceUpdate();
      });
    } catch (err) {
        console.log(err.response.data.message);
      }
    }
  }
}
</script>
<style lang="scss">

</style>
