<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="frontMemberModalLabel"
    aria-hidden="true"
    ref="bsFrontMemberModalRef"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="frontMemberModalLabel" class="modal-title">使用優惠卷</h5>
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
        <div class="modal-body">內容 | {{ id }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Modal } from 'bootstrap';
import axios from 'axios';

import useToast from '@/composables/useToast';
import { useAlert } from '@/composables/useAlert';

const orderId = ref('');
const orderData = ref({});
const { showAlert } = useAlert();

const bsFrontMemberModalRef = ref(null);
const bsFrontMemberModalInstance = ref(null); // 實體存放區

onMounted(() => {
  // bootstrap modal init
  bsFrontMemberModalInstance.value = new Modal(bsFrontMemberModalRef.value);
});

onUnmounted(() => {
  // bootstrap modal close 清除實體化
  if (bsFrontMemberModalInstance.value) {
    bsFrontMemberModalInstance.value.dispose();
  }
});

const openModal = (id) => {
  orderId.value = id;
  bsFrontMemberModalInstance.value.show();
};

const closeModal = () => {
  bsFrontMemberModalInstance.value.hide();
}; // 關閉模組

const fetchOrder = async () => {
  try {
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/api/${import.meta.env.VITE_APP_API_PATH}/order/${orderId.value}`;
    const response = await axios.get(api);
    orderData.value = response.data.order;
  } catch (error) {
    showAlert({
      title: '失敗',
      text: `${error}`,
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
  }
};

onMounted(() => {
  fetchOrder();
});

defineExpose({
  openModal,
  closeModal,
});
</script>
