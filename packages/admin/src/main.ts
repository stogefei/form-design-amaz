import { createApp } from "vue";
import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
import "./assets/css/element.scss";
import StartUp from "@amaz/utils/src/start-up";
import router from "./router";
import App from "./App";
const app = createApp(App);
app.use(ElementPlus);

const message = "test";

StartUp.settings({ message, router }).then(async () => {
  app.use(router).mount("#app");
});
