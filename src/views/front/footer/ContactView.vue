<template>
  <div class="py-60">
    <h3 class="home-title mt-32">聯絡我們</h3>
    <div class="row">
      <div class="col-lg-1 col-xl-2"></div>
      <div class="col-lg-10 col-xl-8">
        <p class="pt-3">如果您有任何問題、意見或需要協助，請隨時聯繫我們的客戶服務團隊。</p>
        <ul class="list-unstyled bg-light p-3 mb-5">
          <li>電話連絡：</li>
          <li>客服專線：<a href="tel:0800-775-800">0800-775-800</a></li>
          <li>客服中心營業時間：</li>
          <li>週一至週五 (例假日除外) 9:30-12:30, 14:00-17:30 (GMT+8)</li>
        </ul>
        <VeeForm
          v-slot="{ handleSubmit, isSubmitting, errors, meta }"
          :validation-schema="schema"
          as="div"
        >
          <p class="fs-5 border-bottom border-dark pb-2 mb-3">電子郵件聯絡：</p>
          <form @submit="handleSubmit($event, onSubmit)">
            <VeeValidateInput
              :name="'questionType'"
              :label="'我想詢問的事項是屬於'"
              :id="'more-question'"
              :errors="errors"
              :as="'select'"
              :type="''"
            >
              <option disabled value="">請選擇問題類型</option>
              <option :value="item.title" v-for="item in questionTypeList" :key="item.id">
                {{ item.title }}
              </option>
            </VeeValidateInput>
            <VeeValidateInput
              :name="'username'"
              :label="'聯絡人姓名'"
              :id="'more-username'"
              :placeholder="'請輸入聯絡人姓名'"
              :errors="errors"
              :type="'text'"
            />
            <VeeValidateInput
              :name="'email'"
              :label="'聯絡信箱'"
              :id="'more-email'"
              :placeholder="'請輸入聯絡電子信箱'"
              :errors="errors"
              :type="'email'"
            />
            <VeeValidateInput
              :name="'phone'"
              :label="'聯絡手機'"
              :id="'more-phone'"
              :placeholder="'請輸入聯絡手機'"
              :errors="errors"
              :type="'tel'"
            />
            <VeeValidateInput
              :name="'center'"
              :label="'問題描述'"
              :id="'more-center'"
              :placeholder="'請詳細描述問題'"
              :errors="errors"
              :type="'text'"
              :as="'textarea'"
            />

            <button
              type="submit"
              class="btn btn-dark w-100"
              :disabled="!meta.valid || isSubmitting"
            >
              <span v-if="isSubmitting">
                <span class="spinner-grow spinner-grow-sm me-1" aria-hidden="true"></span>
                <span role="status"></span> 提交表單中
              </span>
              <span v-else>提交表單</span>
            </button>
          </form>
        </VeeForm>
      </div>
      <div class="col-lg-1 col-xl-2"></div>
    </div>
  </div>
</template>

<script setup>
import { Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';

import VeeValidateInput from '@/components/common/VeeValidateInput.vue';
import { useAlert } from '@/composables/useAlert';

const { showAlert } = useAlert();

const questionTypeList = [
  { id: 1, title: '訂購問題' },
  { id: 2, title: '付款問題' },
  { id: 3, title: '運輸問題' },
  { id: 4, title: '退貨問題' },
  { id: 5, title: '其他' },
];

const phoneRegExp = /^(0|\+?886)9\d{8}$/; // 使用 0或者+886都可以用
const userNameRegExp = /^[\u4E00-\u9FA5]{2,4}$/; // 使用 0或者+886都可以用
const schema = yup.object().shape({
  questionType: yup.string().required('請先選擇問題類型'),
  username: yup
    .string()
    .required('此欄位必填')
    .matches(userNameRegExp, { message: '請輸入有效的中文姓名', excludeEmptyString: true }),
  email: yup.string().required('此欄位必填').email('請輸入正確email格式'),
  phone: yup
    .string()
    .matches(phoneRegExp, { message: '請輸入有效的台灣手機號碼', excludeEmptyString: true })
    .required('手機號碼為必填欄位'),
  center: yup.string().required('請描述問題'),
});

// 模擬呼叫後端的 AJAX
function apiCall(state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state) {
        resolve(true);
      } else {
        reject(new Error('呼叫失敗'));
      }
    }, 2000);
  });
}

async function onSubmit(values, actions) {
  try {
    const response = await apiCall(1); // 呼叫 API
    if (response) {
      await showAlert({
        title: '成功',
        text: '表單資訊已成功提交，我們將會在收到後盡快與您聯絡。謝謝',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
      });
      actions.resetForm(); // 重置表單
    }
  } catch (error) {
    showAlert({
      title: '失敗',
      text: `${error.response.data.message}`,
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
  }
}
</script>
