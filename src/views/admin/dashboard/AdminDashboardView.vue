<template>
  <div class="row pt-2 m-0">
    <div class="col-2 border-end vh-100 p-0">
      <nav class="d-flex flex-column">
        <router-link
          class="admin-nav-link-dark fw-500 border-bottom px-3 py-2"
          :exact-active-class="'admin-nav-active'"
          :to="`/admin/dashboard/${item.path}`"
          v-for="item in navbarList"
          :key="item.path"
          >{{ item.title }}</router-link
        >
      </nav>
    </div>
    <div class="col-10">
      <VueLoading :active="loadingStore.isLoading" :can-cancel="false" :color="'#0089A7'" />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import VueLoading from 'vue-loading-overlay';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

import useLoadingStore from '@/stores/loadingStores';

const { t } = useI18n();
const loadingStore = useLoadingStore();

const navbarList = computed(() => [
  {
    path: 'products',
    title: t('admin.menu_products_manage'),
  },
  {
    path: 'coupon',
    title: t('admin.menu_coupon_manage'),
  },
  {
    path: 'order',
    title: t('admin.menu_orders_manage'),
  },
  {
    path: 'articles',
    title: t('admin.menu_article_manage'),
  },
  {
    path: 'events',
    title: '活動管理',
  },
]);
</script>

<style lang="scss">
.admin-nav-link-dark {
  text-decoration: none;
  color: rgb(33, 37, 41) !important;
  &:hover {
    background: #e9f1f5cc;
  }
}
.admin-nav-active {
  color: #fff !important;
  background: rgb(33, 37, 41) !important;
}
</style>
