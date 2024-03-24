<template>
  <div class="container py-32" v-if="!fetchLoading">
    <h2>新品專區</h2>
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-between g-3 mt-3"
    >
      <div class="col px-3" v-for="product in productsRatings" :key="product.id">
        <HomeCard :product="product" :img-class="'new-products-img'" />
      </div>
    </div>
  </div>
  <VueLoading :active="fetchLoading" :can-cancel="false" :color="'#0089A7'" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import VueLoading from 'vue-loading-overlay';

import { calculateProductsRatings } from '@/composables/ratingUtils';

import HomeCard from '@/components/common/HomeCard.vue';
import { useAlert } from '@/composables/useAlert';

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const { showAlert } = useAlert();
const fetchLoading = ref(false);

const productsList = ref([]);

const fetchProducts = async () => {
  try {
    fetchLoading.value = true;
    const api = `${baseApiUrl}/v2/api/${apiPath}/products/all`;
    const response = await axios.get(api);
    productsList.value = response.data.products.filter((item) => item.isNew);
  } catch (error) {
    showAlert({
      title: '失敗',
      text: `${error.response.data.message}`,
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
  } finally {
    fetchLoading.value = false;
  }
};

// 計算屬性：為產品列表中的每個產品計算星星符號
const productsRatings = computed(() => calculateProductsRatings(productsList.value));

onMounted(() => {
  fetchProducts();
});
</script>

<style lang="scss">
.new-products-img {
  object-fit: cover;
  width: 300px;
  height: 210px;
}
</style>
