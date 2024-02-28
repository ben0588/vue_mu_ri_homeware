<template>
  <header>
    <nav class="navbar bg-dark">
      <div class="container-fluid bg-dark py-1">
        <a class="navbar-brand text-white ps-2">{{ t('admin.dashboardName') }}</a>
        <ul class="list-unstyled d-flex justify-content-center align-items-center m-0">
          <li class="me-2" v-if="adminStore.isLogin">
            <button
              type="button"
              class="btn btn-light bg-dark text-white"
              @click="handleAdminLogout"
            >
              管理者登出
            </button>
          </li>
          <li>
            <div class="dropdown me-4">
              <button
                class="btn btn-secondary dropdown-toggle bg-dark text-white"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                :aria-expanded="isOpen"
                :class="isOpen ? 'show' : ''"
                @click.stop="changeIsOpenState"
                ref="dropdownMenuButton"
              >
                {{ t('admin.select_language_text') }} |
                <span :class="`fi fi-${i18nStore.currentIcon}`"></span>
              </button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
                :class="isOpen ? 'show' : ''"
              >
                <li v-for="item in i18nStore.languageList" :key="item.code">
                  <a
                    class="dropdown-item"
                    @click.prevent="handleChangI18nFn(item.code, item.icon_code)"
                    ><span :class="`fi fi-${item.icon_code}`"></span>{{ item.text }}</a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <VueLoading :active="adminIsLogin" :can-cancel="false" :color="'#d63031'"></VueLoading>
  <router-view></router-view>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
// import { changeLocale } from '@/languages/i18n';
import { Dropdown } from 'bootstrap';
import VueLoading from 'vue-loading-overlay';
import Swal from 'sweetalert2';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

import useI18nStore from '@/stores/i18nStores';
import { useAlert } from '@/composables/useAlert';
import useAdminStore from '@/stores/adminStores';

const adminStore = useAdminStore();

const { showAlert } = useAlert();
const isLogoutLoading = ref(false);
const route = useRoute();
const router = useRouter();
const adminIsLogin = ref(false);

const toggleLogout = () => {
  isLogoutLoading.value = !isLogoutLoading.value;
};

const i18nStore = useI18nStore();
const { i18nChangeLocale } = i18nStore;
const { t } = useI18n();

const isOpen = ref(false); // 控制下拉式開啟或關閉
const dropdownMenuButton = ref(null);
function changeIsOpenState() {
  isOpen.value = !isOpen.value;
}

const handleChangI18nFn = (code, iconCode) => {
  // 紀錄選擇語系與icon代碼，並且保存至 localStorage 中。
  i18nChangeLocale(code, iconCode);
  isOpen.value = false; // 確認之後要把開啟狀態關閉
};

const handleAdminLogout = async () => {
  try {
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/logout`;
    showAlert({
      title: '管理者登出?',
      text: '確定登出請按下確認按鈕',
      icon: 'question',
      confirmButtonColor: '#111c30',
      cancelButtonColor: '#b2bec3',
      confirmButtonText: '確認',
      cancelButtonText: '取消',
      showCancelButton: true,
      showCloseButton: true,
      reverseButtons: true,
      preConfirm: async () => {
        try {
          adminIsLogin.value = true;
          return await axios.post(api);
        } catch (error) {
          showAlert({
            title: `${error.response.data.message} | ${t('admin.message_error')}`,
            text: '登出失敗，請關閉頁面重新嘗試登出',
            icon: 'error',
            confirmButtonText: `${t('admin.message_confirm_text')}`,
            confirmButtonColor: '#000000',
            allowEscapeKey: false,
            allowOutsideClick: false,
          });
          localStorage.setItem('s72241', '');
          adminIsLogin.value = false;
          return false;
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      adminIsLogin.value = false;
      if (result?.value?.data?.success) {
        localStorage.setItem('s72241', '');
        showAlert({
          icon: 'success',
          title: '成功',
          text: `${result?.value?.data?.message} | 即將返回登入頁`,
          showConfirmButton: false,
          timer: 1000,
        }).then((res) => {
          if (res.dismiss === Swal.DismissReason.timer) {
            adminStore.isLogin = false; // 清除登入狀態
            router.push({ path: '/admin' });
          }
        });
      }
    });
  } catch (error) {
    showAlert({
      title: `${error.response.data.message} | ${t('admin.message_error')}`,
      text: '登出失敗，請關閉頁面重新開啟',
      icon: 'error',
      confirmButtonText: `${t('admin.message_confirm_text')}`,
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
    adminStore.isLogin = false; // 清除登入狀態
    router.push({ path: '/admin' });
  } finally {
    adminIsLogin.value = false;
  }
};

onMounted(() => {
  // 初始化下拉菜單
  Dropdown.getOrCreateInstance(dropdownMenuButton.value);
});

onMounted(() => {
  if (route.path.includes('dashboard')) {
    adminStore.isLogin = true; // 防止重新整理後 pinia 狀態消失
  }
});
</script>

<style lang="scss">
.dropdown-item {
  cursor: pointer;
}
</style>
