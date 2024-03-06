<template>
  <div class="container py-32" v-if="!articleLoading">
    <h2>空間佈置靈感</h2>
    <div>tag位置</div>
    <div class="row row-cols-3">
      <div class="col" v-for="item in articles" :key="item.id">
        <div class="border">
          <img :src="item.image" :alt="item.title" :style="{ height: `200px` }" />
          <h3 class="mb-0 fs-4">{{ item.title }}</h3>
          <span v-for="(tag, index) in item.tag" :key="index">{{ tag }}</span>
        </div>
      </div>
    </div>
    <div class="mt-2">
      <PaginationComponent
        :pagination="articlesPagination"
        @updated:page="fetchArticles"
      ></PaginationComponent>
    </div>
  </div>
  <VueLoading :active="articleLoading" :can-cancel="false" :color="'#0089A7'"></VueLoading>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import VueLoading from 'vue-loading-overlay';
import axios from 'axios';
import { useRouter } from 'vue-router';

import { useAlert } from '@/composables/useAlert';
import PaginationComponent from '@/components/common/PaginationComponent.vue';

const router = useRouter();
const { showAlert } = useAlert();
const articleLoading = ref(false);
const articles = ref([]);
const articlesPagination = ref([]);

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const navigateToPayment = (id) => {
  router.push({ name: 'front_order_payment', params: { id } });
};

const fetchArticles = async (page = 1) => {
  try {
    articleLoading.value = true;
    const api = `${baseApiUrl}/v2/api/${apiPath}/articles?page=${page}`;
    const response = await axios.get(api);
    console.log(response.data.articles);
    articles.value = response.data.articles;
    articlesPagination.value = response.data.pagination;
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
    articleLoading.value = false;
  }
};

onMounted(() => {
  fetchArticles();
});
</script>
<style lang="scss"></style>
