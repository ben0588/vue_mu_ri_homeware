<!-- eslint-disable max-len -->
<template>
  <div class="py-32">
    <div class="container pb-12">
      <nav>
        <ul
          class="list-unstyled d-flex justify-content-between justify-content-xl-around align-items-center mb-0 py-32"
        >
          <li
            v-for="(item, index) in cartNavList"
            :key="item.id"
            class="position-relative"
            :class="[`item-${index}`, { 'cart-navbar-active': isCurrentOrPreviousRoute(index) }]"
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

    <router-view></router-view>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

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
  width: 65px;
  height: 65px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border: 2px solid #b2bec3;
  transition: all 0.3s ease-in-out;
}

li::after {
  content: '';
  display: block;
}

.item-0::after {
  content: '';
  position: absolute;
  width: 27px;
  height: 5px;
  background: #b2bec3;
  top: 40%;
  left: 98%;
  transform: translateY(-40%);
  transition: all 0.3s ease-in-out;

  @media (min-width: 576px) {
    width: 50px;
    left: 123%;
  }
  @media (min-width: 768px) {
    width: 77px;
  }
  @media (min-width: 992px) {
    width: 156px;
  }
  @media (min-width: 1200px) {
    width: 175px;
    left: 123%;
  }
  @media (min-width: 1600px) {
    width: 200px;
    left: 142%;
  }
}

.item-1::after {
  content: '';
  position: absolute;
  width: 44px;
  height: 5px;
  background: #b2bec3;
  top: 40%;
  left: 83%;
  transform: translateY(-40%);
  transition: all 0.3s ease-in-out;

  @media (min-width: 576px) {
    width: 53px;
    left: 107%;
  }
  @media (min-width: 768px) {
    width: 77px;
    left: 128%;
  }
  @media (min-width: 992px) {
    width: 156px;
    left: 127%;
  }
  @media (min-width: 1200px) {
    width: 175px;
    left: 108%;
  }
  @media (min-width: 1600px) {
    width: 200px;
    left: 123%;
  }
}

.item-2::after {
  content: '';
  position: absolute;
  width: 27px;
  height: 5px;
  background: #b2bec3;
  top: 40%;
  left: 83%;
  transform: translateY(-40%);
  transition: all 0.3s ease-in-out;

  @media (min-width: 576px) {
    width: 53px;
    left: 103%;
  }
  @media (min-width: 768px) {
    width: 77px;
    left: 122%;
  }
  @media (min-width: 992px) {
    width: 156px;
    left: 123%;
  }
  @media (min-width: 1200px) {
    width: 175px;
    left: 108%;
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