<template>
  <div class="d-flex flex-column min-vh-100 px-0" :style="{ maxWidth: `100%`, width: `100%` }">
    <HeaderComponent></HeaderComponent>
    <main class="flex-grow-1">
      <router-view></router-view>
    </main>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/layout/HeaderComponent.vue';
import FooterComponent from '@/components/layout/FooterComponent.vue';
</script>
