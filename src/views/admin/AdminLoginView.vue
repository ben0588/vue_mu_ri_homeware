<template>
  <div class="container d-flex justify-content-center align-items-center h-100 py-60">
    <div class="admin-form-container border border-2 shadow rounded p-5">
      <h2 class="text-center fw-bolder">{{ t('admin.loginTitle') }}</h2>
      <form @submit.prevent="adminLogin" class="mt-5" ref="adminLoginForm">
        <div class="mb-3">
          <label for="admin_account" class="form-label mb-1">{{ t('admin.loginAccount') }}</label>
          <input
            type="email"
            class="form-control"
            id="admin_account"
            :placeholder="`${t('admin.loginAccountPlaceholder')}`"
            v-model="adminData.username"
          />
        </div>
        <div class="position-relative mb-3">
          <label for="admin_password" class="form-label mb-1">{{ t('admin.loginPassword') }}</label>
          <input
            :type="inputType"
            class="form-control"
            id="admin_password"
            :placeholder="`${t('admin.loginPasswordPlaceholder')}`"
            v-model="adminData.password"
          />
          <span class="admin-eye-container hover-opacity" @click="toggleInputType">
            <span v-if="inputType === 'password'"
              ><font-awesome-icon :icon="['fas', 'eye']" class="fs-5"
            /></span>
            <span v-else><font-awesome-icon :icon="['fas', 'eye-slash']" class="fs-5" /></span>
          </span>
        </div>
        <button
          type="submit"
          class="btn btn-dark text-white w-100 mt-2 p-2"
          :disabled="adminSubmitState || adminData.username === '' || adminData.password === ''"
        >
          <!-- 登入時無法多次發出登入請求，並且更換指定 loading 樣式 -->
          <span v-if="adminSubmitState">
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

import { useAlert } from '@/composables/useAlert';
import useAdminStore from '@/stores/adminStores';

const adminStore = useAdminStore();
const { showAlert } = useAlert();

const router = useRouter();

const { t } = useI18n();

const adminLoginForm = ref(null);
const adminData = ref({
  username: '',
  password: '',
});
const adminSubmitState = ref(false);

const inputType = ref('password');

const toggleInputType = () => {
  if (inputType.value === 'password') {
    inputType.value = 'text';
  } else {
    inputType.value = 'password';
  }
};

const adminLogin = async () => {
  try {
    adminSubmitState.value = true;
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/admin/signin`;
    const response = await axios.post(api, { ...adminData.value });
    const { success, token, expired } = response.data;
    // 紀錄 Token And Axios defaults headers setting
    document.cookie = `AdminToken=${token}; expires=${new Date(expired)};`;
    axios.defaults.headers.common.Authorization = token;
    localStorage.setItem('s72241', token); // 增加在管理官重新整理不重新登入
    if (success) {
      adminData.value.username = '';
      adminData.value.password = '';
      adminStore.isLogin = true; // 紀錄登入狀態
      showAlert({
        position: 'top-start',
        title: ` ${t('admin.message_success')} | ${response.data.message}`,
        text: '即將進入管理者頁面，請稍後',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
      }).then((result) => {
        if (result.isDismissed) {
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
  } finally {
    adminSubmitState.value = false;
  }
};
</script>

<style lang="scss">
.admin-form-container {
  width: 500px;
}

.admin-eye-container {
  position: absolute;
  right: 12px;
  top: 53%;
  z-index: 30;
}
</style>
