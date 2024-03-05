<template>
  <div class="container" v-if="!orderLoading">
    <div v-if="orders.length">
      <div class="table-responsive mb-3">
        <table class="table align-middle">
          <thead>
            <tr>
              <td>訂單建立日期</td>
              <td>訂單金額(NT)</td>
              <td>付款狀態</td>
              <td>寄送狀態</td>
              <td>訂單資訊</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ new Date(order.create_at * 1000).toLocaleString() }}</td>
              <td>{{ usePriceToTw(order.total) }}</td>
              <td>
                <div
                  v-if="order.is_paid"
                  class="flex-center flex-column align-items-start text-success"
                >
                  <span>已付款</span>
                  <span>{{ new Date(order.paid_date * 1000).toISOString().split('T')[0] }}</span>
                </div>
                <span v-else class="text-dark">未付款</span>
              </td>

              <td>
                <span
                  v-if="order.status"
                  :class="`${
                    order.status === 0
                      ? 'text-muted'
                      : order.status === 1
                        ? 'text-dark'
                        : order.status === 2
                          ? 'text-info'
                          : 'text-success'
                  }`"
                >
                  {{
                    order.status === 0
                      ? '未確認'
                      : order.status === 1
                        ? '已確認'
                        : order.status === 2
                          ? '寄送中'
                          : '已送達'
                  }}
                </span>
                <span v-else class="text-muted">未確認</span>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary text-white"
                  @click="openOrderInfoModal(order.id)"
                >
                  查看
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination :pagination="ordersPagination" @updated:page="fetchOrders"></Pagination>
    </div>

    <div v-else class="row justify-content-start py-32">
      <div class="col-xl-6">
        <p class="d-flex align-items-center fs-4 text-start mb-4">
          您還尚未訂立訂單，立即前往逛逛商品~
        </p>
        <router-link to="/products" class="btn btn-dark px-4 ms-2">去逛逛</router-link>
      </div>
      <div class="col-xl-6"></div>
    </div>
  </div>
  <VueLoading :active="orderLoading" :can-cancel="false" :color="'#0089A7'"></VueLoading>
  <MemberModal ref="orderModal" />
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import VueLoading from 'vue-loading-overlay';
import { Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

import usePriceToTw from '@/composables/usePriceToTw';
import useComputedDiscount from '@/composables/useComputedDiscount';
import useCartStore from '@/stores/cartStores';
import VeeValidateInput from '@/components/common/VeeValidateInput.vue';
import { useAlert } from '@/composables/useAlert';
import MemberModal from '@/components/front/member/MemberModal.vue';
import Pagination from '@/components/common/Pagination.vue';

const cartStore = useCartStore();
const { showAlert } = useAlert();

const message = ref('');
const couponModal = ref(null);
const router = useRouter();
const orderId = ref('');

const orderLoading = ref(false);
const orders = ref([]);
const ordersPagination = ref([]);
const orderModal = ref(null);

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const fetchOrders = async (page = 1) => {
  try {
    orderLoading.value = true;
    const api = `${baseApiUrl}/v2/api/${apiPath}/orders?page=${page}`;
    const response = await axios.get(api);
    orders.value = response.data.orders;
    ordersPagination.value = response.data.pagination;
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
    orderLoading.value = false;
  }
};

onMounted(() => {
  fetchOrders();
});

const openOrderInfoModal = (id) => {
  orderModal.value.openModal(id);
};
</script>
<style lang="scss"></style>
