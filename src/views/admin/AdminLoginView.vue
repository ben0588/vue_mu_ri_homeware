<template>
  <div class="container vh-100">
    <div>
      <h2>管理者登入</h2>
      <form @submit.prevent="adminLogin">
        <div class="mb-3">
          <label for="admin_account" class="form-label fs-4 fw-bolder mb-1">帳號</label>
          <input
            type="email"
            class="form-control form-control-lg"
            id="admin_account"
            placeholder="請輸入管理者帳號"
            v-model="adminData.username"
          />
        </div>
        <div class="mb-3">
          <label for="admin_password" class="form-label fs-4 fw-bolder mb-1">密碼</label>
          <input
            type="password"
            class="form-control form-control-lg"
            id="admin_password"
            placeholder="請輸入管理者密碼"
            v-model="adminData.password"
          />
        </div>
        <input type="submit" value="登入" />
      </form>
      <button type="button" @click="testAlter">測試 sweet alert2</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

import { useAlert } from '@/composables/useAlert';
import useLoadingStore from '@/stores/loadingStores';

const LoadingStore = useLoadingStore();

const { showAlert } = useAlert();

const router = useRouter();

const adminData = ref({
  username: '',
  password: '',
});

const testAlter = () => {
  // Swal.fire({
  //   title: 'Error!',
  //   text: 'Do you want to continue',
  //   icon: 'error',
  //   confirmButtonText: 'Cool'
  // });
  console.log('LoadingStore', LoadingStore.isLoading);
  LoadingStore.toggleLoading();
  showAlert({
    title: '成功',
    text: '操作已成功完成',
    icon: 'success',
  });
};

const adminLogin = async () => {
  try {
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/admin/signin`;
    console.log('準備送出', adminData.value, api);
    const response = await axios.post(api, { ...adminData.value });
    console.log('res', response);
    const { success, token, expired } = response.data;
    document.cookie = `AdminToken=${token}; expires=${new Date(expired)};`;
    axios.defaults.headers.common.Authorization = token;
    if (success) {
      // 呼叫成功，跳轉到後台儀板表
      router.push({ path: '/admin/dashboard' });
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
