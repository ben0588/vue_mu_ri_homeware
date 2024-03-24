<template>
  <div class="container py-32">
    <div class="row">
      <div class="col-lg-2">
        <nav>
          <ul class="list-unstyled">
            <li v-for="(item, index) in memberList" :key="index" class="w-100">
              <router-link
                :to="item.path"
                class="d-block front-member-nav-link-dark fw-500 border-bottom w-100 py-2 ps-2"
                :exact-active-class="'front-member-nav-active'"
                >{{ item.title }}</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-lg-10">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
const memberList = [
  { path: '/member/account', title: '我的帳戶' },
  { path: '/member/wishlist', title: '我的收藏' },
  { path: '/member/orders', title: '我的訂單' },
];
</script>

<style lang="scss">
.front-member-nav-link-dark {
  text-decoration: none;
  color: rgb(33, 37, 41) !important;
  &:hover {
    background: #e9f1f5cc;
  }
}
.front-member-nav-active {
  color: #fff !important;
  background: rgb(33, 37, 41) !important;
}
</style>
