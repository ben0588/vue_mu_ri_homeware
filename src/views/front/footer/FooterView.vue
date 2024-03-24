<template>
  <div class="container py-60">
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="item in footerList" :key="item.id">
        <router-link
          :to="item.path"
          class="nav-link"
          :class="{ active: item.path === route.fullPath.match(/\/more\/(.*)/)[1] }"
          >{{ item.title }}</router-link
        >
      </li>
    </ul>
    <RouterView />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const footerList = [
  { id: 1, title: '認識我們', path: 'about' },
  { id: 2, title: '加入我們', path: 'join' },
  { id: 3, title: '常見問題', path: 'FAQ' },
  { id: 4, title: '聯絡我們', path: 'contact' },
  { id: 5, title: '隱私權政策', path: 'privacyPolicy' },
];
</script>

<style lang="scss">
/* 客製化選中樣式 */
.nav-item .nav-link.active {
  background-color: $primary !important;
  color: #fff !important;
  font-weight: 400 !important;
}

.nav-item .nav-link.active {
  border: 1px solid $primary;
}
</style>
