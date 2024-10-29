import { createApp } from "vue";
import "element-plus/dist/index.css";
import StartUp from "@amaz/utils/src/start-up";
import router from "./router";
import App from "./App";

const message = "test";

StartUp.settings({ message, router }).then(async () => {
  createApp(App).use(router).mount("#app");
});
