import { createApp } from "vue";
import router from "@/router";
import App from "./App.vue";
import VueGtag from "vue-gtag";

import "./assets/base.css";
import "./assets/mediaqueries.css";

createApp(App)
  .use(router)
  .use(
    VueGtag,
    {
      config: {
        id: "G-D36PFVX29L",
      },
    },
    router
  )
  .mount("#app");
