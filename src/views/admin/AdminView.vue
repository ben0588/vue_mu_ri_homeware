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
            <select
              name=""
              id=""
              class="form-select form-select-sm"
              v-model="currentLocale"
              @change="handleChangI18n"
            >
              <option value="" disabled selected>選擇語系</option>
              <option value="zh-TW">繁體中文</option>
              <option value="en">English</option>
              <option value="jp">Japanese</option>
              <option value="ko">Korean</option>
              <option value="th">Thai</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <router-view></router-view>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { changeLocale } from '@/languages/i18n';

const currentLocale = ref('zh-TW');
const { t } = useI18n();

const handleChangI18n = () => {
  changeLocale(currentLocale.value);
};

watchEffect(() => {
  console.log(currentLocale.value);
});
</script>
