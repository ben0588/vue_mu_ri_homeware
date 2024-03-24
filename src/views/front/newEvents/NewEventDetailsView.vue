<template>
  <div class="py-32" v-if="!eventState">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/newEvents" class="text-dark">最新活動</router-link>
          </li>
          <li class="breadcrumb-item text-primary" aria-current="page">{{ event.title }}</li>
        </ol>
      </nav>
      <h2 class="mb-0">{{ event.title }}</h2>
      <div class="row mt-3">
        <div class="col-lg-7">
          <p>{{ event.description }}</p>
        </div>
        <div class="col-lg-5"></div>
      </div>

      <div class="row mb-32">
        <div class="col-12">
          <img :src="event.imagesUrl[0]" :alt="event.title" class="inspiration-mid-img" />
        </div>
        <div class="col-12">
          <div class="row gy-3 mt-4">
            <div class="col-12">
              <div class="row">
                <div class="col-lg-6">
                  <h3>
                    {{ event.subtitle }}
                  </h3>
                  <p class="d-flex justify-content-between align-items-center">
                    <span>{{ event.content }}</span>
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
              <img :src="event.imagesUrl[1]" :alt="event.title" class="inspiration-other-img" />
            </div>
            <div class="col-6">
              <img :src="event.imagesUrl[2]" :alt="event.title" class="inspiration-other-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <RecommendedComponent />
  </div>
  <VueLoading :active="eventState" :can-cancel="false" :color="'#0089A7'" />
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
const eventState = ref(true);
const event = ref({});

const fetchEvent = async () => {
  try {
    eventState.value = true;
    const api = `${import.meta.env.VITE_APP_EVENTS_API_URL}/events?id=${route.params.id}`;
    const response = await axios.get(api);
    const [newData] = response.data;
    event.value = newData;
  } catch (error) {
    showAlert({
      title: '失敗',
      text: `${error}`,
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
  } finally {
    eventState.value = false;
  }
};

onMounted(() => {
  fetchEvent();
});
</script>

<style lang="scss">
.inspiration-mid-img {
  object-fit: cover;
  /* width: 1050px; */
  max-width: 100%;
  /* height: 580px; */
  height: auto;
}

.inspiration-other-img {
  object-fit: cover;
  max-width: 100%;
  width: 100%;
  /* height: auto; */
  height: 100%;
}
</style>
