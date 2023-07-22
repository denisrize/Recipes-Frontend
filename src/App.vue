<template>
  <div id="app" :class="backgroundClass">
    <NavBar title="Chop and Pop: Quick and Easy Meals"></NavBar>
    <transition name="fade">
      <router-view class="main-comp"/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
     NavBar,
     Footer
  },
  computed: {
    backgroundClass() {
      return this.$route.path === '/about' ? 'about-background' : 'home-background';
    }
  }
};
</script>

<style lang="scss">

</style>
