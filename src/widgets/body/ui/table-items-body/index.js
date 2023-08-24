import { defineAsyncComponent } from "vue";

export * from "./models/index.js";

export const TableItemsBody = defineAsyncComponent(() =>
  import("./table-items-body.vue")
);
