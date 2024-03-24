<template>
  <div class="position-relative my-32 pt-80">
    <h3 class="home-title mb-64" :style="{ width: `244px` }">最新佈置靈感</h3>
    <div class="container px-0 px-xl-1">
      <Swiper
        :speed="400"
        :autoplay="{
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }"
        :scrollbar="{ draggable: true }"
        :navigation="{
          nextEl: '.swiper-new-inspiration-next',
          prevEl: '.swiper-new-inspiration-prev',
          clickable: true,
        }"
        :breakpoints="{
          // 大於等於
          '320': {
            slidesPerView: 1.2,
            spaceBetween: 24,
            slidesOffsetBefore: 12,
          },
          '992': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }"
        class="inspiration-swiper-container position-relative px-lg-2"
        :style="{
          '--swiper-navigation-size': '20px',
        }"
        ref="swiperRef"
      >
        <SwiperSlide v-for="item in inspirationList" :key="item.id">
          <div class="container px-0">
            <router-link :to="`/inspiration/${item.id}`">
              <img :src="item.image" :alt="item.title" className="inspiration-img" />
              <div class="fs-4 fw-500 text-truncate text-dark" :style="{ maxWidth: `100%` }">
                {{ item.title }}
              </div>
            </router-link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="swiper-new-inspiration swiper-new-inspiration-next">
      <font-awesome-icon :icon="['fas', 'chevron-left']" class="fs-4" />
    </div>
    <div class="swiper-new-inspiration swiper-new-inspiration-prev">
      <font-awesome-icon :icon="['fas', 'chevron-right']" class="fs-4" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import axios from 'axios';

import { useAlert } from '@/composables/useAlert';

const { showAlert } = useAlert();

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const inspirationList = ref([]);

const fetchArticles = async (page = 1) => {
  try {
    const api = `${baseApiUrl}/v2/api/${apiPath}/articles?page=${page}`;
    const response = await axios.get(api);
    inspirationList.value = response.data.articles;
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
  }
};

onMounted(() => {
  fetchArticles();
});
</script>

<style lang="scss">
.swiper-pagination-inspiration {
  display: none;
}

.inspiration-img {
  object-fit: cover;
  display: block;
  width: 100%;
  height: auto;
  @media (max-width: 1920px) {
    height: 496px;
  }
  @media (max-width: 992px) {
    height: 307px;
  }
  @media (max-width: 576px) {
    height: 307px;
  }
  @media (max-width: 414px) {
    width: 312px;
    height: 300px;
  }
}

/* 客製化左右兩側按鈕 */
.swiper-new-inspiration {
  position: absolute;
  width: 40px;
  height: 40px;
  color: white;
  font-weight: bold;
  background-color: $primary;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  &:hover {
    background-color: $primary-light;
  }
}

.swiper-new-inspiration-prev {
  left: 95%;
  top: 57%;
  @media (max-width: 1920px) {
    left: 84.5%;
  }
  @media (max-width: 1600px) {
    left: 94.9%;
  }
  @media (max-width: 1200px) {
    left: 94.9%;
  }
  @media (max-width: 992px) {
    left: 95.5%;
    top: 62%;
  }
  @media (max-width: 768px) {
    display: none;
  }
}

.swiper-new-inspiration-next {
  right: 95%;
  top: 57%;
  @media (max-width: 1920px) {
    right: 84.5%;
  }
  @media (max-width: 1600px) {
    right: 94.9%;
  }
  @media (max-width: 1200px) {
    right: 94.9%;
  }
  @media (max-width: 992px) {
    right: 95.5%;
    top: 62%;
  }
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
