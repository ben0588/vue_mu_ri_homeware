<template>
  <div class="container">
    <span class="row border-bottom border-2 my-2 py-2">
      <div class="col-12 col-lg-10">
        <button
          type="button"
          class="btn border border-1 d-inline reset-btn me-2"
          :style="{ marginTop: '-0.10rem', marginBottom: '0.10rem' }"
          title="重置選擇"
          @click="handleResetCategory"
        >
          <font-awesome-icon :icon="['fas', 'rotate']" class="" />
        </button>
        <select
          class="products-select-rwd form-select d-inline"
          aria-label="Default select example"
          v-model="targetCategory"
          @change="handleChangCategory"
        >
          <option value="" selected disabled>請選擇主類型</option>
          <option :value="category.text" v-for="category in categoryList" :key="category.id">
            {{ category.text }}
          </option>
        </select>
        <select
          class="products-select-rwd form-select d-inline ms-2"
          aria-label="Default select example"
          v-model="targetCategory"
          @change="handleChangCategory"
        >
          <option value="" selected disabled>排序：推薦</option>
          <option :value="category.text" v-for="category in categoryList" :key="category.id">
            {{ category.text }}
          </option>
        </select>
      </div>
    </span>

    <div class="row">
      <div class="col-lg-4" v-for="product in productsRatings" :key="product.id">
        <HomeCard :product="product" img-class="new-products-img" />
      </div>
    </div>

    <div class="flex-center mt-3 py-3">
      <Pagination :pagination="ProductsPagination" @updated:page="fetchAdminProducts"></Pagination>
    </div>
  </div>
  <VueLoading :active="loadingStore.isLoading" :can-cancel="false" :color="'#0089A7'"></VueLoading>
</template>
<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueLoading from 'vue-loading-overlay';
import axios from 'axios';

import useLoadingStore from '@/stores/loadingStores';
import { useAlert } from '@/composables/useAlert';
import Pagination from '@/components/common/Pagination.vue';
import HomeCard from '@/components/common/HomeCard.vue';

// 計算屬性：為產品列表中的每個產品計算星星符號
import { calculateProductsRatings } from '@/composables/ratingUtils';

const loadingStore = useLoadingStore();
const { showAlert } = useAlert();

const LoadingStore = useLoadingStore();

const productsList = ref([]);
const ProductsPagination = ref([]);
const targetCategory = ref('');

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const fetchAdminProducts = async (page = 1, category = '') => {
  try {
    LoadingStore.toggleLoading(); // 全頁加載
    const api = `${baseApiUrl}/v2/api/${apiPath}/products?page=${page}&category=${category}`;
    const response = await axios.get(api);
    console.log('response', response);
    productsList.value = response.data.products;
    ProductsPagination.value = response.data.pagination;
  } catch (error) {
    showAlert({
      title: `${error}`,
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    }).then((result) => {
      console.log('result', result);
    });
  } finally {
    LoadingStore.toggleLoading();
  }
};
const productsRatings = computed(() => calculateProductsRatings(productsList.value));

const categoryList = computed(() => [
  { id: '1', text: '家具' }, // 家具
  { id: '2', text: '家飾' }, // 家飾
  { id: '3', text: '燈具' }, // 燈具
  { id: '4', text: '廚房用品' }, // 廚房用品
  { id: '5', text: '浴室用品' }, // 浴室用品
  { id: '6', text: '寢具' }, // 寢具
  { id: '7', text: '收納' }, // 收納
  { id: '8', text: '戶外與園藝' }, // 戶外與園藝
  { id: '9', text: '辦公室用品' }, // 辦公室用品
  { id: '10', text: '孩童家居' }, // 孩童家居
]);

// 改變主類型項目
const handleChangCategory = () => {
  fetchAdminProducts(ProductsPagination.value.current_page, targetCategory.value);
};

// 重置類型選擇
const handleResetCategory = () => {
  targetCategory.value = '';
  fetchAdminProducts();
};

onMounted(() => {
  fetchAdminProducts();
});
</script>
<style lang="scss">
.products-select-rwd {
  @media (min-width: 375px) {
    width: 41.5% !important;
  }
  @media (min-width: 576px) {
    width: 44.3% !important;
  }
  @media (min-width: 768px) {
    width: 45.8% !important;
  }
  @media (min-width: 992px) {
    width: 20.8% !important;
  }
  @media (min-width: 1200px) {
    width: 16.8% !important;
  }
}
</style>
