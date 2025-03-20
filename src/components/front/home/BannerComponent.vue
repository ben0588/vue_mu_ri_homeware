<template>
  <div class="w-100">
    <Swiper
      :modules="modules"
      :centeredSlides="true"
      :initialSlide="1"
      :loop="true"
      :speed="400"
      :autoplay="{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      :navigation="{
        clickable: true,
      }"
      :pagination="{
        dynamicBullets: true,
        dynamicMainBullets: 3,
        clickable: true,
        type: 'bullets',
      }"
      :scrollbar="{ draggable: true }"
      :breakpoints="{
        // 大於等於
        '320': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        '576': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        '1600': {
          slidesPerView: 1.225,
          spaceBetween: 64,
        },
        '1920': {
          slidesPerView: 1.46,
          spaceBetween: 64,
        },
      }"
      class="banner-swiper-container position-relative"
      :style="{
        '--swiper-navigation-size': '20px',
        '--swiper-pagination-color': '#0089a7',
        '--swiper-pagination-bullet-inactive-color': '#fff',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '--swiper-pagination-bullet-size': '10px',
      }"
      ref="swiperRef"
    >
      <SwiperSlide v-for="item in bannerList" :key="item.id">
        <div class="justify-content-center align-items-center position-relative">
          <img :src="item[`${currentImage}`]" :alt="item.title" className="home-swiper-img" />

          <div class="banner-title-container">
            <h2 class="fw-bolder banner-title-text">
              {{ item.title }}
            </h2>
            <h3
              class="fs-2"
              :style="{
                'font-weight': `700`,
              }"
            >
              {{ item.subtitle }}
            </h3>
            <router-link
              to="products"
              role="button"
              class="btn btn-primary btn-lg fs-6 text-white py-3 mt-3"
            >
              {{ item.buttonText }}
            </router-link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Pagination];
const swiperRef = ref(null);

const bannerList = ref([
  {
    id: 1,
    title: '品味生活，由家開始',
    subtitle: '現在開始選擇 ',
    buttonText: '了解更多',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708320904548.png',
    imgMobileUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708461667161.png',
  },
  {
    id: 2,
    title: '品味生活，由家開始',
    subtitle: '現在開始選擇 ',
    buttonText: '了解更多',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708320930162.png',
    imgMobileUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708461679473.png',
  },
  {
    id: 3,
    title: '品味生活，由家開始',
    subtitle: '現在開始選擇 ',
    buttonText: '了解更多',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708321888764.png',
    imgMobileUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708461693600.png',
  },
  {
    id: 4,
    title: '品味生活，由家開始',
    subtitle: '現在開始選擇 ',
    buttonText: '了解更多',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708322254184.png',
    imgMobileUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708461679473.png',
  },
]);

const currentWidth = ref(window.innerWidth);

const handleResize = () => {
  currentWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

// 控制當桌機板與手機板 banner 圖片切換
const currentImage = computed(() => (currentWidth.value >= 500 ? 'imgUrl' : 'imgMobileUrl'));
</script>

<style lang="scss">
.banner-swiper-container {
  height: 650px;
  @media (min-width: 1920px) {
    height: 750px;
  }
}

// 客製化左右按鈕的樣式
.swiper-button-prev {
  left: 6%;
  width: 40px;
  height: 40px;
  color: white;
  font-weight: bold;
  background-color: $primary;
  /* z-index: -1; */

  // 小於等於 576px 隱藏
  @media (max-width: 576px) {
    opacity: 0;
  }

  // 大於等於 1290px 調整位置
  @media (min-width: 768px) {
    left: 4.7%;
  }
  @media (min-width: 1600px) {
    left: 6.4%; // 筆電展示範圍
  }
  @media (min-width: 1920px) {
    left: 13.53%;
  }

  &:hover {
    background-color: $primary-light;
  }
}
.swiper-button-next {
  right: 6%;
  width: 40px;
  height: 40px;
  color: white;
  font-weight: bold;
  background-color: $primary;
  /* z-index: -1; */

  // 小於等於 576px 隱藏
  @media (max-width: 576px) {
    opacity: 0;
  }

  // 大於等於 1290px 調整位置
  @media (min-width: 768px) {
    right: 4.7%;
  }
  @media (min-width: 1600px) {
    right: 6.4%;
  }
  @media (min-width: 1920px) {
    right: 13.53%;
  }

  &:hover {
    background-color: $primary-light;
  }
}

/* 設定下方分頁樣式 */
.swiper-pagination {
  margin-bottom: 48%;
  @media (min-width: 768px) {
    margin-bottom: 12%;
    opacity: 0;
  }
}

.home-swiper-img {
  display: block;
  object-fit: cover;
  width: 100%;
  /* max-width: 1296px; */
  height: 750px;
  margin: 0 auto;
  @media (max-width: 500px) {
    height: 649px;
  }
}

.banner-title-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 500px) {
    top: 32%;
  }
}

.banner-title-text {
  @media (min-width: 320px) {
    font-size: 36px;
    font-weight: 900;
    text-shadow: 0.5px 0px black;
  }
  @media (min-width: 500px) {
    font-size: 48px;
  }
}
</style>
