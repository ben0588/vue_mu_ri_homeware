<template>
  <div>
    <nav>
      導航

      <router-link to="/member/account">我的帳戶</router-link>
      <router-link to="/member/wishlist">我的收藏</router-link>
      <router-link to="/member/orders">我的訂單</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script setup></script>
<style lang="scss"></style>
