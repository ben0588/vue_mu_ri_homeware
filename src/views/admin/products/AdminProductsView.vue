<template>
  <div class="pt-3">
    <div class="row">
      <span class="col-6">
        <h3 class="fw-bolder">{{ t('admin.products_title') }}</h3>
      </span>
      <span class="col-6">
        <div class="float-end pe-5">
          <button type="button" class="btn btn-success px-4" @click="handleOpenModal('create')">
            {{ t('admin.products_create_text') }}
          </button>
        </div>
      </span>
    </div>
    <table class="table align-middle table-responsive">
      <thead>
        <tr>
          <th scope="col">{{ t('admin.products_id') }}</th>
          <th scope="col">{{ t('admin.products_name') }}</th>
          <th scope="col">{{ t('admin.products_category') }}</th>
          <th scope="col">{{ t('admin.products_subcategory') }}</th>
          <th scope="col">{{ t('admin.products_price') }}</th>
          <th scope="col">{{ t('admin.products_state') }}</th>
          <th scope="col">{{ t('admin.products_operate') }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in adminProducts" :key="product.id">
          <th>{{ product.id }}</th>
          <td>{{ product[i18nStore.currentIcon].crate_date }}</td>
          <td>{{ product[i18nStore.currentIcon].category }}</td>
          <td>{{ product[i18nStore.currentIcon].category }}</td>
          <td>{{ product[i18nStore.currentIcon].price }}</td>
          <td>
            <span v-if="product[i18nStore.currentIcon].is_enabled" class="text-success">{{
              t('admin.products_on_enabled')
            }}</span>
            <span v-else class="text-danger">{{ t('admin.products_off_enabled') }}</span>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-dark me-1"
              @click="handleOpenModal('edit', product)"
            >
              {{ t('admin.products_edit_text') }}
            </button>
            <!-- 要注意 id 這邊是因為 api 規格最外層的 id，刪除產品是用這個 id -->
            <button type="button" class="btn btn-outline-danger" @click="deleteProduct(product.id)">
              {{ t('admin.products_delete_text') }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <AdminProductsModal
      ref="adminProductsModal"
      :typeName="typeName"
      @refetch-products="fetchAdminProducts"
    ></AdminProductsModal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import useLoadingStore from '@/stores/loadingStores';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

import { useAlert } from '@/composables/useAlert';
import AdminProductsModal from '@/components/admin/products/AdminProductsModal.vue';
import useI18nStore from '@/stores/i18nStores';

const adminProductsModal = ref(null);
const i18nStore = useI18nStore();
const { t } = useI18n();

const { showAlert } = useAlert();
const router = useRouter();
const LoadingStore = useLoadingStore();

const adminProducts = ref([]);
const adminPagination = ref([]);
const typeName = ref('新增');

// 傳遞開啟方法與資料給 Modal 子元件
const handleOpenModal = (type, data) => {
  if (type === 'create') {
    typeName.value = t('admin.products_add_text');
  } else {
    typeName.value = t('admin.products_keep_text');
  }
  adminProductsModal.value.openModal(type, data);
};

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const fetchAdminProducts = async () => {
  try {
    LoadingStore.toggleLoading(); // 全頁加載
    const api = `${baseApiUrl}/v2/api/${apiPath}/admin/products`;
    const response = await axios.get(api);
    console.log('products', response);
    adminProducts.value = response.data.products;
    adminPagination.value = response.data.pagination;
  } catch (error) {
    showAlert({
      title: `${error.response.data.message} | ${t('admin.message_error')}`,
      icon: 'error',
      confirmButtonText: `${t('admin.message_confirm_text')}`,
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

const deleteProduct = async (id) => {
  try {
    const api = `${baseApiUrl}/v2/api/${apiPath}/admin/product/${id}`;
    const response = await axios.delete(api);
    console.log('delete res', response);
    if (response.data.success) {
      fetchAdminProducts();
    }
  } catch (error) {
    console.log('error', error);
  }
};

onMounted(() => {
  fetchAdminProducts();
});
</script>
