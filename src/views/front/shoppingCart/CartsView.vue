<template>
  <div class="py-32">
    <div class="container pb-12" v-if="cartStore.cartList.length || route.params.id">
      <nav>
        <ul class="list-unstyled d-flex justify-content-around align-items-center mb-0 pb-3">
          <li
            v-for="(item, index) in cartNavList"
            :key="item.id"
            class="position-relative"
            :class="[
              `item-${index + 1}`,
              { 'cart-navbar-active': isCurrentOrPreviousRoute(index) },
            ]"
          >
            <div class="d-flex justify-content-center align-items-center flex-column">
              <div
                class="cart-navbar-item"
                :style="{
                  backgroundColor:
                    item.routeName === route.name
                      ? '#0089A7'
                      : isCurrentOrPreviousRoute(index)
                        ? '#005264'
                        : null,
                  color: item.routeName === route.name ? '#fff' : null,
                }"
              >
                <!-- 當前路由就會顯示指定色，如果是當前路由前的路徑會替換指定顏色 -->
                <span v-if="isCurrentOrPreviousRoute(index)"
                  ><font-awesome-icon :icon="['fas', 'check']" class="text-white"
                /></span>
                <span v-else>{{ index + 1 }}</span>
              </div>
              <div>
                {{ item.title }}
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import useCartStore from '@/stores/cartStores';

const cartStore = useCartStore();

const route = useRoute();

const cartNavList = ref([
  {
    id: 0,
    title: '購物車',
    path: '/carts',
    routeName: 'front_carts_index',
  },
  {
    id: 1,
    title: '填寫訂購資訊',
    path: '/carts/confirm',
    routeName: 'front_order_confirm',
  },
  {
    id: 2,
    title: '填寫付款資訊',
    path: '/carts/payment',
    routeName: 'front_order_payment',
  },
  {
    id: 3,
    title: '完成訂購',
    path: '/carts/complete',
    routeName: 'front_order_complete',
  },
]);

const isCurrentOrPreviousRoute = (index) => {
  const currentRouteIndex = cartNavList.value.findIndex((item) => item.routeName === route.name);
  return index < currentRouteIndex;
};
</script>

<style lang="scss">
.cart-navbar-item {
  padding: 1rem;
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border: 2px solid #b2bec3;
  transition: all 0.3s ease-in-out;
}

li::after {
  content: '';
  display: block;
}

.item-1::after {
  content: '';
  position: absolute;
  width: 27px;
  height: 3px;
  background: #b2bec3;
  top: 40%;
  left: 98%;
  transform: translateY(-40%);
  transition: all 0.3s ease-in-out;

  @media (min-width: 375px) {
    width: 21px;
    left: 116%;
  }
  @media (min-width: 576px) {
    width: 50px;
    left: 123%;
  }
  @media (min-width: 768px) {
    width: 77px;
    left: 139%;
  }
  @media (min-width: 992px) {
    width: 130px;
    left: 143%;
  }
  @media (min-width: 1200px) {
    width: 175px;
    left: 154%;
  }
  @media (min-width: 1400px) {
    width: 202px;
    left: 154%;
  }
  @media (min-width: 1600px) {
    width: 200px;
    left: 163%;
  }
}

.item-2::after {
  content: '';
  position: absolute;
  width: 44px;
  height: 3px;
  background: #b2bec3;
  top: 40%;
  left: 83%;
  transform: translateY(-40%);
  transition: all 0.3s ease-in-out;

  @media (min-width: 375px) {
    width: 21px;
    left: 96%;
  }
  @media (min-width: 576px) {
    width: 53px;
    left: 100%;
  }
  @media (min-width: 768px) {
    width: 77px;
    left: 107%;
  }
  @media (min-width: 992px) {
    width: 130px;
    left: 116%;
  }
  @media (min-width: 1200px) {
    width: 175px;
    left: 116%;
  }
  @media (min-width: 1400px) {
    width: 202px;
    left: 126%;
  }
  @media (min-width: 1600px) {
    width: 200px;
    left: 123%;
  }
}

.item-3::after {
  content: '';
  position: absolute;
  width: 27px;
  height: 3px;
  background: #b2bec3;
  top: 40%;
  left: 83%;
  transform: translateY(-40%);
  transition: all 0.3s ease-in-out;

  @media (min-width: 375px) {
    width: 21px;
    left: 87%;
  }
  @media (min-width: 576px) {
    width: 53px;
    left: 93%;
  }
  @media (min-width: 768px) {
    width: 77px;
    left: 107%;
  }
  @media (min-width: 992px) {
    width: 130px;
    left: 112%;
  }
  @media (min-width: 1200px) {
    width: 175px;
    left: 109%;
  }
  @media (min-width: 1400px) {
    width: 202px;
    left: 122%;
  }
  @media (min-width: 1600px) {
    width: 200px;
    left: 115%;
  }
}

.cart-navbar-active::after {
  background-color: #005264;
}
</style>
