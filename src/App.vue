<template>
  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <router-link to="/invitees">Go to Invitees</router-link>
  <LoginControls />
  <router-view></router-view>
  
</template>

<script>
import LoginControls from './components/LoginControls.vue';
export default {
    name: "App",
    components: { LoginControls }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

