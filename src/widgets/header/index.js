import { defineAsyncComponent } from "vue";

export const Header = defineAsyncComponent(() => import("./header.vue"));

export * from "./ui/index.js"