<template>
  <div class="d-flex flex-column position-relative px-0" :style="{ width: `100%` }">
    <HeaderComponent></HeaderComponent>
    <main class="flex-grow-1">
      <router-view></router-view>
    </main>
    <FooterComponent></FooterComponent>
    <HomeToTopBtn />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/layout/HeaderComponent.vue';
import FooterComponent from '@/components/layout/FooterComponent.vue';
import HomeToTopBtn from '@/components/front/home/HomeToTopBtn.vue';
</script>
