<template>
  <div class="row pt-2 m-0">
    <div class="col-2 border-end vh-100 p-0">
      <nav class="d-flex flex-column">
        <router-link
          class="nav-link-dark fs-5 fw-bolder border-bottom p-3"
          :exact-active-class="'admin-nav-active'"
          :to="`/admin/dashboard/${item.path}`"
          v-for="item in navbarList"
          :key="item.path"
          >{{ item.title }}</router-link
        >
      </nav>
    </div>
    <div class="col-10">
      <VueLoading
        :active="loadingStore.isLoading"
        :can-cancel="false"
        :color="'#0089A7'"
      ></VueLoading>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import VueLoading from 'vue-loading-overlay';

import useLoadingStore from '@/stores/loadingStores';

const loadingStore = useLoadingStore();
const navbarList = [
  {
    path: 'products',
    title: '商品管理',
  },
  {
    path: 'coupon',
    title: '優惠卷管理',
  },
  {
    path: 'order',
    title: '訂單管理',
  },
  {
    path: 'article',
    title: '文章管理',
  },
];
</script>
