<!-- eslint-disable max-len -->
<template>
  <header class="border-bottom border-2 sticky-top">
    <div
      class="header-top-container bg-dark text-center d-flex align-items-center justify-content-center py-3"
    >
      <span class="text-white">【官網獨享】一般&大型家飾滿千免運+指定品會員點數2倍送</span>
      <button type="button" class="btn btn-outline-light btn-sm ms-3">了解更多</button>
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

                <div class="col-12 col-sm-5 pe-0 p-0">
                  <nav class="d-flex justify-content-end w-100 h-100">
                    <ul
                      class="header-navbar-container list-unstyled d-flex flex-column flex-sm-row align-items-center justify-content-end text-center m-0"
                    >
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
                        >
                          <span v-if="isTable">{{ item.center }}</span>
                          <font-awesome-icon :icon="item.icon" class="header-icons" v-else />
                        </router-link>
                      </li>
                      <li class="ms-4 header-navbar-items" v-if="isTable">
                        <router-link
                          to="/member"
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
            <li class="me-5">
              <router-link to="products" aria-label="products">全部商品</router-link>
            </li>
            <li class="me-5">
              <router-link to="inspiration" aria-label="inspiration">佈置靈感</router-link>
            </li>
            <li class="me-5">
              <router-link to="newProducts" aria-label="newProducts">新品專區</router-link>
            </li>
            <li class="me-5">
              <router-link to="newEvents" aria-label="newEvents">最新活動</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref, watch, watchEffect } from 'vue';
import NavbarSearch from '@/components/common/NavbarSearch.vue';

const screenWidth = ref(window.innerWidth);
const isTable = ref(false);
const isOpenMenu = ref(false);

const navbarList = ref([
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
    path: '/member',
    label: 'member',
    icon: ['far', 'user'],
  },
]);

// 按下選單內容時關閉選單
const toggleMenuOpen = () => {
  isOpenMenu.value = !isOpenMenu.value;
};

// 監視螢幕寬度的變化
watchEffect(() => {
  const handleResize = () => {
    screenWidth.value = window.innerWidth;
  };

  if (screenWidth.value <= 992) {
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

.header-top-container {
  @media (max-width: 500px) {
    padding-left: 15px;
    padding-right: 15px;

    span {
      width: 73%;
      text-align: left;
      padding-right: 15px;
    }
    button {
      width: 27%;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
}

.navbar-collapse {
  /* background-color: red !important; */
}

.header-navbar-container {
  @media (max-width: 500px) {
    width: 100%;
    padding: 40px;
  }
}

.header-navbar-items {
  @media (max-width: 500px) {
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
