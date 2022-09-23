import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router/router";
import Axios from "axios";
import VueAxios from "vue-axios";
import VueCookies from "vue-cookies";
Axios.defaults.withCredentials = true;
let baseURL;
if(process.env.NODE_ENV === "production") {
  baseURL = "https://api.samgowedding.com";
} else {
  baseURL = "http://localhost:8081";
}

if (typeof baseURL !== "undefined") {
  Axios.defaults.baseURL = baseURL;
}
createApp(App).use(VueAxios, Axios).use(Router).use(VueCookies).mount("#app");
