<template>
  <router-link :to="`products/${product.id}`" class="hover-img-opacity">
    <div
      class="position-relative card bg-none h-100 border-0"
      :style="{ backgroundColor: cardBgColor }"
      :class="cardClass"
    >
      <img :src="product.imageUrl" class="card-img-top" :alt="product.title" :class="imgClass" />
      <div class="card-body pt-3 px-0">
        <h5 class="card-title fs-4 text-start text-ellipsis">{{ product.title }}</h5>

        <div class="mb-3">
          <RatingStar
            :averageRating="product.averageRating || 0"
            :totalRatings="product.totalRatings || 0"
            :classSize="'fs-6'"
          />
          <span class="fw-500"> ({{ product.totalRatings }}) </span>
        </div>

        <div class="d-flex justify-content-between align-items-center">
          <span v-if="product.isOnSale" class="d-flex align-items-center">
            <span class="fs-3 fw-700 text-danger">{{ usePriceToTw(product.price) }} </span>
            <span class="text-danger border border-danger mt-1 ms-2 px-2"
              >-{{ useComputedDiscount(product.origin_price, product.price) }}</span
            >
          </span>
          <span class="fs-3 fw-700" v-else>{{ usePriceToTw(product.origin_price) }}</span>

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
