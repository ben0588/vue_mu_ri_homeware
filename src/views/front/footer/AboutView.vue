<template>
  <div class="py-60">
    <h3 class="home-title mt-32">品牌理念</h3>
    <div class="row">
      <div class="col-lg-1 col-xl-2"></div>
      <div class="col-lg-10 col-xl-8">
        <p class="lh-lg py-32">
          {{ text.center }}
        </p>
      </div>
      <div class="col-lg-1 col-xl-2"></div>
    </div>
  </div>
</template>

<script setup>
const text = {
  center:
    '我們的品牌理念是以「創新、品質、舒適」為核心價值，致力於提供顧客最優質的家居生活用品。我們深知家是每個人最溫暖的港灣，因此我們不斷努力尋找最優質的產品，讓顧客在家中感受到舒適和幸福。我們的產品涵蓋家具、家飾、廚房用品等各種家居用品，並且我們不斷引進新的設計和創新科技，讓顧客在享受美好生活的同時，也能感受到時尚與便利。認識我們，就是認識一個專注於品質和創新的家居電商，讓您的家更舒適、更溫馨。',
};
</script>
