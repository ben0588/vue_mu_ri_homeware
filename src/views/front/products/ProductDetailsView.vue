<template>
  <div class="container py-32">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/products">全部商品</router-link></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>

    產品詳情 | {{ route.params.id }}
  </div>
  <VueLoading :active="loadingStore.isLoading" :can-cancel="false" :color="'#0089A7'"></VueLoading>
</template>
<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import VueLoading from 'vue-loading-overlay';
import axios from 'axios';

import { useAlert } from '@/composables/useAlert';
import { calculateProductsRatings } from '@/composables/ratingUtils';
import useLoadingStore from '@/stores/loadingStores';
import useCategoryStore from '@/stores/categoryStores';

const product = ref({});
const targetCategory = ref('');
const targetSort = ref('default');

const categoryStore = useCategoryStore();
const loadingStore = useLoadingStore();
const { showAlert } = useAlert();
const route = useRoute();
console.log(route.params.id);

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const fetchProduct = async () => {
  try {
    loadingStore.toggleLoading(); // 全頁加載
    const api = `${baseApiUrl}/v2/api/${apiPath}/product/${route.params.id}`;
    const response = await axios.get(api);
    product.value = response.data.product;
  } catch (error) {
    showAlert({
      title: `${error}`,
      text: '取得商品資料失敗，請聯繫網站提供者',
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
  } finally {
    loadingStore.toggleLoading();
  }
};

// 取得星星資訊
const productsRatings = computed(() => calculateProductsRatings(product.value));

onMounted(() => {
  fetchProduct();
});
</script>
<style lang="scss"></style>
