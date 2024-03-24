<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <h4 class="text-center mb-2">
            <font-awesome-icon :icon="['far', 'circle-check']" /> 已完成付款，訂單訂購成功！
          </h4>
          <p class="py-3">
            感謝對本網站的支持，您可以透過個人中心 ⇒ 【
            <router-link to="/member/orders" title="立即前往查看" class="text-decoration-underline"
              >我的訂單</router-link
            >
            】查看訂單當前狀況，或留意 手機號碼 與 Email 通知，謝謝！
          </p>

          <router-link to="/products" class="d-block btn btn-outline-primary w-25"
            >繼續逛逛</router-link
          >
        </div>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
</template>
