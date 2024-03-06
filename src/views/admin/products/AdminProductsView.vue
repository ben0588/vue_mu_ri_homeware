<template>
  <div class="pt-3">
    <div class="row">
      <span class="col-6">
        <h3 class="fw-500">{{ t('admin.products_title') }}</h3>
      </span>
      <span class="col-6">
        <div class="float-end pe-5">
          <button type="button" class="btn btn-success px-4" @click="handleOpenModal('create')">
            {{ t('admin.products_create_text') }}
          </button>
        </div>
      </span>
    </div>
    <span class="row border-top border-bottom border-2 my-2 py-3">
      <div class="col-5">
        <button
          type="button"
          class="btn border border-1 d-inline reset-btn me-2"
          :style="{ marginTop: '-0.10rem', marginBottom: '0.10rem' }"
          title="重置選擇"
          @click="handleResetCategory"
        >
          <font-awesome-icon :icon="['fas', 'rotate']" class="" />
        </button>
        <select
          class="form-select d-inline w-50"
          aria-label="Default select example"
          v-model="targetCategory"
          @change="handleChangCategory"
        >
          <option value="" selected disabled>
            {{ t('admin.products_modal_category_placeholder') }}
          </option>
          <option :value="category.text" v-for="category in categoryList" :key="category.id">
            {{ category.text }}
          </option>
        </select>
      </div>
    </span>
    <div class="table-responsive">
      <table class="table align-middle">
        <thead>
          <tr>
            <th class="fw-400" scope="col">{{ t('admin.products_id') }}</th>
            <th class="fw-400" scope="col">{{ t('admin.products_name') }}</th>
            <th class="fw-400" scope="col">{{ t('admin.products_category') }}</th>
            <th class="fw-400" scope="col">{{ t('admin.products_subcategory') }}</th>
            <th class="fw-400" scope="col">{{ t('admin.products_price') }}(NT)</th>
            <th class="fw-400" scope="col">{{ t('admin.products_state') }}</th>
            <th class="fw-400 text-center" scope="col">{{ t('admin.products_operate') }}</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="product in adminProducts" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product[i18nStore.currentIcon].title }}</td>
            <td>{{ product[i18nStore.currentIcon].category }}</td>
            <td>{{ product[i18nStore.currentIcon].subcategory }}</td>
            <td>{{ usePriceToTw(product[i18nStore.currentIcon].price) }}</td>
            <td>
              <span v-if="product[i18nStore.currentIcon].is_enabled" class="text-success">{{
                t('admin.products_on_enabled')
              }}</span>
              <span v-else class="text-danger">{{ t('admin.products_off_enabled') }}</span>
            </td>

            <td class="flex-center">
              <button
                type="button"
                class="btn btn-dark me-1"
                @click="handleOpenModal('edit', product)"
              >
                {{ t('admin.products_edit_text') }}
              </button>
              <!-- 要注意 id 這邊是因為 api 規格最外層的 id，刪除產品是用這個 id -->
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="deleteProduct(product.id)"
                :disabled="deleteTargetId === product.id"
              >
                <span v-if="deleteTargetId === product.id">
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

    <Pagination :pagination="adminPagination" @updated:page="fetchAdminProducts"></Pagination>
    <AdminProductsModal
      ref="adminProductsModal"
      :typeName="typeName"
      @refetch-products="fetchAdminProducts"
    ></AdminProductsModal>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import useLoadingStore from '@/stores/loadingStores';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import Swal from 'sweetalert2';
import usePriceToTw from '@/composables/usePriceToTw';

import { useAlert } from '@/composables/useAlert';
import AdminProductsModal from '@/components/admin/products/AdminProductsModal.vue';
import useI18nStore from '@/stores/i18nStores';
import Pagination from '@/components/common/Pagination.vue';

const adminProductsModal = ref(null);
const i18nStore = useI18nStore();
const { t } = useI18n();

const { showAlert } = useAlert();
const router = useRouter();
const loadingStore = useLoadingStore();

const adminProducts = ref([]);
const adminPagination = ref([]);
const typeName = ref('新增');
const deleteLoading = ref(false);
const deleteTargetId = ref('');
const targetCategory = ref('');

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

const fetchAdminProducts = async (page = 1, category = '') => {
  try {
    loadingStore.toggleLoading(); // 全頁加載
    const token = localStorage.getItem('s72241'); // 防止重新整理後要重新登入
    axios.defaults.headers.common.Authorization = token;
    const api = `${baseApiUrl}/v2/api/${apiPath}/admin/products?page=${page}&category=${category}`;
    const response = await axios.get(api);
    adminProducts.value = response.data.products;
    adminPagination.value = response.data.pagination;
  } catch (error) {
    showAlert({
      title: `${error.response.data.message} | ${t('admin.message_error')}`,
      icon: 'error',
      confirmButtonText: `${t('admin.message_confirm_text')}`,
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

const deleteProduct = async (id) => {
  try {
    deleteTargetId.value = id; // 紀錄刪除商品 id
    deleteLoading.value = true; // 單獨加載
    showAlert({
      title: t('admin.products_delete_title'),
      text: t('admin.products_delete_confirm_text'),
      icon: 'question',
      confirmButtonColor: '#111c30',
      cancelButtonColor: '#b2bec3',
      confirmButtonText: t('admin.message_confirm_text'),
      cancelButtonText: t('admin.products_cancel_text'),
      showCancelButton: true,
      showCloseButton: true,
      showLoaderOnConfirm: true,
      reverseButtons: true,
      preConfirm: async () => {
        try {
          const api = `${baseApiUrl}/v2/api/${apiPath}/admin/product/${id}`;
          const response = await axios.delete(api);
          return response;
        } catch (error) {
          return error;
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result?.value?.data?.success) {
        showAlert({
          position: 'top-start',
          title: `${result.value.data.message} | ${t('admin.message_success')}`,
          icon: 'success',
          showConfirmButton: false,
          timer: 1000,
        });
        setTimeout(() => {
          fetchAdminProducts();
        }, 1000);
      } else if (result?.value?.response?.data?.success === false) {
        showAlert({
          title: `${result?.value?.response?.data.message} | ${t('admin.message_error')}`,
          icon: 'error',
          confirmButtonText: `${t('admin.message_confirm_text')}`,
          confirmButtonColor: '#000000',
        });
      }
      deleteTargetId.value = ''; // 清空商品紀錄 id
    });
  } catch (error) {
    showAlert({
      title: `${error.response.data.message} | ${t('admin.message_error')}`,
      icon: 'error',
      confirmButtonText: `${t('admin.message_confirm_text')}`,
      confirmButtonColor: '#000000',
    });
  } finally {
    deleteLoading.value = false;
  }
};

const categoryList = computed(() => [
  { id: '1', text: t('admin.products_modal_category_furniture') }, // 家具
  { id: '2', text: t('admin.products_modal_category_home_decor') }, // 家飾
  { id: '3', text: t('admin.products_modal_category_lighting') }, // 燈具
  { id: '4', text: t('admin.products_modal_category_kitchenware') }, // 廚房用品
  { id: '5', text: t('admin.products_modal_category_bathroom_accessories') }, // 浴室用品
  { id: '6', text: t('admin.products_modal_category_bedding') }, // 寢具
  { id: '7', text: t('admin.products_modal_category_storage') }, // 收納
  { id: '8', text: t('admin.products_modal_category_outdoor_and_garden') }, // 戶外與園藝
  { id: '9', text: t('admin.products_modal_category_office_supplies') }, // 辦公室用品
  { id: '10', text: t('admin.products_modal_category_children_furniture') }, // 孩童家居
]);

// 改變主類型項目
const handleChangCategory = () => {
  fetchAdminProducts(adminPagination.value.current_page, targetCategory.value);
};

// 重置類型選擇
const handleResetCategory = () => {
  targetCategory.value = '';
  fetchAdminProducts();
};

onMounted(() => {
  fetchAdminProducts();
});
</script>

<style lang="scss">
.reset-btn {
  &:hover {
    color: #fff;
    background-color: #000;
  }
}
</style>
