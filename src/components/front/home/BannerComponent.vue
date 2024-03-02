<template>
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
    class="position-relative"
    :style="{
      width: `100%`,
      height: `750px`,
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
            class="btn btn-primary btn-lg fs-6 text-white py-3 mt-5"
          >
            {{ item.buttonText }}
          </router-link>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
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
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708320904548.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=caauLZAlwKPF6FNIc%2BWoVKC6S70d5ujwasRnZzpZ6GcVnd21%2BilVXdJLiJg6yc74QjHtCbu1jUnYOaFeLN%2BHIUp7419LE4IVcdchPB64m3AlJ8Pn9tV8IxayhVY5E2MZXb1GtR9pcduOECtQ0iqjXW6LziZSfUQqD0sRNFVlzUxYEbs55IAhIlkGpRs5fdgDCqnhCm8K1J6sEi7Co9pJCcDUBt%2B7z%2BKbCfoWDyu54xORcrXNFfhH8ZFDwNaosZHmimtyPUZVp%2Bq0TlaEtXcFHiSPW4Gm3OWlhIQSJJg7rt8%2Bjzp%2BXrQu%2FujEzY9Qy6XJ%2BFcNSno4mxdsApiw4cE%2BxA%3D%3D',
    imgMobileUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708461667161.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NpVhHejAxFDMmlojJxiVYji%2BQfL9NCGNZO0zOJhuYJ%2F%2BiHwT%2Ffb4bOyrNfXTaZbj6iGhUbLxNShq64OaLcVB%2B7DvN7W0FnRbFJd1j3rep2TCKFIx4z6TOVoRplUzR7dK8i4g1dpUoWEi2CmdafMtEL49qmqoVWNtNmgzh3hKA5zgmFBz8YcYeWvK56sXsd9Nf4A2Rpf1O3UZ5uQLWbncUuWrdMiaBOlPYh1PKJvsUXfCrfTPPCmv7HyKBvZf9Mp19Xf%2FdeElsCrQzpf6y5F6oXHU3J5gl9C3cYN67J%2B6q6MdhN%2BRjGzMGQ3xRR7t07jWo%2BxflNszCG8yhRuCCaEJtg%3D%3D',
  },
  {
    id: 2,
    title: '品味生活，由家開始',
    subtitle: '現在開始選擇 ',
    buttonText: '了解更多',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708320930162.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=IAK1yxnmfMEmonI%2FZfMCoiprffdlvVJcyZB%2Fr8k9JajS559Y%2B57nPfANziUDtB1BIyCqjKBK%2F%2Fu23ouhwTAurr4pzt1Ob%2FaB%2F7TbtZoCYH%2F9BOAo7no67JQUjXAqnrkegw63Gq8zguWMw3W7JLP9pq37M1TBJKzyb69RFQRwNHtOZ6dVCQEgAZ5Z7F6KQYhRY9xLNeLgk6fBsnqiTcFT4TkWXwi4Qc9TzizVeQDohgO%2BReMalyuynpikIWzHQO08%2B1Hk9jvFLJXTyBWediP4EoifdiQ1h7wHkhMl9J15hGJPY1faH8PhfMHdL62VjEQjhbLvgRkXIJc2Z%2FgoCfOeLw%3D%3D',
    imgMobileUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708461679473.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MC8fS7gK00B2%2BhpHtzuJQriYzKJpQ1Kqg7wCjrsJL5ITLWgwoi%2B%2BEwJGMjP%2B82qpxJMwAWQlkteCQX2KF%2FxtvSNnjR%2Be4a4Gn62ibx07PySlnuHIat4LRnXpevI2j2vUxwvpB6ITO218IFInmLk0MCrI0q8PARM8cRuw1uFdHHetKMAu7Zp9j3KyiV%2FFPw5JIqSctn2Ch0%2FyQJ39yWFAl1hZoavs8FZgHn5P3o8wivmUnlSzujy%2FaCsIP337C4NdSh07gUbnesFQSUK30BBVG1st%2B%2FcKZ6hI8Sus1fjU22BmSiyphof7kjT0Oxa6jvK7g6H6R9h01asbAnzRMm3%2BVg%3D%3D',
  },
  {
    id: 3,
    title: '品味生活，由家開始',
    subtitle: '現在開始選擇 ',
    buttonText: '了解更多',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708321888764.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gO28wBxhgitQFIq3oWU2Lq1d7HrvbwhH1lctq%2FQYhcG1wgsocdxEFbWQeVg0wRhfP7N5R2SKVbSBdJ49MZNl7nOu9KP6bhVCV1f47O1QI6WjHieUfWF0CcaIojyS4S%2BwunJsSpAwGxqpg08AuCfGkip9YqsAfGhk39NTh2ZUQKrMPqgzMpkMcIAwCpuWP96IxJGZs%2FYN%2BcfSaKsArOHeGj4vPqsoTXTfMEMNMVbwzs%2FrRMS7SPG0xFFrmSiaNqCcfU7P5NWLbXAaSk8Ds21j5ET%2FNFqLD9GxFlpxx73h410GdDnqmolm1A%2BgzCsecmjYRxfC7b8pyNV7XHztXX6dNA%3D%3D',
    imgMobileUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708461693600.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=knAwLqYWUDz994%2FWccI7lx2HWWzf%2FVLkSR3E%2FRQvbqt4nlN12ErY%2Fh%2FVei%2Bx2ozwJyx7dZkmJWir34OuZx71XBJSZtf1Unyu%2B%2Bu3zL21UwRJKhOeKJbIOSPiX2wwejG8uuYG5RjxOpN7W1CPc%2FCn0onJhc3N%2BllGvpnsEQbumla1f1NbA%2FAIgnWGSDiHXYPRUyI5%2BRkFWiCpqenJgUKBSVp8EkIQnplRxnW2sngmtjQ3AqITAcmw%2B%2BeN27pCr%2FyEgx2wusT%2BAxcFN1eL%2F%2Bje2AdtXzRBG5TBn32L6nMPRVOfyDOkyGikHbLOTdJmlzgLuiMyEF%2BzRMndnO1LxgdMiA%3D%3D',
  },
  {
    id: 4,
    title: '品味生活，由家開始',
    subtitle: '現在開始選擇 ',
    buttonText: '了解更多',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708322254184.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fKpN49xxoKLzeJrxlmt3zLeofBHhccdJDUDr5u4KNCyoaLie8%2B6%2FeaUuSgZS1kVVAs2Aj8VXG7wGZyfBG3u0j7AfSzUT7Cyh4%2Ft0w040Sq3ICTQ7TddJmVG%2B8KbCIfvvvL30%2FKE%2F%2BFlghQr%2FX5OIvIBuqd5FQsHMPzQJYRYvVfoI%2BeGKcyMUJGUEAgKH98gfyHvW%2FJXA%2BOic8XD%2B6gXj%2FVNRqRnl%2BQWc30l9HIC%2BMmcSk8dG5BRY6bYCYxhLSayWb04%2BvnwG7Zuwfz1KMDOjhK1gr5RTjfOf3JJ2ExTjGpYcLjaL3e8haC%2Fd6zPvCxR1%2BY3Vv32dZF7AndQ3Tq6gPQ%3D%3D',
    imgMobileUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708461679473.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MC8fS7gK00B2%2BhpHtzuJQriYzKJpQ1Kqg7wCjrsJL5ITLWgwoi%2B%2BEwJGMjP%2B82qpxJMwAWQlkteCQX2KF%2FxtvSNnjR%2Be4a4Gn62ibx07PySlnuHIat4LRnXpevI2j2vUxwvpB6ITO218IFInmLk0MCrI0q8PARM8cRuw1uFdHHetKMAu7Zp9j3KyiV%2FFPw5JIqSctn2Ch0%2FyQJ39yWFAl1hZoavs8FZgHn5P3o8wivmUnlSzujy%2FaCsIP337C4NdSh07gUbnesFQSUK30BBVG1st%2B%2FcKZ6hI8Sus1fjU22BmSiyphof7kjT0Oxa6jvK7g6H6R9h01asbAnzRMm3%2BVg%3D%3D',
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
  top: 50%;
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

/* .swiper-slide {
  padding-block: 110px;
  text-align: center;
  font-size: 18px;
  background: #ccc;
} */
</style>

<!--

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
    --swiper-space-between: -140px;
  }
}
 -->
