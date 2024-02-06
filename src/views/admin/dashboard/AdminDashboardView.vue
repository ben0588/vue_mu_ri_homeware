<template>
  <div>
    後臺登入成功之後!

    <hr />
    <router-view></router-view>
  </div>
</template>
<script setup></script>

<!-- 以下是倒數 cookie 時間的 function -->
<!-- <script>
import ProductsView from './ProductsView.vue'

export default {
  data() {
    return {
      expiresTime: '',
      countdown: '',
      intervalId: null
    }
  },
  components: {
    ProductsView
  },
  methods: {
    getCookieExpiresTime() {
      const expiresTime = localStorage.getItem('expiresTime')
      this.expiresTime = expiresTime
      console.log('expiresTime', expiresTime)
    },
    getRemainingTime(expirationTime) {
      const expiresDate = new Date(expirationTime).getTime()
      const now = new Date().getTime()
      return expiresDate - now
    },

    updateCountdown() {
      const expires = localStorage.getItem('expiresTime')
      const remainingTime = this.getRemainingTime(expires)

      if (remainingTime > 0) {
        let seconds = Math.floor((remainingTime / 1000) % 60)
        let minutes = Math.floor((remainingTime / 1000 / 60) % 60)
        let hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24)
        let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))

        this.countdown = `${days}天 ${hours}小時 ${minutes}分 ${seconds}秒`
      } else {
        this.countdown = 'Cookie 已經過期'
        // 您也可以在這裡執行一些清理操作，比如刪除 localStorage 中的存儲項目
      }
    }
  },
  mounted() {
    this.intervalId = setInterval(this.updateCountdown, 1000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  }
}
</script> -->
