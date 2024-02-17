<template>
  <div class="pt-3">
    <div class="row">
      <span class="col-6">
        <h3 class="fw-bolder">優惠卷列表</h3>
      </span>
      <span class="col-6">
        <div class="float-end pe-5">
          <button type="button" class="btn btn-success px-4" @click="handleOpenModal('create')">
            新增優惠卷
          </button>
        </div>
      </span>
    </div>
    <table class="table align-middle table-responsive">
      <thead>
        <tr>
          <th scope="col">編碼</th>
          <th scope="col">標題</th>
          <th scope="col">優惠碼</th>
          <th scope="col">折扣比(%)</th>
          <th scope="col">到期日</th>
          <th scope="col" class="text-center">{{ t('admin.products_operate') }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="coupon in adminCoupons" :key="coupon.id">
          <th>{{ coupon.id }}</th>
          <th>{{ coupon[i18nStore.currentIcon].title }}</th>
          <td>{{ coupon.code }}</td>
          <td>{{ coupon.percent }}</td>
          <td>
            <div v-if="!new Date().getTime() >= coupon.due_date" class="text-success">
              {{ new Date(coupon.due_date * 1000).toISOString().split('T')[0] }}
            </div>
            <div v-else class="text-danger">
              {{ new Date(coupon.due_date * 1000).toISOString().split('T')[0] }} [已到期]
            </div>
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

const fetchAdminCoupons = async () => {
  try {
    LoadingStore.toggleLoading(); // 全頁加載
    const api = `${baseApiUrl}/v2/api/${apiPath}/admin/coupons`;
    const response = await axios.get(api);
    adminCoupons.value = response.data.coupons;
    adminPagination.value = response.data.pagination;
    console.log('response', response.data);
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

onMounted(() => {
  fetchAdminCoupons();
});
</script>
