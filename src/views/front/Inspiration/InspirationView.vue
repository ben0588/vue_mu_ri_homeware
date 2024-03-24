<template>
  <div class="container py-32" v-if="!articleLoading">
    <h2>空間佈置靈感</h2>
    <div class="mt-3 mb-4">
      <span
        v-for="(navTag, navTagIndex) in tagList"
        :key="navTagIndex"
        @click="getSelectTag(navTag.title)"
      >
        <button
          type="button"
          class="btn btn-outline-secondary text-dark fs-6 me-3"
          :class="`${targetTag === navTag.title && 'bg-secondary'}`"
        >
          {{ navTag.title }}
        </button></span
      >
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div class="col mb-5" v-for="item in filterTagList" :key="item.id">
        <div>
          <router-link :to="`/inspiration/${item.id}`" class="hover-opacity text-dark">
            <img :src="item.image" :alt="item.title" class="inspiration-card-img" />
            <h3 class="mt-2 fs-4">{{ item.title }}</h3>
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
            <button type="button" class="btn btn-secondary btn-sm text-dark py-0 me-1">
              {{ tag }}
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="mt-5" v-if="articles.length">
      <PaginationComponent :pagination="articlesPagination" @updated:page="fetchArticles" />
    </div>
  </div>
  <VueLoading :active="articleLoading" :can-cancel="false" :color="'#0089A7'" />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import VueLoading from 'vue-loading-overlay';
import axios from 'axios';

import { useAlert } from '@/composables/useAlert';
import PaginationComponent from '@/components/common/PaginationComponent.vue';

const { showAlert } = useAlert();
const articleLoading = ref(false);
const articles = ref([]);
const articlesPagination = ref([]);
const targetTag = ref('顯示全部');

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

const getSelectTag = (val) => {
  targetTag.value = val;
};

// 計算選擇目標後重新會出 +
const filterTagList = computed(() => {
  if (targetTag.value === '顯示全部') {
    return articles.value;
  }
  return articles.value.filter((item) => item.tag.find((el) => el === targetTag.value));
});

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
