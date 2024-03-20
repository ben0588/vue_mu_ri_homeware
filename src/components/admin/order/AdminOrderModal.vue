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
            :disabled="orderSubmitState"
          >
            X
          </button>
        </div>
        <div class="modal-body position-relative">
          <div v-if="!orderState">
            <div class="row d-flex align-items-stretch">
              <div class="col-lg-6 d-flex flex-column">
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
                              orderData.status === '0'
                                ? 'text-muted'
                                : orderData.status === '1'
                                  ? 'text-dark'
                                  : orderData.status === '2'
                                    ? 'text-info'
                                    : 'text-success'
                            }`"
                          >
                            {{
                              orderData.status === '0'
                                ? '未確認'
                                : orderData.status === '1'
                                  ? '已確認'
                                  : orderData.status === '2'
                                    ? '寄送中'
                                    : '已送達'
                            }}
                          </span>
                          <span v-else class="text-muted">未確認</span>
                        </td>
                      </tr>
                      <tr>
                        <td>訂單付款狀態</td>
                        <td>
                          <span v-if="orderData.is_paid" class="text-success">已付款</span>
                          <span class="text-danger" v-else>未付款</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-lg-6 d-flex flex-column">
                <div class="border border-2 border-dark h-100 px-3 mb-3 pt-3">
                  <p class="fs-5 border-bottom border-dark pb-2 mb-3">
                    <font-awesome-icon :icon="['fas', 'gear']" /> 訂單操作
                  </p>

                  <form class="h-100 pb-60" @submit.prevent="editOrder">
                    <div class="d-flex flex-column justify-content-between h-100">
                      <div>
                        <div class="mb-3">
                          <label for="admin-order-select" class="form-label fw-500"
                            >修改商品送達狀態</label
                          >
                          {{ orderStatus }}
                          <select
                            class="form-select"
                            aria-label="修改送達狀態"
                            id="admin-order-select"
                            v-model="orderStatus"
                          >
                            <option value="0" selected>未確認</option>
                            <option value="1">已確認</option>
                            <option value="2">寄送中</option>
                            <option value="3">已送達</option>
                          </select>
                        </div>

                        <div class="mb-3">
                          <label for="admin-order-message" class="form-label fw-500"
                            >修改訂單備註</label
                          >
                          <input
                            type="text"
                            v-model="orderData.message"
                            class="form-control"
                            id="admin-order-message"
                          />
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="admin-payment-state"
                            v-model="orderData.is_paid"
                          />
                          <label class="form-check-labe fw-500" for="admin-payment-state"
                            >修改訂單付款狀態<span v-if="orderData.is_paid">(已付款)</span
                            ><span v-else>(未付款)</span></label
                          >
                        </div>
                      </div>

                      <div class="d-flex justify-content-end align-items-center pb-2">
                        <button
                          type="button"
                          class="btn btn-outline-dark w-50"
                          @click="closeModal"
                          :disabled="orderSubmitState"
                        >
                          取消
                        </button>
                        <button
                          type="submit"
                          class="btn btn-dark w-50 ms-1"
                          :disabled="orderSubmitState"
                        >
                          <span v-if="orderSubmitState"
                            ><span class="spinner-border spinner-border-sm me-1" role="status">
                              <span class="visually-hidden">儲存中</span>
                            </span>
                            <span>儲存中</span></span
                          >
                          <span v-else>儲存</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <!-- 訂單資訊 -->
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
                            <div class="col-lg-12">
                              <span class="text-muted text-decoration-line-through">
                                {{ usePriceToTw(product.total) }}</span
                              >
                              <span class="text-danger ps-2">
                                {{ usePriceToTw(product.final_total) }}
                              </span>
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
                        <span> 共 {{ orderProducts.length }} 項商品 | </span>
                        <span class="fw-700">
                          合計 NT{{ usePriceToTw(orderData.total) }}
                        </span></span
                      >
                      <span class="text-danger" v-if="orderProducts[0]?.coupon?.title"
                        ><font-awesome-icon :icon="['fas', 'ticket-simple']" /> 已套用優惠碼：{{
                          orderProducts[0]?.coupon?.title
                        }}：{{ orderProducts[0]?.coupon?.code }}</span
                      >
                      <span class="text-muted">*已含運費</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="text-center py-64">讀取中，請稍候..</div>
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
const orderData = ref({});
const orderState = ref(false);
const orderProducts = ref([]);
const orderStatus = ref(0);
const orderSubmitState = ref(false);

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

const openModal = (order) => {
  orderData.value = JSON.parse(JSON.stringify(order)); // 深層複製
  orderProducts.value = Object.values(order.products || {});
  orderStatus.value = order.status || 0; // 重置訂單送達狀態
  bsAdminOrderModalInstance.value.show();
};

const closeModal = () => {
  bsAdminOrderModalInstance.value.hide();
}; // 關閉模組

const editOrder = async () => {
  try {
    orderSubmitState.value = true;
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/order/${orderData.value.id}`;
    const response = await axios.put(api, {
      data: {
        ...orderData.value,
        status: orderStatus.value,
      },
    });
    if (response.data.success) {
      closeModal();
      showAlert({
        position: 'top-start',
        title: `成功 | ${response.data.message}`,
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
      });
      setTimeout(() => {
        emits('refetch-orders', true);
      }, 1000);
    }
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
    orderSubmitState.value = false;
  }
};

defineExpose({
  openModal,
  closeModal,
});
</script>
