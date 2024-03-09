<template>
  <div class="container py-32" v-if="!eventLoading">
    <h2>最新活動</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3 mt-3">
      <div class="col" v-for="item in events" :key="item.id">
        <div>
          <router-link :to="`/newEvents/${item.id}`" class="hover-opacity text-dark">
            <img :src="item.imageUrl" :alt="item.title" class="inspiration-card-img" />
            <h3 class="mt-2 mb-4 fs-4">{{ item.title }}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <VueLoading :active="eventLoading" :can-cancel="false" :color="'#0089A7'"></VueLoading>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import VueLoading from 'vue-loading-overlay';
import axios from 'axios';

import { useAlert } from '@/composables/useAlert';

const { showAlert } = useAlert();
const eventLoading = ref(false);
const events = ref([]);

const fetchArticles = async () => {
  try {
    eventLoading.value = true;
    const api = `${import.meta.env.VITE_APP_EVENTS_API_URL}`;
    const response = await axios.get(api);
    events.value = response.data.filter((item) => item.isPublic);
  } catch (error) {
    showAlert({
      title: '失敗',
      text: `${error.response.data.message}`,
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
  } finally {
    eventLoading.value = false;
  }
};

onMounted(() => {
  fetchArticles();
});
</script>
<style lang="scss">
.events-card-img {
  width: 100%;
  height: 196px;
  object-fit: cover;
}
</style>
