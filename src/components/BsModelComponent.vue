<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
    ref="productModal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{ tempData.id ? '編輯' : '新增' }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempData.imageUrl"
                  />
                </div>
                <img class="img-fluid" :src="tempData.imageUrl" alt="" />
              </div>
              <div class="input-group mb-3">
                <input class="form-control" type="file" name="file-to-upload" ref="imgUpload" />
                <input class="input-group-text" type="button" value="上傳圖片" @click="uploadImg" />
              </div>
              <div>
                <button class="btn btn-outline-primary btn-sm d-block w-100" @click="addImgUpdate">
                  新增圖片
                </button>
              </div>
              <div>
                <button
                  class="btn btn-outline-danger btn-sm d-block w-100"
                  @click="deleteImgUpdate"
                >
                  刪除圖片
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
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
                  <label for="category" class="form-label">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempData.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
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
                  <label for="origin_price" class="form-label">原價</label>
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
                  <label for="price" class="form-label">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="tempData.price"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">商品評價初始星級</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入評價初始星級"
                    v-model.number="tempData.rating"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
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
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="tempData.content"
                >
                </textarea>
              </div>
              <div class="mb-3">
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
          <button type="button" class="btn btn-primary" @click="addOrPutProduct()">
            {{ tempData.id ? '儲存' : '新增' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import axios from 'axios';

export default {
  data() {
    return {
      modalInstance: null,
      tempData: {
        id: '',
        title: '',
        category: '',
        unit: '',
        imageUrl: '',
        imagesUrl: '',
        price: '',
        origin_price: '',
        description: '',
        content: '',
        is_enabled: 1
      },
      img_update: ''
    };
  },
  props: ['setData', 'getProducts'],
  methods: {
    openModal() {
      this.modalInstance.show();
    },
    closeModal() {
      this.modalInstance.hide();
      this.tempData = {
        id: '',
        title: '',
        category: '',
        unit: '',
        imageUrl: '',
        imagesUrl: '',
        price: '',
        origin_price: '',
        description: '',
        content: '',
        is_enabled: 1
      };
      this.img_update = '';
      // 統一關閉模組後清空資料
    },
    async uploadImg() {
      try {
        const file = this.$refs.imgUpload.files[0];
        const formData = new FormData();
        formData.append('file-to-upload', file);

        const api = `${import.meta.env.VITE_BASE_API_URL}/v2/api/${import.meta.env.VITE_API_PATH}/admin/upload`;
        const headers = {
          'Content-Type': 'multipart/form-data'
        };
        const response = await axios.post(api, formData, { headers });
        if (response.status === 200) {
          this.tempData.imageUrl = response.data.imageUrl;
          this.img_update = response.data.imageUrl;
        }
      } catch (error) {
        console.log(error);
      }
    },
    addImgUpdate() {
      /*
        未來使用檔案上傳方向：
          - 確認是否上傳按鈕
          - 執行更新圖片API，將暫存商品圖片更換與 tempData imageUrl 替換成成功的
          - 將暫存商品檔案清除
      */

      // 功能暫時不用，用檔案
      this.tempData.imageUrl = this.img_update;
    },
    deleteImgUpdate() {
      this.tempData.imageUrl = '';
      this.img_update = '';
    },
    async addOrPutProduct() {
      try {
        const type = this.tempData.id ? 'edit' : 'create';
        let api;
        let api_state;
        let api_message;
        if (type === 'edit') {
          api = `${import.meta.env.VITE_BASE_API_URL}/v2/api/${import.meta.env.VITE_API_PATH}/admin/product/${this.tempData.id}`;
          const response = await axios.put(api, { data: { ...this.tempData } });
          const { success, message } = response.data;
          api_state = success;
          api_message = message;
        } else {
          api = `${import.meta.env.VITE_BASE_API_URL}/v2/api/${import.meta.env.VITE_API_PATH}/admin/product`;
          const response = await axios.post(api, { data: { ...this.tempData } });
          const { success, message } = response.data;
          api_state = success;
          api_message = message;
        }
        if (api_state) {
          window.alert(api_message);
          this.getProducts();
          this.closeModal();
        } else {
          window.alert(api_message);
        }
      } catch (error) {
        console.log('error', error);
      }
    }
  },
  mounted() {
    this.modalInstance = new Modal(this.$refs.productModal, {
      backdrop: 'static',
      keyboard: false
    });
  },
  watch: {
    setData(newVal) {
      // 當從父組件接收到新的 setData 時，更新 tempData
      this.tempData = JSON.parse(JSON.stringify(newVal));
    }
  }
};
</script>
