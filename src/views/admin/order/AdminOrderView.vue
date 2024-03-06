<template>
  <div class="pt-3">
    <div class="row">
      <span class="col-6">
        <h3 class="">訂單列表</h3>
      </span>
      <span class="col-6">
        <div class="float-end pe-2">
          <button
            type="button"
            class="btn btn-outline-danger px-4"
            @click="handleOpenModal('create')"
          >
            刪除所有訂單
          </button>
        </div>
      </span>
    </div>
    <div class="table-responsive">
      <table class="table align-middle">
        <thead>
          <tr class="fw-500">
            <td>編碼</td>
            <td>購買用戶</td>
            <td>訂單金額(NT)</td>
            <td>付款狀態</td>
            <td>寄送狀態</td>
            <td>操作</td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="order in adminOrders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order?.user?.email }}</td>
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
              <div class="d-flex align-items-center">
                <button
                  type="button"
                  class="btn btn-outline-dark me-1"
                  @click="handleOpenModal(order)"
                >
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger" :disabled="true">
                  <span v-if="true">
                    <span class="spinner-grow spinner-grow-sm me-1" aria-hidden="true"></span>
                    <span role="status"></span>
                  </span>
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination :pagination="adminPagination" @updated:page="fetchOrders"></Pagination>

    <AdminOrderModal ref="adminOrderModal" @refetch-orders="fetchOrders"></AdminOrderModal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import useLoadingStore from '@/stores/loadingStores';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

import { useAlert } from '@/composables/useAlert';
import Pagination from '@/components/common/Pagination.vue';
import AdminOrderModal from '@/components/admin/order/AdminOrderModal.vue';
import usePriceToTw from '@/composables/usePriceToTw';

const router = useRouter();
const { showAlert } = useAlert();
const loadingStore = useLoadingStore();

const adminOrderModal = ref(null);
const adminOrders = ref([]);
const adminPagination = ref([]);

// 傳遞開啟方法與資料給 Modal 子元件
const handleOpenModal = (order) => {
  adminOrderModal.value.openModal(order);
};

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const fetchOrders = async (page = 1) => {
  try {
    loadingStore.toggleLoading(); // 全頁加載
    const api = `${baseApiUrl}/v2/api/${apiPath}/admin/orders?page=${page}`;
    const response = await axios.get(api);
    adminOrders.value = response.data.orders;
    adminPagination.value = response.data.pagination;
  } catch (error) {
    showAlert({
      title: '失敗',
      text: `${error.response.data.message}`,
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // 按下確認後回到管理者登入頁
        router.replace('/admin');
      }
    });
  } finally {
    loadingStore.toggleLoading();
  }
};

onMounted(() => {
  fetchOrders();
});
</script>
