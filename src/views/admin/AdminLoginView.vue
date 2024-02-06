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
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const adminData = ref({
  username: '',
  password: ''
});

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
