<!-- eslint-disable max-len -->
<template>
  <div class="mt-80 py-64">
    <h3 class="home-title">最新活動</h3>
    <div class="container mt-64">
      <div class="row gx-32 px-2">
        <div class="col-lg-6 mt-0 mb-12" v-for="item in bulletinList" :key="item.title">
          <div
            class="row flex-column flex-md-row justify-content-center align-items-center border border-2 border-primary bg-primary-sup-light h-100 px-0"
          >
            <div class="col-md-4 px-0">
              <div class="fs-4 fw-500 text-center text-primary-700 pt-3 pb-2 p-md-3">
                {{ item.title }}
              </div>
            </div>
            <div class="col-md-8 px-0">
              <div class="text-primary-900 px-3 pb-3 p-md-3">
                {{ item.center }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 季節區塊 -->
      <div class="row gx-32 overflow-x-nowrap-375 overflow-x-nowrap-768 px-2 mt-64">
        <div class="col-md-6 col-1-2-event col-2-2" v-for="event in eventList" :key="event.title">
          <div class="row">
            <div class="col-lg-7 px-0 mb-32">
              <img :src="event.imageUrl" :alt="event.title" class="event-img" />
            </div>
            <div class="col-lg-5 px-0">
              <div class="d-flex flex-column justify-content-center align-items-center h-100 w-100">
                <p class="fs-2 fw-700 mb-12">{{ event.title }}</p>
                <p class="fs-4 fw-500 mb-32">{{ event.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const bulletinList = [
  {
    title: '防詐騙宣導',
    center:
      '請注意假冒沐日家居的可疑電話， 撇公司不會詢問信用卡或任何卡片資訊， 或指示顧客進行任何網路銀行或ATM操作。',
  },
  {
    title: '重要公告',
    center: '即日起至特定日期，全站優惠活動展開！折扣商品任你挑選，快來選購吧！',
  },
];

const eventList = [
  {
    title: '春季大掃除',
    subtitle: '煥新家居系列',
    path: '/',
    imageUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708675433902.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JTAfMMS6BdBAI5HxbBOsH8Z6iaAvexFhbg4JDXOExWsN0ZpjEO2MChXddxkTlLHB5Ee1TwpeublNZMm%2FwDqpmwDJ5I4c4KDSNaoNKxu1FWHUdiMs59g%2BKgRbPsXJk6B4uMERbHoRcGgRM9sJHGQ8fGLpqmi%2BvYyDsPqndROFBk5%2BLzG5mUQV%2Fw0wTwCq6BpEwB%2FTP28tc5fxnAS8f0%2BZdo4bIm1wYUAI0zcW%2BGuHstOLzQnwB1SQom1pkztd7YWbkaj0EI21z46QH8kS7SrBcMPjcKD3AWZ4l7uGJbNLDkWa3vVTYYoOnALnBY6oQcp9fjo9Mlv5WYmOAu4CroDxdw%3D%3D',
  },
  {
    title: '聖誕節禮物季',
    subtitle: '歡樂佳節系列',
    path: '/',
    imageUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708675400574.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WsimUYwJMrRyZeeKRw4Pa%2FkMQxdauJI16W2og3IEQmdtr9xwTvHpQjctjQ8nDStU%2B9YR55Gx2oFzsufgdleLDpDg6Q%2FSN22SeA4xQmU%2BOdgeesKnIgokdSUQJID76U7DNTandREF0sHTkhpYMow7DHUaKNfBMvQbU%2B6wL1WQXb6Ee8IMuEiaEtUxhF20O6oNflsVnjQt%2B0kW5R5KDtv1vtsTwaCq0Z%2F9xrdiW5TxiV5Hy5HMaRM0lXtI5Lfp2d6nAsWDkspawCN4UEo8xJj%2BmsaBzelOaZWM5GTbmY8yNQJe1UbTfcTrsvaV57cYCYAcNaRv8XGYt6v5cGiJNRBTXA%3D%3D',
  },
  {
    title: '冬日溫馨節',
    subtitle: '暖心家居系列',
    path: '/',
    imageUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708675412513.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=auqSHHH6KlCnIThCPCZtrhWk4meyCxMw1txMwXbm5IX4DBQPeUcP2u%2Fkz%2BOVm2BMvdVmyT0erH7YnDxP3wVX8ZH%2B9b3LO5BSpmIzFPi5jPCh5pL9gCV9mKKornAZRtB0JEYVpilHHofXh%2FeesSXVbDEfMV%2FqGpwpGeFz66FgDleN%2FBH3gTqF4aKnfVX%2BQ8tjSsJI%2BVWBcaELg9xjVY5c0otinBwI0PMHU2cMCgis07A01hYeonRjvp9FtTJiYUAEgcN4Rg7AW04OuTKtFGkQKpkx%2FYwOideFPS1G%2FOo%2FVGiRU7XiIimvCM7tsF1%2FTrjWe3SEXMtA7qIONqzpEMVzOA%3D%3D',
  },
  {
    title: '秋意裝飾季',
    subtitle: '歡樂佳節系列',
    path: '/',
    imageUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708675422694.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kPkA2h4lOMIBIUjtFULDcHjVxZ5AABJRsPGzF4opAdiVQyv6YW2EKZFBY1GtX4%2F%2B6Fa20e12n3p4t2NMY0EcbmR%2BYgbAentDl6dHwn%2BA5wXLlFeIEUfm2PRJoVrn4clr9tvqLPTJgIskFYywUZPeIOOnGe7ndr02U0Ri0%2BXeQhXoxZf8REPaLnt8Xgt9AtErI7pLhrnxiaoBY2aWTEz9apKz2VWtfK8Jmpuiw5MPk%2FOOAgXqTfoGCnRg5KRzwPG5rQDQNews%2BOHLtnp%2FFiYadeaWZKapNpR%2Bq5tJqtJsmdNLdDbNKDsskA5ONG%2FxKkbg2OCyVLMh7KXYpbR%2BcVzxGg%3D%3D',
  },
];
</script>
<style lang="scss">
.event-img {
  object-fit: contain;
  width: 100%;
  height: auto;
  max-width: 380px;
  max-height: 288px;

  @media (max-width: 375px) {
    max-width: 300px;
    max-height: 199px;
  }
}
</style>
