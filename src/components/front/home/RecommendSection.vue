<!-- eslint-disable max-len -->
<template>
  <section class="mt-32 mt-lg-80 pt-80" :style="{ backgroundColor: '#FBF9F9' }">
    <h3 class="home-title">推薦商品</h3>

    <div class="container mt-64 p-0">
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-start align-items-stretch overflow-x-nowrap-lg m-0"
      >
        <div
          class="col col-1-2 col-2-2 col-4-3 px-3"
          v-for="(product, index) in productsRatings"
          :key="index"
          :class="{ 'ps-2': index === 0, 'pe-2': index === 4 }"
        >
          <HomeCard
            :product="product"
            :img-class="'recommend-card-img'"
            :card-bg-color="'#FBF9F9'"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

import { calculateProductsRatings } from '@/composables/ratingUtils';
import HomeCard from '@/components/common/HomeCard.vue';
import { useAlert } from '@/composables/useAlert';

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const { showAlert } = useAlert();

const productsList = ref([]);

const fetchProducts = async () => {
  try {
    const api = `${baseApiUrl}/v2/api/${apiPath}/products/all`;
    const response = await axios.get(api);
    productsList.value = response.data.products.filter((item) => item.isRecommended);
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
  }
};

// 計算屬性：為產品列表中的每個產品計算星星符號
const productsRatings = computed(() => calculateProductsRatings(productsList.value));

onMounted(() => {
  fetchProducts();
});
</script>
<style lang="scss">
.recommend-card-img {
  width: 300px;
  height: 210px;
  object-fit: cover;

  @media (min-width: 576px) {
    width: 181px;
    height: 162px;
  }
  @media (min-width: 768px) {
    width: 253px;
    height: 210px;
  }
  @media (min-width: 992px) {
    width: 210px;
    height: 188.45px;
  }
  @media (min-width: 1200px) {
    width: 233.6px;
    height: 210px;
  }
}
</style>
