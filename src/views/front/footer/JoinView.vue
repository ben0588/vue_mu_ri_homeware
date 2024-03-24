<template>
  <div class="py-60">
    <h3 class="home-title mt-32">加入我們</h3>
    <div class="row">
      <div class="col-lg-1 col-xl-2"></div>
      <div class="col-lg-10 col-xl-8">
        <p class="lh-lg pt-32">
          {{ text.center1 }}
        </p>
        <p class="lh-lg pb-32 pt-4">
          {{ text.center2 }}
        </p>
        <nav>
          <ul class="list-unstyled">
            <li v-for="item in mediaList" :key="item.id">
              <a
                :href="item.path"
                target="_blank"
                rel="noopener"
                class="link-dark nav-link-line-hover text-decoration-underline"
              >
                <font-awesome-icon :icon="[item.iconType, item.icon]" />
                <span class="ms-2">
                  {{ item.title }}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-lg-1 col-xl-2"></div>
    </div>
  </div>
</template>

<script setup>
const text = {
  center1:
    '您好，感謝您對我們家居電商網站的興趣！我們正在尋找熱愛家居裝飾與設計的人才加入我們的團隊。如果您對家居裝飾、室內設計或電商銷售有豐富的經驗，並且熱衷於線上行銷與客戶服務，我們誠摯邀請您加入我們。',
  center2:
    '作為一個快速成長的家居電商平台，我們提供有競爭力的薪酬福利、良好的職涯發展空間以及充滿活力的工作環境。我們重視每一位員工的意見與貢獻，並致力於打造一個團結向上的團隊文化。無論您是專業的室內設計師、資深的電商行銷專家還是熱情的客戶服務人員，我們都期待與您相遇並攜手共創美好未來。請即刻投遞您的履歷，讓我們一起為打造更美好的家居生活而努力！',
};

const mediaList = [
  {
    id: 1,
    title: '104人力銀行',
    iconType: 'fas',
    icon: 'building-columns',
    path: 'https://www.104.com.tw/',
  },
  {
    id: 2,
    title: 'Linkedln',
    iconType: 'fab',
    icon: 'linkedin',
    path: 'https://tw.linkedin.com/',
  },
  {
    id: 3,
    title: '聯絡我們',
    iconType: 'fas',
    icon: 'envelope',
    path: 'mailto:energy9527z@gmail.com',
  },
];
</script>
