<script setup>
import { defineProps } from "vue";
import { watch, ref } from "vue";
import { useStore } from "vuex";
defineProps({
  title: {
    type: String,
    required: true,
  },
});

const store = useStore();
const value = ref("");

const handleFilterSearch = (value) => {
  if (value === "") return store.commit("itemsStore/SET_FILTER_SEARCH", false);
  store.commit("itemsStore/SET_FILTER_SEARCH", value);
};

watch(value, () => {
  handleFilterSearch(value.value);
  console.log("search: ", value.value);
});
</script>

<template>
  <div
    style="
      color: black;
      font-size: 64px;
      font-family: Suisse Intl;
      font-weight: 700;
      line-height: 64px;
      word-wrap: break-word;
    "
  >
    {{ title }}
  </div>
  <a-divider type="horizontal" />
  <a-input v-model:value="value" placeholder="Найти артикул" />
  <div
    style="
      width: 100%;
      color: black;
      font-size: 15px;
      font-family: Suisse Intl;
      font-weight: 400;
      line-height: 20px;
      word-wrap: break-word;
    "
  >
    Для получения материалов по товарам добавьте интересующие товары в корзину,
    нажав кнопку "Добавить". В корзину можно добавить до 300 товаров
  </div>
</template>