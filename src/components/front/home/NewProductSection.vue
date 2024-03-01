<!-- eslint-disable max-len -->
<template>
  <div class="mt-64 py-80" :style="{ backgroundColor: '#FBF9F9' }">
    <h3 class="home-title">最新商品</h3>
    <div class="container mt-64 px-2 w-100">
      <div
        class="row px-3 px-sm-0 w-100 mx-auto"
        v-for="(product, index) in productsRatings"
        :key="product.id"
      >
        <div class="col-md-12 px-1 px-sm-3" v-if="index === 0">
          <div class="row border border-2 border-primary">
            <div class="col-md-7 px-0">
              <router-link :to="`/products/${product.id}`">
                <img
                  :src="product.imageUrl"
                  :alt="product.title"
                  class="new-products-mid-img border-md-end"
                />
              </router-link>
            </div>
            <div class="col-md-5 px-0">
              <div
                class="d-flex justify-content-center flex-column h-100 px-3 px-lg-64 py-4 py-lg-32"
              >
                <router-link :to="`/products/${product.id}`" class="text-dark">
                  <p class="fs-4 fw-700 m-0 mb-12">{{ product.title }}</p>
                  <div class="mb-32">
                    <RatingStar
                      :averageRating="product.averageRating"
                      :totalRatings="product.totalRatings"
                      :classSize="'fs-4'"
                    />
                    <span class="fw-500"> ({{ product.totalRatings }}) </span>
                  </div>
                  <p class="truncate-2-lines" :style="{ maxWidth: `100%` }">{{ product.center }}</p>
                  <div class="d-flex justify-content-between align-items-center w-100">
                    <span class="fs-2 fw-700">{{ usePriceToTw(product.price) }}</span>
                    <span class="me-2"
                      ><font-awesome-icon :icon="['far', 'heart']" class="text-danger fs-2"
                    /></span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container px-2">
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-between align-items-center overflow-x-nowrap-lg mt-32"
      >
        <div
          class="col col-1-2 col-2-2 px-3 px-sm-3"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <HomeCard :product="product" :img-class="'new-products-img'" :card-bg-color="'#FBF9F9'" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';

import { calculateProductsRatings } from '@/composables/ratingUtils';

import RatingStar from '@/components/common/RatingStar.vue';
import HomeCard from '@/components/common/HomeCard.vue';
import usePriceToTw from '@/composables/usePriceToTw';

const productsList = ref([
  {
    id: 1,
    title: '現代風格沙發',
    imageUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708679014046.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XlqfX%2F%2BjX9xYtzJvgMJ8PuE7tdtEI58flPXHjRzavWdgxlX%2BLHYq63EtDDm3nesWceIIncVPBYNV8FJIEMzSvxfC%2BTxr6SDF3yaF0AKuhAwfmnQ1DkWD%2FjeL0epwCoxEojVsrAGzTYCLBRZ6x%2BrDvyI5Sahva95etaFQTL97jkDrho8MeShhsOvFgJAScfa9Rh4c8950Pxh5WoNX6iRwb8UPLezv6%2BEd4sRo6iG0MaKCvFk8cLDHRKK9Lz2btwuMHqO%2FWZFUzihWP0oKBmBpfJZwpAzc8aTSArKoueFSPrDYhHcRHTfr7uDNnXhgFyWOSJ95axUNrCFv7bM5mU4Ltw%3D%3D',
    center:
      '簡約優雅的外觀與精心設計的細節，完美融合了歐洲和美洲的風格元素。舒適的坐感和精湛的製作工藝讓您在沙發上度過每個愜意時光。其獨特的設計使之成為客廳或休息室的焦點，同時提供實用的功能和儲物空間，滿足您生活的各種需求。',
    price: 1500,
    ratings: {
      star_1: {
        count: 0,
        reviews: [
          {
            user: '評論名稱',
            comment: '產品描述',
            reviewId: '頻論會員id',
          },
        ],
      },
      star_2: {
        count: 0,
      },
      star_3: {
        count: 0,
      },
      star_4: {
        count: 1,
      },
      star_5: {
        count: 9,
        reviews: [
          {
            user: 'Alex',
            comment: '商品品質再棒了!很喜歡',
            reviewId: 'r1',
          },
          {
            user: 'Ben',
            comment: '躺起來非常舒服~~',
            reviewId: 'r2',
          },
        ],
      },
    },
  },
  {
    id: 2,
    title: '日式風格沙發',
    imageUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708652847541.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ChMOTHaL%2FA152bI9qksA6T4FkYUBSwVARE9SbXxk7ARhBb5buqmzLIUbNhIAEt6r58FAw8c8NzY7wjga%2BBiQc29hNwRmajTxqXIJJM5pnL7BQTmknbLeBFEPYu%2B7FR6ZbV1%2B6BjGnfrc%2B77M2dho9cFLIDWUCSoGtJqiyskjbJxOpiOZ4ROt3VHsdpq1BTKfS5nsSYtimq60kpKjMH1wcKHqg87l9rfO0ZFmBpfGEbYa2lv036VKaZv%2BcunOQd0woWt%2BiO3feLWmi8wWrFUcyVU4Wp%2B2jKM08IfV4GtyxiRyh2b3dtBlndOCB3zakd49NzgyECsUXqD%2F3DQeIvJDWA%3D%3D',
    price: 1500,
    ratings: {
      star_1: {
        count: 0,
        reviews: [
          {
            user: '評論名稱',
            comment: '產品描述',
            reviewId: '頻論會員id',
          },
        ],
      },
      star_2: {
        count: 0,
      },
      star_3: {
        count: 0,
      },
      star_4: {
        count: 0,
      },
      star_5: {
        count: 10,
        reviews: [
          {
            user: 'Alex',
            comment: '商品品質再棒了!很喜歡',
            reviewId: 'r1',
          },
          {
            user: 'Ben',
            comment: '躺起來非常舒服~~',
            reviewId: 'r2',
          },
        ],
      },
    },
  },
  {
    id: 3,
    title: '日式風格餐桌椅',
    imageUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708652857313.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FpLTxegHcYpKOSkQnzT4c0RfabTlQVE2I2q2zIXne41aCP4vK4vW2LPRIWdMdWf%2BsaFUQrFRW%2FW9T9J8qh6HfeWTikR0OAQbN%2FgHO3EXM%2BsWDq58DI9suK8z84RMcArKGcKvFeK1zJtjXkvW8rjVwj4qgFsNaDa0HIE0BELxf92ydW783WgroWnHcUQogeRsmbxYeOHSm58hU7Isi2Q56Mk%2Fh2b0DA32noH2DKD8l2ejuErQJ9yX1oNfltzUu2rMRFtOH2nxUZVNLkqzpauO%2Be%2BA15rBO1afvvIgPly4EA92ci2guC7hs6v%2FMvx2U7TlC4rAh7yOvqQslcxHBIygmA%3D%3D',
    price: 1500,
    ratings: {
      star_1: {
        count: 0,
        reviews: [
          {
            user: '評論名稱',
            comment: '產品描述',
            reviewId: '頻論會員id',
          },
        ],
      },
      star_2: {
        count: 0,
      },
      star_3: {
        count: 0,
      },
      star_4: {
        count: 1,
      },
      star_5: {
        count: 9,
        reviews: [
          {
            user: 'Alex',
            comment: '商品品質再棒了!很喜歡',
            reviewId: 'r1',
          },
          {
            user: 'Ben',
            comment: '躺起來非常舒服~~',
            reviewId: 'r2',
          },
        ],
      },
    },
  },
  {
    id: 4,
    title: '裸色造型皮革沙發',
    imageUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708652866856.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iaKozY%2F3ykq6GAZPersY0nq1AyCn560Pt8x8kwh7DpAgUyCZTavaCM98r2EsvSql063I9Lh7KMJ49LEUJygKf%2BCdRviNfrXGNdSPu1e6DO714rZCXVGlBPL4Ko1%2FkF0%2B%2BsCYP8rh%2FDN04RTkMEka6z31WNMT0i64WF88YvUqivtZKcfOcZaSWEQxNwcJsucUBzCFGFMMUfkJ4uiQ1%2BjHxgagGXNeF%2FzsF%2BGSiGv2w9ZM1MrS8HL0r5afs3IhoguKxND04YlSxfsjJg6t4OBtIrwYvWynZ5FS9Y2sMwpmvmGX19yBpIdD1riDI8TxWfZsk4WehKrTDgImXxSR%2FOd7hw%3D%3D',
    price: 1500,
    ratings: {
      star_1: {
        count: 0,
        reviews: [
          {
            user: '評論名稱',
            comment: '產品描述',
            reviewId: '頻論會員id',
          },
        ],
      },
      star_2: {
        count: 0,
      },
      star_3: {
        count: 1,
      },
      star_4: {
        count: 9,
      },
      star_5: {
        count: 0,
        reviews: [
          {
            user: 'Alex',
            comment: '商品品質再棒了!很喜歡',
            reviewId: 'r1',
          },
          {
            user: 'Ben',
            comment: '躺起來非常舒服~~',
            reviewId: 'r2',
          },
        ],
      },
    },
  },
  {
    id: 5,
    title: '現代風格沙發',
    imageUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708652874724.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Vq9S%2F9ByJxqYi66KjEYlXQhvs%2B3IFS5xXSosqYMzK3aVegz2d%2B3kgypb026MA21dih7HSbwpvjx70wWJRz8jX4tqIKmew2pfNZ5KWad%2F5z9yhEwunrCFucx889a3F7ifONaMZU4JxRVxqueZUl5GL1Sv8GWkSICc%2F2k%2F%2BJhltoudj5%2FpslTg1C9xMpgCTqrE3jrh8fD3T78y5rM8DHLt9HLB0i%2Fd9tgP6CXChfcdlPZe1UBYnZqg7sGRI2TPkWNmsm1tbiceBlW7i%2FgAINRPgKSFlhlE2FIOGClJ7L8ZPS9etZ%2FrM7MJs%2BJ97R5qLPb4V6o9tNYZAgGtFpxFP1f4BQ%3D%3D',
    price: 1500,
    ratings: {
      star_1: {
        count: 0,
        reviews: [
          {
            user: '評論名稱',
            comment: '產品描述',
            reviewId: '頻論會員id',
          },
        ],
      },
      star_2: {
        count: 0,
      },
      star_3: {
        count: 1,
      },
      star_4: {
        count: 99,
      },
      star_5: {
        count: 0,
        reviews: [
          {
            user: 'Alex',
            comment: '商品品質再棒了!很喜歡',
            reviewId: 'r1',
          },
          {
            user: 'Ben',
            comment: '躺起來非常舒服~~',
            reviewId: 'r2',
          },
        ],
      },
    },
  },
]);

// 計算屬性：為產品列表中的每個產品計算星星符號 (只顯示五筆)
const productsRatings = computed(() => calculateProductsRatings(productsList.value).slice(0, 5));

// 只顯示後四筆
const filteredProducts = computed(() => calculateProductsRatings(productsList.value).slice(1));
</script>
<style lang="scss">
.new-products-mid-img {
  display: block;
  object-fit: cover;
  max-width: 746px;
  max-height: 380px;
  width: 100%;
  height: auto;

  /* @media (max-width: 375px) {
    max-width: 300px;
    max-height: 199px;
  } */
}

.new-products-img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: auto;
  max-width: 306px;
  max-height: 210px;
}
</style>
