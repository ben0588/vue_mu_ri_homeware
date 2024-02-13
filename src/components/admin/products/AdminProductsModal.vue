<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
    ref="bsModalRef"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{
              tempData[i18nStore.currentIcon]?.id
                ? '編輯'
                : `新增 [商品語系：${i18nStore.currentLocale}]`
            }}</span>
          </h5>
          <button
            type="button"
            class="bg-dark text-white fs-4 fw-bolder border-0"
            data-bs-dismiss="modal"
            aria-label="Close"
            title="關閉視窗"
          >
            X
          </button>
        </div>
        ,
        <div class="mt-2">
          <ul class="nav nav-tabs">
            <li class="nav-item" v-for="language in i18nStore.languageList" :key="language.text">
              <a
                class="nav-link"
                :class="{ active: language.code === i18nStore.currentLocale }"
                aria-current="page"
                href="#"
                @click.prevent="
                  () => {
                    // changeI18nAndResetErrorMessage(language.code, language.icon_code);
                    i18nStore.i18nChangeLocale(language.code, language.icon_code);
                  }
                "
                >{{ language.text }}<span :class="`fi fi-${language.icon_code}`"></span
              ></a>
            </li>
          </ul>
        </div>
        <div class="modal-body">
          <Form
            @submit="onSubmit"
            v-slot="{ validate, values, errors, isSubmitting, meta, handleReset }"
            :validation-schema="schema"
            @click="console.log('qweqwe')"
          >
            {{ errors }}
            <div>
              <span class="text-danger">*</span>需要設置其他語系產品，請選擇上述語系分頁進行新增
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-4">
                <!-- <div class="mb-3">
                    <label for="imageUrl" class="form-label"
                      ><span class="text-danger">*</span>輸入主圖片網址
                    </label>
                    <input
                      id="imageUrl"
                      type="text"
                      class="form-control"
                      placeholder="請輸入主圖片連結"
                      v-model="mainPicture"
                      v-bind="mainPictureAttrs"
                    />
                    <div>{{ errors.imageUrl }}</div>
                  </div> -->
                <div>
                  <label for="imageUrl" class="form-label fs-5">輸入主圖片網址</label>
                  <Field
                    name="imageUrl"
                    id="imageUrl"
                    class="form-control"
                    placeholder="請輸入主圖片連結"
                    type="text"
                  />
                  <span>{{ errors.imageUrl }}</span>
                </div>
                <div class="input-group mb-3">
                  <label for="imageUrlFile" class="form-label w-100">或 上傳主圖片</label>
                  <input
                    class="form-control"
                    type="file"
                    name="file-to-upload"
                    ref="imgUpload"
                    id="imageUrlFile"
                  />

                  <input
                    class="input-group-text"
                    type="button"
                    value="上傳圖片"
                    @click="uploadImg"
                  />
                </div>
                <div class="input-group mb-3">
                  <label class="form-label w-100">輸入其他圖片(共五張)</label>
                  <input
                    type="text"
                    class="form-control w-100"
                    v-for="(item, index) in tempData[i18nStore.currentIcon].imagesUrl"
                    :key="index"
                    v-model="tempData[i18nStore.currentIcon].imagesUrl[index]"
                    :placeholder="`【${index + 1}】 請輸入url格式`"
                  />
                </div>
                <!-- 主圖片預覽 -->
                <div v-if="tempData[i18nStore.currentIcon].imageUrl">
                  <h5 class="mb-0 mt-2 fw-bolder">主圖片預覽：</h5>
                  <img
                    class="img-fluid border border-2"
                    :src="tempData[i18nStore.currentIcon].imageUrl"
                    alt=""
                  />
                </div>
                <!-- 讓其他五張圖片依序可以預覽 -->
                <div v-for="(img, index) in tempData[i18nStore.currentIcon].imagesUrl" :key="index">
                  <div v-if="tempData[i18nStore.currentIcon].imagesUrl[index]">
                    <p class="mb-0 mt-2">其他圖片 {{ index + 1 }} 預覽：</p>
                    <img
                      class="img-fluid border border-2"
                      :src="tempData[i18nStore.currentIcon].imagesUrl[index]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label"
                    ><span class="text-danger">*</span>商品名稱</label
                  >
                  <input
                    id="title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入商品名稱"
                    v-model="tempData[i18nStore.currentIcon].title"
                  />
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label"
                      ><span class="text-danger">*</span>主類型</label
                    >

                    <select
                      id="category"
                      class="form-select form-select-sm"
                      v-model="tempData[i18nStore.currentIcon].category"
                    >
                      <option value="" selected disabled>請選擇主類型</option>
                      <option
                        :value="category.text"
                        v-for="category in categoryList"
                        :key="category.id"
                      >
                        {{ category.text }}
                      </option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="subcategory" class="form-label"
                      ><span class="text-danger">*</span>子類型</label
                    >
                    <select
                      id="category"
                      class="form-select form-select-sm"
                      v-model="tempData[i18nStore.currentIcon].subcategory"
                    >
                      <option value="" selected disabled v-if="!tempData.subcategory">
                        請選擇子類型
                      </option>
                      <option
                        v-for="subcategory in filterCategory"
                        :key="subcategory.id"
                        :value="subcategory.text"
                      >
                        {{ subcategory.text }}
                      </option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="unit" class="form-label"
                      ><span class="text-danger">*</span>單位</label
                    >
                    <input
                      id="unit"
                      type="text"
                      class="form-control"
                      placeholder="請輸入單位"
                      v-model="tempData[i18nStore.currentIcon].unit"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label"
                      ><span class="text-danger">*</span>原價</label
                    >
                    <input
                      id="origin_price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入原價"
                      v-model.number="tempData[i18nStore.currentIcon].origin_price"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label"
                      ><span class="text-danger">*</span>售價</label
                    >
                    <input
                      id="price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入售價"
                      v-model.number="tempData[i18nStore.currentIcon].price"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="dimensions" class="form-label"
                      ><span class="text-danger">*</span>產品規格 [長、寬、高] cm</label
                    >
                    <input
                      id="dimensions"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入商品長度+單位(cm)"
                      v-if="tempData && tempData[i18nStore.currentIcon].dimensions"
                      v-model.number="tempData[i18nStore.currentIcon].dimensions.length"
                    />
                    <input
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入商品寬+單位(cm)"
                      v-if="tempData && tempData[i18nStore.currentIcon].dimensions"
                      v-model.number="tempData[i18nStore.currentIcon].dimensions.width"
                    />
                    <input
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入商品高度+單位(cm)"
                      v-if="tempData && tempData[i18nStore.currentIcon].dimensions"
                      v-model.number="tempData[i18nStore.currentIcon].dimensions.height"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="colors" class="form-label"
                      ><span class="text-danger">*</span>產品顏色 [中文名稱|色碼 #rrggbb|顏色預覽]
                      <br />
                      <span class="text-danger">*</span>最少設定一組，最多三組</label
                    >
                    <div
                      class="input-group"
                      v-for="(color, index) in tempData[i18nStore.currentIcon].colors"
                      :key="index"
                    >
                      <input
                        id="colors"
                        type="text"
                        class="form-control d-inline-block w-25"
                        placeholder="顏色名稱(中文)"
                        v-model="color.title"
                      />
                      <input
                        type="text"
                        class="form-control d-inline-block w-50"
                        placeholder="顏色色碼 #rrggbb"
                        v-model="color.code"
                      />
                      <div
                        class="border border-2 w-25 p2"
                        :style="{ backgroundColor: color.code ? color.code : '' }"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label"
                    ><span class="text-danger">*</span>產品描述</label
                  >
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品描述"
                    v-model="tempData[i18nStore.currentIcon].description"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label"
                    ><span class="text-danger">*</span>說明內容</label
                  >
                  <textarea
                    id="content"
                    type="text"
                    class="form-control"
                    placeholder="請輸入說明內容"
                    v-model="tempData[i18nStore.currentIcon].content"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <h5 class="fw-bolder fs-6"><span class="text-danger">*</span>商品標籤設定</h5>
                  <div class="form-check d-inline-block">
                    <label class="form-check-label" for="isNew">新品(New)</label>
                    <input
                      id="isNew"
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempData[i18nStore.currentIcon].isNew"
                      :checked="tempData[i18nStore.currentIcon].isNew"
                    />
                  </div>
                  <div class="form-check d-inline-block ms-4">
                    <label class="form-check-label" for="isOnHot">熱門(Hot)</label>
                    <input
                      id="isOnHot"
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempData[i18nStore.currentIcon].isOnHot"
                      :checked="tempData[i18nStore.currentIcon].isOnHot"
                    />
                  </div>
                  <div class="form-check d-inline-block ms-4">
                    <label class="form-check-label" for="isRecommended">推薦(Recommended)</label>
                    <input
                      id="isRecommended"
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempData[i18nStore.currentIcon].isRecommended"
                      :checked="tempData[i18nStore.currentIcon].isRecommended"
                    />
                  </div>
                  <div class="form-check d-inline-block ms-4">
                    <label class="form-check-label" for="isOnSale">特價(Sale)</label>
                    <input
                      id="isOnSale"
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempData[i18nStore.currentIcon].isOnSale"
                      :checked="tempData[i18nStore.currentIcon].isOnSale"
                    />
                  </div>
                </div>
                <hr />
                <div class="mb-3">
                  <h5 class="fw-bolder fs-6"><span class="text-danger">*</span>商品開啟狀態</h5>
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      v-model="tempData[i18nStore.currentIcon].is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" @click="closeModal">
                取消
              </button>
              <button
                type="submit"
                class="btn btn-primary text-white px-5"
                :disabled="isSubmitting && meta.valid && meta.touched"
              >
                <!-- 新增 !meta.valid 當表單未驗證通過就無法送出請求 -->
                {{ isSubmitting ? 'Submitting...' : 'Submit' }}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
    {{ props.tempData }}
  </div>
</template>

<script setup>
// eslint-disable-next-line object-curly-newline
import { ref, onMounted, onUnmounted, computed, watchEffect, watch } from 'vue';
import { Modal } from 'bootstrap';
import { useI18n } from 'vue-i18n';
import axios from 'axios';
import { Form, Field, useForm } from 'vee-validate';

import useLoadingStore from '@/stores/loadingStores';
import useI18nStore from '@/stores/i18nStores';

const loadingStores = useLoadingStore();
const bsModalRef = ref(null);
const bsModalInstance = ref(null); // 實體存放區
const i18nStore = useI18nStore();

const schema = {
  tw: {
    imageUrl: { required: true },
  },
};
const props = defineProps({
  tempData: Object,
});

const { validate, values } = useForm({ validationSchema: schema, values: props.tempData });

const { t } = useI18n();

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

// 設定規則 (如果input沒有設置一樣就會無法送出 submit)
// const schema = {
//   imageUrl: 'required',
// };

// 處理表單送出的驗證
// const onSubmit = handleSubmit(
//   (values) =>
//     // Simulates a 2 second delay
//     new Promise((resolve) => {
//       setTimeout(() => {
//         console.log('Submitted', JSON.stringify(values, null, 2));
//         resolve();
//       }, 2000);
//     }),
// );
async function onSubmit(values, actions) {
  const { isValid } = await validate(); // 执行表单验证

  if (isValid) {
    console.log(values); // 这里是提交的表单数据
    // 在这里执行表单提交的逻辑
  } else {
    console.log('Form validation failed');
    // 可以根据需要处理验证失败的情况
  }
}
// const changeI18nAndResetErrorMessage = async (code, iconCode) => {
//   i18nStore.i18nChangeLocale(code, iconCode);

//   // 首先清除错误消息
//   errors.value.imageUrl = [];

//   // 手动触发验证
//   const isValid = await validate();

//   if (isValid) {
//     // 处理表单提交逻辑
//     console.log('isValid', isValid);
//   }
// };

const tempData = ref({
  // 因 api 格式要求，所以必須要有以下欄位，故不填寫任何資料
  title: 'title',
  category: 'category',
  origin_price: 999,
  price: 999,
  unit: 'unit',
  description: 'description',
  content: 'content',
  is_enabled: 1,
  imageUrl: '主圖網址',
  imagesUrl: ['1', '2', '3', '4', '5'],
  tw: {
    id: '', // 後端會自動產生，不用帶入
    title: '',
    category: '',
    subcategory: '',
    unit: '',
    imageUrl: '',
    imagesUrl: ['', '', '', '', ''],
    price: '',
    origin_price: '',
    description: '',
    content: '',
    is_enabled: 1,
    rating: 0,
    crate_date: new Date().getTime(),
    sales_num: 0,
    isNew: true, // 新品專區用
    isOnHot: false, // 首頁展示商品用
    isRecommended: false, // 前台預設排序用
    isOnSale: false, // 全部商品篩選用
    dimensions: {
      length: 0,
      width: 0,
      height: 0,
    },
    colors: [
      {
        title: '',
        code: '',
      },
      {
        title: '',
        code: '',
      },
      {
        title: '',
        code: '',
      },
    ],
  },
  us: {
    // (圖片、顏色、商品規格、標籤) 先共用同一組設定
    id: '', // 自己加入的屬性，加上對應資料
    title: '',
    category: '',
    subcategory: '',
    unit: '',
    imageUrl: '',
    imagesUrl: ['', '', '', '', ''],
    price: '',
    origin_price: '',
    description: '',
    content: '',
    is_enabled: 1,
    rating: 0,
    crate_date: new Date().getTime(),
    sales_num: 0,
    isNew: true, // 新品專區用
    isOnHot: false, // 首頁展示商品用
    isRecommended: false, // 前台預設排序用
    isOnSale: false, // 全部商品篩選用
    dimensions: {
      length: 0,
      width: 0,
      height: 0,
    },
    colors: [
      {
        title: '',
        code: '',
      },
      {
        title: '',
        code: '',
      },
      {
        title: '',
        code: '',
      },
    ],
  },
  jp: {
    // (圖片、顏色、商品規格、標籤) 先共用同一組設定
    id: '', // 自己加入的屬性，加上對應資料
    title: '',
    category: '',
    subcategory: '',
    unit: '',
    imageUrl: '',
    imagesUrl: ['', '', '', '', ''],
    price: '',
    origin_price: '',
    description: '',
    content: '',
    is_enabled: 1,
    rating: 0,
    crate_date: new Date().getTime(),
    sales_num: 0,
    isNew: true, // 新品專區用
    isOnHot: false, // 首頁展示商品用
    isRecommended: false, // 前台預設排序用
    isOnSale: false, // 全部商品篩選用
    dimensions: {
      length: 0,
      width: 0,
      height: 0,
    },
    colors: [
      {
        title: '',
        code: '',
      },
      {
        title: '',
        code: '',
      },
      {
        title: '',
        code: '',
      },
    ],
  },
  kr: {
    // (圖片、顏色、商品規格、標籤) 先共用同一組設定
    id: '', // 自己加入的屬性，加上對應資料
    title: '',
    category: '',
    subcategory: '',
    unit: '',
    imageUrl: '',
    imagesUrl: ['', '', '', '', ''],
    price: '',
    origin_price: '',
    description: '',
    content: '',
    is_enabled: 1,
    rating: 0,
    crate_date: new Date().getTime(),
    sales_num: 0,
    isNew: true, // 新品專區用
    isOnHot: false, // 首頁展示商品用
    isRecommended: false, // 前台預設排序用
    isOnSale: false, // 全部商品篩選用
    dimensions: {
      length: 0,
      width: 0,
      height: 0,
    },
    colors: [
      {
        title: '',
        code: '',
      },
      {
        title: '',
        code: '',
      },
      {
        title: '',
        code: '',
      },
    ],
  },
  th: {
    // (圖片、顏色、商品規格、標籤) 先共用同一組設定
    id: '', // 自己加入的屬性，加上對應資料
    title: '',
    category: '',
    subcategory: '',
    unit: '',
    imageUrl: '',
    imagesUrl: ['', '', '', '', ''],
    price: '',
    origin_price: '',
    description: '',
    content: '',
    is_enabled: 1,
    rating: 0,
    crate_date: new Date().getTime(),
    sales_num: 0,
    isNew: true, // 新品專區用
    isOnHot: false, // 首頁展示商品用
    isRecommended: false, // 前台預設排序用
    isOnSale: false, // 全部商品篩選用
    dimensions: {
      length: 0,
      width: 0,
      height: 0,
    },
    colors: [
      {
        title: '',
        code: '',
      },
      {
        title: '',
        code: '',
      },
      {
        title: '',
        code: '',
      },
    ],
  },
});

const categoryList = computed(() => [
  { id: '1', text: '家具' },
  { id: '2', text: '家飾' },
  { id: '3', text: '燈具' },
  { id: '4', text: '廚房用品' },
  { id: '5', text: '浴室用品' },
  { id: '6', text: '寢具' },
  { id: '7', text: '收納' },
  { id: '8', text: '戶外與園藝' },
  { id: '9', text: '辦公室用品' },
  { id: '10', text: '孩童家居' },
]);

const subcategoryList = computed(() => [
  { sid: '1', text: '沙發和座椅', cid: '1' },
  { sid: '2', text: '餐桌與椅子', cid: '1' },
  { sid: '3', text: '書桌和辦公椅', cid: '1' },
  { sid: '4', text: '床架與床墊', cid: '1' },
  { sid: '5', text: '衣櫃和儲物櫃', cid: '1' },
  { sid: '6', text: '咖啡桌和邊桌', cid: '1' },
  { sid: '7', text: '戶外家具', cid: '1' },
  { sid: '8', text: '衣櫃和儲物櫃', cid: '1' },
  { sid: '9', text: '地毯和地墊', cid: '2' },
  { sid: '10', text: '窗簾和百葉窗', cid: '2' },
  { sid: '11', text: '掛畫和壁飾', cid: '2' },
  { sid: '12', text: '裝飾枕頭和拋枕', cid: '2' },
  { sid: '13', text: '鏡子', cid: '2' },
  { sid: '14', text: '花瓶和室內植物', cid: '2' },
  { sid: '15', text: '蠟燭和香氛', cid: '2' },
  { sid: '16', text: '吊燈', cid: '3' },
  { sid: '17', text: '立燈', cid: '3' },
  { sid: '18', text: '桌燈', cid: '3' },
  { sid: '19', text: '牆燈', cid: '3' },
  { sid: '20', text: '戶外照明', cid: '3' },
  { sid: '21', text: '照明配件', cid: '3' },
  { sid: '22', text: '鍋具和烹飪工具', cid: '4' },
  { sid: '23', text: '餐具和餐具套裝', cid: '4' },
  { sid: '24', text: '廚房收納和組織', cid: '4' },
  { sid: '25', text: '小型廚房電器', cid: '4' },
  { sid: '26', text: '刀具和砧板', cid: '4' },
  { sid: '27', text: '浴巾和浴室地墊', cid: '5' },
  { sid: '28', text: '洗手間儲物', cid: '5' },
  { sid: '29', text: '浴室配件', cid: '5' },
  { sid: '30', text: '浴室裝飾', cid: '5' },
  { sid: '31', text: '床單和床罩', cid: '6' },
  { sid: '32', text: '被子和毛毯', cid: '6' },
  { sid: '33', text: '枕頭和枕套', cid: '6' },
  { sid: '34', text: '床墊保護套', cid: '6' },
  { sid: '35', text: '書架和展示櫃', cid: '7' },
  { sid: '36', text: '儲物箱和籃子', cid: '7' },
  { sid: '37', text: '衣櫥組織者', cid: '7' },
  { sid: '38', text: '鞋架和衣帽架', cid: '7' },
  { sid: '39', text: '戶外裝飾', cid: '8' },
  { sid: '40', text: '園藝工具和植物盆栽', cid: '8' },
  { sid: '41', text: '戶外休閒用品', cid: '8' },
  { sid: '42', text: '辦公桌和椅子', cid: '9' },
  { sid: '43', text: '辦公收納解決方案', cid: '9' },
  { sid: '44', text: '辦公室裝飾和文具', cid: '9' },
  { sid: '45', text: '兒童家具', cid: '10' },
  { sid: '46', text: '兒童房裝飾', cid: '10' },
  { sid: '47', text: '兒童寢具和玩具收納', cid: '10' },
]);

// 當選擇主分類時，篩選出對應的子分類
const filterCategory = computed(() => {
  if (tempData.value[i18nStore.currentIcon].category) {
    // (1) 先篩選目標主類型的 id
    // eslint-disable-next-line no-confusing-arrow
    const targetId = categoryList.value.filter((item) => {
      if (item.text === tempData.value[i18nStore.currentIcon].category) {
        return item.id;
      }
      return null;
    });
    // (2) 依照主類型的 id 篩選其對應底下的 子類型 id
    const filterList = subcategoryList.value.filter((item) => item.cid === targetId[0].id);
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    tempData.value[i18nStore.currentIcon].subcategory = filterList[0].text; // 用來改變 select 預設內容
    return filterList;
  }
  return subcategoryList.value;
});

onMounted(() => {
  // bootstrap modal init
  bsModalInstance.value = new Modal(bsModalRef.value, {
    backdrop: 'static',
    keyboard: false,
  });
});

onUnmounted(() => {
  // bootstrap modal close 清除實體化
  if (bsModalInstance.value) {
    bsModalInstance.value.dispose();
  }
});

const openModal = (type, data) => {
  if (type === 'create') {
    tempData.value = {
      // 因 api 格式要求，所以必須要有以下欄位，故不填寫任何資料
      title: 'title',
      category: 'category',
      origin_price: 999,
      price: 999,
      unit: 'unit',
      description: 'description',
      content: 'content',
      is_enabled: 1,
      imageUrl: '主圖網址',
      imagesUrl: ['1', '2', '3', '4', '5'],
      tw: {
        id: '', // 後端會自動產生，不用帶入
        title: '',
        category: '',
        subcategory: '',
        unit: '',
        imageUrl: '',
        imagesUrl: ['', '', '', '', ''],
        price: '',
        origin_price: '',
        description: '',
        content: '',
        is_enabled: 1,
        rating: 0,
        crate_date: new Date().getTime(),
        sales_num: 0,
        isNew: true, // 新品專區用
        isOnHot: false, // 首頁展示商品用
        isRecommended: false, // 前台預設排序用
        isOnSale: false, // 全部商品篩選用
        dimensions: {
          length: 0,
          width: 0,
          height: 0,
        },
        colors: [
          {
            title: '',
            code: '',
          },
          {
            title: '',
            code: '',
          },
          {
            title: '',
            code: '',
          },
        ],
      },
      us: {
        // (圖片、顏色、商品規格、標籤) 先共用同一組設定
        id: '', // 自己加入的屬性，加上對應資料
        title: '',
        category: '',
        subcategory: '',
        unit: '',
        imageUrl: '',
        imagesUrl: ['', '', '', '', ''],
        price: '',
        origin_price: '',
        description: '',
        content: '',
        is_enabled: 1,
        rating: 0,
        crate_date: new Date().getTime(),
        sales_num: 0,
        isNew: true, // 新品專區用
        isOnHot: false, // 首頁展示商品用
        isRecommended: false, // 前台預設排序用
        isOnSale: false, // 全部商品篩選用
        dimensions: {
          length: 0,
          width: 0,
          height: 0,
        },
        colors: [
          {
            title: '',
            code: '',
          },
          {
            title: '',
            code: '',
          },
          {
            title: '',
            code: '',
          },
        ],
      },
      jp: {
        // (圖片、顏色、商品規格、標籤) 先共用同一組設定
        id: '', // 自己加入的屬性，加上對應資料
        title: '',
        category: '',
        subcategory: '',
        unit: '',
        imageUrl: '',
        imagesUrl: ['', '', '', '', ''],
        price: '',
        origin_price: '',
        description: '',
        content: '',
        is_enabled: 1,
        rating: 0,
        crate_date: new Date().getTime(),
        sales_num: 0,
        isNew: true, // 新品專區用
        isOnHot: false, // 首頁展示商品用
        isRecommended: false, // 前台預設排序用
        isOnSale: false, // 全部商品篩選用
        dimensions: {
          length: 0,
          width: 0,
          height: 0,
        },
        colors: [
          {
            title: '',
            code: '',
          },
          {
            title: '',
            code: '',
          },
          {
            title: '',
            code: '',
          },
        ],
      },
      kr: {
        // (圖片、顏色、商品規格、標籤) 先共用同一組設定
        id: '', // 自己加入的屬性，加上對應資料
        title: '',
        category: '',
        subcategory: '',
        unit: '',
        imageUrl: '',
        imagesUrl: ['', '', '', '', ''],
        price: '',
        origin_price: '',
        description: '',
        content: '',
        is_enabled: 1,
        rating: 0,
        crate_date: new Date().getTime(),
        sales_num: 0,
        isNew: true, // 新品專區用
        isOnHot: false, // 首頁展示商品用
        isRecommended: false, // 前台預設排序用
        isOnSale: false, // 全部商品篩選用
        dimensions: {
          length: 0,
          width: 0,
          height: 0,
        },
        colors: [
          {
            title: '',
            code: '',
          },
          {
            title: '',
            code: '',
          },
          {
            title: '',
            code: '',
          },
        ],
      },
      th: {
        // (圖片、顏色、商品規格、標籤) 先共用同一組設定
        id: '', // 自己加入的屬性，加上對應資料
        title: '',
        category: '',
        subcategory: '',
        unit: '',
        imageUrl: '',
        imagesUrl: ['', '', '', '', ''],
        price: '',
        origin_price: '',
        description: '',
        content: '',
        is_enabled: 1,
        rating: 0,
        crate_date: new Date().getTime(),
        sales_num: 0,
        isNew: true, // 新品專區用
        isOnHot: false, // 首頁展示商品用
        isRecommended: false, // 前台預設排序用
        isOnSale: false, // 全部商品篩選用
        dimensions: {
          length: 0,
          width: 0,
          height: 0,
        },
        colors: [
          {
            title: '',
            code: '',
          },
          {
            title: '',
            code: '',
          },
          {
            title: '',
            code: '',
          },
        ],
      },
    };
    bsModalInstance.value.show();
  } else if (type === 'edit') {
    console.log('data', data);
    // 編輯就直接將點選資料帶入。
    tempData.value = data;
    bsModalInstance.value.show();
  }
};

const closeModal = () => bsModalInstance.value.hide(); // 關閉模組

const addOrPutProduct = async () => {
  try {
    loadingStores.toggleLoading();
    const type = tempData.value[i18nStore.currentIcon].id ? '儲存' : '新增';
    let api;
    let response;
    if (type === '新增') {
      api = `${baseApiUrl}/v2/api/${apiPath}/admin/product`;
      response = await axios.post(api, { data: tempData.value });
    } else if (type === '儲存') {
      api = `${baseApiUrl}/v2/api/${apiPath}/admin/product/${tempData.value.id}`;
      response = await axios.put(api, { data: tempData.value });
    }
    console.log('response', response);
  } catch (error) {
    console.log(error);
  } finally {
    loadingStores.toggleLoading();
  }
};

watchEffect(() => {
  console.log(tempData.value);
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
