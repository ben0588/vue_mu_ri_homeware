<template>
  <div>
    <!-- :space-between="10" -->

    <!--  :space-between="40"  -->

    <!-- :effect="'coverflow'"
      :coverflowEffect="{
        rotate: 0,
        slideShadows: true,
      }" -->
    <Swiper
      :modules="modules"
      :slides-per-view="1.2"
      :centered-slides="true"
      :space-between="40"
      :initial-slide="1"
      :loop="true"
      :speed="400"
      :autoplay="{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      :navigation="{
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
        type: 'bullets',
      }"
      :pagination="{ nextEl: '.swiper-new-prev', prevEl: '.swiper-new-next', clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      @slideChangeTransitionStart="onSlideChangeStart"
      @slideChangeTransitionEnd="onSlideChangeEnd"
      class="position-relative"
      :style="{
        width: `100%`,
        height: `750px`,
        // '--swiper-navigation-color': '#ffffff0',
        '--swiper-navigation-size': '20px',
        '--swiper-pagination-color': '#111c30',
        '--swiper-pagination-bullet-size': '0',
      }"
      ref="swiperRef"
    >
      <SwiperSlide v-for="item in bannerList" :key="item.id">
        <div class="container d-flex justify-content-center align-items-center position-relative">
          <img :src="item.imgUrl" :alt="item.title" className="home-swiper-img" />

          <div class="banner-title-container">
            <h2
              class="fw-bolder"
              :style="{
                'font-size': `48px`,
              }"
            >
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
            <button type="button" class="btn btn-primary btn-lg fs-6 text-white py-3 mt-5">
              {{ item.buttonText }}
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  {{ isChnagePage }}
</template>
<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Pagination];
const isChnagePage = ref(false);
const swiperRef = ref(null);

const bannerList = [
  {
    id: 1,
    title: '品味生活，由家開始',
    subtitle: '現在開始選擇 ',
    buttonText: '了解更多',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708320904548.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=caauLZAlwKPF6FNIc%2BWoVKC6S70d5ujwasRnZzpZ6GcVnd21%2BilVXdJLiJg6yc74QjHtCbu1jUnYOaFeLN%2BHIUp7419LE4IVcdchPB64m3AlJ8Pn9tV8IxayhVY5E2MZXb1GtR9pcduOECtQ0iqjXW6LziZSfUQqD0sRNFVlzUxYEbs55IAhIlkGpRs5fdgDCqnhCm8K1J6sEi7Co9pJCcDUBt%2B7z%2BKbCfoWDyu54xORcrXNFfhH8ZFDwNaosZHmimtyPUZVp%2Bq0TlaEtXcFHiSPW4Gm3OWlhIQSJJg7rt8%2Bjzp%2BXrQu%2FujEzY9Qy6XJ%2BFcNSno4mxdsApiw4cE%2BxA%3D%3D',
  },
  {
    id: 2,
    title: '品味生活，由家開始',
    subtitle: '現在開始選擇 ',
    buttonText: '了解更多',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708320930162.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=IAK1yxnmfMEmonI%2FZfMCoiprffdlvVJcyZB%2Fr8k9JajS559Y%2B57nPfANziUDtB1BIyCqjKBK%2F%2Fu23ouhwTAurr4pzt1Ob%2FaB%2F7TbtZoCYH%2F9BOAo7no67JQUjXAqnrkegw63Gq8zguWMw3W7JLP9pq37M1TBJKzyb69RFQRwNHtOZ6dVCQEgAZ5Z7F6KQYhRY9xLNeLgk6fBsnqiTcFT4TkWXwi4Qc9TzizVeQDohgO%2BReMalyuynpikIWzHQO08%2B1Hk9jvFLJXTyBWediP4EoifdiQ1h7wHkhMl9J15hGJPY1faH8PhfMHdL62VjEQjhbLvgRkXIJc2Z%2FgoCfOeLw%3D%3D',
  },
  {
    id: 3,
    title: '品味生活，由家開始',
    subtitle: '現在開始選擇 ',
    buttonText: '了解更多',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708321888764.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gO28wBxhgitQFIq3oWU2Lq1d7HrvbwhH1lctq%2FQYhcG1wgsocdxEFbWQeVg0wRhfP7N5R2SKVbSBdJ49MZNl7nOu9KP6bhVCV1f47O1QI6WjHieUfWF0CcaIojyS4S%2BwunJsSpAwGxqpg08AuCfGkip9YqsAfGhk39NTh2ZUQKrMPqgzMpkMcIAwCpuWP96IxJGZs%2FYN%2BcfSaKsArOHeGj4vPqsoTXTfMEMNMVbwzs%2FrRMS7SPG0xFFrmSiaNqCcfU7P5NWLbXAaSk8Ds21j5ET%2FNFqLD9GxFlpxx73h410GdDnqmolm1A%2BgzCsecmjYRxfC7b8pyNV7XHztXX6dNA%3D%3D',
  },
  {
    id: 4,
    title: '品味生活，由家開始',
    subtitle: '現在開始選擇 ',
    buttonText: '了解更多',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708322254184.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fKpN49xxoKLzeJrxlmt3zLeofBHhccdJDUDr5u4KNCyoaLie8%2B6%2FeaUuSgZS1kVVAs2Aj8VXG7wGZyfBG3u0j7AfSzUT7Cyh4%2Ft0w040Sq3ICTQ7TddJmVG%2B8KbCIfvvvL30%2FKE%2F%2BFlghQr%2FX5OIvIBuqd5FQsHMPzQJYRYvVfoI%2BeGKcyMUJGUEAgKH98gfyHvW%2FJXA%2BOic8XD%2B6gXj%2FVNRqRnl%2BQWc30l9HIC%2BMmcSk8dG5BRY6bYCYxhLSayWb04%2BvnwG7Zuwfz1KMDOjhK1gr5RTjfOf3JJ2ExTjGpYcLjaL3e8haC%2Fd6zPvCxR1%2BY3Vv32dZF7AndQ3Tq6gPQ%3D%3D',
  },
];

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

const onSlideChangeStart = () => {
  // 幻燈片轉換開始時的處理邏輯
  console.log('Slide change started');
};

const onSlideChangeEnd = () => {
  // 幻燈片轉換結束時的處理邏輯
  console.log('Slide change ended');
};
</script>
<style lang="scss">
// 客製化左右按鈕的樣式
.swiper-button-prev {
  left: 6%;
  width: 40px;
  height: 40px;
  color: white;
  font-weight: bold;
  background-color: $primary;
  z-index: -1;

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
  z-index: -1;

  &:hover {
    background-color: $primary-light;
  }
}

.swiper-img {
  display: block;
  object-fit: contain;
  width: 100%;
  max-width: 1296px;
  height: 750px;
  margin: 0 auto;
  /* @media (min-width: 375px) {
    height: 459px;
  }
  @media (min-width: 576px) {
    height: 516px;
  }
  @media (min-width: 768px) {
    height: 500px;
  }
  @media (min-width: 992px) {
    height: 750px;
  }
  @media (min-width: 1200px) {
    height: 393px;
  }
  @media (min-width: 1400px) {
    height: 460px;
  } */
}

.banner-title-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* 假設當視窗寬度小於 768px 時，設定 spaceBetween 為 20px */
@media (max-width: 768px) {
  .swiper-container {
    --swiper-space-between: 20px;
  }
}

/* 假設當視窗寬度介於 768px 和 1024px 之間時，設定 spaceBetween 為 30px */
@media (min-width: 768px) and (max-width: 1024px) {
  .swiper-container {
    --swiper-space-between: 30px;
  }
}

/* 假設當視窗寬度大於 1024px 時，設定 spaceBetween 為 40px */
@media (min-width: 1024px) {
  .swiper-container {
    --swiper-space-between: 40px;
  }
}
</style>
