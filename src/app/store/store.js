import { createStore } from "vuex";

import { itemsStore } from "../../widgets/body/index.js";

export const store = createStore({
  modules: {
    itemsStore: itemsStore
  }
});
