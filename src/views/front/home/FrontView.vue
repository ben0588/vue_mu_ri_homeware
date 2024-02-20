<template>
  <HeaderComponent></HeaderComponent>
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup>
import HeaderComponent from '@/components/layout/HeaderComponent.vue';
</script>
