import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import HanaPage from "@/views/HanaPage.vue";
import CottagePage from "@/views/CottagePage.vue";
import SHoPPage from "@/views/SHoPPage.vue";
import WXYPage from "@/views/WXYPage.vue";

const routes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/hana", name: "HanaPage", component: HanaPage },
  { path: "/cottage", name: "CottagePage", component: CottagePage },
  { path: "/shop", name: "SHoPPage", component: SHoPPage },
  { path: "/wxy", name: "WXYPage", component: WXYPage },
];

const router = createRouter({
  base: process.env.NODE_ENV === 'production' ? 'personalsite' : '/',
  history: createWebHistory(),
  routes,
  scrollBehavior(top, back, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0 }), 300);
      })
    );
  },
});

export default router;
