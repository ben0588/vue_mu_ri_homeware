<template>
  <div>
    <!-- 顯示整星圖標 -->
    <span v-for="starIndex in fullStars" :key="starIndex" class="me-2">
      <font-awesome-icon :icon="['fas', 'star']" class="star-icon text-primary" />
    </span>
    <!-- 判斷是否顯示半星 -->
    <span class="me-2" v-if="halfStar">
      <font-awesome-icon :icon="['fas', 'star-half-stroke']" class="star-icon text-primary" />
    </span>
    <!-- 顯示空星圖標 -->
    <span v-for="starIndex in emptyStars" :key="starIndex" class="me-2">
      <font-awesome-icon :icon="['far', 'star']" class="star-icon text-primary" />
    </span>
  </div>
</template>
<script setup>
import { computed } from 'vue';

import { calculateProductsRatings } from '@/composables/ratingUtils';

// 定義 props
const props = defineProps({
  averageRating: {
    type: Number,
    required: true,
  },
  totalRatings: {
    type: Number,
    required: true,
  },
});

// 計算整星、半星和空星數量
const fullStars = computed(() => Math.floor(props.averageRating));
const halfStar = computed(() => props.averageRating % 1 >= 0.5);
const emptyStars = computed(() => 5 - fullStars.value - (halfStar.value ? 1 : 0));
</script>
<style lang="scss"></style>
