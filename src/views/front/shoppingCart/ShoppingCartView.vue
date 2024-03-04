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
                <button type="button" class="btn btn-none" @click="deleteCarts">
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
                  <div>{{ item.product.content }}</div>
                  <div>{{ item.product.unit }}</div>
                </div>
              </td>
              <td></td>
              <td>
                <div class="d-flex flex-column justify-content-center">
                  <span
                    class="text-decoration-line-through text-muted ms-1"
                    :style="{ fontSize: '15px' }"
                  >
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
                  <button @click.prevent="deleteCart(item.id)" type="button" class="btn btn-none">
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
      <p class="fs-4">購物車目前並無任何商品</p>
      <div>
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/vue-ben0588/1709523797457.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TVpfq289hPAS0eJEUfUdQ094vN5dKwHD%2B261x5OpEH1uHeeE0Nd99HygcwvSAOfHcQJ4%2F%2B9BK4ugP20MZHg4sW9yksSFesbZoGYe6mOP3%2FLGJYD%2BwUyH3Go3d544OviGcMSRW%2FzcR1RKaWsMH1JEKdqCXibbCmwjqmnGufKB%2FeMqTzm3u8%2Fa66DIcFfmJf4t4%2BWdh2R5EQWzKN%2FVTud3sRRhiH%2BrltLOEoty5SBftDQnphuRO19cubaX2FaUG5ZpArGLvfPUgNu8lW9ivRIlaWgEqf36Mki4GOVn1cL2QV5lPje1jeZqN5oQjRZk1%2F52YRpaP7LcSt%2ByA%2FZEa0mnpQ%3D%3D"
          alt="購物車目前並無任何商品"
        />
      </div>
      <div class="mt-4">
        <router-link to="/products" class="btn btn-dark px-4">前去逛逛</router-link>
      </div>
    </div>
  </div>
  <VueLoading :active="cartStore.cartLoading" :can-cancel="false" :color="'#0089A7'"></VueLoading>
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

<style lang="scss">
.cart-img-container {
  display: block;
  width: 100px;
  overflow: hidden;
  border: 2px solid #788194c5;

  @media (min-width: 992px) {
    width: 75px;
    height: 75px;
  }

  @media (min-width: 1200px) {
    width: 85px;
    height: 85px;
  }

  @media (min-width: 1400px) {
    width: 96px;
    height: 96px;
  }

  &:hover {
    border: 2px solid #111c30e8;

    & .cart-img {
      transform: scale(1.2);
    }
  }
}
.cart-img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 96px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media (min-width: 992px) {
    height: 75px;
  }

  @media (min-width: 1200px) {
    height: 85px;
  }

  @media (min-width: 1400px) {
    height: 96px;
  }
}
.cart-sale-tag {
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
  height: 25px;
  background: #d63031;
  backdrop-filter: blur(5px);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
