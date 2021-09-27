import Vue from "vue";
import Router from "vue-router";
import Invitees from "../components/Invitees.vue";
import Home from "../components/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/invitees",
      name: "Invitees",
      component: Invitees,
    },
  ],
});
