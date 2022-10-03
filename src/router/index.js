import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import HanaPage from "@/views/HanaPage.vue";
import CottagePage from "@/views/CottagePage.vue";
import SHoPPage from "@/views/SHoPPage.vue";
import WXYPage from "@/views/WXYPage.vue";
import AirtablePage from "@/views/AirtablePage.vue";
import baseUrl from "../base";

const routes = [
  // { path: "/", name: "LandingPage", component: LandingPage },
  { path: baseUrl, name: "LandingPage", component: LandingPage },
  { path: baseUrl + "hana", name: "HanaPage", component: HanaPage },
  { path: baseUrl + "cottage", name: "CottagePage", component: CottagePage },
  { path: baseUrl + "shop", name: "SHoPPage", component: SHoPPage },
  { path: baseUrl + "wxy", name: "WXYPage", component: WXYPage },
  { path: baseUrl + "airtable", name: "AirtablePage", component: AirtablePage },
];

const router = createRouter({
  mode: "hash",
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
