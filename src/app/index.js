import { defineAsyncComponent } from "vue";

export const App = defineAsyncComponent(() => import("./app.vue"));

export * from "./store/index.js";
