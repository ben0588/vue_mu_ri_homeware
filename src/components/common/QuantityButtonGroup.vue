<template>
  <div class="input-group">
    <button type="button" class="btn btn-dark border-1 py-2" @click="handleChangQuantity('reduce')">
      <font-awesome-icon :icon="['fas', 'minus']" />
    </button>
    <input
      type="number"
      class="form-control text-center border-dark border-1 py-2 ps-3 ps-xl-3"
      readOnly
      v-model.number="quantity"
    />
    <button type="button" class="btn btn-dark border-1 py-2" @click="handleChangQuantity('add')">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </button>
  </div>
</template>
<script setup>
import { ref, onMounted, computed, watch } from 'vue';

const quantity = ref(1);

const handleChangQuantity = (type) => {
  if (type === 'add') {
    quantity.value += 1;
  } else if (type === 'reduce') {
    if (quantity.value === 1) {
      quantity.value = 1;
    } else {
      quantity.value -= 1;
    }
  }
};
</script>
<style lang="scss"></style>
