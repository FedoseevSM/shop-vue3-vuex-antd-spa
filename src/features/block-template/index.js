import { defineAsyncComponent } from "vue";

export const BlockTemplate = defineAsyncComponent(() =>
  import("./block-template.vue")
);
