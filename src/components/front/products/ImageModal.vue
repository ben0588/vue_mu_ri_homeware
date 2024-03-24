<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
    ref="bsImageModalRef"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title"></h5>
          <button
            type="button"
            class="bg-dark text-white fs-4 fw-bolder border-0"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          >
            X
          </button>
        </div>
        <div class="modal-body">
          <img
            :src="imageUrl"
            :alt="imageAlt"
            class="img-fluid w-100"
            :style="{ height: `700px`, objectFit: 'cover' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Modal } from 'bootstrap';

const bsImageModalRef = ref(null);
const bsImageModalInstance = ref(null); // 實體存放區
const imageUrl = ref('');
const imageAlt = ref('');

onMounted(() => {
  // bootstrap modal init
  bsImageModalInstance.value = new Modal(bsImageModalRef.value);
});

onUnmounted(() => {
  // bootstrap modal close 清除實體化
  if (bsImageModalInstance.value) {
    bsImageModalInstance.value.dispose();
  }
});

const openModal = (url, alt) => {
  imageUrl.value = url;
  imageAlt.value = alt;
  bsImageModalInstance.value.show();
};

const closeModal = () => {
  bsImageModalInstance.value.hide();
}; // 關閉模組

defineExpose({
  openModal,
  closeModal,
});
</script>
