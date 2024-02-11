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
            <span>{{ tempData?.id ? '編輯' : '新增' }}</span>
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
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label"
                    ><span class="text-danger">*</span>輸入主圖片網址
                  </label>
                  <input
                    id="imageUrl"
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempData.imageUrl"
                  />
                </div>
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
                <input class="input-group-text" type="button" value="上傳圖片" @click="uploadImg" />
              </div>
              <div class="input-group mb-3">
                <label class="form-label w-100">輸入其他圖片(共五張)</label>
                <input
                  type="text"
                  class="form-control w-100"
                  v-for="item in imagesUrl"
                  :key="item.id"
                  v-model="item.imageUrl"
                />
              </div>
              <!-- 主圖片預覽 -->
              <div v-if="tempData.imageUrl">
                <h5 class="mb-0 mt-2 fw-bolder">主圖片預覽：</h5>
                <img class="img-fluid border border-2" :src="tempData.imageUrl" alt="" />
              </div>
              <!-- 讓其他五張圖片依序可以預覽 -->
              <div v-for="(img, imgIndex) in imagesUrl" :key="img.id">
                <div v-if="img.imageUrl">
                  <p class="mb-0 mt-2">其他圖片 {{ imgIndex + 1 }} 預覽：</p>
                  <img class="img-fluid border border-2" :src="img.imageUrl" alt="" />
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label"><span class="text-danger">*</span>標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempData.title"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label"
                    ><span class="text-danger">*</span>主分類</label
                  >
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請選擇分類"
                    v-model="tempData.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="subcategory" class="form-label"
                    ><span class="text-danger">*</span>次分類</label
                  >
                  <input
                    id="subcategory"
                    type="text"
                    class="form-control"
                    placeholder="請選擇次分類"
                    v-model="tempData.subcategory"
                  />
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
                    v-model="tempData.unit"
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
                    v-model.number="tempData.origin_price"
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
                    v-model.number="tempData.price"
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
                    v-model.number="tempData.dimensions.length"
                  />
                  <input
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入商品寬+單位(cm)"
                    v-model.number="tempData.dimensions.width"
                  />
                  <input
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入商品高度+單位(cm)"
                    v-model.number="tempData.dimensions.height"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="colors" class="form-label"
                    ><span class="text-danger">*</span>產品顏色 [名稱:色碼] *最多三組</label
                  >
                  <div class="input-group" v-for="(color, index) in tempData.colors" :key="index">
                    <input
                      id="colors"
                      type="text"
                      class="form-control d-inline-block w-50"
                      placeholder="請輸入顏色名稱"
                      v-model="color.title"
                    />
                    <input
                      type="color"
                      class="form-control form-control-color d-inline-block w-50"
                      placeholder="請輸入顏色色碼"
                      v-model="color.code"
                    />
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
                  v-model="tempData.description"
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
                  v-model="tempData.content"
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
                    v-model="tempData.isNew"
                    :checked="tempData.isNew"
                  />
                </div>
                <div class="form-check d-inline-block ms-4">
                  <label class="form-check-label" for="isOnHot">熱門(Hot)</label>
                  <input
                    id="isOnHot"
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempData.isOnHot"
                    :checked="tempData.isOnHot"
                  />
                </div>
                <div class="form-check d-inline-block ms-4">
                  <label class="form-check-label" for="isRecommended">推薦(Recommended)</label>
                  <input
                    id="isRecommended"
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempData.isRecommended"
                    :checked="tempData.isRecommended"
                  />
                </div>
                <div class="form-check d-inline-block ms-4">
                  <label class="form-check-label" for="isOnSale">特價(Sale)</label>
                  <input
                    id="isOnSale"
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempData.isOnSale"
                    :checked="tempData.isOnSale"
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
                    v-model="tempData.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" @click="closeModal">取消</button>
          <button type="button" class="btn btn-primary text-white px-5" @click="addOrPutProduct()">
            {{ tempData.id ? '儲存' : '新增' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from 'vue';
import { Modal } from 'bootstrap';
import useLoadingStore from '@/stores/loadingStores';

const loadingStores = useLoadingStore();
const bsModalRef = ref(null);
const bsModalInstance = ref(null); // 實體存放區
const tempData = ref({
  id: '',
  title: '',
  category: '',
  subcategory: '',
  unit: '',
  imageUrl: '',
  price: '',
  origin_price: '',
  description: '',
  content: '',
  is_enabled: 1,
  rating: 0,
  crate_date: new Date().getTime(),
  sales_num: 0,
  isNew: false,
  isOnSale: false,
  isOnHot: false,
  isRecommended: false,
  dimensions: {
    length: 0,
    width: 0,
    height: 0,
  },
  colors: [
    {
      title: '灰色',
      code: '',
    },
    {
      title: '米色',
      code: '',
    },
    {
      title: '咖啡色',
      code: '',
    },
  ],
});
const imagesUrl = ref([
  { id: '1', imageUrl: '' },
  { id: '2', imageUrl: '' },
  { id: '3', imageUrl: '' },
  { id: '4', imageUrl: '' },
  { id: '5', imageUrl: '' },
]);

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

watchEffect(() => {
  console.log(imagesUrl.value);
  console.log(tempData.value);
});

const openModal = (type, data) => {
  if (type === 'create') {
    tempData.value = {
      id: '',
      title: '',
      category: '',
      subcategory: '',
      unit: '',
      imageUrl: '',
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
    };
    bsModalInstance.value.show();
  } else if (type === 'edit') {
    // 編輯就直接將點選資料帶入。
    tempData.value = data;
    bsModalInstance.value.show();
  }
};

const closeModal = () => bsModalInstance.value.hide(); // 關閉模組

const addOrPutProduct = async () => {
  try {
    loadingStores.toggleLoading();
    const type = tempData.value.id ? '儲存' : '新增';
    let api;
  } catch (error) {
    console.log(error);
  } finally {
    loadingStores.toggleLoading();
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
