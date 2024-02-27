<template>
  <div class="position-relative mt-60 py-80">
    <h3 class="home-title mb-64" :style="{ width: `244px` }">最新佈置靈感</h3>
    <div class="container px-0 px-xl-1">
      <Swiper
        :loop="true"
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
        class="position-relative px-lg-2"
        :style="{
          width: `100%`,
          height: `544px`,
          '--swiper-navigation-size': '20px',
        }"
        ref="swiperRef"
      >
        <SwiperSlide v-for="item in inspirationList" :key="item.id">
          <div class="container px-0">
            <img :src="item.imgUrl" :alt="item.title" className="inspiration-img" />
            <div class="fs-4 fw-500 text-truncate" :style="{ maxWidth: `100%` }">
              {{ item.title }}
            </div>
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
import { Swiper, SwiperSlide } from 'swiper/vue';

const inspirationList = [
  {
    id: 1,
    title: '夢想中的薰衣草色調風格別墅',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1709014815857.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ex36jErypMlWCF7JPLcDdtQUiFzkXNtJ3uNPkeHrmOjINzq6n%2BxDndWQejX0FxYU5ZsN%2FJdBaSVtLEX6FKtpKoo%2FwFrM1IcvFY%2FA7sgwp2I5RoNaUWJ%2BwlG0%2B2h8A5d6o8GfrIbUd3u56vmrchnwqjpIN0%2FcMLIBwsr6fGeFN0%2BHHutqArRE82cg4xAoANS3E%2BNeWoreUZ7NMry%2Bt7ajU0y4jEzjJWkfa2t%2B6WB%2Fh%2BuTUWnOZg4QHO1%2BhLe%2BpSnwGrL66tC3keJQ9QOEEom4VnalwbWu7j7pDoiL8G9L2HC0jZu8CMvpug1ubdYimCWSmUdhJrYm%2B5UdTrVC95k8eg%3D%3D',
  },
  {
    id: 2,
    title: '海洋風情的海濱小屋',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1709014798913.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lHrBfj3z4dnrWas3jG2qCeUt2Z82HWbBuOVZw9qUksskS69pl8sxAGikxOorkFPr4lSREkj09qJiWSvoz7F%2FSF9xWUYKJvcRNmc9yILFKfAhFP18LrQa3xXjGlhXeFVBGIr8Zu6XzwUChYb86LYkO6kpCZf5j2JgDk%2FKQ1nqhkR2WTYxe34pwUIGgD0YkcE5YZzmBPbxqDwBJk28%2FsB4jeFCsyUNDoxEDzdZZ8j9PBIE46CtHQToSCiV%2FEGtnwhRyXHN5ocV2Vr4JRZts5OgRecUdwN4VY5%2BelBm9Dp8mLAVTVnpQXT68uh8cJ0hiMl3cdxIYB8TpUG3cw%2B%2FQBrHQQ%3D%3D',
  },
  {
    id: 3,
    title: '測試中測試中測試中測試中',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1709014815857.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ex36jErypMlWCF7JPLcDdtQUiFzkXNtJ3uNPkeHrmOjINzq6n%2BxDndWQejX0FxYU5ZsN%2FJdBaSVtLEX6FKtpKoo%2FwFrM1IcvFY%2FA7sgwp2I5RoNaUWJ%2BwlG0%2B2h8A5d6o8GfrIbUd3u56vmrchnwqjpIN0%2FcMLIBwsr6fGeFN0%2BHHutqArRE82cg4xAoANS3E%2BNeWoreUZ7NMry%2Bt7ajU0y4jEzjJWkfa2t%2B6WB%2Fh%2BuTUWnOZg4QHO1%2BhLe%2BpSnwGrL66tC3keJQ9QOEEom4VnalwbWu7j7pDoiL8G9L2HC0jZu8CMvpug1ubdYimCWSmUdhJrYm%2B5UdTrVC95k8eg%3D%3D',
  },
];
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
  @media (max-width: 375px) {
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
  top: 54%;
  @media (max-width: 1920px) {
    left: 84.5%;
  }
  @media (max-width: 1600px) {
    left: 91.5%;
  }
  @media (max-width: 1200px) {
    left: 94.9%;
  }
  @media (max-width: 992px) {
    left: 95.5%;
    top: 42%;
  }
  @media (max-width: 768px) {
    display: none;
  }
}

.swiper-new-inspiration-next {
  right: 95%;
  top: 54%;
  @media (max-width: 1920px) {
    right: 84.5%;
  }
  @media (max-width: 1600px) {
    right: 91.5%;
  }
  @media (max-width: 1200px) {
    right: 94.9%;
  }
  @media (max-width: 992px) {
    right: 95.5%;
    top: 42%;
  }
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
