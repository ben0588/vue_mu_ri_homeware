<template>
  <div class="py-32" v-if="!articleState">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/inspiration" class="text-dark">佈置靈感</router-link>
          </li>
          <li class="breadcrumb-item text-primary" aria-current="page">{{ article.title }}</li>
        </ol>
      </nav>
      <h2 class="mb-0">{{ article.title }}</h2>
      <div class="text-muted mb-1">
        <span>
          {{
            new Date(article.create_at * 1000).toLocaleString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }}</span
        >
        <span class="ms-1">#{{ article.author }}</span>
      </div>
      <div class="row mt-3">
        <div class="col-lg-7">
          <p>{{ article.description }}</p>
        </div>
        <div class="col-lg-5"></div>
      </div>

      <div class="row mb-32">
        <div class="col-12">
          <img :src="article.image" :alt="article.title" class="inspiration-mid-img" />
        </div>
        <div class="col-12">
          <div class="row gy-3 mt-4">
            <div class="col-12">
              <div class="row">
                <div class="col-lg-6">
                  <h3>
                    {{ article.subtitle }}
                  </h3>
                  <p class="d-flex justify-content-between align-items-center">
                    <span>{{ article.content }}</span>
                  </p>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex justify-content-end align-items-center h-100">
                    <router-link to="/products" class="btn btn-primary text-white"
                      >查看更多相關商品</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <img :src="article.imagesUrl[0]" :alt="article.title" class="inspiration-other-img" />
            </div>
            <div class="col-6">
              <img :src="article.imagesUrl[1]" :alt="article.title" class="inspiration-other-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <RecommendedComponent />
  </div>
  <VueLoading :active="articleState" :can-cancel="false" :color="'#0089A7'" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import VueLoading from 'vue-loading-overlay';
import axios from 'axios';
import { useAlert } from '@/composables/useAlert';
import RecommendedComponent from '@/components/common/RecommendedComponent.vue';

const route = useRoute();
const { showAlert } = useAlert();
const articleState = ref(true);
const article = ref({});

const fetchArticle = async () => {
  try {
    articleState.value = true;
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/api/${import.meta.env.VITE_APP_API_PATH}/article/${route.params.id}`;
    const response = await axios.get(api);
    article.value = response.data.article;
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
    articleState.value = false;
  }
};

onMounted(() => {
  fetchArticle();
});
</script>

<style lang="scss">
.inspiration-mid-img {
  object-fit: cover;
  max-width: 100%;
  height: auto;
}

.inspiration-other-img {
  object-fit: cover;
  max-width: 100%;
  width: 100%;
  height: 100%;
}
</style>
