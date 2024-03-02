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

      <!-- 產品區塊(右側) -->
      <div class="row">
        <div class="col-lg-6">左側</div>
        <div class="col-lg-6">
          <div class="p-3">
            <div>
              <h2 class="text-dark fw-bolder fs-4">{{ productsRatings.title }}</h2>
              <span class="text-muted fs-5 mt-2">{{ productsRatings.content }}</span>
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

            <div class="fs-4 fw-bolder text-dark mt-4">
              NT{{ usePriceToTw(productsRatings.price) }}
            </div>
            <span class="text-decoration-line-through text-muted fs-7">
              建議售價：NT{{ usePriceToTw(productsRatings.origin_price) }}
            </span>
            <div class="d-flex flex-column border-start border-5 border-primary mb-4 mt-5 ps-2">
              <span class="text-ellipsis">首次，使用 LinePay 首次滿千免運，贈送點數!</span>
              <span class="text-ellipsis">全店，滿額免運：全店滿$999元免運 (海外地區不適用)</span>
              <span class="text-ellipsis">全店，滿額贈：消費滿$2000元贈 TEXT 品牌提袋 x1</span>
            </div>
            <div class="mt-3">
              <div class="d-flex">
                <div class="input-group w-25">
                  <button type="button" class="btn btn-dark" @click="handleChangQuantity('reduce')">
                    <font-awesome-icon :icon="['fas', 'minus']" />
                  </button>
                  <input
                    type="number"
                    class="form-control text-center"
                    readOnly
                    v-model.number="quantity"
                  />
                  <button type="button" class="btn btn-dark" @click="handleChangQuantity('add')">
                    <font-awesome-icon :icon="['fas', 'plus']" />
                  </button>
                </div>
                <button type="button" class="btn btn-primary text-white w-50 ms-3">
                  加入購物車
                </button>
              </div>
            </div>

            <div class="mt-3">
              <CollapseComponent :index="0" :list="{ title: '產品規格' }">
                <div class="table-responsive">
                  <table class="table align-middle mb-0">
                    <thead>
                      <tr>
                        <th>名稱</th>
                        <th>內容</th>
                      </tr>
                    </thead>
                    <tbody>
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
                        <td></td>
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
        <div class="col-lg-6">
          左側
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
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

import { useAlert } from '@/composables/useAlert';
import { calculateProductsRatings } from '@/composables/ratingUtils';
import useLoadingStore from '@/stores/loadingStores';
import useCategoryStore from '@/stores/categoryStores';
import usePriceToTw from '@/composables/usePriceToTw';
import RatingStar from '@/components/common/RatingStar.vue';
import CollapseComponent from '@/components/common/CollapseComponent.vue';

const categoryStore = useCategoryStore();
const loadingStore = useLoadingStore();
const { showAlert } = useAlert();
const route = useRoute();

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
<style lang="scss"></style>
