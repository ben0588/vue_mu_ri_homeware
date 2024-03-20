<!-- eslint-disable max-len -->
<template>
  <header class="border-bottom border-2 sticky-top">
    <div class="bg-dark text-center d-flex align-items-center justify-content-center">
      <div class="container pt-3 pb-3 pt-lg-3 pb-sm-2">
        <Swiper
          :loop="true"
          :speed="400"
          :space-between="20"
          :autoplay="{
            delay: 10000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }"
          :direction="'vertical'"
          :scrollbar="{ draggable: true }"
          :style="{
            width: `100%`,
            height: `45px`,
          }"
        >
          <SwiperSlide v-for="item in advertiseList" :key="item.id">
            <div class="container px-0">
              <div class="d-flex justify-content-center align-items-center text-center">
                <span class="text-white text-sm-truncate truncate-2-lines pe-2">
                  {{ item.center }}
                </span>
                <span class="header-top-btn-container">
                  <router-link :to="item.path" class="btn btn-outline-light px-3 py-1 fw-500"
                    >了解更多</router-link
                  >
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="bg-white py-2">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid px-0">
            <!-- 左側 Logo 或品牌名稱 -->
            <router-link
              to="/"
              class="navbar-brand"
              title="回首頁"
              role="button"
              @click="toggleMenuOpen"
              ><img
                class="nav-logo-img"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/vue-ben0588/1708198178575.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MyixMrWe7Sfw4u7daZqBr5OfDnLd6iNzLKNo5QBUXsn%2BkOM%2BN1jdIsG%2FJDviTMjSWvG%2BMF7eDujVmz219ZXNsy1nrE4bdXQNCXC3RikoaaaiHKrDjawm3QK%2BYScsRAB%2BiEg8y%2Fr6iey9u1zvEkgwLRT5jcSzv664ypgGi%2BSlnbuJ58aw1T107ZtoidIavbzWh48RwMIn5jlHqU22bBLQRKJ02GD0fyHJPwxGChBNlk7atqCf%2FFDWsgnsZmCG617F2oHibvQvJ31qUwNTxkscakEC519vpVEqS%2FiEcfRW7JguBbwM7jnjms0x%2FKtiO%2FqB3wVPHUYiYNKewzKyDjD1wA%3D%3D"
                alt="沐日家居線上購物"
              />
              <h1 class="logo-title-hide" v-show="false">沐日家居線上購物</h1>
            </router-link>

            <!-- 切換按鈕 -->
            <button
              class="navbar-toggler bg-primary py-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              :aria-expanded="isOpenMenu"
              aria-label="Toggle navigation"
            >
              <!-- aria-expanded 控制表單開與關 -->
              <font-awesome-icon :icon="['fas', 'bars']" class="custom-toggler-icon" />
            </button>
            <div
              class="collapse navbar-collapse w-25"
              id="navbarNav"
              :class="{
                collapse: isOpenMenu,
              }"
            >
              <div class="row w-100 m-0">
                <div class="col-3 d-flex align-items-center" v-if="!isTable"></div>
                <div class="col-4 d-flex justify-content-center" v-if="!isTable">
                  <NavbarSearch v-if="!isTable"></NavbarSearch>
                </div>
                <div class="col-12 col-lg-5 pe-0 p-0">
                  <nav class="d-flex justify-content-end w-100 h-100">
                    <ul
                      class="list-unstyled d-flex flex-column flex-lg-row align-items-center justify-content-end text-center w-100 m-0 py-3 py-lg-0"
                    >
                      <li>
                        <NavbarSearch v-if="isTable" @toggle-open="toggleMenuOpen"></NavbarSearch>
                      </li>
                      <li
                        class="ms-4 header-navbar-items"
                        v-for="(item, index) in navbarList"
                        :key="index"
                      >
                        <router-link
                          :to="item.path"
                          :title="item.title"
                          :aria-label="item.label"
                          @click="toggleMenuOpen"
                          class="position-relative"
                        >
                          <span v-if="isTable">{{ item.center }}</span>
                          <font-awesome-icon
                            :icon="item.icon"
                            class="header-icons"
                            v-else-if="item.icon !== 'none'"
                          />

                          <span
                            v-if="item.label === 'carts' && cartStore.cartList.length >= 1"
                            class="position-absolute top-25 start-75 translate-middle badge rounded-pill bg-danger"
                          >
                            {{ cartStore.cartList.length }}
                            <span className="visually-hidden">
                              當前購物車共有{{ cartStore.cartList.length }}筆
                            </span>
                          </span>
                        </router-link>
                      </li>
                      <li class="ms-4 header-navbar-items" v-if="isTable">
                        <router-link
                          to="/member/account"
                          title="前往會員頁"
                          aria-label="member"
                          @click="toggleMenuOpen"
                        >
                          <button type="button" class="btn btn-primary text-white">立即登入</button>
                        </router-link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav class="header-navbar w-100 h-100 py-2 pt-4">
          <ul class="list-unstyled d-flex align-items-center justify-content-start m-0">
            <li class="me-5" v-for="(item, index) in frontNavbarList" :key="index">
              <router-link
                :to="item.path"
                :aria-label="item.label"
                active-class="header-router-active"
                >{{ item.title }}</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref, watchEffect } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import NavbarSearch from '@/components/common/NavbarSearch.vue';
import useCartStore from '@/stores/cartStores';

const screenWidth = ref(window.innerWidth);
const isTable = ref(false);
const isOpenMenu = ref(false);
const cartStore = useCartStore();

const navbarList = ref([
  {
    title: '前往全部商品',
    center: '全部商品',
    path: '/products',
    label: 'products',
    icon: 'none',
  },
  {
    title: '前往購物車',
    center: '購物車',
    path: '/carts',
    label: 'carts',
    icon: ['fas', 'cart-shopping'],
  },
  {
    title: '前往願望清單',
    center: '願望清單',
    path: '/wishlist',
    label: 'wishlist',
    icon: ['far', 'heart'],
  },
  {
    title: '前往會員頁',
    center: '會員專區',
    path: '/member/account',
    label: 'member',
    icon: ['far', 'user'],
  },
]);

const frontNavbarList = ref([
  {
    title: '全部商品',
    path: '/products',
    label: 'products',
  },
  {
    title: '佈置靈感',
    path: '/inspiration',
    label: 'inspiration',
  },
  {
    title: '新品專區',
    path: '/newProducts',
    label: 'newProducts',
  },
  {
    title: '最新活動',
    path: '/newEvents',
    label: 'newEvents',
  },
]);

const advertiseList = [
  // path 可以用來連結對應的活動頁面/或者商品資訊
  {
    id: 1,
    path: '/newEvents',
    center: '【獨家優惠】所有時尚家飾及大型傢俱滿千即享免運費 + 會員專屬：指定品項點數翻倍送',
  },
  {
    id: 2,
    path: '/newEvents',
    center: '【特別驚喜】精選家居擺飾及豪華傢俱滿千即享免運 + 會員獨享：指定商品積分雙倍贈送',
  },
  {
    id: 3,
    path: '/newEvents',
    center: '【限時特惠】選購精緻家飾或奢華大型傢俱滿千即免運費 + 會員尊享：指定品項點數加倍回饋',
  },
];

// 按下選單內容時關閉選單
const toggleMenuOpen = () => {
  isOpenMenu.value = !isOpenMenu.value;
};

// 監視螢幕寬度的變化
watchEffect(() => {
  const handleResize = () => {
    screenWidth.value = window.innerWidth;
  };

  if (screenWidth.value <= 991) {
    isTable.value = true;
  } else {
    isTable.value = false;
  }

  window.addEventListener('resize', handleResize);

  // 在組件被卸載時，移除 resize 事件的監聽器
  return () => {
    window.removeEventListener('resize', handleResize);
  };
});
</script>

<style lang="scss">
.header-router-active {
  font-weight: 600 !important;
  color: $primary-700;
}

.logo-title-hide {
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
}

.header-icons {
  font-size: 25px !important;
  font-weight: bolder !important;
  color: rgb(33, 37, 41) !important;
  &:hover {
    opacity: 0.7;
  }
}

.custom-toggler-icon {
  color: #fff;
  font-size: 20px;
}

.header-navbar {
  @media (max-width: 500px) {
    display: none;
  }
}

.header-top-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1920px) {
    width: 10%;
  }
  @media (max-width: 1600px) {
    width: 10%;
  }
  @media (max-width: 1200px) {
    width: 10%;
  }
  @media (max-width: 992px) {
    width: 13%;
  }
  @media (max-width: 768px) {
    width: 19%;
  }
  @media (max-width: 576px) {
    width: 32%;
  }
  @media (max-width: 414px) {
    width: 85%;
  }
}

.header-navbar-container {
  @media (max-width: 768px) {
    width: 100%;
  }
}

.header-navbar-items {
  @media (max-width: 768px) {
    width: 100%;
    &:nth-of-type(1) {
      padding-top: 0;
    }
    padding-top: 24px;
    margin-left: 0 !important;

    button {
      width: 160px;
    }
  }
}
</style>
