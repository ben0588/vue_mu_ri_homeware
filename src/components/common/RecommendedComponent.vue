<template>
  <div class="mt-3">
    <h3 class="text-center mb-4">推薦商品</h3>
    <div class="mt-3" :style="{ backgroundColor: '#FBF9F9' }" v-if="originProductsRatings">
      <div class="py-5">
        <div class="container p-0">
          <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-start align-items-stretch overflow-x-nowrap-lg m-0"
          >
            <div
              class="col col-1-2 col-2-2 col-4-3 px-3"
              v-for="(product, index) in originProductsRatings"
              :key="index"
            >
              <ProductDescriptionCard
                :product="product"
                :img-class="'product-description-card-img'"
                :card-bg-color="'#FBF9F9'"
                :star-color="'text-primary'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import useSearchStore from '@/stores/searchStores';
import { calculateProductsRatings } from '@/composables/ratingUtils';
import ProductDescriptionCard from '@/components/front/products/ProductDescriptionCard.vue';

const searchStore = useSearchStore();

// 取得對應類型的產品，只取五個
function recommendList() {
  return searchStore.originProducts.filter((item) => item.isRecommended).slice(0, 5);
}
const originProductsRatings = computed(() => calculateProductsRatings(recommendList()));
</script>

<style lang="scss">
.product-description-card-img {
  width: 100%;
  height: 200px;
  max-width: 233.6px;
  object-fit: cover;

  @media (max-width: 414px) {
    max-width: 300px !important;
    max-height: 210px;
  }
}
</style>
