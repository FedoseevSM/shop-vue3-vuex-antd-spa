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
  <div class="block-template__title">
    {{ title }}
  </div>
  <a-divider type="horizontal" />
  <div class="block-template__extra">
    <div></div>
    <div class="search">
      <a-input v-model:value="value" placeholder="Найти артикул" />
      <div class="search__description">
        Для получения материалов по товарам добавьте интересующие товары в корзину,
        нажав кнопку "Добавить". В корзину можно добавить до 300 товаров
      </div>
    </div>
  </div>
</template>

<style scoped>
.block-template__title {
  color: black;
  font-size: 64px;
  font-family: Suisse Intl;
  font-weight: 700;
  line-height: 64px;
  word-wrap: break-word;
}

.block-template__extra {
  display: flex;
  justify-content: space-between;
}

.search {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.search__description {
  width: 100%;
  color: black;
  font-size: 15px;
  font-family: Suisse Intl;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}
</style>

<style>
.ant-input {
  height: 80px;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid #000;
  font-size: 43px;
  padding: 0;
}
</style>