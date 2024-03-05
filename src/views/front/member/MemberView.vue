<template>
  <div class="container py-32">
    <div class="row">
      <div class="col-lg-2">
        <nav>
          <ul>
            <li><router-link to="/member/account">我的帳戶</router-link></li>
            <li><router-link to="/member/wishlist">我的收藏</router-link></li>
            <li><router-link to="/member/orders">我的訂單</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="col-lg-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss"></style>
