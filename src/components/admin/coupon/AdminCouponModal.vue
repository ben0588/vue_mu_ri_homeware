<!-- eslint-disable max-len -->
<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
    ref="bsCouponModalRef"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{
              newTempData?.id
                ? `${t('admin.products_edit_text')} ${newTempData.id}`
                : t('admin.products_create_title')
            }}</span>
          </h5>
          <button
            type="button"
            class="bg-dark text-white fs-4 fw-bolder border-0"
            data-bs-dismiss="modal"
            aria-label="Close"
            :title="`${t('admin.products_cancel_text')}`"
            @click="closeModal"
          >
            X
          </button>
        </div>
        <div class="mt-2">
          <ul class="nav nav-tabs">
            <li class="nav-item" v-for="language in i18nStore.languageList" :key="language.text">
              <a
                class="nav-link"
                :class="{ active: language.code === i18nStore.currentLocale }"
                aria-current="page"
                href="#"
                @click.prevent="i18nStore.i18nChangeLocale(language.code, language.icon_code)"
                >{{ language.text }}<span :class="`fi fi-${language.icon_code}`"></span
              ></a>
            </li>
          </ul>
        </div>
        <div class="modal-body">
          <form @submit="onSubmit">
            <div class="row">
              <div class="row">
                <div class="col-sm-8 fw-bolder mb-3">
                  <span class="text-danger">*</span>優惠卷各語系標題名稱
                </div>

                <div class="col-12" v-for="language in i18nStore.languageList" :key="language.text">
                  <div class="row g-3 mb-1 align-items-center">
                    <div class="mb-2 row align-items-center">
                      <label
                        :for="`language-coupon-${language.code}`"
                        class="col-4 col-form-label fw-normal"
                        ><span v-if="language.icon_code === 'tw'"
                          ><span class="text-danger">*</span></span
                        >[{{ language.text }}]</label
                      >
                      <div class="col-6">
                        <div v-if="language && newTempData">
                          <!-- 只判斷中文的優惠卷標題是必填的 -->
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            v-if="language.icon_code === 'tw'"
                            v-model="veeTitle"
                            v-bind="veeTitleAttrs"
                          />
                          <input
                            type="text"
                            :id="`language-coupon-${language.code}`"
                            v-else
                            class="form-control form-control-sm"
                            v-model="newTempData[language.icon_code].title"
                          />
                        </div>
                      </div>
                      <div class="col-2" v-if="language.icon_code === 'tw'">
                        <span class="text-danger" v-if="errors['title']"
                          >*{{ errors['title'] }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 row mt-3">
                  <div class="col-4 mb-3">
                    <label for="title" class="form-label"
                      ><span class="text-danger">*</span>優惠卷代碼</label
                    >
                    <input
                      id="title"
                      type="text"
                      class="form-control"
                      :placeholder="'請輸入優惠卷代碼'"
                      v-model="veeCode"
                      v-bind="veeCodeAttrs"
                    />
                    <span class="text-danger" v-if="errors['code']">*{{ errors['code'] }}</span>
                  </div>
                  <div class="col-4 mb-3">
                    <label for="title" class="form-label"
                      ><span class="text-danger">*</span>選擇優惠卷到期日</label
                    >
                    <input
                      id="title"
                      type="date"
                      class="form-control"
                      v-model="veeDueDate"
                      v-bind="veeDueDateAttrs"
                    />
                    <span class="text-danger" v-if="errors['due_date']"
                      >*{{ errors['due_date'] }}</span
                    >
                  </div>

                  <div class="col-4 mb-3">
                    <label for="title" class="form-label"
                      ><span class="text-danger">*</span>折扣百分比(%)</label
                    >
                    <input
                      id="title"
                      type="number"
                      class="form-control"
                      :placeholder="'請輸入折扣百分比'"
                      v-model="veePercent"
                      v-bind="veePercentAttrs"
                    />
                    <span class="text-danger" v-if="errors['percent']"
                      >*{{ errors['percent'] }}</span
                    >
                  </div>
                </div>
                <div class="col-12 row my-3">
                  <div class="col-8 mb-3">
                    <div>扣比例試算：[商品原價 * 折扣百分比 = 最終金額]</div>
                    <div>
                      100 * {{ values.percent / 100 }} =
                      {{ (100 * values.percent) / 100 }}
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <h5 class="fw-bolder fs-6">優惠卷開啟狀態</h5>
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      v-model="newTempData.is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">{{
                      t('admin.products_modal_is_enabled_checkbox')
                    }}</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" @click="closeModal">
                {{ t('admin.products_cancel_text') }}
              </button>
              <button
                type="submit"
                class="btn btn-primary text-white px-5"
                :disabled="submitIsLoading && !meta.valid && meta.touched"
              >
                <!-- 加載、未驗證狀態無法送出表單 -->
                <span v-if="submitIsLoading">
                  <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                  <span role="status"></span>
                </span>
                {{ submitBtnText }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
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

// api 發送指定格式
const newTempData = ref({
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
});

const submitBtnText = ref(props.typeName); // 控制送出按鈕文字
const submitIsLoading = ref(false);

watch(
  () => props.typeName,
  (newValue) => {
    // 當每次按下編輯或者新增更新此按鈕字樣
    submitBtnText.value = newValue;
  },
);

watch(
  () => submitIsLoading.value,
  () => {
    // 當表單送出時更改指定樣式，加載結束後恢復預設值
    if (submitIsLoading.value) {
      submitBtnText.value = `${submitBtnText.value} ing..`;
    } else {
      submitBtnText.value = props.typeName;
    }
  },
);

watch(
  () => i18nStore.currentLocale,
  // 控制新鄒或編輯按鈕文字 i18n
  (newValue) => {
    // eslint-disable-next-line no-constant-condition
    if (newValue === '新增' || 'Add' || '追加' || '추가' || 'เพิ่ม') {
      submitBtnText.value = t('admin.products_add_text');
      // eslint-disable-next-line no-constant-condition
    } else if (newValue === '儲存' || 'Save' || '保存' || '저장' || 'บันทึก') {
      submitBtnText.value = t('admin.products_keep_text');
    }
  },
);

onMounted(() => {
  if (newTempData.value.id) {
    submitBtnText.value = props.typeName;
  } else {
    submitBtnText.value = props.typeName;
  }
});

onMounted(() => {
  // bootstrap modal init
  bsCouponModalInstance.value = new Modal(bsCouponModalRef.value, {
    backdrop: 'static',
    keyboard: false,
  });
});

onUnmounted(() => {
  // bootstrap modal close 清除實體化
  if (bsCouponModalInstance.value) {
    bsCouponModalInstance.value.dispose();
  }
});

const openModal = (type, data) => {
  if (type === 'create') {
    newTempData.value = {
      title: '',
      is_enabled: 1,
      percent: 0,
      due_date: format(new Date().setMonth(new Date().getMonth() + 3), 'yyyy-MM-dd'),
      // 預設到期日是三個月後
      code: '',
      tw: { title: '' },
      us: { title: '' },
      jp: { title: '' },
      kr: { title: '' },
      th: { title: '' },
    };
    bsCouponModalInstance.value.show();
  } else if (type === 'edit') {
    // [編輯]初始化更新表單預設值 + 暫存資料
    const editData = {
      ...data,
      due_date: format(new Date(data.due_date) * 1000, 'yyyy-MM-dd'),
      // 轉換 input type=date 指定格式
    };
    newTempData.value = editData;
    resetForm({
      values: editData,
    });
    bsCouponModalInstance.value.show();
  }
};

const closeModal = () => {
  newTempData.value = {
    title: '',
    is_enabled: 1,
    percent: 0,
    due_date: '',
    code: '',
    tw: { title: '' },
    us: { title: '' },
    jp: { title: '' },
    kr: { title: '' },
    th: { title: '' },
  };
  resetForm();
  bsCouponModalInstance.value.hide();
}; // 關閉模組

// 新增或者編輯優惠卷
const addOrPutCoupon = async (postData) => {
  try {
    submitIsLoading.value = true;
    const type = newTempData.value.id ? '儲存' : '新增';
    let api;
    let response;
    if (type === '新增') {
      api = `${baseApiUrl}/v2/api/${apiPath}/admin/coupon`;
      response = await axios.post(api, { data: postData });
    } else if (type === '儲存') {
      api = `${baseApiUrl}/v2/api/${apiPath}/admin/coupon/${postData.id}`;
      response = await axios.put(api, { data: postData });
    }
    if (response.data.success) {
      closeModal(); // 新增或更新成功後關閉模組
      showAlert({
        position: 'top-start',
        title: `${response.data.message} | ${t('admin.message_success')}`,
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
      });
      setTimeout(() => {
        emits('refetch-coupon', true); // 呼叫父層 = 重新取得優惠卷資料
      }, 1000);
    }
  } catch (error) {
    showAlert({
      title: `${error.response.data.message} | ${t('admin.message_error')}`,
      icon: 'error',
      confirmButtonText: `${t('admin.message_confirm_text')}`,
      confirmButtonColor: '#000000',
    });
  } finally {
    submitIsLoading.value = false;
  }
};

// 處理表單
const onSubmit = handleSubmit(async (val) => {
  // 客製化 post 格式
  const postData = {
    ...val,
    due_date: getUnixTime(parseISO(val.due_date)),
    tw: { title: val.title },
    us: { title: newTempData.value.us.title },
    jp: { title: newTempData.value.jp.title },
    kr: { title: newTempData.value.kr.title },
    th: { title: newTempData.value.th.title },
  };
  await addOrPutCoupon(postData); // 呼叫 api 新增或編輯優惠卷
});

// 將方法傳遞給父層
defineExpose({
  openModal,
  closeModal,
});
</script>

<style lang="scss">
label {
  font-weight: bolder !important;
}
</style>
