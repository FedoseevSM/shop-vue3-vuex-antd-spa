import { defineAsyncComponent } from "vue";

export const NavigationHeader = defineAsyncComponent(() => import("./navigation-header.vue"));
