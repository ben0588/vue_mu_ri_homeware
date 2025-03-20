<template>
  <div class="container" v-if="!cartStore.cartLoading">
    <div v-if="cartStore.cartList.length">
      <h2 class="fw-bolder fs-4">購物車列表</h2>
      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr>
              <td class="text-start" colspan="3">商品明細</td>
              <td>售價</td>
              <td class="text-center">
                <div :style="{ paddingRight: `2rem` }">數量</div>
              </td>
              <td class="text-center">小計</td>
              <th class="pb-0" colspan="1">
                <button type="button" class="btn btn-outline-danger py-1 mb-1" @click="deleteCarts">
                  移除所有品項
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartStore.cartList" :key="item.id">
              <td>
                <router-link
                  :to="`products/${item.product_id}`"
                  title="查看商品詳情"
                  class="cart-img-container image-hover"
                >
                  <img :src="item.product.imageUrl" :alt="item.product.title" class="cart-img" />
                  <span class="cart-sale-tag">
                    -{{ useComputedDiscount(item.product.origin_price, item.product.price) }}</span
                  >
                </router-link>
              </td>
              <td>
                <div>
                  <div>{{ item.product.title }}</div>
                  <div>{{ item.product.description }}</div>
                  <div>單位：{{ item.product.unit }}</div>
                </div>
              </td>
              <td></td>
              <td>
                <div class="d-flex flex-column justify-content-center">
                  <span class="text-decoration-line-through text-muted ms-1">
                    {{ usePriceToTw(item.product.origin_price) }}</span
                  >

                  <span class="fw-500 fs-5 text-danger">
                    {{ usePriceToTw(item.product.price) }}
                  </span>
                </div>
              </td>

              <td class="text-center">
                <div :style="{ width: `150px` }">
                  <QuantityButtonGroupVue
                    @fetch-quantity="fetchQuantityFn"
                    :id="item.id"
                    :type="'api-edit'"
                    :cartQuantity="item.qty"
                    :productId="item.product_id"
                    :btnClass="'btn-secondary'"
                    :inputClass="'border-secondary'"
                  />
                </div>
              </td>

              <td class="text-center">{{ usePriceToTw(item.total) }}</td>

              <td>
                <div class="flex-center">
                  <span class="cursor-pointer me-2" @click.prevent="addWishList(item.product)"
                    ><font-awesome-icon
                      :icon="[isWishListed(item.product) ? 'fas' : 'far', 'heart']"
                      class="text-danger fs-3"
                      :title="isWishListed(item.product) ? '移除願望清單' : '加入願望清單中'"
                  /></span>
                  <button
                    @click.prevent="deleteCart(item.id)"
                    type="button"
                    class="btn btn btn-none"
                  >
                    <font-awesome-icon
                      :icon="['far', 'trash-can']"
                      title="移除購物車"
                      class="fs-4"
                    />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-end border-bottom border-2 pb-12 mb-12">
        <div class="d-flex flex-column align-items-end">
          <span class="fs-5">
            <span> 共 {{ cartStore.cartList.length }} 項商品 | </span>
            <span class="fw-700"> 合計 NT{{ usePriceToTw(cartStore.cartFinalTotal) }} </span></span
          >
          <span class="text-end text-muted">*未含運費</span>
        </div>
      </div>
      <div class="d-flex justify-content-end pb-12 mb-12">
        <router-link to="/products" class="btn btn-outline-dark" :style="{ width: `150px` }"
          >繼續購物</router-link
        >
        <router-link
          to="/carts/confirm"
          class="btn btn-primary text-white ms-2"
          :style="{ width: `150px` }"
          >填寫訂單資訊</router-link
        >
      </div>
    </div>
    <div v-else class="flex-center flex-column">
      <p class="fs-4 mb-4">
        <font-awesome-icon
          :icon="['fas', 'circle-exclamation']"
          class="text-danger me-2"
        />購物車目前並無任何商品
      </p>
      <div class="my-3">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/vue-ben0588/1709523797457.png"
          alt="購物車目前並無任何商品"
          :style="{ width: `200px`, height: `200px` }"
        />
      </div>
      <div class="mt-4 w-100 text-center">
        <router-link to="/products" class="btn btn-dark px-64">前去逛逛</router-link>
      </div>
    </div>
  </div>
  <VueLoading :active="cartStore.cartLoading" :can-cancel="false" :color="'#0089A7'" />
</template>

<script setup>
import VueLoading from 'vue-loading-overlay';

import usePriceToTw from '@/composables/usePriceToTw';
import useComputedDiscount from '@/composables/useComputedDiscount';
import useWishStore from '@/stores/wishStores';
import useCartStore from '@/stores/cartStores';
import QuantityButtonGroupVue from '@/components/common/QuantityButtonGroup.vue';

const wishStore = useWishStore();
const { addWishList, isWishListed } = wishStore;
const cartStore = useCartStore();
const { deleteCart, deleteCarts, editCart } = cartStore;

const fetchQuantityFn = ({ qty, id, productId }) => {
  if (id === cartStore.addTargetId) {
    editCart({ id, quantity: qty, productId });
  }
};
</script>
