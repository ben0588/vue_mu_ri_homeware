<template>
  <div class="container d-flex justify-content-center align-items-center h-100 py-60">
    <div class="admin-form-container border border-2 shadow rounded p-5">
      <h2 class="text-center fw-bolder fs-1">{{ t('admin.loginTitle') }}</h2>
      <form @submit.prevent="adminLogin" class="mt-5">
        <div class="mb-3">
          <label for="admin_account" class="form-label fs-4 fw-bolder mb-1">{{
            t('admin.loginAccount')
          }}</label>
          <input
            type="email"
            class="form-control form-control-lg"
            id="admin_account"
            :placeholder="`${t('admin.loginAccountPlaceholder')}`"
            v-model="adminData.username"
          />
        </div>
        <div class="mb-3">
          <label for="admin_password" class="form-label fs-4 fw-bolder mb-1">{{
            t('admin.loginPassword')
          }}</label>
          <input
            type="password"
            class="form-control form-control-lg"
            id="admin_password"
            :placeholder="`${t('admin.loginPasswordPlaceholder')}`"
            v-model="adminData.password"
          />
        </div>
        <button
          type="submit"
          class="btn btn-dark text-white w-100 mt-2 p-2"
          :disabled="loadingStore.isLoading"
        >
          <!-- 登入時無法多次發出登入請求，並且更換指定 loading 樣式 -->
          <span v-if="loadingStore.isLoading">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            {{ t('admin.logging_in_text') }}
          </span>
          <span v-else> {{ t('admin.login_text') }}</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

import { useAlert } from '@/composables/useAlert';
import useLoadingStore from '@/stores/loadingStores';
import useAdminStore from '@/stores/adminStores';

const loadingStore = useLoadingStore();
const adminStore = useAdminStore();
const { showAlert } = useAlert();

const router = useRouter();

const { t } = useI18n();

const adminData = ref({
  username: '',
  password: '',
});

const adminLogin = async () => {
  try {
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/admin/signin`;
    const response = await axios.post(api, { ...adminData.value });
    const { success, token, expired } = response.data;
    // 紀錄 Token And Axios defaults headers setting
    document.cookie = `AdminToken=${token}; expires=${new Date(expired)};`;
    axios.defaults.headers.common.Authorization = token;
    localStorage.setItem('s72241', token); // 增加在管理官重新整理不重新登入
    adminStore.isLogin = true;
    if (success) {
      adminData.value.username = '';
      adminData.value.password = '';
      let timerInterval;
      showAlert({
        title: `${response.data.message} | ${t('admin.message_success')}`,
        html: '讀取中，請等待 <b></b> 秒後，即將進入後台管理頁面。謝謝',
        icon: 'success',
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector('b');
          timerInterval = setInterval(() => {
            timer.textContent = `${Math.ceil(Swal.getTimerLeft() / 1000)}`; // 將毫秒轉換為秒並向上取整
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          router.push({ path: '/admin/dashboard/products' });
        }
      });
    }
  } catch (error) {
    showAlert({
      title: `${error.response.data.message} | ${t('admin.message_error')}`,
      text: '請檢查帳號密碼是否有誤，嘗試重新登入。謝謝',
      icon: 'error',
      confirmButtonText: `${t('admin.message_confirm_text')}`,
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
    adminStore.isLogin = false;
  }
};
</script>

<style lang="scss">
.admin-form-container {
  width: 500px;
}
</style>