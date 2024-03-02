<template>
  <div class="container py-32" v-if="!loadingStore.isLoading">
    <div v-if="productsRatings">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link
              to="/products"
              @click="
                () => {
                  handleChangeCategory('全部商品');
                }
              "
              >全部商品</router-link
            >
          </li>
          <li class="breadcrumb-item">
            <router-link
              to="/products"
              @click="
                () => {
                  handleChangeCategory(productsRatings.category);
                }
              "
              >{{ productsRatings.category }}</router-link
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ productsRatings.title }} | {{ route.params.id }}
          </li>
        </ol>
      </nav>

      <!-- 產品區塊 -->
      <div class="row">
        <!-- 左側 -->
        <div class="col-lg-6">
          <div class="row flex-row flex-sm-column-reverse flex-lg-row">
            <!-- 小樣式 -->
            <div class="col-xl-3 py-2 ps-sm-2 px-lg-0 py-lg-0 ps-xl-4 ps-xxl-0">
              <Swiper
                :onSwiper="setThumbsSwiper"
                :slidesPerView="5"
                :spaceBetween="11.7"
                :freeMode="true"
                :watchSlidesProgress="true"
                class="thumbs-swiper-container ms-sm-1 ms-lg-0"
              >
                <SwiperSlide
                  v-for="(item, index) in productsRatings.imagesUrl"
                  :key="index"
                  class="thumbs-swiper my-sm-2 my-xl-0 mb-xl-2 ms-xl-2 ms-xxl-4"
                >
                  <img
                    :src="item"
                    :alt="productsRatings.title"
                    class="thumbs-swiper-img d-block object-fit-cover"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <!-- 主樣式 -->
            <div class="col-md-12 col-lg-12 col-xl-9 px-lg-1">
              <Swiper
                :slidesPerView="1"
                :slidesPerGroup="1"
                :autoplay="{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }"
                :grabCursor="true"
                :pagination="{ clickable: true }"
                class="mid-swiper-container"
                :thumbs="{ swiper: thumbsSwiper }"
                :style="{
                  '--swiper-navigation-color': '#111c30',
                  '--swiper-navigation-size': '40px',
                  '--swiper-pagination-color': '#111c30',
                  '--swiper-pagination-bullet-size': '15px',
                }"
                @swiper="onSwiper"
              >
                <SwiperSlide v-for="item in productsRatings.imagesUrl" :key="item">
                  <VueMagnifier
                    :src="item"
                    class="swiper-img"
                    :mgWidth="200"
                    :mgHeight="200"
                    :mgShape="'square'"
                    :zoomFactor="1"
                  />
                  <!-- <img :src="item" :alt="productsRatings.title" class="swiper-img" /> -->
                </SwiperSlide>
                <div ref="prevRef" class="swiper-button-prev"></div>
                <div ref="nextRef" class="swiper-button-next"></div>
              </Swiper>
            </div>
          </div>
        </div>

        <!-- 右側 -->
        <div class="col-lg-6">
          <div class="p-3">
            <div>
              <h2
                class="d-flex justify-content-between align-items-center text-dark fw-bolder fs-4"
              >
                {{ productsRatings.title }}

                <span class="cursor-pointer me-2" @click.prevent="addWishList(productsRatings)"
                  ><font-awesome-icon
                    :icon="[isWishListed(productsRatings) ? 'fas' : 'far', 'heart']"
                    class="text-danger fs-3"
                    :title="isWishListed(productsRatings) ? '移除願望清單' : '加入願望清單中'"
                /></span>
              </h2>
              <div class="text-muted fs-5 mt-2">{{ productsRatings.content }}</div>
            </div>
            <div>
              {{ productsRatings.description }}
            </div>
            <div>
              <RatingStar
                :averageRating="productsRatings.averageRating || 0"
                :totalRatings="productsRatings.totalRatings || 0"
                :classSize="'fs-6'"
                :color="'text-warning'"
              />
              <span class="fw-500"> ({{ productsRatings.totalRatings }}) </span>
            </div>

            <div v-if="productsRatings.isOnSale" class="d-flex align-items-center mt-4">
              <span class="fs-3 fw-700 text-danger"
                >{{ usePriceToTw(productsRatings.price) }}
              </span>
              <span class="text-danger border border-danger mt-1 ms-2 px-2"
                >-{{
                  useComputedDiscount(productsRatings.origin_price, productsRatings.price)
                }}</span
              >
            </div>
            <div v-else>
              <div class="fs-4 fw-bolder text-dark mt-4">
                NT{{ usePriceToTw(productsRatings.price) }}
              </div>
            </div>

            <div class="d-flex flex-column border-start border-5 border-primary mb-4 mt-5 ps-2">
              <span class="text-ellipsis">首次，使用 LinePay 首次滿千免運，贈送點數!</span>
              <span class="text-ellipsis">全店，滿額免運：全店滿$999元免運 (海外地區不適用)</span>
              <span class="text-ellipsis">全店，滿額贈：消費滿$2000元贈 TEXT 品牌提袋 x1</span>
            </div>
            <div class="mt-3">
              <div class="row">
                <div class="col-6 col-xl-5">
                  <div class="input-group">
                    <button
                      type="button"
                      class="btn btn-dark border-1 py-2"
                      @click="handleChangQuantity('reduce')"
                    >
                      <font-awesome-icon :icon="['fas', 'minus']" />
                    </button>
                    <input
                      type="number"
                      class="form-control text-center border-dark border-1 py-2 ps-3 ps-xl-3"
                      readOnly
                      v-model.number="quantity"
                    />
                    <button
                      type="button"
                      class="btn btn-dark border-1 py-2"
                      @click="handleChangQuantity('add')"
                    >
                      <font-awesome-icon :icon="['fas', 'plus']" />
                    </button>
                  </div>
                </div>
                <div class="col-6 col-xl-7">
                  <button type="button" class="btn btn-primary text-white w-100 py-2">
                    加入購物車
                  </button>
                </div>
              </div>
            </div>

            <!-- 產品規格 -->
            <div class="mt-3">
              <CollapseComponent :index="0" :list="{ title: '產品規格' }">
                <div class="table-responsive">
                  <table class="details-table table align-middle mb-0">
                    <thead>
                      <tr>
                        <th>名稱</th>
                        <th>內容</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>產品編碼</td>
                        <td>{{ productsRatings.id }}</td>
                      </tr>
                      <tr>
                        <td>顏色</td>
                        <td>
                          <span
                            v-for="(color, colorIndex) in productsRatings.colors"
                            :key="colorIndex"
                            class=""
                            >{{ color.title
                            }}<span v-if="colorIndex < productsRatings.colors.length - 1"
                              >、</span
                            ></span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>尺寸[長x寬x高](cm)</td>
                        <td>
                          {{ productsRatings.dimensions.length }} x
                          {{ productsRatings.dimensions.width }} x
                          {{ productsRatings.dimensions.height }} 公分
                        </td>
                      </tr>
                      <tr>
                        <td>材質</td>
                        <td>{{ productsRatings.material }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CollapseComponent>
            </div>
          </div>
        </div>
      </div>

      <!-- 產品說明區塊(下方) -->
      <div class="row border-top border-2">
        <div class="col-lg-6">左側</div>
        <div class="col-lg-6">
          <div class="p-3">
            右側
            <ul class="list-unstyled">
              <li v-for="(item, index) in testList" :key="item.id">
                <CollapseComponent :list="item" :index="index + 1" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <VueLoading :active="loadingStore.isLoading" :can-cancel="false" :color="'#0089A7'"></VueLoading>
</template>
<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import VueLoading from 'vue-loading-overlay';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import VueMagnifier from '@websitebeaver/vue-magnifier';

import { useAlert } from '@/composables/useAlert';
import { calculateProductsRatings } from '@/composables/ratingUtils';
import useLoadingStore from '@/stores/loadingStores';
import useCategoryStore from '@/stores/categoryStores';
import useWishStore from '@/stores/wishStores';
import usePriceToTw from '@/composables/usePriceToTw';
import RatingStar from '@/components/common/RatingStar.vue';
import CollapseComponent from '@/components/common/CollapseComponent.vue';
import useComputedDiscount from '@/composables/useComputedDiscount';

const route = useRoute();

const { showAlert } = useAlert();
const categoryStore = useCategoryStore();
const loadingStore = useLoadingStore();
const wishStore = useWishStore();
const { addWishList, isWishListed } = wishStore;

const products = ref([]);
const quantity = ref(1);

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const testList = [
  {
    id: 1,
    title: '其他注意項目',
    center: [
      '在結帳頁面輸入您的優惠卷代碼。',
      '點擊應用或確認以套用優惠。',
      '確認訂單金額已更新，並繼續完成結帳流程。',
      '請注意優惠卷可能有特定使用條件，請仔細閱讀相關資訊。',
    ],
  },
];

const thumbsSwiper = ref(null); // 存放 swiper 實體

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

let swiperInstance = null;
const prevRef = ref(null);
const nextRef = ref(null);

// 雙向綁定控制器
const onSwiper = (swiper) => {
  swiperInstance = swiper;
  swiperInstance.params.navigation.prevEl = prevRef.value;
  swiperInstance.params.navigation.nextEl = nextRef.value;
  swiperInstance.navigation.init();
  swiperInstance.navigation.update();
};

onMounted(() => {
  if (swiperInstance) {
    swiperInstance.navigation.init();
    swiperInstance.navigation.update();
  }
});

const fetchProduct = async () => {
  try {
    loadingStore.toggleLoading(); // 全頁加載
    const api = `${baseApiUrl}/v2/api/${apiPath}/product/${route.params.id}`;
    const response = await axios.get(api);
    products.value.push(response.data.product); // 為了計算星星數先用陣列儲存
  } catch (error) {
    showAlert({
      title: `${error}`,
      text: '取得商品資料失敗，請聯繫網站提供者',
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
  } finally {
    loadingStore.toggleLoading();
  }
};

// 取得星星資訊
const productsRatings = computed(() => calculateProductsRatings(products.value)[0]); // 把陣列內物件取出

const handleChangeCategory = (target) => {
  categoryStore.categoryTarget = target;
};

const handleChangQuantity = (type) => {
  if (type === 'add') {
    quantity.value += 1;
  } else if (type === 'reduce') {
    if (quantity.value === 1) {
      quantity.value = 1;
    } else {
      quantity.value -= 1;
    }
  }
};

watch(
  () => productsRatings,
  () => {
    console.log(productsRatings);
  },
);

onMounted(() => {
  fetchProduct();
});
</script>
<style lang="scss">
.details-table td,
.details-table th {
  min-width: 190px;
}

.thumbs-swiper-container {
  .swiper-wrapper {
    display: flex;
    flex-direction: row;

    @media (min-width: 1200px) {
      flex-direction: column;
    }
  }
}

.thumbs-swiper {
  @media (min-width: 576px) {
    width: 75px !important;
  }
  @media (min-width: 768px) {
    width: 85px !important;
  }
  @media (min-width: 1200px) {
    width: 80px !important;
  }
  @media (min-width: 1400px) {
    width: 100px !important;
  }
}

// 小圖
.thumbs-swiper-container .thumbs-swiper-img {
  cursor: pointer;
  width: 100%;
  @media (min-width: 375px) {
    height: 50px;
  }
  @media (min-width: 576px) {
    height: 71px;
  }
  @media (min-width: 768px) {
    height: 85px;
  }
  @media (min-width: 992px) {
    height: 81px;
  }
  @media (min-width: 1200px) {
    height: 68.4px;
  }
  @media (min-width: 1400px) {
    height: 82px;
  }
}

/* .mid-swiper-container .swiper-img {
  display: block;
  object-fit: cover;
  width: 100% !important;
  height: auto;
  @media (min-width: 375px) {
    height: 400px;
  }
  @media (min-width: 576px) {
    height: 516px;
  }
  @media (min-width: 768px) {
    height: 500px;
  }
  @media (min-width: 992px) {
    height: 476px;
  }
  @media (min-width: 1200px) {
    height: 393px;
  }
  @media (min-width: 1400px) {
    height: 460px;
  }
} */

.mid-swiper-container .swiper-img {
  display: block;
  object-fit: cover !important;
  width: 100% !important;
  height: auto;
  @media (min-width: 375px) {
    height: 400px !important;
  }
  @media (min-width: 576px) {
    height: 516px !important;
  }
  @media (min-width: 768px) {
    height: 500px !important;
  }
  @media (min-width: 992px) {
    height: 476px !important;
  }
  @media (min-width: 1200px) {
    height: 393px !important;
  }
  @media (min-width: 1400px) {
    height: 460px !important;
  }
}

.thumbs-swiper-container .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.75;
  border: 2px solid rgba(185, 185, 185, 0.726);
  box-shadow: 0 0 5px rgba(185, 185, 185, 0.74);
}

.thumbs-swiper-container .swiper-slide-thumb-active {
  opacity: 1;
  border: 2px solid #111c30a6;
  box-shadow: 0 0 5px #111c30b7;
}
</style>
