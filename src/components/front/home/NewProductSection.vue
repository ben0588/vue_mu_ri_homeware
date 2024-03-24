<template>
  <section class="mt-32 mt-lg-80 pt-80" :style="{ backgroundColor: '#FBF9F9' }">
    <h3 class="home-title">最新商品</h3>
    <div class="container mt-64 px-2 w-100">
      <div
        class="row px-3 px-sm-0 w-100 mx-auto"
        v-for="(product, index) in productsRatings"
        :key="product.id"
      >
        <div class="col-md-12 px-1 px-sm-3" v-if="index === 0">
          <div class="row border border-2 border-primary">
            <div class="col-md-7 px-0">
              <router-link :to="`/products/${product.id}`" class="hover-opacity">
                <img
                  :src="product.imageUrl"
                  :alt="product.title"
                  class="new-products-mid-img border-md-end"
                />
              </router-link>
            </div>
            <div class="col-md-5 px-0">
              <div
                class="d-flex justify-content-center flex-column h-100 px-3 px-lg-64 py-4 py-lg-32"
              >
                <router-link :to="`/products/${product.id}`" class="text-dark">
                  <p class="fs-4 fw-700 m-0 mb-12">{{ product.title }}</p>
                  <div class="mb-32">
                    <RatingStar
                      :averageRating="product.averageRating"
                      :totalRatings="product.totalRatings"
                      :classSize="'fs-4'"
                    />
                    <span class="fw-500"> ({{ product.totalRatings }}) </span>
                  </div>
                  <p class="truncate-2-lines" :style="{ maxWidth: `100%` }">
                    {{ product.content }}
                  </p>
                  <div class="d-flex justify-content-between align-items-center w-100">
                    <span class="fs-2 fw-700">{{ usePriceToTw(product.price) }}</span>

                    <span class="cursor-pointer me-2" @click.prevent="addWishList(product)"
                      ><font-awesome-icon
                        :icon="[isWishListed(product) ? 'fas' : 'far', 'heart']"
                        class="text-danger heart-icon"
                        :style="{ width: `32px`, height: `32px` }"
                    /></span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container px-2 mt-4">
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-start align-items-stretch overflow-x-nowrap-lg m-0"
      >
        <div
          class="col col-1-2 col-2-2 col-4-3 ps-1 pe-3"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <HomeCard :product="product" :img-class="'new-products-img'" :card-bg-color="'#FBF9F9'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

import { calculateProductsRatings } from '@/composables/ratingUtils';

import useWishStore from '@/stores/wishStores';
import RatingStar from '@/components/common/RatingStar.vue';
import HomeCard from '@/components/common/HomeCard.vue';
import usePriceToTw from '@/composables/usePriceToTw';
import { useAlert } from '@/composables/useAlert';

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const { showAlert } = useAlert();
const wishStore = useWishStore();
const { addWishList, isWishListed } = wishStore;

const productsList = ref([]);
const filterProducts = ref([]);

const fetchProducts = async () => {
  try {
    const api = `${baseApiUrl}/v2/api/${apiPath}/products/all`;
    const response = await axios.get(api);
    productsList.value = response.data.products.filter((item) => item.isOnHot);
    filterProducts.value = response.data.products.filter((item) => item.isNew).slice(0, 5);
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

// 計算屬性：為產品列表中的每個產品計算星星符號 (只顯示五筆)
const productsRatings = computed(() => calculateProductsRatings(productsList.value).slice(0, 5));

// 只顯示後四筆
const filteredProducts = computed(() => calculateProductsRatings(filterProducts.value).slice(1));

onMounted(() => {
  fetchProducts();
});
</script>

<style lang="scss">
.new-products-mid-img {
  display: block;
  object-fit: cover;
  width: 339px;
  height: 200px;

  @media (min-width: 414px) {
    width: 378px;
    height: 232px;
  }
  @media (min-width: 576px) {
    width: 512px;
    height: 262px;
  }
  @media (min-width: 768px) {
    width: 389px;
    height: 262px;
  }
  @media (min-width: 992px) {
    width: 536px;
    height: 325px;
  }
  @media (min-width: 1200px) {
    width: 649px;
    height: 354px;
  }
  @media (min-width: 1400px) {
    width: 746px;
    height: 380px;
  }
}

.new-products-img {
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
