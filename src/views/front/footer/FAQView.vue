<template>
  <div class="py-60">
    <h3 class="home-title mt-32">常見問題</h3>
    <div class="row">
      <div class="col-lg-1 col-xl-2"></div>
      <div class="col-lg-10 col-xl-8">
        <p class="pt-3">
          需要盡快處理的要求如訂單取消或地址更改，請撥打免付費電話 0800-777-800 取得協助。
        </p>
        <ul class="list-unstyled">
          <li v-for="(item, index) in FAQList" :key="item.id">
            <CollapseComponent :list="item" :index="index" />
          </li>
        </ul>
      </div>
      <div class="col-lg-1 col-xl-2"></div>
    </div>
  </div>
</template>

<script setup>
import CollapseComponent from '@/components/common/CollapseComponent.vue';

const FAQList = [
  {
    id: 1,
    title: '如何下單購買商品？',
    center: [
      '前往我們的網站首頁，瀏覽您喜歡的商品。',
      '點擊商品圖片或名稱，進入詳細資訊頁面。',
      '在詳細資訊頁面選擇商品數量，並點擊「加入購物車」按鈕。',
      '在購物車頁面檢查您的訂單，然後按下「結帳」。',
      '填寫送貨資訊和付款方式，然後確認訂單。',
    ],
  },
  {
    id: 2,
    title: '如何使用優惠卷？',
    center: [
      '在結帳頁面輸入您的優惠卷代碼。',
      '點擊應用或確認以套用優惠。',
      '確認訂單金額已更新，並繼續完成結帳流程。',
      '請注意優惠卷可能有特定使用條件，請仔細閱讀相關資訊。',
    ],
  },
  {
    id: 3,
    title: '如何查詢訂單狀態?',
    center: [
      '登入您的帳戶，進入「訂單查詢」或「我的訂單」頁面',
      '在訂單頁面查看您的最近訂單狀態。',
      '若有任何疑問，請聯繫客戶服務以獲得更多幫助。',
    ],
  },
  {
    id: 4,
    title: '如何退換商品？',
    center: [
      '登入您的帳戶，進入「退換貨政策」頁面，閱讀我們的退換貨政策。',
      '若符合退換貨條件，請填寫退換貨申請表格。',
      '跟隨指示將商品寄回我們，並等待我們確認收到後進行退款或換貨處理。。',
    ],
  },
];
</script>
