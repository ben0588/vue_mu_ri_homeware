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
            <td>訂單詳情</td>
            <td>操作</td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="coupon in adminOrders" :key="coupon.id">
            <td>{{ coupon.id }}</td>
            <td>{{ coupon[i18nStore.currentIcon].title }}</td>
            <td>{{ coupon.code }}</td>
            <td>{{ coupon.percent }}</td>
            <td>{{ coupon.percent }}</td>
            <td>
              <button type="button" class="btn btn-dark">查看</button>
            </td>
            <td class="d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-dark me-1"
                @click="handleOpenModal('edit', coupon)"
              >
                {{ t('admin.products_edit_text') }}
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="deleteCoupon(coupon.id)"
                :disabled="deleteTargetId === coupon.id"
              >
                <span v-if="deleteTargetId === coupon.id">
                  <span class="spinner-grow spinner-grow-sm me-1" aria-hidden="true"></span>
                  <span role="status"></span>
                </span>
                {{ t('admin.products_delete_text') }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination :pagination="adminPagination" @updated:page="fetchOrders"></Pagination>

    <AdminOrderModal ref="adminOrderModal" @refetch-coupon="fetchOrders"></AdminOrderModal>
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

const router = useRouter();
const { showAlert } = useAlert();
const loadingStore = useLoadingStore();

const adminOrderModal = ref(null);
const adminOrders = ref([]);
const adminPagination = ref([]);
const deleteTargetId = ref('');

// 傳遞開啟方法與資料給 Modal 子元件
const handleOpenModal = () => {
  adminOrderModal.value.openModal();
};

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const fetchOrders = async (page = 1) => {
  try {
    loadingStore.value = true;
    const api = `${baseApiUrl}/v2/api/${apiPath}/admin/orders?page=${page}`;
    const response = await axios.get(api);
    console.log('response', response);
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
    loadingStore.value = false;
  }
};

onMounted(() => {
  fetchOrders();
});
</script>
