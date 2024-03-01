<!-- eslint-disable max-len -->
<template>
  <section class="mt-80 py-80" :style="{ backgroundColor: '#FBF9F9' }">
    <h3 class="home-title">推薦商品</h3>

    <div class="container mt-64 p-0">
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-start align-items-stretch overflow-x-nowrap-lg m-0"
      >
        <div
          class="col col-1-2 col-2-2 col-4-3 px-3"
          v-for="(product, index) in productsRatings"
          :key="index"
          :class="{ 'ps-2': index === 0, 'pe-2': index === 4 }"
        >
          <HomeCard
            :product="product"
            :card-class="'recommend-card'"
            :img-class="'recommend-card-img'"
            :card-bg-color="'#FBF9F9'"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from 'vue';

import { calculateProductsRatings } from '@/composables/ratingUtils';
import HomeCard from '@/components/common/HomeCard.vue';

const productsList = ref([
  {
    id: 1,
    title: '現代風格沙發',
    imageUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708652836387.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Mah2ZbU70dLCRd3ZhbztKqAxew%2Fv5fQd9YgHMwM%2FlCv64hqRLe5vi9IlyJdRJa3pLzAvzvIkY8ILLP91ELAOY5C3sLvd4SGvmz9l2%2BECH2%2FW9pZAcYhTmlKlMdSN3a5yF%2FVgXgCcnJ0z1yahogghFjf9hZgAutaq2wzJN36DMv4IXhkucRVL%2BuxSE7f5adrkKaikNA6cvaESBT0bLeGgKgKbOHLAPbTInWOL3IPIoRRyc2uJfKaib6aBS320wUucGBlgMqllQK96NuhxraeP%2F17PJfVtbY6uYBrgdDLJaEBG%2Fu3TRzZxAazn8Hc6d9rQxx%2BdL36VCgaduG9YwzRxyg%3D%3D',
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
.recommend-card {
  @media (max-width: 375px) {
    /* padding-right: 50px; */
  }
}
.recommend-card-img {
  width: 100%;
  height: auto;
  max-width: 233.6px;
  min-height: 210px;
  object-fit: cover;

  @media (max-width: 375px) {
    max-width: 300px !important;
    max-height: 210px;
  }
}
</style>
