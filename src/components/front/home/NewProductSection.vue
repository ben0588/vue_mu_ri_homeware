<template>
  <div class="mt-80">
    <h3 class="home-title">最新商品</h3>
    <div class="container">
      <div class="row" v-for="(product, index) in productsRatings" :key="product.id">
        <div class="col-md-12" v-if="index === 0">
          <div class="row gx-32">
            <div class="col-md-7">
              <img :src="product.imageUrl" alt="" class="new-products-img" />
            </div>
            <div class="col-md-5">
              <div class="p-2">
                <p class="m-0">{{ product.title }}</p>
                <RatingStar
                  :averageRating="product.averageRating"
                  :totalRatings="product.totalRatings"
                />
                <p>{{ product.center }}</p>
                <div>
                  <span
                    v-for="(fullStar, fullStarIndex) in product.starSymbols.fullStars"
                    :key="fullStarIndex"
                    class="me-2"
                  >
                    <!-- 顯示整星數量 -->
                    <font-awesome-icon
                      :icon="['fas', 'star']"
                      v-if="fullStar"
                      class="star-icon text-primary"
                    />
                  </span>
                  <!-- 判斷是否顯示半星 -->
                  <span class="me-2" v-if="product.starSymbols.halfStar">
                    <font-awesome-icon
                      :icon="['fas', 'star-half-stroke']"
                      class="star-icon text-primary"
                    />
                  </span>

                  <span class="me-2" v-if="product.starSymbols.emptyStars">
                    <!-- 判斷是否要顯示空星 -->
                    <font-awesome-icon :icon="['far', 'star']" class="star-icon text-primary" />
                  </span>
                  <span class="">({{ product.totalRatings }})</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fs-3 fw-500">$ {{ product.price }}</span>
                  <span class="me-2"
                    ><font-awesome-icon :icon="['far', 'heart']" class="text-danger heart-icon"
                  /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';

import { calculateProductsRatings } from '@/composables/ratingUtils';

import RatingStar from '@/components/common/RatingStar.vue';

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

// 計算屬性：為產品列表中的每個產品計算星星符號
const productsRatings = computed(() => calculateProductsRatings(productsList.value));
</script>
<style lang="scss">
.new-products-img {
  object-fit: cover;
  width: 100%;
  height: auto;
  max-width: 746px;
  max-height: 380px;

  /* @media (max-width: 375px) {
    max-width: 300px;
    max-height: 199px;
  } */
}
</style>
