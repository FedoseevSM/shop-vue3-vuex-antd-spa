import { getItemsAll } from "../../../../../shared/api/index.js";

export const itemsStore = {
  namespaced: true,
  state: {
    items: [],
    itemsFiltered: false,
    filters: {
      search: false,
      news: false
    },
    cart: []
  },
  mutations: {
    SET_STATE(state, payload) {
      Object.assign(state, {
        ...payload
      });
    },
    UPDATE_FILTERS(state) {
      state.itemsFiltered = state.items
        .filter((item) => {
          if (!state.filters.news) return true;
          return item.status !== 1;
        })
        .filter((item) => {
          if (!state.filters.search) return true;
          return (
            item.title
              .toLowerCase()
              .indexOf(state.filters.search.toLowerCase()) >= 0
          );
        });
    },
    SET_FILTER_SEARCH(state, payload) {
      state.filters.search = payload;
      this.commit("itemsStore/UPDATE_FILTERS");
    },
    SET_FILTER_NEWS(state, payload) {
      state.filters.news = payload;
      this.commit("itemsStore/UPDATE_FILTERS");
    },
    ADD_CART(state, payload) {
      if (!state.cart.includes(payload)) {
        state.cart.push(payload);
      }
    },
    REMOVE_CART(state, payload) {
      if (state.cart.includes(payload)) {
        const arr = state.cart.filter((item) => item !== payload);
        state.cart = arr;
      }
    }
  },
  actions: {
    async FETCH_ITEMS({ commit }) {
      const res = await getItemsAll();
      const arr = [];
      const rand = (max, min) => {
        return Math.floor(Math.random() * (max - min) + min);
      };
      const data = await res.json();
      data[0] &&
        data.forEach((item) => {
          arr.push({
            key: item.id,
            id: item.id,
            price: item.price,
            title: item.title,
            status: rand(1, 3),
            modified: new Date(2023, 7, rand(5, 25)),
            description: item.description,
            category: item.category,
            image: item.image,
            rating: item.rating
          });
        });
      await commit("SET_STATE", {
        items: arr
      });
      console.log("items: ", arr);
    }
  },
  getters: {
    items(state) {
      return state.items;
    },
    itemsFiltered(state) {
      return state.itemsFiltered;
    },
    filters(state) {
      return state.filters;
    },
    cart(state) {
      return state.cart;
    }
  }
};
