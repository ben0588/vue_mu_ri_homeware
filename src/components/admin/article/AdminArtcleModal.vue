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
          <h5 id="frontMemberModalLabel" class="modal-title">查看訂單：編碼{{ orderId }}</h5>
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
        <div class="modal-body position-relative">
          <div
            class="table-responsive border border-2 border-dark px-3 mb-3 pt-3"
            v-if="!orderState"
          >
            <p class="fs-5 border-bottom border-dark pb-2 mb-3">
              <font-awesome-icon :icon="['far', 'address-card']" /> 訂購人資料
            </p>
            <table class="table align-middle">
              <tbody>
                <tr>
                  <td>姓名</td>
                  <td>{{ orderData?.user?.name }}</td>
                </tr>
                <tr>
                  <td>連絡電話</td>
                  <td>{{ orderData?.user?.tel }}</td>
                </tr>
                <tr>
                  <td>連絡信箱</td>
                  <td>{{ orderData?.user?.email }}</td>
                </tr>
                <tr>
                  <td>訂購地址</td>
                  <td>{{ orderData?.user?.address }}</td>
                </tr>
                <tr>
                  <td>訂單備註</td>
                  <td>{{ orderData.message }}</td>
                </tr>
                <tr>
                  <td>訂單當前狀態</td>
                  <td>
                    <span
                      v-if="orderData.status"
                      :class="`${
                        orderData.status === 0
                          ? 'text-muted'
                          : orderData.status === 1
                            ? 'text-dark'
                            : orderData.status === 2
                              ? 'text-info'
                              : 'text-success'
                      }`"
                    >
                      {{
                        orderData.status === 0
                          ? '未確認'
                          : orderData.status === 1
                            ? '已確認'
                            : orderData.status === 2
                              ? '寄送中'
                              : '已送達'
                      }}
                    </span>
                    <span v-else class="text-muted">未確認</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-else class="text-center py-64">讀取中，請稍後..</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Modal } from 'bootstrap';
import axios from 'axios';

import { useAlert } from '@/composables/useAlert';

const { showAlert } = useAlert();
const orderId = ref('');
const orderData = ref({});
const orderState = ref(true);

const bsFrontMemberModalRef = ref(null);
const bsFrontMemberModalInstance = ref(null); // 實體存放區

onMounted(() => {
  // bootstrap modal init
  bsFrontMemberModalInstance.value = new Modal(bsFrontMemberModalRef.value, {
    backdrop: 'static',
    keyboard: false,
  });
});

onUnmounted(() => {
  // bootstrap modal close 清除實體化
  if (bsFrontMemberModalInstance.value) {
    bsFrontMemberModalInstance.value.dispose();
  }
});

const fetchOrder = async (id) => {
  try {
    orderState.value = true;
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/api/${import.meta.env.VITE_APP_API_PATH}/order/${id}`;
    const response = await axios.get(api);
    orderData.value = response.data.order;
  } catch (error) {
    showAlert({
      title: '失敗',
      text: `${error.response.data.message}`,
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
  } finally {
    orderState.value = false;
  }
};

const openModal = (id) => {
  orderId.value = id;
  fetchOrder(id);
  bsFrontMemberModalInstance.value.show();
};

const closeModal = () => {
  bsFrontMemberModalInstance.value.hide();
}; // 關閉模組

defineExpose({
  openModal,
  closeModal,
});
</script>
