<template>
  <section class="mt-80">
    <h3 class="home-title mb-3">類型選擇</h3>
    <div class="container mt-5">
      <div class="row">
        <div class="col-6 col-sm-6 col-lg-4">
          <router-link to="/products" class="category-sale-img-container hover-img-opacity">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468217006.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=i1erUbEbAV%2B9pIXREE5UrJF5GKTjvRH8in0d4OfHH%2B3V06bLny87p495Y9qHRMhmj7%2FDdOeZFxpcHs0RmCjWx9wyBhi%2FIWu9TgWB8WcJ2%2BPi%2FtWXYpcQ2JmbI5kvKkp4n5kt1MKXgUpq1v54fknne4bSy0RAHp2b4xQqoJQmPtV%2B1fsVnEdHVbOR8R2pFhAmS9ftC%2FUC1M0RShuQsyPLHNL%2FWbmDOPRyFnIF981Oaao6AT6Etm4kCTKns7iuvKoHPhMOkw951w9BSuR5qebL9NP66pnn8TK4vA%2B5yhPe0%2F3cvVZ4y%2BRfsgAdiqMCFO%2Bl%2B4pdrqOj%2F0xtMFUYnKfa2A%3D%3D"
              alt="特價中"
            />
            <p class="fs-4 fw-500 text-dark text-center py-1">特價中</p>
          </router-link>
        </div>
        <div class="col-6 col-sm-6 col-lg-8">
          <div class="row">
            <div
              class="col-sm-3"
              v-for="item in categoryList"
              :key="item.title"
              :style="{ marginBottom: '1.25rem' }"
            >
              <router-link :to="item.path" class="hover-img-opacity">
                <img
                  :src="item.imgUrl"
                  :alt="item.title"
                  :style="{ width: `196x`, height: `196px` }"
                />
                <p class="fs-4 fw-500 text-dark text-center pt-2">{{ item.title }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const categoryList = [
  {
    title: '全部商品',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468204788.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LeCMl0hcR%2FGSPVsDz8EvoLUtmEEgHw1Rrtt7smX9qQjYsbs5D7hFnBeTK1UvnmZP7NFk7%2FKSPmxqWP55UeOPyzBLF3txUObxVYudNitGvOm16bWtebQp%2FH3Kk6EiXjGQ2PK7%2B6PBvkyn5tWHORXXSSJXO8ynd%2F4uNyQ3Qp4B7U14pAkNihFh5kV1645C7SWsruA%2BOZsa%2BUU%2F8bd%2B1s3pNiB1PaAyU4hbXotg6ddZzm90pT8crcvtrGjd1c%2Fl13ep56LO19hH0qpsv4VWkLYVjGEIRoVMtBhlr88dwz9XOyo834gmgMik3iaY4o4zvGTq3O3mE%2B1stKD3Ujku8WIMpg%3D%3D',
  },
  {
    title: '家具',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468227966.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RpF1ovbsiNWIlRIO10agTNeaCHbHtkxgX0BNdC1rSo3seVQEmpcfS1LBV25cqPyjAaxhSC6sP7dQtMD6Vi06tAsne53UdDkDDiqZsLFv6%2B0kkzNQVSovqBjcbWq1dEyA3CKhWmDfAFt%2FmZAqA5L9ZUok0hQ0aM6UiDS1Ex7JsLijaGbsOUJLpn27pyFlTjHigE2rhzwzZ0oYGqaxAudwWsfCHQ5FNjumogyexBqDutDGusjDPo22lmfHa7ID9U0ENXGojLWW6fDQpc8BYYeZuKq5sGzUCgV72ncjl1jSJUYrVUjG91gOkFgM1HmuWy67bkeBY9JX8YRcamNx5LNXUA%3D%3D',
  },
  {
    title: '家飾',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468253407.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OKozTgWNP%2FiPw%2BS%2FozxAUYNZsNsVxADItJkCHnDlpOc3RREzbw3rdOdA4%2FuJOvWWMcKKx243qijhYuKjSTpuBi7GnTO598J0Exx8cRrFPj4wK8XK9%2FRR8cq9eyh48dqh7mmH00X24B93TOR3GIOMx1uZ9T3zxFDx9OBtSsNPBiFd2SNvqHNtsxGY2b9JCPnQ9H9%2BQwd4hkdzkDzesscA3Zrg7CK8%2FgKiArDeWa3f8rXiDqkHf%2B%2BmI6EX3M2Ohvw5gRhdrAlEV9%2BcQiPlWlQuwaTWns4tEqWJfjgeN8FIE149BiicWC98kNcV7bExPBcCh1akQb8U%2FfGsqj6zixaXtQ%3D%3D',
  },
  {
    title: '燈具',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468266307.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iG628q5D50STyB3KojfYuL51XcMc2Wx7SBjp7Ga%2FGXsUnEqoTvYkV6CDNs4OBS0074e9F3%2BKINCUNSQqkrB%2BbXf4WGmINMYD1YJ27S0KXV8p3qAoRfA%2BrSZzXiQ3tI8l%2F3zovRlBsQO7T7gClOhF8PtxZbHzC9Gvyyh7EyJaCL%2B7QzsUosq1%2FXxIFPgk97YdPMxnF11%2F4Tj4ZXEZ76oXLToG0tgLVZq1T%2F4en4WU3sTZ0fViUYi1PIkAlErvVw7LrX%2FhdQ8yd2JVQpEcNYHlfRbyEPkPf%2Bu0BCL9CFKfq0p13TPxNZUE5PdkvceCGTLBXhb8Q%2F3m8ZfQMNieWwmqnQ%3D%3D',
  },
  {
    title: '廚房用品',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468274567.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XWklc4XiuXwWS2NAdlNXh%2FdQPDCQMaD71nQGfUMsqcQRLcKPiwX5ZaiXxV%2FNxtkPBiitIm7FAdVADFd47o7c1s%2B5qTtyeSUmrCRsb8Gq5Bj9oKeWRx71tNHILspDCm1nYouJlZggGvj5%2FMRgsOAgN5kJvFOxWEp2mY8IelfAT6gKukyJhvxM5%2FZNVSHdgGGu3pFNcteDv8gKSy%2Bg5MXzSETAJjLFeknx6FBkLxe%2BBtt0BTS5uAvdAIH4c06PWbC60oKWdezQJnUND2mkTbR3Q9tj7DSiT9D4cfxmLpPspLwKM4Rtqh1zYcVAPtbWVV5h4%2BQyHjvCJyv2heflmjOrow%3D%3D',
  },
  {
    title: '浴室用品',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468285249.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jQfs4%2BYjJr9qmfbeCaoxYzJBmPIJupvAnG8eHLZ6BnpRNwPcCqyjgU5UN4cpe8u9CobiC90BPZRh0ovDz3yPs7xJYb4kakdDhKw059kcpD5Az4eF1G3BTq796D9pW8UmI009h3P%2Fb7DDt4lYc7qGkzJldSrR4HOVFtOtXcdizmLWqqxdEwIWEjagU2h8UhWTq2b4SwGx4kC5RrqxrOMc3rqAnFHDuj7tvhRxFnIQ1rnQIPV7J1BXiESMIZT6UUDpHKRo6L8IzXuFGJSfWPUaJPuSI%2FwJjq%2BXIuZJbqt0oV0sFBBE4DqIy0wUx9rojIqybvQlBCDSoZZAHJZ4I34ocw%3D%3D',
  },
  {
    title: '寢具',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468294586.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JMOx9eefoI0xcOKR4HiWRigN0EEU3TdrbJ4TelgZAIZgBECHGvpfqMrNQknBgrDzdlcZFUPZfW4%2F%2BpMgIWo15fyzTfmtFxrGxqhxtQA57pMdUZWs4W8danjtw1cGDWrqr36iZEIChxINPlySnXmpVJZOP3oaNwWZPfIA1uJEEOL5mRuLGphlsJnCe7z8ILUyPeU20MYxMM008oUsM3fI2fCkEGA3TEHQgG0KXScgvTPQRyGowiarQ3EGs6vt7QsRn8qCA2Xv5J5EOSgX1%2Fhcc6MFrLHsW0gCR0D8qtfWMYXVGHOcv8p7UQfIRrmuoRCCoqORZyEGA1VpAQCQN74X2A%3D%3D',
  },
  {
    title: '收納',
    path: '/products',
    imgUrl:
      'https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708468305176.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fqq01LGlJt1%2BcXf1aZSiFWuahxFO9bvHxZ3O6NgDLPTbBjxZ7buATVwFBtgPAQn%2FZ5hazfflgezTN2DhryS%2F2F%2Fa2BoxRgdD0UyVZUsaAI9enD4nTO2yEBAsyw2zy8CO3n2CcAWIX2bNfYeWo1hPtZoIHvxaB%2FSaNTBsedsyOfJabuKD2MvuuSXt%2BgBM%2FzzJCkUWKOh7TS8PxsStKC2CnlWOKpD54hlCkR3rW42KaaIBe95fawAawZHwwU3gPuS6TV3GJ7D128gNo%2Fwv0U61FKobvw9e9NCQcN1G9jycPFTGdWO4%2Btaxd9vXuvly9bZQURoap1EUYwz1aYuN784COg%3D%3D',
  },
];
</script>
<style lang="scss">
.home-title {
  font-size: 2.5rem; // 40px
  font-weight: 900;
  position: relative;
  width: 166px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: -35px;
    right: 0;
    background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708320860518.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JwQtPHkJ%2FHuebYrdy6vjBowoy1vhU0F%2BJv%2Bk%2FA7DF%2BnBqwJty8l7a8XOg%2Bl817uXfAJLWnQRSnwFjz47HLj23o2wpIxbfz6UV5cAo%2BbFMi9pM9Bw9vL%2B4VNKF%2Bxux4xnHfuiH3QfOy05hJlNj5lGpfQuUlDCP5e75aziwYrt94N5L%2BkgSfznLq59dKiAnxpdO2VAkNyUSjPrJHQyGAUbzixZhk8lA%2FIxmP58rrPL19sswyICB%2Bea5vRRaTG3Geo4VrikqrJPeno0g41UfBroVgNlt2ejr6k4KYV0r3wE%2Fi7Lzn3UC4NxaSes6VlDDvobrG5AF2L5LGR86RWe74%2BD7Q%3D%3D');
    background-repeat: no-repeat;
    background-position: center;
    object-fit: contain;
    width: 100px;
    height: 100%;
  }
}

/* .category-sale-img-container {
  img {
    width: 416px;
    height: 472px;

    @media (max-width: 500px) {
      width: 196px;
      height: 196px;
    }
  }
} */

.hover-img-opacity {
  &:hover {
    opacity: 0.85;
  }
}
</style>
