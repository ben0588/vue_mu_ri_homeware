<template>
  <section class="mt-80">
    <h3 class="home-title mb-3">類型選擇</h3>
    <div class="container mt-5">
      <div class="row justify-content-center align-items-start">
        <div class="col-4" v-if="!isTable">
          <router-link
            to="/products"
            class="hover-img-opacity"
            @click="handleChangeCategory('特價中')"
          >
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468217006.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=i1erUbEbAV%2B9pIXREE5UrJF5GKTjvRH8in0d4OfHH%2B3V06bLny87p495Y9qHRMhmj7%2FDdOeZFxpcHs0RmCjWx9wyBhi%2FIWu9TgWB8WcJ2%2BPi%2FtWXYpcQ2JmbI5kvKkp4n5kt1MKXgUpq1v54fknne4bSy0RAHp2b4xQqoJQmPtV%2B1fsVnEdHVbOR8R2pFhAmS9ftC%2FUC1M0RShuQsyPLHNL%2FWbmDOPRyFnIF981Oaao6AT6Etm4kCTKns7iuvKoHPhMOkw951w9BSuR5qebL9NP66pnn8TK4vA%2B5yhPe0%2F3cvVZ4y%2BRfsgAdiqMCFO%2Bl%2B4pdrqOj%2F0xtMFUYnKfa2A%3D%3D"
              class="category-sale-bg-img"
              alt="特價中"
            />
            <p class="fs-4 fw-500 text-dark text-center pt-2">特價中</p>
          </router-link>
        </div>
        <div class="col-lg-8">
          <div class="row justify-content-center align-items-center">
            <div class="col-6 col-sm-3" v-if="isTable">
              <router-link
                to="/products"
                class="hover-img-opacity"
                @click="handleChangeCategory('特價中')"
              >
                <img
                  src="https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708555109803.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Rg3mRYkkD3AxpJsbtu3J5W2I1K0WDWsZEFJ7agbdPQ16VCpyRnrzmmPSu8AWdi11j0WZYZqvmY6vsrXDQKoiM9dATUwGMusUx2ALVygclUNjITGoRa0kVW7ZmAvZ7vHSJ8WHFe8BHEy92LXVctvGK6LtAUfg1CEvkcF6WDdyuc9BHhYDkWeNEIMM2zEInEggj4BYRe2uma%2Fv0zhBhA7Syyvi9c4tgc5rp4mtN8EG0JY5tH%2FxsB0W8gKoj1RGN1T7R5WExNan750HtGTVw4q%2FcBU1wRcKbCHj%2FtLSuNf4wUWJGexSNyHbHW0ybjMJT2l4lPIMfXSFYd%2FuCf%2FdLSVqyg%3D%3D"
                  class="category-sale-sm-img"
                  alt="特價中"
                />
                <p class="fs-4 fw-500 text-dark text-center pt-2">特價中</p>
              </router-link>
            </div>
            <div
              class="col-6 col-sm-3"
              v-for="(item, index) in categoryList"
              :key="item.title"
              :style="{ marginBottom: !isTable ? '1.25rem' : '' }"
            >
              <!-- 當手機板時只顯示最多6個類型選擇 -->
              <div v-if="isPhone">
                <router-link
                  :to="item.path"
                  class="hover-img-opacity"
                  v-if="index <= 4"
                  @click="handleChangeCategory(item.title)"
                >
                  <img :src="item.imgUrl" :alt="item.title" class="category-img" />
                  <p class="fs-4 fw-500 text-dark text-center pt-2">{{ item.title }}</p>
                </router-link>
              </div>

              <div v-else-if="isTable">
                <router-link
                  :to="item.path"
                  class="hover-img-opacity"
                  v-if="index <= 6"
                  @click="handleChangeCategory(item.title)"
                >
                  <img :src="item.imgUrl" :alt="item.title" class="category-img" />
                  <p class="fs-4 fw-500 text-dark text-center pt-2">{{ item.title }}</p>
                </router-link>
              </div>

              <router-link
                :to="item.path"
                class="hover-img-opacity"
                v-else
                @click="handleChangeCategory(item.title)"
              >
                <img :src="item.imgUrl" :alt="item.title" class="category-img" />
                <p class="fs-4 fw-500 text-dark text-center pt-2">{{ item.title }}</p>
              </router-link>
            </div>
          </div>
          <div class="col-12 text-center mt-3" v-if="isTable">
            <router-link
              to="/products"
              class="btn btn-primary text-white py-2 px-3"
              @click="handleChangeCategory('全部商品')"
              >更多類型</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, watchEffect } from 'vue';

import useCategoryStore from '@/stores/categoryStores';

const screenWidth = ref(window.innerWidth);
const isTable = ref(false);
const isPhone = ref(false);
const categoryStore = useCategoryStore();

const handleChangeCategory = (target) => {
  categoryStore.categoryTarget = target;
};

const categoryList = [
  {
    title: '全部商品',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468204788.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LeCMl0hcR%2FGSPVsDz8EvoLUtmEEgHw1Rrtt7smX9qQjYsbs5D7hFnBeTK1UvnmZP7NFk7%2FKSPmxqWP55UeOPyzBLF3txUObxVYudNitGvOm16bWtebQp%2FH3Kk6EiXjGQ2PK7%2B6PBvkyn5tWHORXXSSJXO8ynd%2F4uNyQ3Qp4B7U14pAkNihFh5kV1645C7SWsruA%2BOZsa%2BUU%2F8bd%2B1s3pNiB1PaAyU4hbXotg6ddZzm90pT8crcvtrGjd1c%2Fl13ep56LO19hH0qpsv4VWkLYVjGEIRoVMtBhlr88dwz9XOyo834gmgMik3iaY4o4zvGTq3O3mE%2B1stKD3Ujku8WIMpg%3D%3D',
  },
  {
    title: '家具',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468227966.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RpF1ovbsiNWIlRIO10agTNeaCHbHtkxgX0BNdC1rSo3seVQEmpcfS1LBV25cqPyjAaxhSC6sP7dQtMD6Vi06tAsne53UdDkDDiqZsLFv6%2B0kkzNQVSovqBjcbWq1dEyA3CKhWmDfAFt%2FmZAqA5L9ZUok0hQ0aM6UiDS1Ex7JsLijaGbsOUJLpn27pyFlTjHigE2rhzwzZ0oYGqaxAudwWsfCHQ5FNjumogyexBqDutDGusjDPo22lmfHa7ID9U0ENXGojLWW6fDQpc8BYYeZuKq5sGzUCgV72ncjl1jSJUYrVUjG91gOkFgM1HmuWy67bkeBY9JX8YRcamNx5LNXUA%3D%3D',
  },
  {
    title: '家飾',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468253407.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OKozTgWNP%2FiPw%2BS%2FozxAUYNZsNsVxADItJkCHnDlpOc3RREzbw3rdOdA4%2FuJOvWWMcKKx243qijhYuKjSTpuBi7GnTO598J0Exx8cRrFPj4wK8XK9%2FRR8cq9eyh48dqh7mmH00X24B93TOR3GIOMx1uZ9T3zxFDx9OBtSsNPBiFd2SNvqHNtsxGY2b9JCPnQ9H9%2BQwd4hkdzkDzesscA3Zrg7CK8%2FgKiArDeWa3f8rXiDqkHf%2B%2BmI6EX3M2Ohvw5gRhdrAlEV9%2BcQiPlWlQuwaTWns4tEqWJfjgeN8FIE149BiicWC98kNcV7bExPBcCh1akQb8U%2FfGsqj6zixaXtQ%3D%3D',
  },
  {
    title: '燈具',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468266307.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iG628q5D50STyB3KojfYuL51XcMc2Wx7SBjp7Ga%2FGXsUnEqoTvYkV6CDNs4OBS0074e9F3%2BKINCUNSQqkrB%2BbXf4WGmINMYD1YJ27S0KXV8p3qAoRfA%2BrSZzXiQ3tI8l%2F3zovRlBsQO7T7gClOhF8PtxZbHzC9Gvyyh7EyJaCL%2B7QzsUosq1%2FXxIFPgk97YdPMxnF11%2F4Tj4ZXEZ76oXLToG0tgLVZq1T%2F4en4WU3sTZ0fViUYi1PIkAlErvVw7LrX%2FhdQ8yd2JVQpEcNYHlfRbyEPkPf%2Bu0BCL9CFKfq0p13TPxNZUE5PdkvceCGTLBXhb8Q%2F3m8ZfQMNieWwmqnQ%3D%3D',
  },
  {
    title: '廚房用品',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468274567.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XWklc4XiuXwWS2NAdlNXh%2FdQPDCQMaD71nQGfUMsqcQRLcKPiwX5ZaiXxV%2FNxtkPBiitIm7FAdVADFd47o7c1s%2B5qTtyeSUmrCRsb8Gq5Bj9oKeWRx71tNHILspDCm1nYouJlZggGvj5%2FMRgsOAgN5kJvFOxWEp2mY8IelfAT6gKukyJhvxM5%2FZNVSHdgGGu3pFNcteDv8gKSy%2Bg5MXzSETAJjLFeknx6FBkLxe%2BBtt0BTS5uAvdAIH4c06PWbC60oKWdezQJnUND2mkTbR3Q9tj7DSiT9D4cfxmLpPspLwKM4Rtqh1zYcVAPtbWVV5h4%2BQyHjvCJyv2heflmjOrow%3D%3D',
  },
  {
    title: '浴室用品',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468285249.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jQfs4%2BYjJr9qmfbeCaoxYzJBmPIJupvAnG8eHLZ6BnpRNwPcCqyjgU5UN4cpe8u9CobiC90BPZRh0ovDz3yPs7xJYb4kakdDhKw059kcpD5Az4eF1G3BTq796D9pW8UmI009h3P%2Fb7DDt4lYc7qGkzJldSrR4HOVFtOtXcdizmLWqqxdEwIWEjagU2h8UhWTq2b4SwGx4kC5RrqxrOMc3rqAnFHDuj7tvhRxFnIQ1rnQIPV7J1BXiESMIZT6UUDpHKRo6L8IzXuFGJSfWPUaJPuSI%2FwJjq%2BXIuZJbqt0oV0sFBBE4DqIy0wUx9rojIqybvQlBCDSoZZAHJZ4I34ocw%3D%3D',
  },
  {
    title: '寢具',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468294586.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JMOx9eefoI0xcOKR4HiWRigN0EEU3TdrbJ4TelgZAIZgBECHGvpfqMrNQknBgrDzdlcZFUPZfW4%2F%2BpMgIWo15fyzTfmtFxrGxqhxtQA57pMdUZWs4W8danjtw1cGDWrqr36iZEIChxINPlySnXmpVJZOP3oaNwWZPfIA1uJEEOL5mRuLGphlsJnCe7z8ILUyPeU20MYxMM008oUsM3fI2fCkEGA3TEHQgG0KXScgvTPQRyGowiarQ3EGs6vt7QsRn8qCA2Xv5J5EOSgX1%2Fhcc6MFrLHsW0gCR0D8qtfWMYXVGHOcv8p7UQfIRrmuoRCCoqORZyEGA1VpAQCQN74X2A%3D%3D',
  },
  {
    title: '收納',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468305176.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fqq01LGlJt1%2BcXf1aZSiFWuahxFO9bvHxZ3O6NgDLPTbBjxZ7buATVwFBtgPAQn%2FZ5hazfflgezTN2DhryS%2F2F%2Fa2BoxRgdD0UyVZUsaAI9enD4nTO2yEBAsyw2zy8CO3n2CcAWIX2bNfYeWo1hPtZoIHvxaB%2FSaNTBsedsyOfJabuKD2MvuuSXt%2BgBM%2FzzJCkUWKOh7TS8PxsStKC2CnlWOKpD54hlCkR3rW42KaaIBe95fawAawZHwwU3gPuS6TV3GJ7D128gNo%2Fwv0U61FKobvw9e9NCQcN1G9jycPFTGdWO4%2Btaxd9vXuvly9bZQURoap1EUYwz1aYuN784COg%3D%3D',
  },
];

// 監視螢幕寬度的變化
watchEffect(() => {
  const handleResize = () => {
    screenWidth.value = window.innerWidth;
  };

  if (screenWidth.value <= 992) {
    isTable.value = true;
  } else {
    isTable.value = false;
  }

  if (screenWidth.value <= 375) {
    isPhone.value = true;
  } else {
    isPhone.value = false;
  }

  window.addEventListener('resize', handleResize);

  // 在組件被卸載時，移除 resize 事件的監聽器
  return () => {
    window.removeEventListener('resize', handleResize);
  };
});
</script>

<style lang="scss">
.category-sale-sm-img {
  height: auto;
  max-width: 196px;
  max-height: 196px;
  object-fit: cover;

  @media (max-width: 992px) {
    width: 156px;
    height: 156px;
  }

  @media (max-width: 768px) {
    width: 111px;
    height: 111px;
  }

  @media (max-width: 576px) {
    width: 111px;
    height: 111px;
  }

  @media (max-width: 414px) {
    width: 164.5px;
    height: 164.5px;
  }

  @media (max-width: 375px) {
    width: 163.5px;
    height: 146px;
  }
}

.category-sale-bg-img {
  height: auto;
  object-fit: cover;

  @media (min-width: 992px) {
    width: 289px;
    height: 352px;
  }

  @media (min-width: 1200px) {
    width: 349px;
    height: 412px;
  }

  @media (min-width: 1400px) {
    width: 411px;
    height: 474px;
  }
}

.category-img {
  width: 100%;
  height: auto;
  max-width: 196px;
  max-height: 196px;
  object-fit: cover;

  @media (max-width: 500px) {
    width: 163.5px;
    height: 146px;
  }
  @media (max-width: 414px) {
    width: 164.5px;
    height: 164.5px;
  }
  @media (max-width: 375px) {
    width: 164px;
    height: 146px;
  }
}
</style>
