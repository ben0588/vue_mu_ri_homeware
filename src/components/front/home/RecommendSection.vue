<!-- eslint-disable max-len -->
<template>
  <section class="mt-80 py-80" :style="{ backgroundColor: '#FBF9F9' }">
    <h3 class="home-title">推薦商品</h3>

    <div class="container mt-64 p-0">
      <div
        class="overflow-x-nowrap-375 flex-nowrap overflow-auto row row-cols-1 row-cols-sm-3 row-cols-lg-5 justify-content-start align-items-stretch m-0"
      >
        <div
          class="col col-1-2 px-3"
          v-for="(product, index) in productsRatings"
          :key="index"
          :class="{ 'ps-2': index === 0, 'pe-2': index === 4 }"
        >
          <!--  :class="{ 'ps-2': index === 0 }" -->
          <router-link :to="`products/${product.id}`" class="hover-img-opacity">
            <div class="card recommend-card h-100 border-0" :style="{ backgroundColor: '#FBF9F9' }">
              <img :src="product.imageUrl" class="card-img-top recommend-card-img" alt="..." />
              <div class="card-body pt-3 px-0">
                <h5 class="card-title fs-4 text-start">{{ product.title }}</h5>
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
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from 'vue';

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

// const ratingCalculation = (ratings) => {
//     const { star_1, star_2, star_3, star_4, star_5 } = ratings;

// }

// 計算總星數與平均星數
function calculateAverageRating(ratings) {
  let totalStars = 0;
  let totalRatings = 0;

  // 遍歷每個星級評分
  for (let star = 1; star <= 5; star += 1) {
    // 獲取該星級的計數
    const { count } = ratings[`star_${star}`];
    // 計算該星級的總星數
    totalStars += star * count;
    // 計算總評分數
    totalRatings += count;
  }

  // 計算平均分數，如果沒有評分則返回0
  const averageRating = totalRatings > 0 ? (totalStars / totalRatings).toFixed(1) : 0;

  return {
    averageRating,
    totalRatings,
  };
}

// 為每個產品生成星星符號的函數
const getStarSymbols = (averageRating) => {
  const fullStars = Math.floor(averageRating); // 滿星
  const halfStar = averageRating % 1 >= 0.5; // 半星
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // 空星

  return {
    fullStars,
    halfStar,
    emptyStars,
  };
};

// 計算屬性：為產品列表中的每個產品計算星星符號
const productsRatings = computed(
  () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    productsList.value.map((product) => {
      const { averageRating, totalRatings } = calculateAverageRating(product.ratings);
      const starSymbols = getStarSymbols(averageRating);
      return {
        ...product,
        averageRating,
        totalRatings,
        starSymbols,
      };
    }),
  //
);

const test = () => {};
</script>
<style lang="scss">
/* .recommend-container {
  @media (max-width: 375px) {
    overflow-x: auto;
    flex-wrap: nowrap !important;
  }
} */

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

.star-icon {
  font-size: 19px !important;
}

.heart-icon {
  font-size: 24px !important;
}
</style>
