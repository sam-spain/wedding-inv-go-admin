import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router/router";
import Axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(VueAxios, Axios).use(Router).mount("#app");

const baseURL = "http://localhost:8081";
if (typeof baseURL !== "undefined") {
  Axios.defaults.baseURL = baseURL;
}
