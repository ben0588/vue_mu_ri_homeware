<template>
  <div>
    <Form
            @submit="onSubmit"
            v-slot="{ validate, values, errors, isSubmitting, meta, handleReset }"
            :validation-schema="schema"
            @click="console.log('qweqwe')"
          >

          //

          <div class="mb-3">
                  <label for="imageUrl" class="form-label"
                    ><span class="text-danger">*</span>輸入主圖片網址
                  </label>
                  <input
                    id="imageUrl"
                    type="text"
                    class="form-control"
                    placeholder="請輸入主圖片連結"
                    v-model="imageUrl"
                    v-bind="imageUrlAttrs"
                    :class="{ 'is-invalid': errors[`${[i18nStore.currentIcon]}.imageUrl`] }"
                  />
                  <!-- v-model="tempData[i18nStore.currentIcon].imageUrl" -->
                  <div class="d-black invalid-feedback">
                    {{
                      errors[`${[i18nStore.currentIcon]}.imageUrl`] &&
                      errors[`${[i18nStore.currentIcon]}.imageUrl`]
                    }}
                  </div>
                </div>


                <TestText
                  :isRequired="true"
                  :label="'輸入主圖片網址'"
                  :type="'text'"
                  :name="`${fieldName}`"
                  :errors="errors"
                  :i18n="i18nStore.currentIcon"
                />


                <TestText
                  :isRequired="true"
                  :label="'輸入主圖片網址'"
                  :type="'text'"
                  :name="'imageUrl'"
                  :v-model="imageUrl"
                  :v-bind="imageUrlAttrs"
                  :errors="errors"
                  :i18n="i18nStore.currentIcon"
                />


                <button
                type="submit"
                class="btn btn-primary text-white px-5"
                :disabled="isSubmitting && meta.valid && meta.touched"
              >
                <!-- 新增 !meta.valid 當表單未驗證通過就無法送出請求 -->
                {{ isSubmitting ? 'Submitting...' : 'Submit' }}
              </button>
  </div>
</template>

<script setup>
// eslint-disable-next-line object-curly-newline
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { Modal } from 'bootstrap';
import { useI18n } from 'vue-i18n';
// eslint-disable-next-line import/no-extraneous-dependencies
import { format, parseISO, getUnixTime } from 'date-fns';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as yup from 'yup';
import { useForm } from 'vee-validate';

import useI18nStore from '@/stores/i18nStores';
import { useAlert } from '@/composables/useAlert';

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;
const bsCouponModalRef = ref(null);
const bsCouponModalInstance = ref(null); // 實體存放區
const i18nStore = useI18nStore();
const { t } = useI18n();
const { showAlert } = useAlert();

const props = defineProps({
  typeName: String,
});

const emits = defineEmits(['refetch-coupon']);

// eslint-disable-next-line object-curly-newline
const { values, errors, meta, handleSubmit, defineField, resetForm } = useForm({
  initialValues: {
    title: '',
    is_enabled: 1,
    percent: 0,
    due_date: format(new Date().setMonth(new Date().getMonth() + 3), 'yyyy-MM-dd'),
    code: '',
    tw: { title: '' },
    us: { title: '' },
    jp: { title: '' },
    kr: { title: '' },
    th: { title: '' },
  },
  validationSchema: yup.object().cast({
    title: yup.string().required('此欄位必填'),
    code: yup.string().required('此欄位必填'),
    percent: yup
      .number()
      .typeError('格式錯誤，請輸入數值')
      .min(1)
      .moreThan(1, '數值不能小於1')
      .max(99)
      .lessThan(100, '數值不能超過100')
      .required('此欄位必填'),
    due_date: yup
      .date()
      .nullable()
      .typeError('格式錯誤，請輸入有效的日期')
      .min(new Date(1900, 0, 1))
      .required('此欄位必填'),
  }),
});

const [veeTitle, veeTitleAttrs] = defineField('title');
const [veeCode, veeCodeAttrs] = defineField('code');
const [veePercent, veePercentAttrs] = defineField('percent');
const [veeDueDate, veeDueDateAttrs] = defineField('due_date');


// 使用 yup 設定 Vee Validate規則
const schema = yup.object().shape({
  imageUrl: yup.string().required(), // 使用 yup 自定义错误消息
});


const { values, errors, isSubmitting, meta, handleSubmit, defineField, resetForm } = useForm({
  validationSchema: object({
    tw: object({
      imageUrl: string().required('此欄位必填'),
    }),
  }),
});

const fieldName = ref('tw.imageUrl');
const [imageUrl, imageUrlAttrs] = defineField(fieldName.value);

// eslint-disable-next-line object-curly-newline
const { values, errors, meta, defineField, handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(schema),
});
const [mainPicture, mainPictureAttrs] = defineField('imageUrl');

// 處理表單送出的驗證
const onSubmit = handleSubmit(
  (values) =>
    // Simulates a 2 second delay
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('Submitted', JSON.stringify(values, null, 2));
        resolve();
      }, 2000);
    }),
);
</script>
