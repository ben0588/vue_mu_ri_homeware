<!-- eslint-disable max-len -->
<template>
  <div>
    <div class="py-32" v-if="!loadingStore.isLoading">
      <div class="container">
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
                {{ productsRatings.title }}
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
                    :pagination="{ clickable: true, el: '.details-swiper-pagination' }"
                    class="mid-swiper-container position-relative"
                    :thumbs="{ swiper: thumbsSwiper }"
                    :style="{
                      '--details-swiper-pagination-color': '#000',
                      '--details-swiper-pagination-bullet-size': '15px',
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
                        @click="() => zoomInImage(item, productsRatings.title)"
                      />
                    </SwiperSlide>
                    <span class="details-magnifying-glass-icon"
                      ><font-awesome-icon :icon="['fas', 'magnifying-glass']" class="fs-5"
                    /></span>
                    <div ref="prevRef" class="details-swiper-button details-swiper-button-prev">
                      <font-awesome-icon :icon="['fas', 'chevron-left']" />
                    </div>
                    <div ref="nextRef" class="details-swiper-button details-swiper-button-next">
                      <font-awesome-icon :icon="['fas', 'chevron-right']" />
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>

            <!-- 右側 -->
            <div class="col-lg-6">
              <div class="px-3 pb-3">
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
                  <div>
                    {{ productsRatings.description }}
                  </div>
                  <div class="text-muted fs-6 mt-4 pb-3">{{ productsRatings.content }}</div>
                </div>
                <div>
                  <RatingStar
                    :averageRating="productsRatings.averageRating || 0"
                    :totalRatings="productsRatings.totalRatings || 0"
                    :classSize="'fs-6'"
                    :color="'text-primary'"
                  />
                  <span class="fw-500"> ({{ productsRatings.totalRatings }}) </span>
                </div>

                <div v-if="productsRatings.isOnSale" class="d-flex align-items-center mt-3">
                  <span class="fs-3 fw-700 text-danger"
                    >{{ usePriceToTw(productsRatings.price) }}
                  </span>
                  <span class="text-danger border border-danger mt-1 ms-2 px-2"
                    >-{{
                      useComputedDiscount(productsRatings.origin_price, productsRatings.price)
                    }}</span
                  >
                </div>
                <div v-else class="mt-3">
                  <div class="fs-4 fw-bolder text-dark">
                    NT{{ usePriceToTw(productsRatings.origin_price) }}
                  </div>
                </div>

                <div class="d-flex flex-column border-start border-5 border-primary mb-4 mt-5 ps-2">
                  <span class="text-ellipsis">首次，使用 LinePay 首次滿千免運，贈送點數!</span>
                  <span class="text-ellipsis"
                    >全店，滿額免運：全店滿$999元免運 (海外地區不適用)</span
                  >
                  <span class="text-ellipsis">全店，滿額贈：消費滿$2000元贈 TEXT 品牌提袋 x1</span>
                </div>

                <div class="mt-3">
                  <div class="row">
                    <div class="col-6 col-xl-5">
                      <QuantityButtonGroupVue
                        :productId="productsRatings.id"
                        @fetch-quantity="handleChangQty"
                      />
                    </div>
                    <div class="col-6 col-xl-7">
                      <button
                        type="button"
                        class="btn btn-primary text-white w-100 py-2"
                        title="加入購物車"
                        @click="addCart({ id: productsRatings.id, quantity })"
                        :disabled="cartStore.addTargetId === productsRatings.id"
                        :class="{
                          'cursor-not-allowed': cartStore.addTargetId === productsRatings.id,
                        }"
                      >
                        <span v-if="cartStore.addTargetId === productsRatings.id">
                          <span class="spinner-border spinner-border-sm" role="status">
                            <span class="visually-hidden">新增購物車中</span>
                          </span>
                          新增購物車中</span
                        >
                        <span v-else> 加入購物車 </span>
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
                              >
                                {{ color.title }}
                                <span
                                  v-if="
                                    colorIndex < productsRatings.colors.length - 1 &&
                                    color.title !== ''
                                  "
                                  >、</span
                                >
                              </span>
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
          <div class="row border-top border-2 py-3">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
              <h3 class="text-center my-4">產品描述</h3>
              <div
                v-for="(item, index) in productsRatings.imagesUrlDescriptions"
                :key="index"
                class="mb-5"
              >
                <img
                  v-if="index <= 2"
                  :src="productsRatings.imagesUrl[index]"
                  :alt="item"
                  class="product-description-img"
                  @click="zoomInImage(productsRatings.imagesUrl[index], item)"
                />
                <p class="mt-3" v-if="index <= 2">{{ item }}</p>
              </div>
            </div>
            <div class="col-lg-3"></div>
          </div>
        </div>
      </div>
      <div class="mt-3"></div>
      <h3 class="text-center mb-4">推薦商品</h3>
      <div class="mt-3" :style="{ backgroundColor: '#FBF9F9' }" v-if="originProductsRatings">
        <div class="py-5">
          <div class="container p-0">
            <div
              class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-start align-items-stretch overflow-x-nowrap-lg m-0"
            >
              <div
                class="col col-1-2 col-2-2 col-4-3 px-3"
                v-for="(product, index) in originProductsRatings"
                :key="index"
              >
                <ProductDescriptionCard
                  :product="product"
                  :img-class="'product-description-card-img'"
                  :card-bg-color="'#FBF9F9'"
                  :star-color="'text-primary'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <VueLoading :active="loadingStore.isLoading" :can-cancel="false" :color="'#0089A7'"></VueLoading>
  <ImageModal ref="imageModal"></ImageModal>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
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
import useComputedDiscount from '@/composables/useComputedDiscount';
import useSearchStore from '@/stores/searchStores';
import RatingStar from '@/components/common/RatingStar.vue';
import CollapseComponent from '@/components/common/CollapseComponent.vue';
import ImageModal from '@/components/front/products/ImageModal.vue';
import ProductDescriptionCard from '@/components/front/products/ProductDescriptionCard.vue';
import useCartStore from '@/stores/cartStores';
import QuantityButtonGroupVue from '@/components/common/QuantityButtonGroup.vue';

const imageModal = ref(null);
const route = useRoute();

const { showAlert } = useAlert();
const categoryStore = useCategoryStore();
const loadingStore = useLoadingStore();
const wishStore = useWishStore();
const { addWishList, isWishListed } = wishStore;
const searchStore = useSearchStore();
const cartStore = useCartStore();
const { addCart } = cartStore;

const products = ref([]);
const productCategory = ref('');
const quantity = ref(1);

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

// 取得對應類型的產品，只取五個
function recommendList() {
  return searchStore.originProducts
    .filter((item) => item.category === productCategory.value)
    .slice(0, 5);
}
const originProductsRatings = computed(() => calculateProductsRatings(recommendList()));

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
    productCategory.value = response.data.product.category;
    products.value.push(response.data.product); // 為了計算星星數先用陣列儲存
  } catch (error) {
    showAlert({
      title: '失敗',
      text: `${error.response.data.message}`,
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

// 放大圖片
const zoomInImage = (imgUrl, imgAlt) => {
  imageModal.value.openModal(imgUrl, imgAlt);
};

// 從子元件取出 qty 數量
const handleChangQty = ({ qty }) => {
  quantity.value = qty;
};

onMounted(() => {
  fetchProduct();
});
</script>
<style lang="scss">
.details-table td,
.details-table th {
  min-width: 190px;
}

// 商品圖片輪播
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
  @media (min-width: 414px) {
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

// 大圖
.mid-swiper-container .swiper-img {
  display: block;
  object-fit: cover !important;
  width: 100% !important;
  height: auto;
  @media (min-width: 414px) {
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

// 圖片描述微調
.product-description-img {
  display: block;
  width: 100%;
  height: 75%;
  object-fit: cover;
  cursor: pointer;
}

.product-description-card-img {
  width: 100%;
  height: 200px;
  max-width: 233.6px;
  object-fit: cover;

  @media (max-width: 414px) {
    max-width: 300px !important;
    max-height: 210px;
  }
}

// 左右兩側按鈕客製化
.details-swiper-button {
  position: absolute;
  z-index: 20;
  width: 40px;
  height: 40px;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.562);
  backdrop-filter: blur(5px);
  cursor: pointer;
  /* border-radius: 50%; */

  &:hover {
    opacity: 0.75;
  }
}
.details-swiper-button-prev {
  top: 50%;
  left: 3%;
}

.details-swiper-button-next {
  top: 50%;
  right: 3%;
}

/* 設定下方分頁樣式 */
.details-swiper-pagination {
  position: absolute;
  margin-bottom: 30%;
}

.details-magnifying-glass-icon {
  position: absolute;
  right: 15px;
  top: 15px;
  width: 40px;
  height: 40px;
  background: #ffffffa1;
  z-index: 25;
  border: 1px solid #b2bec3;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
