<template>
  <div class="container" :class="`${titleShow ? 'py-32' : 'py-0'}`">
    <div v-if="wishStore.wishlist.length">
      <h2 class="fw-bolder fs-4 mb-4" v-if="titleShow">願望清單列表</h2>
      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr>
              <td class="text-start" colspan="2">追蹤商品資訊</td>
              <td></td>
              <td></td>
              <td></td>
              <td class="text-center" colspan="2">
                <button type="button" class="btn btn-outline-danger" @click="removeAllWishlist">
                  移除所有項目
                </button>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in wishStore.wishlist" :key="item.id">
              <td>
                <router-link :to="`products/${item.id}`" title="查看商品詳情" class="image-hover">
                  <img
                    :src="item.imageUrl"
                    :alt="item.title"
                    :style="{ width: `70px`, height: `70px`, objectFit: 'cover' }"
                    class="border border-dark"
                  />
                </router-link>
              </td>
              <td>
                <div>{{ item.title }}</div>
              </td>
              <td>
                <div class="text-decoration-line-through text-muted">
                  {{ usePriceToTw(item.origin_price) }}
                </div>
                <div>
                  <span class="fw-bolder">{{ usePriceToTw(item.price) }}</span>
                </div>
              </td>
              <td class="text-center">
                <router-link
                  :to="`/products/${item.id}`"
                  class="link-dark text-decoration-underline image-hover text-primary"
                  >查看商品詳情</router-link
                >
              </td>
              <td class="text-center">
                <button
                  type="button"
                  class="btn btn-primary text-white w-100 px-1"
                  title="加入購物車"
                  @click="addCart({ id: item.id, quantity: 1 })"
                  :disabled="cartStore.addTargetId === item.id"
                  :class="{
                    'cursor-not-allowed': cartStore.addTargetId === item.id,
                  }"
                >
                  <span v-if="cartStore.addTargetId === item.id">
                    <span class="spinner-border spinner-border-sm" role="status">
                      <span class="visually-hidden">新增購物車中</span>
                    </span>
                    新增購物車中</span
                  >
                  <span v-else> 加入購物車 </span>
                </button>
              </td>
              <td class="text-center">
                <button
                  @click.prevent="removeWishItem(item)"
                  type="button"
                  class="btn btn-none mx-auto"
                >
                  <font-awesome-icon :icon="['far', 'trash-can']" title="移除追蹤" class="fs-4" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-else class="flex-center flex-column">
      <p class="fs-4">
        <font-awesome-icon
          :icon="['fas', 'circle-exclamation']"
          class="text-danger me-2"
        />目前並無任何追蹤商品
      </p>
      <div>
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1709362628868.png"
          alt="暫無任何追蹤商品"
          :style="{ width: `200px`, height: `200px` }"
        />
      </div>
      <div class="mt-4 w-100 text-center">
        <router-link to="/products" class="btn btn-dark px-64">前去逛逛</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import usePriceToTw from '@/composables/usePriceToTw';
import useWishStore from '@/stores/wishStores';
import useCartStore from '@/stores/cartStores';

const cartStore = useCartStore();
const { addCart } = cartStore;
const wishStore = useWishStore();
const { removeWishItem, removeAllWishlist } = wishStore;
// wishStore.wishlist 要用此方式取得，使用結構出來的 wishlist 並不會有資料

defineProps({
  titleShow: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss">
.products-cred {
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    /* pointer-events: none; */
    opacity: 0.85;
  }
}

.card-img-container {
  width: 255px;
  height: 255px;
  @media (max-width: 414px) {
    height: 165px;
    width: 165px;
  }
}

.products-img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;

  @media (max-width: 414px) {
    height: 165px;
    width: 165px;
  }
}
</style>
