<template>
      <div class="footer mt-4">
      <b-container  fluid>
        <b-row>
          <b-col md="4" >
            <router-link :to="{ name: 'main' }" class="links">
                <h3>Chop and Pop:
                Quick and <br>Easy Meals</h3>
                <img src="@/assets/LG.png"  alt="Logo" class="logo">
            </router-link>
          </b-col>
          <b-col md="4">
            <h4>Pages</h4>
            <ul >
              <li><router-link class="links" :to="{ name: 'search' }">Search Recipe</router-link></li>
              <li><router-link class="links" :to="{ name: 'notFound' }">Create Recipe</router-link></li>
              <li><router-link class="links" :to="{ name: 'about' }">About</router-link></li>
              <li><router-link class="links" :to="{ name: 'register' }">Register</router-link></li>
            </ul>
          </b-col>
          <b-col md="4">
            <h4>Contact</h4>
             <a href="https://www.linkedin.com/in/lior-tkach" class="links mb-2" target="_blank">
                <img class="icon mr-2" src="@/assets/icons/linkedin.png" alt="LinkedIn Icon">
                Lior Tkach</a>
            <p><b>Email:</b> liortkach23@gmail.com</p>

               <a href="https://www.linkedin.com/in/denis-rize" class="links mb-2" target="_blank">
                <img class="icon mr-2" src="@/assets/icons/linkedin.png" alt="LinkedIn Icon">
                Denis Rize</a>

            <p><b>Email:</b> denisrize@gmail.com</p>
            
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-center">
            <small>&copy; 2023 R&T corporation</small>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
<style scoped>

.logo {
max-width: 200px;
}
.links {
  color: black ;
  text-decoration: none;

}
ul {
list-style-type: none;
padding: 0;
}

ul li {
line-height: 2;
}
</style>
  