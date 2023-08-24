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
    minWidth: 200,
  },
  {
    title: "Артикул",
    key: "title",
    dataIndex: "title",
    sorter: {
      compare: (a, b) => a.title.localeCompare(b.title),
    },
    minWidth: 400,
  },
  {
    title: "Дата обновления",
    key: "modified",
    dataIndex: "modified",
    sorter: {
      compare: (a, b) => a.modified - b.modified,
    },
    defaultSortOrder: "descend",
    minWidth: 200,
  },
  {
    title: "Статус",
    key: "status",
    dataIndex: "status",
    sorter: {
      compare: (a, b) => a.status - b.status,
    },
    minWidth: 200,
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
  <div style="display: flex; flex-direction: column; gap: 10px">
    <div>
      <button @click="handleFilterNews"
        style="cursor: pointer; display: flex; align-items: center; border: 0; background: none;">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.68906 9.75575L8.31253 10.1333L9.06666 10.8875L9.44426 10.5109L8.68906 9.75575ZM11.2 8.00002L11.5776 8.37762L11.9541 8.00002L11.5776 7.62242L11.2 8.00002ZM9.44426 5.48908L9.06666 5.11255L8.31253 5.86668L8.68906 6.24428L9.44426 5.48908ZM9.44426 10.5109L11.5776 8.37762L10.8224 7.62242L8.68906 9.75575L9.44426 10.5109ZM11.5776 7.62242L9.44426 5.48908L8.68906 6.24428L10.8224 8.37762L11.5776 7.62242ZM11.2 7.46668H4.26666V8.53335H11.2V7.46668Z"
            fill="black" />
        </svg>
        Новинки</button>
    </div>
    <a-table :pagination="{ position: ['bottomLeft'], showTotal: total => `Показано с 1 по ${Math.round(total / 10)} из ${total}` }"
      :columns="columns" :data-source="itemsFiltered ? itemsFiltered : items" @change="onChange" :rowClassName="(record, index) => (cart.includes(record.id) ? 'row-in-cart' : null)
        ">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'image'">
          <img :src="record.image" width="200" height="200" style="object-fit: cover;" />
        </template>
        <template v-if="column.key === 'modified'">
          {{
            record.modified.toJSON().slice(0, 10).split("-").reverse().join(".")
          }}
        </template>
        <template v-else-if="column.key === 'status'">
            <a-tag class="status">
              {{ record.status == 2 ? "матрица" : null }}
              {{ record.status == 1 ? "new" : null }}
            </a-tag>
        </template>
        <template v-else-if="column.key === 'action'">
          <button style="cursor: pointer; display: flex; align-items: center; gap: 8px; align-self: end;;"
            @click="handleActionCart(record.id)"
            v-bind:class="cart.includes(record.id) ? 'row-in-cart handle-cart-btn' : 'handle-cart-btn'">
            {{ cart.includes(record.id) ? "Отменить заказ" : "Добавить" }}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 7.5L10.52 3M15 7.5L10.52 12M15 7.5H1" stroke="black" />
            </svg>
          </button>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style>
.handle-cart-btn {
  background: transparent;
  border: 1px solid #000 !important;
  padding: 10px 14px;
  width: 180px;
}

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

.ant-table-thead .ant-table-cell {
  background-color: transparent !important;
  border-radius: 0 !important;
}

.ant-table-column-title {
  color: rgba(0, 0, 0, 0.28) !important;
  font-size: 15px;
  font-family: "Suisse Intl";
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word
}


.ant-table-wrapper .ant-table-thead>tr>td {
  border-bottom: 2px solid #000 !important;
}

.ant-table-thead {
  border-bottom: 2px solid #000 !important;
}

.ant-table-cell,
.ant-table-cell:hover {
  border-radius: 0 !important;
}

.ant-pagination-total-text {
  margin-left: 125px;
  order: 1;
}
</style>

<style scoped>
.status {
  width: auto;
  border: 1px solid #000;
  border-radius: 100px;
  padding: 5px;
  background: #fff !important;
}
</style>