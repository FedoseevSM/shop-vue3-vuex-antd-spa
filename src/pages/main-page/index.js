import { defineAsyncComponent } from "vue";

export const MainPage = defineAsyncComponent(() => import("./main-page.vue"));
