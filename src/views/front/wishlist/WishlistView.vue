<template>
  <div class="container mt-60 py-60">
    <h2 class="fw-bolder">願望清單</h2>

    <table class="table table-hover table-responsive align-middle">
      <thead>
        <tr>
          <th scope="col">產品圖片</th>
          <th scope="col">產品名稱</th>
          <th scope="col">產品價格</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in wishStore.wishlist" :key="item.id">
          <th scope="row">
            <img
              :src="item.imageUrl"
              :alt="item.title"
              :style="{ width: `50px`, height: `50px` }"
            />
          </th>
          <td>{{ item.title }}</td>
          <td>
            <div class="text-decoration-line-through text-muted">$NT{{ item.origin_price }}</div>
            <div class="fw-bolder">$NT{{ item.price }}</div>
          </td>
          <td>
            <span @click.prevent="wishStore.addWishList(item)">
              <font-awesome-icon
                :icon="[wishStore.isWishListed(item) ? 'fas' : 'far', 'heart']"
                class="text-danger heart-icon"
              />
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

import useWishStore from '@/stores/wishStores';

const wishStore = useWishStore();
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
