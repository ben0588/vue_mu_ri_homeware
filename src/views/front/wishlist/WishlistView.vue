<template>
  <div class="container" :class="`${titleShow ? 'py-32' : 'py-0'}`">
    <div v-if="wishStore.wishlist.length">
      <h2 class="fw-bolder fs-4 mb-4" v-if="titleShow">願望清單列表</h2>
      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr>
              <th class="text-start" colspan="2">追蹤商品資訊</th>
              <th></th>
              <th></th>
              <th></th>
              <th class="text-center" colspan="2">
                <button type="button" class="btn btn-none" @click="removeAllWishlist">
                  移除所有項目
                </button>
              </th>
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
                <div>
                  <div>{{ item.title }}</div>
                  <div>{{ item.content }}asdasdasqweqweqwewqeqwe</div>
                  <div>{{ item.unit }}</div>
                </div>
              </td>
              <td>
                <div class="text-decoration-line-through text-muted">
                  {{ usePriceToTw(item.origin_price) }}
                </div>
                <div class="fw-bolder">{{ usePriceToTw(item.price) }}</div>
                <div class="text-danger fw-700">
                  折扣 {{ useComputedDiscount(item.origin_price, item.price) }}
                </div>
              </td>
              <td class="text-center">
                <router-link
                  :to="`products/${item.id}`"
                  class="link-dark text-decoration-underline image-hover"
                  >查看商品詳情</router-link
                >
              </td>
              <td class="text-center">
                <button type="button" class="btn btn-primary text-white">加入購物車</button>
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
      <p class="fs-4">目前並無任何追蹤商品</p>
      <div>
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1709362628868.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=h5XkhkexYnztCWjUC4P%2Bq2GcYACqx4RCgfPeAjKqqb4Xe%2BnBJJEVCz7v4TAcyYy%2BJSBlvRWWbk6qxveKZY9sJNVinlFg7WSBqssHpt4G5A0ZcrLlLc%2BRwg3dROKNkrAJNwKZs5QOcMO3mqU3W1qKSwCO3t6jLsAxgJxrdKhttiIoE%2F6n%2FpRzljAED%2BfI7KacbrUSSPVAdbllRxKbVcZ7rjcOzSqA2McBCotwTXYpuvCwOF91bHHZr7w5CJP63Z62CO8GUmQTJWXLxmaFWJJkOA429IC22Ts8%2FOCWGm%2BdH%2Fb4VQgC4kDgEE%2BU7sz0ODgHbwaT8kjq45vAIJOC3%2FY4ww%3D%3D"
          alt="暫無任何追蹤商品"
        />
      </div>
      <div class="mt-4">
        <router-link to="/products" class="btn btn-dark px-4">前去逛逛</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import usePriceToTw from '@/composables/usePriceToTw';
import useComputedDiscount from '@/composables/useComputedDiscount';
import useWishStore from '@/stores/wishStores';

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
  @media (max-width: 375px) {
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

  @media (max-width: 375px) {
    height: 165px;
    width: 165px;
  }
}
</style>
