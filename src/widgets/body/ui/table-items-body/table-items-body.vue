<script setup>
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

const store = useStore();

const items = computed(() => store.getters["itemsStore/items"]);
const itemsFiltered = computed(() => store.getters["itemsStore/itemsFiltered"]);
const cart = computed(() => store.getters["itemsStore/cart"]);

onBeforeMount(() => {
  store.dispatch("itemsStore/FETCH_ITEMS");
});

const columns = [
  {
    title: "Акция",
    key: "image",
    dataIndex: "image",
  },
  {
    title: "Артикул",
    key: "title",
    dataIndex: "title",
    sorter: {
      compare: (a, b) => a.title.localeCompare(b.title),
    },
  },
  {
    title: "Дата обновления",
    key: "modified",
    dataIndex: "modified",
    sorter: {
      compare: (a, b) => a.modified - b.modified,
    },
    defaultSortOrder: "descend",
  },
  {
    title: "Статус",
    key: "status",
    dataIndex: "status",
    sorter: {
      compare: (a, b) => a.status - b.status,
    },
  },
  {
    key: "action",
  },
];

const handleFilterNews = () => {
  let filters = store.getters["itemsStore/filters"];
  store.commit("itemsStore/SET_FILTER_NEWS", !filters.news);
};

const handleActionCart = (id) => {
  let cart = store.getters["itemsStore/cart"];
  console.log("cart: ", cart);
  if (!cart.includes(id)) {
    return store.commit("itemsStore/ADD_CART", id);
  }
  store.commit("itemsStore/REMOVE_CART", id);
};

const onChange = (pagination, filters, sorter, extra) => {
  console.log("param: ", pagination, filters, sorter, extra);
};
</script>

<template>
  <button @click="handleFilterNews" style="cursor: pointer">- Новинки</button>
  <a-table
    :columns="columns"
    :data-source="itemsFiltered ? itemsFiltered : items"
    @change="onChange"
    :rowClassName="
      (record, index) => (cart.includes(record.id) ? 'row-in-cart' : null)
    "
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'image'">
        <img :src="record.image" width="50" />
      </template>
      <template v-if="column.key === 'modified'">
        {{
          record.modified.toJSON().slice(0, 10).split("-").reverse().join(".")
        }}
      </template>
      <template v-else-if="column.key === 'status'">
        <span>
          <a-tag>
            {{ record.status }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <button
          @click="handleActionCart(record.id)"
          v-bind:class="cart.includes(record.id) ? 'row-in-cart' : null"
        >
          Добавить >
        </button>
      </template>
    </template>
  </a-table>
</template>

<style>
.row-in-cart {
  background: tomato;
  border-radius: 0;
}
.row-in-cart:where {
  background: #432423;
  border-radius: 0;
}
.row-in-cart:hover {
  background: #432423;
  border-radius: 0;
}
</style>