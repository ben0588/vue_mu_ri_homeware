<template>
  <header>
    <nav class="navbar bg-dark">
      <div class="container-fluid bg-dark py-1">
        <a class="navbar-brand text-white ps-2">{{ t('admin.dashboardName') }}</a>
        <ul class="list-unstyled d-flex justify-content-center align-items-center m-0">
          <li><router-link class="text-white p-2" to="/admin">後臺-首頁 |</router-link></li>
          <li><router-link class="text-white p-2" to="/admin/dashboard"> 儀板表 |</router-link></li>
          <li><router-link class="text-white p-2" to="/"> 回到前台 |</router-link></li>

          <li>
            <div class="dropdown me-3">
              <button
                class="btn btn-secondary dropdown-toggle"
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
  <router-view></router-view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
// import { changeLocale } from '@/languages/i18n';
import { Dropdown } from 'bootstrap';

import useI18nStore from '@/stores/i18nStores';

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

onMounted(() => {
  // 初始化下拉菜單
  Dropdown.getOrCreateInstance(dropdownMenuButton.value);
});
</script>

<style lang="scss">
.dropdown-item {
  cursor: pointer;
}
</style>
