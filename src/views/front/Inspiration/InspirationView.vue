<template>
  <div class="container py-32" v-if="!articleLoading">
    <h2>空間佈置靈感</h2>
    <div class="mt-3 mb-4">
      <span v-for="(navTag, navTagIndex) in tagList" :key="navTagIndex">
        <button type="button" class="btn btn-outline-secondary text-dark fs-6 me-3">
          {{ navTag.title }}
        </button></span
      >
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-32 gy-3">
      <div class="col" v-for="item in articles" :key="item.id">
        <div>
          <router-link :to="`/inspiration/${item.id}`" class="hover-opacity text-dark">
            <img :src="item.image" :alt="item.title" class="inspiration-card-img" />
            <h3 class="mt-2 mb-4 fs-4">{{ item.title }}</h3>
            <div class="mb-1">
              <span>
                {{
                  new Date(item.create_at * 1000).toLocaleString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                }}</span
              >
              <span class="ms-1">#{{ item.author }}</span>
            </div>
          </router-link>
          <span v-for="(tag, index) in item.tag" :key="index" class="me-2">
            <!-- 搜尋相同 tag 的標籤，重新篩選出內容 -->
            <button
              type="button"
              class="btn btn-secondary btn-sm text-dark py-0 me-1"
              :style="{ fontSize: `14px` }"
            >
              {{ tag }}
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="mt-5" v-if="articles.length">
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

import { useAlert } from '@/composables/useAlert';
import PaginationComponent from '@/components/common/PaginationComponent.vue';

const { showAlert } = useAlert();
const articleLoading = ref(false);
const articles = ref([]);
const articlesPagination = ref([]);

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const tagList = ref([
  {
    title: '顯示全部',
  },
  {
    title: '客廳',
  },
  {
    title: '臥室',
  },
  {
    title: '廚房',
  },
  {
    title: '書房',
  },
  {
    title: '浴室',
  },
]);

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
<style lang="scss">
.inspiration-card-img {
  width: 100%;
  height: 196px;
  object-fit: cover;
}
</style>
