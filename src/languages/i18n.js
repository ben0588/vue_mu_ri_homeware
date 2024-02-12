// src/i18n.js
import { createI18n } from 'vue-i18n';
import zh from '@/languages/zh-TW.json';
import en from '@/languages/en.json';
import jp from '@/languages/jp.json';
import ko from '@/languages/ko.json';
import th from '@/languages/th.json';

import { ref } from 'vue';

export const currentLocale = ref('zh-TW'); // 默认语言为英文

// 檢查當前語系
function getLocale() {
  const locale = localStorage.getItem('locale');
  if (locale !== 'zh-TW') {
    currentLocale.value = locale;
  }
}
getLocale();

const i18n = createI18n({
  legacy: false, // 啟用新的 Vue3 選項
  locale: currentLocale.value, // 設置默認語言
  messages: {
    en,
    'zh-TW': zh, // 引入 zh-TW.json 文件
    jp,
    ko,
    th,
  },
});

export function changeLocale(locale) {
  currentLocale.value = locale;
  localStorage.setItem('locale', locale);
  i18n.global.locale.value = locale;
}

export default i18n;
