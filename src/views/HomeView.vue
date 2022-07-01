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
      const response = await this.$http.post("/api/v1/auth/login", {
        email: "jane@samspain.com",
        password: "passwords",
      });
      this.userToken = response.data;
      this.cookie = this.$cookies.get("token");
    },
    async getMe() {
      const response = await this.$http.get("/api/v1/auth/me", {
        headers: {
          Authorization: "Bearer " + this.userToken,
          "Content-Type": "text/plain",
        },
      });
      this.user = response.data.data;
    },
  },
};
</script>
