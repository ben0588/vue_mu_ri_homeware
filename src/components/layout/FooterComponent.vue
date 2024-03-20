<template>
  <footer class="py-64 text-white" :style="{ backgroundColor: '#29292D' }">
    <div class="d-flex justify-content-center align-items-center flex-column">
      <div class="container px-4 px-lg-64">
        <div
          class="row text-primary-sup-light bg-primary-900 border border-1 border-primary-sup-light"
        >
          <div class="col-lg-2 flex-center">
            <p class="fs-4 pt-3 py-lg-4 m-0">防詐騙提醒</p>
          </div>
          <div class="col-lg-10 flex-center">
            <p class="m-0 pt-1 pb-3 py-lg-4 pe-lg-64">
              {{ scamAlertText.text }}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-60 mt-sm-32">
        <nav>
          <ul class="list-unstyled flex-center flex-column flex-lg-row">
            <li v-for="item in footerList" :key="item.id" class="px-12 py-3 py-lg-0">
              <router-link :to="item.path" class="nav-link-white fw-400 py-2 px-3">{{
                item.title
              }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="mt-60 mt-sm-32">
        <div class="row m-0">
          <div class="col-12 col-lg-5 pe-lg-60 flex-center">
            <router-link to="/">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1708320848240.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OeFT3F9jZT2diAq%2BueJUc3ZCRMaFmfXw6AbGuqNftX9r8XE6sLFuTu3F%2B1QHtE7%2B095ly8QRvwbLAji3WpKs1RyFpVSuNqJDquhDWEcp3qNO915c%2B3e9DRG7FIwbh0zt4B7c7vGHQwAsKPKWijFUC9%2FeSldfkT0celgsGKlgiQXrRT%2FlVlodUk7fNbtVGKOL6Jxc6VIq06Qn4RtfIH%2FtcANSjKE2t8ROwgRfVsQkSK5lZTWKHwbBo6wU7XN3kladME7ioWTcolACMikHrx5vFaQ1UVfde6k4w5KivHCvmRsg4vHxGhDERYHwyRgQC2OsBHGXPAZ%2Fb9mbFhGYEamviw%3D%3D"
                alt="沐日家居"
                class="object-fit-contain"
                :style="{
                  width: `100%`,
                  maxWidth: `175px`,
                  height: `56px`,
                }"
              />
            </router-link>
          </div>
          <div class="col-12 col-lg-7 mt-32 mt-lg-0">
            <nav class="flex-center h-100">
              <ul class="list-unstyled flex-center mb-0">
                <li v-for="community in communityList" :key="community.id" class="px-3">
                  <a
                    :href="community.path"
                    target="_blank"
                    rel="noopener"
                    class="nav-link-white cursor-pointer"
                  >
                    <font-awesome-icon
                      :icon="['fab', community.icon]"
                      class="fs-2"
                      :title="community.title"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="mt-60 mt-sm-32">
        <p class="text-center px-3 px-lg-0 m-0">
          Copyright © 2024Ben0588 本網站僅供個人作品集製作，並無商業用途 !
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const scamAlertText = {
  text: '沐日家居絕不會以電話或簡訊通知訂單/分期出錯、或變更付款方式，更不會要您前往ATM進行任何操作！不應在沐日家居以外的任何地方輸入沐日家居帳密(例如非政府官網的電子發票app)，以免權益受損！',
};

const footerList = [
  { id: 1, title: '認識我們', path: '/more/about' },
  { id: 2, title: '加入我們', path: '/more/join' },
  { id: 3, title: '常見問題', path: '/more/FAQ' },
  { id: 4, title: '聯絡我們', path: '/more/contact' },
  { id: 5, title: '隱私權政策', path: '/more/privacyPolicy' },
];

const communityList = [
  {
    id: 1,
    title: 'facebook',
    icon: 'facebook',
    path: 'https://www.facebook.com/',
  },
  {
    id: 2,
    title: 'instagram',
    icon: 'instagram',
    path: 'https://www.instagram.com/',
  },
  {
    id: 3,
    title: 'youtube',
    icon: 'youtube',
    path: 'https://www.youtube.com/?hl=zh-TW&gl=TW',
  },
  {
    id: 4,
    title: 'line',
    icon: 'line',
    path: 'https://line.me/tw/',
  },
];
</script>
