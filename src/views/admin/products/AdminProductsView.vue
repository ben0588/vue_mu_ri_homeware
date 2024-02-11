<template>
  <div class="pt-3">
    <div class="row">
      <span class="col-6">
        <h3 class="fw-bolder">產品列表</h3>
      </span>
      <span class="col-6">
        <div class="float-end pe-5">
          <button type="button" class="btn btn-success px-4" @click="handleOpenModal('create')">
            新增商品
          </button>
        </div>
      </span>
    </div>
    <table class="table align-middle table-responsive">
      <thead>
        <tr>
          <th scope="col">編碼</th>
          <th scope="col">名稱</th>
          <th scope="col">類型</th>
          <th scope="col">子類型</th>
          <th scope="col">單價</th>
          <th scope="col">狀態</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in adminProducts" :key="product.id">
          <th>{{ product.id }}</th>
          <td>{{ product.title }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.price }}</td>
          <td>
            <span v-if="product.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-dark me-1"
              @click="handleOpenModal('edit', product)"
            >
              編輯
            </button>

            <button type="button" class="btn btn-outline-danger">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <AdminProductsModal ref="adminProductsModal"></AdminProductsModal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import useLoadingStore from '@/stores/loadingStores';
import axios from 'axios';
import { useRouter } from 'vue-router';

import { useAlert } from '@/composables/useAlert';
import AdminProductsModal from '@/components/admin/products/AdminProductsModal.vue';

const adminProductsModal = ref(null);

const { showAlert } = useAlert();
const router = useRouter();
const LoadingStore = useLoadingStore();

const adminProducts = ref([]);
const adminPagination = ref([]);

// 傳遞開啟方法與資料給 Modal 子元件
const handleOpenModal = (type, data) => {
  adminProductsModal.value.openModal(type, data);
};

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const fetchAdminProducts = async () => {
  try {
    LoadingStore.toggleLoading(); // 全頁加載
    const api = `${baseApiUrl}/v2/api/${apiPath}/admin/products`;
    const response = await axios.get(api);
    adminProducts.value = response.data.products;
    adminPagination.value = response.data.pagination;
  } catch (error) {
    showAlert({
      title: `${error.response.data.message}`,
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
    }).then((result) => {
      if (result.isConfirmed) {
        // 按下確認後回到管理者登入頁
        router.replace('/admin');
      }
    });
  } finally {
    LoadingStore.toggleLoading();
  }
};

onMounted(() => {
  fetchAdminProducts();
});
</script>
