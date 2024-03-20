<template>
  <div class="pt-3">
    <div class="row">
      <span class="col-6">
        <h3 class="">優惠卷列表</h3>
      </span>
      <span class="col-6">
        <div class="float-end pe-3">
          <button type="button" class="btn btn-success px-4" @click="handleOpenModal('create')">
            新增優惠卷
          </button>
        </div>
      </span>
    </div>
    <div class="table-responsive">
      <table class="table align-middle">
        <thead>
          <tr>
            <td>編碼</td>
            <td>標題</td>
            <td>優惠碼</td>
            <td>折扣比(%)</td>
            <td>狀態/到期日</td>
            <td class="fw-500 text-center">{{ t('admin.products_operate') }}</td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="coupon in adminCoupons" :key="coupon.id">
            <td>{{ coupon.id }}</td>
            <td>{{ coupon[i18nStore.currentIcon].title }}</td>
            <td>{{ coupon.code }}</td>
            <td>{{ coupon.percent }}</td>
            <td>
              <!-- 增加時間判斷顯示是否已失效 -->
              <div
                class="d-flex justify-content-start flex-column text-success"
                v-if="coupon.is_enabled"
              >
                啟用
              </div>
              <div class="d-flex justify-content-start flex-column text-danger" v-else>未啟用</div>
              <div
                v-if="new Date().getTime() / 1000 <= coupon.due_date"
                class="d-flex justify-content-start flex-column text-success"
              >
                <span>{{ new Date(coupon.due_date * 1000).toISOString().split('T')[0] }}</span>
                <span>[有效]</span>
              </div>
              <div v-else class="d-flex justify-content-start flex-column text-danger">
                <span>{{ new Date(coupon.due_date * 1000).toISOString().split('T')[0] }}</span>
                <span>[已到期]</span>
              </div>
            </td>
            <td>
              <div class="d-flex justify-content-center">
                <button
                  type="button"
                  class="btn btn-outline-dark me-1"
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
                    <span> {{ t('admin.products_delete_text') }}</span>
                  </span>
                  <span v-else>
                    {{ t('admin.products_delete_text') }}
                  </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <PaginationComponent
      :pagination="adminPagination"
      @updated:page="fetchAdminCoupons"
    ></PaginationComponent>

    <AdminCouponModal
      ref="adminCouponModal"
      :typeName="typeName"
      @refetch-coupon="fetchAdminCoupons"
    ></AdminCouponModal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import useLoadingStore from '@/stores/loadingStores';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import Swal from 'sweetalert2';

import { useAlert } from '@/composables/useAlert';
import useI18nStore from '@/stores/i18nStores';
import AdminCouponModal from '@/components/admin/coupon/AdminCouponModal.vue';
import PaginationComponent from '@/components/common/PaginationComponent.vue';

const adminCouponModal = ref(null);
const i18nStore = useI18nStore();
const { t } = useI18n();

const { showAlert } = useAlert();
const router = useRouter();
const LoadingStore = useLoadingStore();

const adminCoupons = ref([]);
const adminPagination = ref([]);
const typeName = ref('新增');
const deleteLoading = ref(false);
const deleteTargetId = ref('');

// 傳遞開啟方法與資料給 Modal 子元件
const handleOpenModal = (type, data) => {
  if (type === 'create') {
    typeName.value = t('admin.products_add_text');
  } else {
    typeName.value = t('admin.products_keep_text');
  }
  adminCouponModal.value.openModal(type, data);
};
const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const fetchAdminCoupons = async (page = 1) => {
  try {
    LoadingStore.toggleLoading(); // 全頁加載
    const token = localStorage.getItem('s72241'); // 防止重新整理後要重新登入
    axios.defaults.headers.common.Authorization = token;
    const api = `${baseApiUrl}/v2/api/${apiPath}/admin/coupons?page=${page}`;
    const response = await axios.get(api);
    adminCoupons.value = response.data.coupons;
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

const deleteCoupon = async (id) => {
  try {
    deleteTargetId.value = id; // 紀錄刪除商品 id
    deleteLoading.value = true; // 單獨加載
    showAlert({
      title: '刪除優惠卷?',
      text: '確認刪除後，優惠卷資料將無法回復!',
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
          const api = `${baseApiUrl}/v2/api/${apiPath}/admin/coupon/${id}`;
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
          fetchAdminCoupons();
        }, 1000);
      } else if (result?.value?.response?.data?.success === false) {
        showAlert({
          title: `${result?.value?.response?.data.message} | ${t('admin.message_error')}`,
          icon: 'error',
          confirmButtonText: `${t('admin.message_confirm_text')}`,
          confirmButtonColor: '#000000',
        });
      }
      deleteTargetId.value = '';
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

onMounted(() => {
  fetchAdminCoupons();
});
</script>
