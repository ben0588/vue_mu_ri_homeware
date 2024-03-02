<template>
  <router-link :to="`products/${product.id}`" class="hover-img-opacity">
    <div
      class="position-relative card bg-none h-100 border-0"
      :style="{ backgroundColor: cardBgColor }"
      :class="cardClass"
    >
      <span v-if="product.isOnSale" class="sale-tag">
        折扣 {{ useComputedDiscount(product.origin_price, product.price) }}</span
      >
      <span v-if="product.isRecommended" class="recommend-tag"> 推薦</span>
      <img :src="product.imageUrl" class="card-img-top" :alt="product.title" :class="imgClass" />
      <div class="card-body pt-3 px-0">
        <h5 class="card-title fs-4 text-start">{{ product.title }}</h5>
        <div class="mb-32">
          <RatingStar
            :averageRating="product.averageRating || 0"
            :totalRatings="product.totalRatings || 0"
            :classSize="'fs-6'"
          />
          <span class="fw-500"> ({{ product.totalRatings }}) </span>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <span v-if="product.isOnSale">
            <span
              class="d-inline-block fs-3 fw-700 text-decoration-line-through text-body-tertiary"
              >{{ usePriceToTw(product.origin_price) }}</span
            >
            <span class="fs-3 fw-700 text-danger ps-3">{{ usePriceToTw(product.price) }}</span>
          </span>
          <span class="fs-3 fw-700" v-else>{{ usePriceToTw(product.price) }}</span>
          <span class="me-2" @click.prevent="wishStore.addWishList(product)"
            ><font-awesome-icon
              :icon="[wishStore.isWishListed(product) ? 'fas' : 'far', 'heart']"
              class="text-danger heart-icon"
          /></span>

          <!-- <span @click.prevent="addToWishList(item)" class="me-2">
            <font-awesome-icon
              :icon="['fas', 'heart']"
              class="heart-icon"
              :class="[
                { 'text-primary': !isWishListed(item) },
                { 'text-danger': isWishListed(item) },
              ]"
            />
          </span> -->
        </div>
      </div>
    </div>
  </router-link>
</template>
<script setup>
import { ref, onMounted, watch, watchEffect, computed } from 'vue';

import RatingStar from '@/components/common/RatingStar.vue';
import usePriceToTw from '@/composables/usePriceToTw';
import useWishStore from '@/stores/wishStores';
import useComputedDiscount from '@/composables/useComputedDiscount';

const wishStore = useWishStore();

defineProps({
  product: {
    type: Object,
    required: false,
  },
  cardClass: {
    type: String,
    required: false,
  },
  imgClass: {
    type: String,
    required: false,
  },
  cardBgColor: {
    type: String,
    required: false,
  },
});
</script>
<style lang="scss">
.hover-img-opacity {
  &:hover {
    opacity: 0.85;
  }
}

.sale-tag {
  position: absolute;
  top: 0;
  right: 0;
  width: 82px;
  height: 35px;
  /* background-color: $danger; */
  background: #d63031;
  backdrop-filter: blur(5px);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.recommend-tag {
  position: absolute;
  top: 0;
  left: 0;
  width: 82px;
  height: 35px;
  background: $warning;
  backdrop-filter: blur(5px);
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
