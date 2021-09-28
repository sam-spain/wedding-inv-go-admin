import Vue from "vue";
import Router from "vue-router";
import Invitees from "../components/Invitees.vue";
import CreateInvitee from "../components/CreateInvitee.vue";
import InviteeDetails from "../components/InviteeDetails.vue";
import Home from "../components/Home.vue";
import "../assets/css/tailwind.css";

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
    {
      path: "/create-invitee",
      name: "CreateInvitee",
      component: CreateInvitee,
    },
    {
      path: "/invitee-details",
      name: "InviteeDetails",
      component: InviteeDetails,
    },
  ],
});
