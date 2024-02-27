<template>
  <router-link :to="`products/${product.id}`" class="hover-img-opacity">
    <div class="card recommend-card h-100 border-0" :style="{ backgroundColor: '#FBF9F9' }">
      <img :src="product.imageUrl" class="card-img-top" :alt="product.title" :class="imgClass" />
      <div class="card-body pt-3 px-0">
        <h5 class="card-title fs-4 text-start">{{ product.title }}</h5>
        <div class="mb-32">
          <RatingStar
            :averageRating="product.averageRating || 0"
            :totalRatings="product.totalRatings || 0"
            :classSize="'fs-3'"
          />
          <span> ({{ product.totalRatings }}) </span>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <span class="fs-3 fw-700">$ {{ product.price }}</span>
          <span class="me-2"
            ><font-awesome-icon :icon="['far', 'heart']" class="text-danger heart-icon"
          /></span>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script setup>
import { onMounted } from 'vue';
import { calculateProductsRatings } from '@/composables/ratingUtils';

import RatingStar from '@/components/common/RatingStar.vue';

const porps = defineProps({
  product: {
    type: Object,
    required: false,
  },
  imgClass: {
    type: String,
    required: false,
  },
});

onMounted(() => {
  console.log('porps', porps.product);
});
</script>
<style lang="scss"></style>
