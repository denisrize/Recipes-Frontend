<template>
  <div class="container">
    <h1 class="title">Login</h1>
    <LoginForm @login-success="handleLoginSuccess" />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  name: "Login",
  components: {
    LoginForm
  },
  methods: {
    handleLoginSuccess() {
      this.$router.push("/");
    }
  }
};
</script>