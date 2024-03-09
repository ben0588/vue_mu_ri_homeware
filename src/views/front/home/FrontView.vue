<template>
  <div
    class="d-flex flex-column min-vh-100 position-relative px-0"
    :style="{ maxWidth: `100%`, width: `100%` }"
  >
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
