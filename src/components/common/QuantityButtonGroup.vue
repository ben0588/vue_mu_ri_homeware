<template>
  <div class="input-group">
    <button
      type="button"
      class="btn border-1 py-2"
      @click="handleChangQuantity('reduce')"
      :class="btnClass"
      :disabled="(cartStore.addTargetId === id && cartStore.editState) || quantity === 1"
    >
      <font-awesome-icon :icon="['fas', 'minus']" />
    </button>
    <input
      type="number"
      class="form-control text-center border-1 py-2 ps-3 ps-xl-3"
      readOnly
      v-model.number="quantity"
      :class="inputClass"
    />
    <button
      type="button"
      class="btn border-1 py-2"
      @click="handleChangQuantity('add')"
      :class="btnClass"
      :disabled="cartStore.addTargetId === id && cartStore.editState"
    >
      <font-awesome-icon :icon="['fas', 'plus']" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import useCartStore from '@/stores/cartStores';

const props = defineProps({
  id: String,
  productId: String,
  type: {
    type: String,
    default: 'edit',
  },
  cartQuantity: {
    type: Number,
  },
  btnClass: {
    type: String,
    default: 'btn-dark',
  },
  inputClass: {
    type: String,
    default: 'border-dark',
  },
});

const emits = defineEmits(['fetch-quantity']);

const quantity = ref(1);
const cartStore = useCartStore();

const handleChangQuantity = (type) => {
  // 編輯 api 用
  if (props.type === 'api-edit') {
    cartStore.addTargetId = props.id;
    if (type === 'add') {
      quantity.value += 1;
      emits('fetch-quantity', {
        id: props.id,
        productId: props.productId,
        qty: quantity.value,
      });
    } else if (type === 'reduce') {
      if (quantity.value === 1) {
        quantity.value = 1; // 數量 1 就不呼叫更新
      } else {
        quantity.value -= 1;
        emits('fetch-quantity', {
          id: props.id,
          productId: props.productId,
          qty: quantity.value,
        });
      }
    }
    // 不呼叫 api 常規用 + 傳遞數量跟 id 新增購物車用
  } else if (type === 'add') {
    quantity.value += 1;
    emits('fetch-quantity', {
      productId: props.productId,
      qty: quantity.value,
    });
  } else if (type === 'reduce') {
    if (quantity.value === 1) {
      quantity.value = 1;
    } else {
      quantity.value -= 1;
      emits('fetch-quantity', {
        productId: props.productId,
        qty: quantity.value,
      });
    }
  }
};

onMounted(() => {
  // 初始化 api 取得的總數量更新
  if (props.type === 'api-edit') {
    quantity.value = props.cartQuantity;
  }
});
</script>
