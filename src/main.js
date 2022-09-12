import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router/router";
import Axios from "axios";
import VueAxios from "vue-axios";
import VueCookies from "vue-cookies";
Axios.defaults.withCredentials = true;
const baseURL = "http://77.86.108.133:8081";
if (typeof baseURL !== "undefined") {
  Axios.defaults.baseURL = baseURL;
}
createApp(App).use(VueAxios, Axios).use(Router).use(VueCookies).mount("#app");
