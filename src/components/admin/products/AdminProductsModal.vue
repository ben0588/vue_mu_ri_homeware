<!-- eslint-disable max-len -->
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
              newTempData?.id
                ? // eslint-disable-next-line max-len
                  `${t('admin.products_edit_text')}：${newTempData.id}
                  [${t('admin.products_modal_current_language')}：${i18nStore.currentLocale}]`
                : // eslint-disable-next-line max-len
                  `${t('admin.products_create_title')}
                  [${t('admin.products_modal_current_language')}：${i18nStore.currentLocale}]`
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
          <form>
            <div>
              <span class="text-danger">*</span>{{ t('admin.products_modal_illustrate_message') }}
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label"
                    ><span class="text-danger">*</span
                    >{{ t('admin.products_modal_middle_url_img') }}
                  </label>
                  <input
                    id="imageUrl"
                    type="text"
                    class="form-control"
                    :placeholder="`${t('admin.products_modal_middle_url_img_placeholder')}`"
                    v-model="newTempData[i18nStore.currentIcon].imageUrl"
                  />
                </div>
                <div class="input-group mb-3">
                  <label for="imageUrlFile" class="form-label w-100">{{
                    t('admin.products_modal_middle_file_img')
                  }}</label>
                  <input
                    class="form-control"
                    type="file"
                    name="file-to-upload"
                    id="imageUrlFile"
                    ref="fileRef"
                    @change="handleFileUpload"
                  />

                  <button
                    class="input-group-text bg-dark text-white d-block w-100"
                    type="button"
                    :value="`${t('admin.products_modal_middle_file_img_button')}`"
                    @click="handleUploadImg"
                    :class="{ 'bg-secondary': uploadLoading, 'text-white': uploadLoading }"
                    :disabled="!fileSelected || uploadLoading"
                    :title="!fileSelected ? '請先選擇檔案' : '上傳檔案'"
                  >
                    <span v-if="uploadLoading"
                      ><span class="spinner-border spinner-border-sm me-1" role="status">
                        <span class="visually-hidden">上傳中</span>
                      </span>
                      <span
                        >{{ t('admin.products_modal_middle_file_img_button') }} ing..</span
                      ></span
                    >
                    <span v-else>{{ t('admin.products_modal_middle_file_img_button') }}</span>
                  </button>
                </div>

                <div class="input-group mb-3">
                  <label class="form-label w-100">{{ t('admin.products_modal_url_images') }}</label>
                  <input
                    type="text"
                    class="form-control w-100"
                    v-for="(item, index) in newTempData[i18nStore.currentIcon].imagesUrl"
                    :key="index"
                    v-model="newTempData[i18nStore.currentIcon].imagesUrl[index]"
                    :placeholder="`【${index + 1}】 ${t('admin.products_modal_url_images_placeholder')}`"
                  />
                </div>

                <div class="input-group mb-3">
                  <label class="form-label w-100">輸入圖片描述 (共五張)</label>
                  <input
                    type="text"
                    class="form-control w-100"
                    v-for="(item, index) in newTempData[i18nStore.currentIcon]
                      .imagesUrlDescriptions"
                    :key="index"
                    v-model="newTempData[i18nStore.currentIcon].imagesUrlDescriptions[index]"
                    :placeholder="`【${index + 1}】 請輸入圖片描述`"
                  />
                </div>

                <!-- 主圖片預覽 -->
                <div v-if="newTempData[i18nStore.currentIcon].imageUrl">
                  <h5 class="mb-0 mt-2 fw-bolder">
                    {{ t('admin.products_modal_middle_img_preview') }}
                  </h5>
                  <img
                    class="img-fluid border border-2"
                    :src="newTempData[i18nStore.currentIcon].imageUrl"
                    alt="主圖片預覽"
                  />
                </div>
                <!-- 讓其他五張圖片依序可以預覽 -->
                <div
                  v-for="(img, index) in newTempData[i18nStore.currentIcon].imagesUrl"
                  :key="index"
                >
                  <div v-if="newTempData[i18nStore.currentIcon].imagesUrl[index]">
                    <p class="mb-0 mt-2">
                      {{ t('admin.products_modal_url_images_preview') }}【{{ index + 1 }}】
                    </p>
                    <img
                      class="img-fluid border border-2"
                      :src="newTempData[i18nStore.currentIcon].imagesUrl[index]"
                      alt="副圖片預覽"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label"
                    ><span class="text-danger">*</span>{{ t('admin.products_modal_title') }}</label
                  >
                  <input
                    id="title"
                    type="text"
                    class="form-control"
                    :placeholder="t('admin.products_modal_title_placeholder')"
                    v-model="newTempData[i18nStore.currentIcon].title"
                  />
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label"
                      ><span class="text-danger">*</span
                      >{{ t('admin.products_modal_category') }}</label
                    >

                    <select
                      id="category"
                      class="form-select form-select-sm"
                      v-model="newTempData[i18nStore.currentIcon].category"
                    >
                      <option value="" selected disabled>
                        {{ t('admin.products_modal_category_placeholder') }}
                      </option>
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
                      ><span class="text-danger">*</span
                      >{{ t('admin.products_modal_subcategory') }}</label
                    >
                    <select
                      id="subcategory"
                      class="form-select form-select-sm"
                      v-model="newTempData[i18nStore.currentIcon].subcategory"
                    >
                      <option value="" selected disabled v-if="!newTempData.subcategory">
                        {{ t('admin.products_modal_subcategory_placeholder') }}
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
                      ><span class="text-danger">*</span>{{ t('admin.products_modal_unit') }}</label
                    >
                    <input
                      id="unit"
                      type="text"
                      class="form-control"
                      :placeholder="t('admin.products_modal_unit_placeholder')"
                      v-model="newTempData[i18nStore.currentIcon].unit"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="stock" class="form-label"
                      ><span class="text-danger">*</span
                      >{{ t('admin.products_modal_stock') }}</label
                    >
                    <input
                      id="stock"
                      type="number"
                      min="1"
                      class="form-control"
                      :placeholder="t('admin.products_modal_stock_placeholder')"
                      v-model.number="newTempData[i18nStore.currentIcon].stock"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label"
                      ><span class="text-danger">*</span
                      >{{ t('admin.products_modal_origin_price') }}</label
                    >
                    <input
                      id="origin_price"
                      type="number"
                      min="0"
                      class="form-control"
                      :placeholder="t('admin.products_modal_origin_price_placeholder')"
                      v-model.number="newTempData[i18nStore.currentIcon].origin_price"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label"
                      ><span class="text-danger">*</span
                      >{{ t('admin.products_modal_price') }}</label
                    >
                    <input
                      id="price"
                      type="number"
                      min="0"
                      class="form-control"
                      :placeholder="t('admin.products_modal_price_placeholder')"
                      v-model.number="newTempData[i18nStore.currentIcon].price"
                    />
                  </div>
                  <div class="mb-3 col-md-6 mt-4">
                    <label for="dimensions" class="form-label"
                      ><span class="text-danger">*</span
                      >{{ t('admin.products_modal_dimensions') }}</label
                    >
                    <input
                      id="dimensions"
                      type="number"
                      min="0"
                      class="form-control"
                      :placeholder="t('admin.products_modal_dimensions_length')"
                      v-if="newTempData && newTempData[i18nStore.currentIcon].dimensions"
                      v-model.number="newTempData[i18nStore.currentIcon].dimensions.length"
                    />
                    <input
                      type="number"
                      min="0"
                      class="form-control"
                      :placeholder="t('admin.products_modal_dimensions_width')"
                      v-if="newTempData && newTempData[i18nStore.currentIcon].dimensions"
                      v-model.number="newTempData[i18nStore.currentIcon].dimensions.width"
                    />
                    <input
                      type="number"
                      min="0"
                      class="form-control"
                      :placeholder="t('admin.products_modal_dimensions_height')"
                      v-if="newTempData && newTempData[i18nStore.currentIcon].dimensions"
                      v-model.number="newTempData[i18nStore.currentIcon].dimensions.height"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="colors" class="form-label"
                      ><span class="text-danger">*</span>{{ t('admin.products_modal_colors') }}
                      <br />
                      <span class="text-danger">*</span
                      >{{ t('admin.products_modal_colors_subtitle') }}</label
                    >
                    <div
                      class="input-group"
                      v-for="(color, index) in newTempData[i18nStore.currentIcon].colors"
                      :key="index"
                    >
                      <input
                        type="text"
                        class="form-control d-inline-block w-25"
                        :placeholder="t('admin.products_modal_color_name')"
                        v-model="color.title"
                      />
                      <input
                        type="text"
                        class="form-control d-inline-block w-50"
                        :placeholder="t('admin.products_modal_color_code')"
                        v-model="color.code"
                      />
                      <div
                        class="border border-2 w-25 p2"
                        :style="{ backgroundColor: color.code ? color.code : '' }"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="material" class="form-label"
                      ><span class="text-danger">*</span
                      >{{ t('admin.products_modal_material') }}</label
                    >
                    <input
                      id="material"
                      type="text"
                      class="form-control"
                      :placeholder="t('admin.products_modal_material_placeholder')"
                      v-model="newTempData[i18nStore.currentIcon].material"
                    />
                  </div>
                  <div class="col-md-6 mb-3 mt-2">
                    <label class="form-label"
                      ><span class="text-danger">*</span>{{ t('admin.products_modal_star') }}
                    </label>
                    <div
                      v-for="(star, index) in newTempData[i18nStore.currentIcon].ratings"
                      :key="index"
                      class="mt-1"
                    >
                      <label :for="index" class="form-label me-2">{{ index }}</label>
                      <input
                        type="number"
                        class="form-control d-inline-block w-50"
                        :id="index"
                        v-model.number="star.count"
                      />
                    </div>
                  </div>
                </div>

                <div class="my-3">
                  <label for="description" class="form-label"
                    ><span class="text-danger">*</span
                    >{{ t('admin.products_modal_description') }}</label
                  >
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    :placeholder="t('admin.products_modal_description_placeholder')"
                    v-model="newTempData[i18nStore.currentIcon].description"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label"
                    ><span class="text-danger">*</span
                    >{{ t('admin.products_modal_content') }}</label
                  >
                  <textarea
                    id="content"
                    type="text"
                    class="form-control"
                    :placeholder="t('admin.products_modal_content_placeholder')"
                    v-model="newTempData[i18nStore.currentIcon].content"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <h5 class="fw-bolder fs-6">
                    {{ t('admin.products_modal_tag') }}
                  </h5>
                  <div class="form-check d-inline-block">
                    <label class="form-check-label" for="isNew">{{
                      t('admin.products_modal_tag_new')
                    }}</label>
                    <input
                      id="isNew"
                      class="form-check-input"
                      type="checkbox"
                      v-model="newTempData[i18nStore.currentIcon].isNew"
                      :checked="newTempData[i18nStore.currentIcon].isNew"
                    />
                  </div>
                  <div class="form-check d-inline-block ms-4">
                    <label class="form-check-label" for="isOnHot">{{
                      t('admin.products_modal_tag_hot')
                    }}</label>
                    <input
                      id="isOnHot"
                      class="form-check-input"
                      type="checkbox"
                      v-model="newTempData[i18nStore.currentIcon].isOnHot"
                      :checked="newTempData[i18nStore.currentIcon].isOnHot"
                    />
                  </div>
                  <div class="form-check d-inline-block ms-4">
                    <label class="form-check-label" for="isRecommended">{{
                      t('admin.products_modal_tag_recommended')
                    }}</label>
                    <input
                      id="isRecommended"
                      class="form-check-input"
                      type="checkbox"
                      v-model="newTempData[i18nStore.currentIcon].isRecommended"
                      :checked="newTempData[i18nStore.currentIcon].isRecommended"
                    />
                  </div>
                  <div class="form-check d-inline-block ms-4">
                    <label class="form-check-label" for="isOnSale">{{
                      t('admin.products_modal_tag_sale')
                    }}</label>
                    <input
                      id="isOnSale"
                      class="form-check-input"
                      type="checkbox"
                      v-model="newTempData[i18nStore.currentIcon].isOnSale"
                      :checked="newTempData[i18nStore.currentIcon].isOnSale"
                    />
                  </div>
                </div>
                <hr />
                <div class="mb-3">
                  <h5 class="fw-bolder fs-6">
                    <span class="text-danger">*</span
                    >{{ t('admin.products_modal_is_enabled_state') }}
                  </h5>
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      v-model="newTempData[i18nStore.currentIcon].is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">{{
                      t('admin.products_modal_is_enabled_checkbox')
                    }}</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary text-dark" @click="closeModal">
                {{ t('admin.products_cancel_text') }}
              </button>
              <button
                type="submit"
                class="btn btn-primary text-white px-5"
                @click="addOrPutProduct"
                :disabled="submitIsLoading"
              >
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
import { ref, onMounted, onUnmounted, computed, watch, watchEffect } from 'vue';
import { Modal } from 'bootstrap';
import { useI18n } from 'vue-i18n';
import axios from 'axios';

import useI18nStore from '@/stores/i18nStores';
import { useAlert } from '@/composables/useAlert';

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;
const bsModalRef = ref(null);
const bsModalInstance = ref(null); // 實體存放區
const i18nStore = useI18nStore();
const { t } = useI18n();
const { showAlert } = useAlert();
const currentPage = ref(0);

const props = defineProps({
  typeName: String,
});

const emits = defineEmits(['refetch-products']);

const newLanguageData = {
  // (圖片、顏色、商品規格、標籤) 先共用同一組設定
  id: new Date().getTime(), // 自己加入的屬性，加上對應資料
  title: '',
  category: '',
  subcategory: '',
  unit: '',
  stock: '1',
  imageUrl: '',
  imagesUrl: ['', '', '', '', ''],
  imagesUrlDescriptions: ['', '', '', '', ''],
  price: '',
  origin_price: '',
  description: '',
  content: '',
  is_enabled: 1,
  ratings: {
    star_1: {
      count: 0,
      reviews: [
        {
          user: '評論名稱',
          comment: '產品描述',
          reviewId: '頻論會員id',
        },
      ],
    },
    star_2: {
      count: 0,
    },
    star_3: {
      count: 0,
    },
    star_4: {
      count: 0,
    },
    star_5: {
      count: 9,
      reviews: [
        {
          user: 'Alex',
          comment: '商品品質再棒了!很喜歡',
          reviewId: 'r1',
        },
        {
          user: 'Ben',
          comment: '躺起來非常舒服~~',
          reviewId: 'r2',
        },
      ],
    },
  },
  create_date: Math.floor(new Date().getTime() / 1000),
  sales_num: 0,
  isNew: false, // 新品專區用
  isOnHot: false, // 首頁展示商品用
  isRecommended: false, // 前台預設排序用
  isOnSale: false, // 全部商品篩選用
  material: '',
  dimensions: {
    length: '',
    width: '',
    height: '',
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
};

const newTempData = ref({
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
  ratings: {
    star_1: {
      count: 0,
      reviews: [
        {
          user: '評論名稱',
          comment: '產品描述',
          reviewId: '頻論會員id',
        },
      ],
    },
    star_2: {
      count: 0,
    },
    star_3: {
      count: 0,
    },
    star_4: {
      count: 0,
    },
    star_5: {
      count: 9,
      reviews: [
        {
          user: 'Alex',
          comment: '商品品質再棒了!很喜歡',
          reviewId: 'r1',
        },
        {
          user: 'Ben',
          comment: '躺起來非常舒服~~',
          reviewId: 'r2',
        },
      ],
    },
  },
  create_date: Math.floor(new Date().getTime() / 1000),
  sales_num: 0,
  isNew: true, // 新品專區用
  isOnHot: false, // 首頁展示商品用
  isRecommended: false, // 前台預設排序用
  isOnSale: false, // 全部商品篩選用
  material: '',
  dimensions: {
    length: '',
    width: '',
    height: '',
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
  tw: { ...newLanguageData },
  us: { ...newLanguageData },
  jp: { ...newLanguageData },
  kr: { ...newLanguageData },
  th: { ...newLanguageData },
});

const categoryList = computed(() => [
  { id: '1', text: t('admin.products_modal_category_furniture') }, // 家具
  { id: '2', text: t('admin.products_modal_category_home_decor') }, // 家飾
  { id: '3', text: t('admin.products_modal_category_lighting') }, // 燈具
  { id: '4', text: t('admin.products_modal_category_kitchenware') }, // 廚房用品
  { id: '5', text: t('admin.products_modal_category_bathroom_accessories') }, // 浴室用品
  { id: '6', text: t('admin.products_modal_category_bedding') }, // 寢具
  { id: '7', text: t('admin.products_modal_category_storage') }, // 收納
  { id: '8', text: t('admin.products_modal_category_outdoor_and_garden') }, // 戶外與園藝
  { id: '9', text: t('admin.products_modal_category_office_supplies') }, // 辦公室用品
  { id: '10', text: t('admin.products_modal_category_children_furniture') }, // 孩童家居
]);

const subcategoryList = computed(() => [
  { id: '1', text: t('admin.products_modal_subcategory_sofas_and_chairs'), cid: '1' }, // 沙發和座椅
  { id: '2', text: t('admin.products_modal_subcategory_tables_and_chairs'), cid: '1' }, // 餐桌與椅子
  { id: '3', text: t('admin.products_modal_subcategory_desks_and_office_chairs'), cid: '1' }, // 書桌和辦公椅
  { id: '4', text: t('admin.products_modal_subcategory_bed_frames_and_mattresses'), cid: '1' }, // 床架和床墊
  { id: '5', text: t('admin.products_modal_subcategory_wardrobes_and_storage_cabinets'), cid: '1' }, // 衣櫃和儲物櫃
  { id: '6', text: t('admin.products_modal_subcategory_coffee_tables_and_side_tables'), cid: '1' }, // 咖啡桌和邊桌
  { id: '7', text: t('admin.products_modal_subcategory_outdoor_furniture'), cid: '1' }, // 戶外家具
  { id: '9', text: t('admin.products_modal_subcategory_rugs_and_floor_mats'), cid: '2' }, // 地毯和地墊
  { id: '10', text: t('admin.products_modal_subcategory_curtains_and_blinds'), cid: '2' }, // 窗簾和百葉窗
  { id: '11', text: t('admin.products_modal_subcategory_paintings_and_wall_decor'), cid: '2' }, // 掛畫和壁飾
  {
    id: '12',
    text: t('admin.products_modal_subcategory_decorative_pillows_and_throw_pillows'),
    cid: '2',
  }, // 裝飾枕頭和拋枕
  { id: '13', text: t('admin.products_modal_subcategory_mirrors'), cid: '2' }, // 鏡子
  { id: '14', text: t('admin.products_modal_subcategory_vases_and_indoor_plants'), cid: '2' }, // 花瓶和室內植物
  { id: '15', text: t('admin.products_modal_subcategory_candles_and_fragrances'), cid: '2' }, // 蠟燭和香氛
  { id: '16', text: t('admin.products_modal_subcategory_pendant_lights'), cid: '3' }, // 吊燈
  { id: '17', text: t('admin.products_modal_subcategory_floor_lamps'), cid: '3' }, // 立燈
  { id: '18', text: t('admin.products_modal_subcategory_table_lamps'), cid: '3' }, // 桌燈
  { id: '19', text: t('admin.products_modal_subcategory_wall_lamps'), cid: '3' }, // 牆燈
  { id: '20', text: t('admin.products_modal_subcategory_outdoor_lighting'), cid: '3' }, // 戶外照明
  { id: '21', text: t('admin.products_modal_subcategory_lighting_accessories'), cid: '3' }, // 照明配件
  { id: '22', text: t('admin.products_modal_subcategory_cookware_and_cooking_utensils'), cid: '4' }, // 鍋具和烹飪工具
  { id: '23', text: t('admin.products_modal_subcategory_tableware_and_dining_sets'), cid: '4' }, // 餐具和餐具套裝
  {
    id: '24',
    text: t('admin.products_modal_subcategory_kitchen_storage_and_organization'),
    cid: '4',
  }, // 廚房收納和組織
  { id: '25', text: t('admin.products_modal_subcategory_small_kitchen_appliances'), cid: '4' }, // 小型廚房電器
  { id: '26', text: t('admin.products_modal_subcategory_knives_and_cutting_boards'), cid: '4' }, // 刀具和砧板
  { id: '27', text: t('admin.products_modal_subcategory_bath_towels_and_bathroom_mats'), cid: '5' }, // 浴巾和浴室地墊
  { id: '28', text: t('admin.products_modal_subcategory_bathroom_storage'), cid: '5' }, // 洗手間儲物
  { id: '29', text: t('admin.products_modal_subcategory_bathroom_accessories'), cid: '5' }, // 浴室配件
  { id: '30', text: t('admin.products_modal_subcategory_bathroom_decor'), cid: '5' }, // 浴室裝飾
  { id: '31', text: t('admin.products_modal_subcategory_sheets_and_bed_covers'), cid: '6' }, // 床單和床罩
  { id: '32', text: t('admin.products_modal_subcategory_blankets_and_quilts'), cid: '6' }, // 被子和毛毯
  { id: '33', text: t('admin.products_modal_subcategory_pillows_and_pillowcases'), cid: '6' }, // 枕頭和枕套
  { id: '34', text: t('admin.products_modal_subcategory_mattress_protectors'), cid: '6' }, // 床墊保護套
  {
    id: '35',
    text: t('admin.products_modal_subcategory_bookshelves_and_display_cabinets'),
    cid: '7',
  }, // 書架和展示櫃
  { id: '36', text: t('admin.products_modal_subcategory_storage_boxes_and_baskets'), cid: '7' }, // 儲物箱和籃子
  { id: '37', text: t('admin.products_modal_subcategory_closet_organizers'), cid: '7' }, // 衣櫥組織者
  { id: '38', text: t('admin.products_modal_subcategory_shoe_racks_and_coat_racks'), cid: '7' }, // 鞋架和衣帽架
  { id: '39', text: t('admin.products_modal_subcategory_outdoor_decor'), cid: '8' }, // 戶外裝飾
  { id: '40', text: t('admin.products_modal_subcategory_gardening_tools_and_planters'), cid: '8' }, // 園藝工具和植物盆栽
  { id: '41', text: t('admin.products_modal_subcategory_outdoor_leisure'), cid: '8' }, // 戶外休閒用品
  { id: '42', text: t('admin.products_modal_subcategory_office_desks_and_chairs'), cid: '9' }, // 辦公桌和椅子
  { id: '43', text: t('admin.products_modal_subcategory_office_storage_solutions'), cid: '9' }, // 辦公收納解決方案
  { id: '44', text: t('admin.products_modal_subcategory_office_decor_and_stationery'), cid: '9' }, // 辦公室裝飾和文具
  { id: '45', text: t('admin.products_modal_subcategory_childrens_furniture'), cid: '10' }, // 兒童家具
  { id: '46', text: t('admin.products_modal_subcategory_childrens_room_decor'), cid: '10' }, // 兒童房裝飾
  {
    id: '47',
    text: t('admin.products_modal_subcategory_childrens_bedding_and_toy_storage'),
    cid: '10',
  }, // 兒童寢具和玩具收納
]);

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

// 當選擇主分類時，篩選出對應的子分類
const filterCategory = computed(() => {
  if (newTempData.value[i18nStore.currentIcon].category) {
    // (1) 先篩選目標主類型的 id
    // eslint-disable-next-line no-confusing-arrow
    const targetId = categoryList.value.filter((item) => {
      if (item.text === newTempData.value[i18nStore.currentIcon].category) {
        return item.id;
      }
      return null;
    });
    // (2) 依照主類型的 id 篩選其對應底下的 子類型 id
    const filterList = subcategoryList.value.filter((item) => item.cid === targetId[0].id);
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    newTempData.value[i18nStore.currentIcon].subcategory = filterList[0].text; // 用來改變 select 預設內容
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

const fileRef = ref(null);
const uploadLoading = ref(false);
const fileUploadMessage = ref('');
const fileSelected = ref(false);
const handleFileUpload = (event) => {
  fileSelected.value = true;
  const { files } = event.target;
  fileRef.value = files; // 儲存檔案位置
  if (fileRef.value[0]?.name) {
    const regex = /\.(jpg|png|jpeg)$/;
    const isJpgOrPng = regex.test(fileRef.value[0].name); // 判斷是不是指定檔案格式
    const maxSizeInBytes = 3 * 1024 * 1024; // 3MB 換算數值
    if (isJpgOrPng) {
      fileUploadMessage.value = '';
      if (fileRef.value[0].size > maxSizeInBytes) {
        fileUploadMessage.value = '檔案大小限制為 3MB 以下，請重新選擇';
      }
    } else if (!isJpgOrPng) {
      fileSelected.value = false;
      fileUploadMessage.value = '限制只能上傳 .jpg、.jpeg  或 .png 格式圖片';
    }
  }
};
const handleUploadImg = async () => {
  try {
    uploadLoading.value = true;
    const formData = new FormData();
    if (fileRef.value.files) {
      formData.append('file-to-upload', fileRef.value.files[0]);
      const api = `${baseApiUrl}/v2/api/${apiPath}/admin/upload`;
      const headers = {
        'Content-Type': 'multipart/form-data',
      };
      const response = await axios.post(api, formData, { headers });
      if (response.data.success) {
        newTempData.value[i18nStore.currentIcon].imageUrl = response.data.imageUrl; // 依照各語系資料儲存
        if (fileRef.value) {
          fileRef.value.value = ''; // 直接清空 <input> 元素的值
        }
        showAlert({
          position: 'top-start',
          title: `成功 | ${t('admin.message_success')}`,
          icon: 'success',
          showConfirmButton: false,
          timer: 1000,
        });
      }
    }
  } catch (error) {
    showAlert({
      title: `${error.response.data.message} | ${t('admin.message_error')}`,
      icon: 'error',
      confirmButtonText: `${t('admin.message_confirm_text')}`,
      confirmButtonColor: '#000000',
    });
  } finally {
    uploadLoading.value = false;
  }
};

const openModal = (type, data, page) => {
  currentPage.value = page;
  if (type === 'create') {
    newTempData.value = {
      // 因 api 格式要求，所以必須要有以下欄位，故不填寫任何資料
      title: '',
      category: '',
      origin_price: 0,
      price: 0,
      unit: '',
      description: '',
      content: '',
      is_enabled: 1,
      imageUrl: '',
      imagesUrl: ['1', '2', '3', '4', '5'],
      create_date: new Date().getTime(),
      // 防止深層拷貝
      tw: { ...JSON.parse(JSON.stringify(newLanguageData)) },
      us: { ...JSON.parse(JSON.stringify(newLanguageData)) },
      jp: { ...JSON.parse(JSON.stringify(newLanguageData)) },
      kr: { ...JSON.parse(JSON.stringify(newLanguageData)) },
      th: { ...JSON.parse(JSON.stringify(newLanguageData)) },
    };
    fileRef.value.value = null; // 清空 file 檔案
    bsModalInstance.value.show();
  } else if (type === 'edit') {
    // 編輯就直接將點選資料帶入。
    newTempData.value = JSON.parse(JSON.stringify(data));
    fileRef.value.value = null; // 清空 file 檔案
    bsModalInstance.value.show();
  }
};

const closeModal = () => {
  // formRef.value.reset(); // 清除表單內容 (若使用表單清除會把預設值清除，所以用以下方式)
  newTempData.value = {
    // 因 api 格式要求，所以必須要有以下欄位，故不填寫任何資料
    title: '',
    category: '',
    origin_price: 999,
    price: 999,
    unit: '',
    description: '',
    content: '',
    is_enabled: 1,
    imageUrl: '',
    imagesUrl: ['1', '2', '3', '4', '5'],
    // 防止深層拷貝
    tw: { ...JSON.parse(JSON.stringify(newLanguageData)) },
    us: { ...JSON.parse(JSON.stringify(newLanguageData)) },
    jp: { ...JSON.parse(JSON.stringify(newLanguageData)) },
    kr: { ...JSON.parse(JSON.stringify(newLanguageData)) },
    th: { ...JSON.parse(JSON.stringify(newLanguageData)) },
  };
  uploadLoading.value = false;
  fileUploadMessage.value = '';
  fileSelected.value = false;
  bsModalInstance.value.hide();
}; // 關閉模組

watch(
  () => newTempData.value.tw,
  () => {
    // 當繁體中文商品主類型有修改，那麼就改主類型的紀錄
    newTempData.value.category = newTempData.value.tw.category;
  },
);

watchEffect(() => {
  // 因為未來想要將 i18n 做完，所以先用此方式更修改統一呈現的商品資訊
  newTempData.value.title = newTempData.value.tw.title;
  newTempData.value.category = newTempData.value.tw.category;
  newTempData.value.origin_price = newTempData.value.tw.origin_price;
  newTempData.value.price = newTempData.value.tw.price;
  newTempData.value.unit = newTempData.value.tw.unit;
  newTempData.value.material = newTempData.value.tw.material;
  newTempData.value.description = newTempData.value.tw.description;
  newTempData.value.content = newTempData.value.tw.content;
  newTempData.value.is_enabled = newTempData.value.tw.is_enabled;
  newTempData.value.imageUrl = newTempData.value.tw.imageUrl;
  newTempData.value.imagesUrl = newTempData.value.tw.imagesUrl;
  newTempData.value.imagesUrlDescriptions = newTempData.value.tw.imagesUrlDescriptions;
  newTempData.value.ratings = newTempData.value.tw.ratings;
  newTempData.value.sales_num = newTempData.value.tw.sales_num;
  newTempData.value.isNew = newTempData.value.tw.isNew;
  newTempData.value.isOnHot = newTempData.value.tw.isOnHot;
  newTempData.value.isRecommended = newTempData.value.tw.isRecommended;
  newTempData.value.isOnSale = newTempData.value.tw.isOnSale;
  newTempData.value.dimensions = newTempData.value.tw.dimensions;
  newTempData.value.colors = newTempData.value.tw.colors;
});

// 新增或者編輯商品
const addOrPutProduct = async () => {
  try {
    submitIsLoading.value = true;
    const type = newTempData.value.id ? '儲存' : '新增';
    if (!newTempData.value.tw.title) {
      showAlert({
        title: `失敗 | ${t('admin.message_error')}`,
        text: '請填寫必填欄後重新後提交',
        icon: 'error',
        confirmButtonText: `${t('admin.message_confirm_text')}`,
        confirmButtonColor: '#000000',
      });
      return;
    }
    let api;
    let response;
    if (type === '新增') {
      api = `${baseApiUrl}/v2/api/${apiPath}/admin/product`;
      response = await axios.post(api, { data: newTempData.value });
    } else if (type === '儲存') {
      api = `${baseApiUrl}/v2/api/${apiPath}/admin/product/${newTempData.value.id}`;
      response = await axios.put(api, { data: newTempData.value });
    }
    if (response.data.success) {
      closeModal(); // 新增或更新成功後關閉模組
      showAlert({
        position: 'top-start',
        title: ` ${t('admin.message_success')} | ${response.data.message}`,
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
      });
      setTimeout(() => {
        emits('refetch-products', currentPage.value); // 呼叫父層 = 重新取得產品資料
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
