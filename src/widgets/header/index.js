import { defineAsyncComponent } from "vue";

export const Header = defineAsyncComponent(() => import("./header.vue"));
