<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <h4 class="text-center mb-4">
          <font-awesome-icon :icon="['far', 'circle-check']" /> 已完成付款，訂單訂購成功！
        </h4>
        <p>
          感謝對本網站的支持，您可以透過個人中心 ⇒ 【
          <router-link to="/member" title="立即前往查看" class="text-decoration-underline"
            >我的訂單</router-link
          >
          】查看訂單當前狀況，或留意 手機號碼 與 Email 通知，謝謝！
        </p>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss"></style>
