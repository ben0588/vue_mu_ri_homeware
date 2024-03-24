<template>
  <div class="py-60">
    <h3 class="home-title mt-32" :style="{ width: `200px` }">隱私權政策</h3>
    <div class="row">
      <div class="col-lg-1 col-xl-2"></div>
      <div class="col-lg-10 col-xl-8">
        <ul class="list-unstyled">
          <li v-for="(item, index) in privacyPolicyList" :key="item.id">
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

const privacyPolicyList = [
  {
    id: 1,
    title: '引言',
    center: [
      '我們非常重視您的隱私權和個人資料保護。',
      '本隱私權政策旨在幫助您了解我們如何收集、使用、保護以及分享您的個人資訊。',
    ],
  },
  {
    id: 2,
    title: '收集的資料類型',
    center: [
      '我們在您註冊帳號、下訂單、參與調查或其他活動時，可能會要求您提供姓名、電子郵件地址、郵寄地址、電話號碼等資訊。',
      '我們也可能收集一些非個人識別資訊，如瀏覽器類型、語言偏好、訪問時間和日期等。',
    ],
  },
  {
    id: 3,
    title: '資料的使用?',
    center: [
      '我們收集的資料可能用於以下目的：',
      '提供並改善我們的服務',
      '處理交易',
      '發送交易相關的通訊',
      '管理活動、提供客戶支援與回應查詢',
      '進行研究與分析',
    ],
  },
  {
    id: 4,
    title: '資料分享與披露',
    center: [
      '我們承諾不會將您的個人資訊出售、交易或轉讓給外部公司。然而，這不包括協助我們經營網站、進行業務或服務您的信任夥伴，只要這些方同意保持此資訊的機密性。',
    ],
  },
  {
    id: 5,
    title: '資料安全',
    center: ['我們採取適當的安全措施來保護您的個人資訊免於未經授權的存取、修改、披露或銷毀。'],
  },
  {
    id: 6,
    title: '第三方連結',
    center: [
      '本網站可能包含指向第三方網站的連結。這些第三方網站有其自己的隱私政策，我們對這些網站的內容和活動不負任何責任。',
    ],
  },
  {
    id: 7,
    title: '年齡限制',
    center: [
      '我們的服務不針對未滿13歲的兒童。如果我們發現收集了13歲以下兒童的個人資訊，我們將採取措施刪除這些資訊。',
    ],
  },
  {
    id: 8,
    title: '政策變更',
    center: [
      '我們保留隨時更新本隱私政策的權利。我們會在本頁面上發布任何隱私政策變更，並更新政策生效日期。',
    ],
  },
  {
    id: 9,
    title: '聯絡我們',
    center: ['如果您對本隱私政策有任何疑問或建議，請通過以下方式與我們聯絡：[電話或者填寫表單]。'],
  },
];
</script>
