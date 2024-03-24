<template>
  <router-link :to="`/products/${product.id}`" class="hover-img-opacity">
    <div
      class="position-relative card bg-none h-100 border-0"
      :style="{ backgroundColor: cardBgColor }"
      :class="cardClass"
    >
      <img :src="product.imageUrl" class="card-img-top" :alt="product.title" :class="imgClass" />
      <div class="card-body px-0 py-0">
        <h5 class="card-title fs-5 text-start my-0 pt-2">{{ product.title }}</h5>
        <div>
          <RatingStar
            :averageRating="product.averageRating || 0"
            :totalRatings="product.totalRatings || 0"
            :classSize="'fs-6'"
            :color="starColor"
          />
          <span class="fw-500"> ({{ product.totalRatings }}) </span>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <span v-if="product.isOnSale" class="d-flex align-items-center">
            <span class="fs-4 fw-700 text-danger">{{ usePriceToTw(product.price) }} </span>
            <span class="text-danger border border-danger mt-1 ms-2 px-2"
              >-{{ useComputedDiscount(product.origin_price, product.price) }}</span
            >
          </span>
          <span class="fs-4 fw-700" v-else>{{ usePriceToTw(product.price) }}</span>

          <span class="cursor-pointer me-2" @click.prevent="addWishList(product)"
            ><font-awesome-icon
              :icon="[isWishListed(product) ? 'fas' : 'far', 'heart']"
              class="text-danger heart-icon"
          /></span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import RatingStar from '@/components/common/RatingStar.vue';
import usePriceToTw from '@/composables/usePriceToTw';
import useWishStore from '@/stores/wishStores';
import useComputedDiscount from '@/composables/useComputedDiscount';

const wishStore = useWishStore();
const { addWishList, isWishListed } = wishStore;

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
  starColor: {
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
</style>
