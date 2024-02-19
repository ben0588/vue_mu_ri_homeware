<!-- eslint-disable max-len -->
<template>
  <header class="border-bottom border-2 sticky-top">
    <div class="py-3 bg-dark text-center d-flex align-items-center justify-content-center">
      <span class="text-white">【官網獨享】一般&大型家飾滿千免運+指定品會員點數2倍送</span>
      <button type="button" class="btn btn-outline-light btn-sm ms-3">了解更多</button>
    </div>

    <div class="bg-white py-2">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid px-0">
            <!-- 左側 Logo 或品牌名稱 -->
            <router-link to="/" class="navbar-brand" title="回首頁" role="button"
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
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <font-awesome-icon :icon="['fas', 'bars']" class="custom-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="row w-100">
                <div class="col-3 d-flex align-items-center"></div>
                <div class="col-4 d-flex justify-content-center">
                  <NavbarSearch v-if="!isTable"></NavbarSearch>
                </div>

                <div class="col-5">
                  <nav class="d-flex justify-content-end w-100 h-100">
                    <ul class="list-unstyled d-flex align-items-center justify-content-end m-0">
                      <li class="me-4">
                        <router-link to="/carts" title="前往購物車" aria-label="carts">
                          <font-awesome-icon
                            :icon="['fas', 'cart-shopping']"
                            class="header-icons"
                          />
                        </router-link>
                      </li>
                      <li class="me-4">
                        <router-link to="/wishlist" title="前往願望清單" aria-label="wishlist">
                          <font-awesome-icon :icon="['far', 'heart']" class="header-icons" />
                        </router-link>
                      </li>
                      <li class="me-4">
                        <router-link to="/member" title="前往會員頁" aria-label="member">
                          <font-awesome-icon :icon="['far', 'user']" class="header-icons" />
                        </router-link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav class="w-100 h-100 py-2 pt-4">
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
</style>
