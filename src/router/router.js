import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import InviteesView from "../views/InviteesView.vue";
import InviteeDetails from "../views/InviteeDetails.vue";
import CreateInvitee from "../views/CreateInvitee.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/invitees",
    name: "Inivtees",
    component: InviteesView,
  },
  {
    path: "/invitee-details",
    name: "InviteeDetails",
    component: InviteeDetails,
  },
  {
    path: "/create-invitee",
    name: "CreateInvitee",
    component: CreateInvitee,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
