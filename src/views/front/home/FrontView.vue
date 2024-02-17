<template>
  <HeaderComponent></HeaderComponent>
  <div>
    <router-link to="/">首頁 |</router-link>
    <router-link to="/products">全部商品 |</router-link>
    <router-link to="/carts">購物車 |</router-link>
    <router-link to="/admin">管理者 |</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/layout/HeaderComponent.vue';
</script>
