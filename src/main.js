import { createApp } from "vue";

import router from "@/router";
import App from "./App.vue";

import "./assets/base.css";
import "./assets/mediaqueries.css";

createApp(App).use(router).mount("#app");
