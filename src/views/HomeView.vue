<template>
  <h1>Home Page {{ $route.params.id }}</h1>
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
      ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmI4YzE1OGQ0Y2Q2OTdhMzBjM2E5OSIsImlhdCI6MTY1NjYyNjA1MywiZXhwIjoxNjU5MjE4MDUzfQ.lGwxQPtXYC0PYLrhOyugtw5gvP96SnBWEZHMvSPUQHA");
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
