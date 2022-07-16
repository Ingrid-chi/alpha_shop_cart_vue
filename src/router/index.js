import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import CheckoutPanel from "../views/CheckoutPanel.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/checkoutpanel",
  },
  {
    path: "/checkoutpanel",
    name: "checkout-panel",
    component: CheckoutPanel,
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
