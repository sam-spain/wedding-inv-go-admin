<template>
  <span v-if="user">
    <p>Welcome, {{ user.name }}</p>
    <button @click="logout">Logout</button>
  </span>
  <span v-else>
    <label for="loginEmailInput">Login Email</label>
    <input type="email" id="loginEmailInput" v-model="loginDetails.email" />
    <label for="loginPasswordInput">Login Password</label>
    <input type="password" id="loginPasswordInput" v-model="loginDetails.password" />
    <button @click="login">Login</button>
  </span>
</template>

<script>
export default {
  name: "LoginControls",
  data() {
    return {
      user: undefined,
      loginDetails: {
        email: undefined,
        password: undefined
      }
    }
  },
  created() {
    this.getMe();
  },
  methods: {
    async login() {
      const response = await this.$http.post(
        "/api/v1/auth/login",
        this.loginDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      this.userToken = response.data;
      this.cookie = this.$cookies.get("token");
      await this.getMe();
    },
    async logout() {
      await this.$http.delete("/api/v1/auth/logout");
      this.user = undefined;
      this.$router.push({ path: "/" });
    },
    async getMe() {
      const response = await this.$http.get("/api/v1/auth/me", {
        withCredentials: true,
      });
      this.user = response.data.data;
    },
  }
}
</script>