<!-- eslint-disable max-len -->
<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="frontMemberModalLabel"
    aria-hidden="true"
    ref="bsAdminOrderModalRef"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="frontMemberModalLabel" class="modal-title">
            編輯 - 訂單編碼：{{ orderData.id }}
          </h5>
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
          <div v-if="!orderState">
            <div class="row">
              <div class="col-lg-6">
                <div class="table-responsive border border-2 border-dark px-3 mb-3 pt-3">
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
              </div>
              <div class="col-lg-6">
                <div class="border border-2 border-dark p-3"></div>
              </div>
              <div class="col-lg-12">
                <div
                  class="table-responsive border-top border-start border-end border-2 border-dark px-3 pt-3"
                >
                  <p class="fs-5 border-bottom border-dark pb-2 mb-3">
                    <font-awesome-icon :icon="['fas', 'receipt']" /> 訂單詳情
                  </p>
                  <table class="table align-middle">
                    <thead>
                      <tr>
                        <td>品項名稱</td>
                        <td>單價(NT)</td>
                        <td>數量</td>
                        <td>小計(NT)</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(product, index) in orderData.products" :key="index">
                        <td>{{ product.product.title }}</td>
                        <td>{{ usePriceToTw(product.product.price) }}</td>
                        <td>{{ product.qty }}</td>
                        <td v-if="product.coupon">
                          <div class="row">
                            <div class="col-lg-6">
                              <span class="text-danger">
                                {{ usePriceToTw(product.final_total) }}
                              </span>
                            </div>
                            <div class="col-lg-6">
                              <span class="text-danger">已折</span>
                            </div>
                          </div>
                        </td>
                        <td v-else>{{ usePriceToTw(product.final_total) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="border-start border-end border-2 border-dark mb-3">
                  <div
                    class="d-flex justify-content-end border-bottom border-2 border-dark pb-12 mb-12 pe-3"
                  >
                    <div class="d-flex flex-column align-items-end">
                      <span class="fs-5">
                        <span>
                          共 {{ Object.values(orderData.products || {}).length }} 項商品 |
                        </span>
                        <span class="fw-700">
                          合計 NT{{ usePriceToTw(orderData.total) }}
                        </span></span
                      >
                      <span
                        class="text-danger"
                        v-if="Object.values(orderData.products || {}).length"
                        ><font-awesome-icon :icon="['fas', 'ticket-simple']" /> 已套用優惠碼：{{
                          Object.values(orderData.products || {})[0].coupon.title
                        }}</span
                      >
                      <span class="text-muted">*已含運費</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
import usePriceToTw from '@/composables/usePriceToTw';

const { showAlert } = useAlert();
const orderId = ref('');
const orderData = ref({});
const orderState = ref(false);

const bsAdminOrderModalRef = ref(null);
const bsAdminOrderModalInstance = ref(null); // 實體存放區

const emits = defineEmits(['refetch-orders']);

onMounted(() => {
  // bootstrap modal init
  bsAdminOrderModalInstance.value = new Modal(bsAdminOrderModalRef.value, {
    backdrop: 'static',
    keyboard: false,
  });
});

onUnmounted(() => {
  // bootstrap modal close 清除實體化
  if (bsAdminOrderModalInstance.value) {
    bsAdminOrderModalInstance.value.dispose();
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

const openModal = (order) => {
  orderData.value = order;
  console.log('order', order);
  console.log('order2', order.id);
  bsAdminOrderModalInstance.value.show();
};

const closeModal = () => {
  bsAdminOrderModalInstance.value.hide();
}; // 關閉模組

defineExpose({
  openModal,
  closeModal,
});
</script>
