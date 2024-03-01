<template>
  <router-link :to="`products/${product.id}`" class="hover-img-opacity">
    <div
      class="card bg-none h-100 border-0"
      :style="{ backgroundColor: cardBgColor }"
      :class="cardClass"
    >
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
          <span class="fs-3 fw-700">{{ usePriceToTw(product.price) }}</span>
          <span class="me-2"
            ><font-awesome-icon :icon="['far', 'heart']" class="text-danger heart-icon"
          /></span>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script setup>
import RatingStar from '@/components/common/RatingStar.vue';
import usePriceToTw from '@/composables/usePriceToTw';

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
<style lang="scss"></style>
