import { defineAsyncComponent } from "vue";

export const Body = defineAsyncComponent(() => import("./body.vue"));

export * from "./ui/index.js";
