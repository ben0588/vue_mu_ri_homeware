<template>
  <div>產品詳情 | {{ route.params.id }}</div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

console.log(route.params.id);
</script>
<style lang="scss"></style>
