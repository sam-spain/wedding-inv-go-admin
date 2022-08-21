<template>
  <h1>
    <p>Home Page {{ $route.params.id }}</p>
    <p v-if="user">Welcome, {{ user.name }}</p>
  </h1>

  <button @click="login">Login</button>
  <button @click="getMe">Get Me</button>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      userToken: undefined,
      cookie: undefined,
      user: undefined,
    };
  },
  methods: {
    async login() {
      const response = await this.$http.post(
        "/api/v1/auth/login",
        {
          email: "sunny@samspain.com",
          password: "passwords",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      this.userToken = response.data;
      this.cookie = this.$cookies.get("token");
    },
    async getMe() {
      const response = await this.$http.get("/api/v1/auth/me", {
        withCredentials: true,
      });
      this.user = response.data.data;
    },
  },
};
</script>
