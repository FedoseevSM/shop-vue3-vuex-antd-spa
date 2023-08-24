import { createApp } from "vue";
import Antd from "ant-design-vue";

import { App } from "./app/index.js";
import { store } from "./app/index.js";

import "./style.css"
import "ant-design-vue/dist/reset.css";

const app = createApp(App);

app.use(Antd).use(store).mount("#app");
