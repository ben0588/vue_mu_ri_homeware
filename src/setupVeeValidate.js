import { defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';

import { localize, setLocale } from '@vee-validate/i18n';
// eslint-disable-next-line camelcase
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import en from '@vee-validate/i18n/dist/locale/en.json';
import ja from '@vee-validate/i18n/dist/locale/ja.json';
import ko from '@vee-validate/i18n/dist/locale/ko.json';
import th from '@vee-validate/i18n/dist/locale/th.json';

// 全域啟用 rules 規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

// 自訂義 result 規則
defineRule('name-required', (value) => {
  if (!value || !value.length) {
    return '姓名 為必填';
  }
  return true;
});

defineRule('address-required', (value) => {
  if (!value || !value.length) {
    return '地址 為必填';
  }
  return true;
});

defineRule('tel', (value, [limit]) => {
  if (!value || !value.length) {
    return true;
  }
  if (value.length < limit) {
    return `電話號碼需要超過 ${limit} 碼`;
  }
  return true;
});

defineRule('tw-name', (value) => {
  const check = value.match(/^[\u4E00-\u9FA5]{2,4}$/);
  if (!check) {
    return '姓名格式不正確，請輸入2到4個中文字';
  }
  return true;
});

defineRule('tw-address', (value) => {
  const check = value.match(
    /^[\u4E00-\u9FA5]+(?:市|縣)[\u4E00-\u9FA5]+(?:區)[\u4E00-\u9FA5]+(?:路|街|巷)[\u4E00-\u9FA5\d]+(?:號)?/,
  );
  if (!check) {
    return '地址格式不正確，請輸入正確的台灣地址格式';
  }
  return true;
}); // 透過官網提供的語言包，網址在下
// https://github.com/logaretm/vee-validate/tree/main/packages/i18n/src/locale

configure({
  // 設定加載語言
  generateMessage: localize({
    // eslint-disable-next-line camelcase
    zh_TW,
    en,
    ja,
    ko,
    th,
  }),
  validateOnBlur: false, // 輸入框聚焦時驗證
  validateOnChange: false, // 輸入時進行驗證
  validateOnInput: true, // 輸入時進行驗證
  validateOnModelUpdate: false, // 控制 update:modelValue 觸發 change 時驗證
});

// 用來動態切換 vee-validate 的語言設定
let local;
function fetchLocal() {
  const newLocal = localStorage.getItem('locale');
  if (newLocal === 'zh-TW') {
    local = 'zh_TW';
  } else if (newLocal === 'jp') {
    local = 'ja';
  } else if (newLocal) {
    local = newLocal;
  } else {
    local = 'zh_TW'; // 預設值
  }
}
function setVeeValidateLocale(locale) {
  localize(locale);
}

fetchLocal();
setLocale(local); // 設定預設語言

export function changeVeeValidateLocale() {
  fetchLocal();
  setVeeValidateLocale(local); // 更新 vee-validate 的語言設定
}

// eslint-disable-next-line import/prefer-default-export, no-unused-vars
export function setupVeeValidate(app) {
  // 這裡可以進行進一步的設定或插件註冊
}
