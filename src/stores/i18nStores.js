import { defineStore } from 'pinia';
import {
  ref, onMounted, computed, watch,
} from 'vue';
import { changeLocale } from '@/languages/i18n';
import { changeVeeValidateLocale } from '@/setupVeeValidate';

const useI18nStore = defineStore('i18nStore', () => {
  const currentLocale = ref('zh-TW');
  const currentIcon = ref('tw');

  // 語系設定
  const languageList = computed(() => [
    {
      text: '繁體中文(TW)',
      code: 'zh-TW',
      icon_code: 'tw',
    },
    {
      text: 'English',
      code: 'en',
      icon_code: 'us',
    },
    {
      text: 'Japanese',
      code: 'jp',
      icon_code: 'jp',
    },
    {
      text: 'Korean',
      code: 'ko',
      icon_code: 'kr',
    },
    {
      text: 'Thai',
      code: 'th',
      icon_code: 'th',
    },
  ]);

  // 檢查記錄中的語系與icon代碼
  onMounted(() => {
    const iconCode = localStorage.getItem('iconCode');
    if (iconCode !== 'tw') {
      currentIcon.value = iconCode;
    }
  });

  onMounted(() => {
    const locale = localStorage.getItem('locale');
    if (locale !== 'zh-TW') {
      currentLocale.value = locale;
    }
  });

  const i18nChangeLocale = (code, iconCode) => {
    // 更改與紀錄 i18n 預設語系與國旗顯示 icon
    currentLocale.value = code;
    currentIcon.value = iconCode;
    localStorage.setItem('iconCode', iconCode);
    // i18n 更改語言注入來自 i18n.js => i18n.global.locale.value = locale;
    changeLocale(code);
    changeVeeValidateLocale();
  };

  watch(() => currentIcon.value, (newValue) => {
    currentIcon.value = newValue;
  });
  watch(() => currentLocale.value, (newValue) => {
    currentLocale.value = newValue;
  });

  // 子元件要使用 i18nStore.currentIcon 方式使用才會連動
  return {
    languageList, currentLocale, currentIcon, i18nChangeLocale,
  };
});

export default useI18nStore;
