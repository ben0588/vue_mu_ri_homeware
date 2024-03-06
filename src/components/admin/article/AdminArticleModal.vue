<!-- eslint-disable max-len -->
<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="adminArticleModalLabel"
    aria-hidden="true"
    ref="bsAdminArticleModalRef"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="adminArticleModalLabel" class="modal-title">
            <span v-if="modalType === 'create'">新增文章</span>
            <span v-else>編輯文章 - 文章編碼：{{ articleId }}</span>
          </h5>
          <button
            type="button"
            class="bg-dark text-white fs-4 fw-bolder border-0"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
            :disabled="articleSubmitState"
          >
            X
          </button>
        </div>
        <div class="modal-body position-relative">
          <div v-if="!articleState">
            <form @submit="onSubmit">
              <div class="row">
                <div class="col-md-4">
                  <VeeValidateCustomInput
                    :name="'image'"
                    :id="'admin-article-image'"
                    :required="true"
                    :labelText="'文章主圖片網址(URL)'"
                  />
                  {{ errors }}
                  <div class="input-group mb-3">
                    <label for="imageUrlFile" class="form-label w-100"
                      >或 上傳主圖片 ( 限jpg/jpeg/png )</label
                    >
                    <input
                      class="form-control"
                      type="file"
                      name="file-to-upload"
                      id="imageUrlFile"
                      ref="fileRef"
                      @change="handleFileUpload"
                    />
                    <button
                      class="input-group-text d-block bg-dark text-white w-100"
                      type="button"
                      @click="handleUploadImg"
                      :class="{ 'btn-secondary': uploadLoading, 'text-dark': uploadLoading }"
                      :disabled="!fileSelected || uploadLoading"
                      :title="!fileSelected ? '請先選擇檔案' : '上傳檔案'"
                    >
                      <span v-if="uploadLoading"
                        ><span class="spinner-border spinner-border-sm me-1" role="status">
                          <span class="visually-hidden">上傳中</span>
                        </span>
                        <span>上傳中</span></span
                      >
                      <span v-else> 上傳圖片</span>
                    </button>
                    <span v-if="fileUploadMessage" class="text-danger"
                      >*{{ fileUploadMessage }}</span
                    >
                  </div>

                  <!-- 另外兩張副圖 -->
                  <VeeValidateCustomInput
                    :name="'imagesUrl[0]'"
                    :id="'admin-article-imagesUrl-0'"
                    :required="true"
                    :labelText="'文章副圖片網址(URL)'"
                    :inputContainer="'mb-1'"
                  />
                  <VeeValidateCustomInput
                    :name="'imagesUrl[1]'"
                    :id="'admin-article-imagesUrl-1'"
                    :required="true"
                    :labelText="''"
                    :labelClass="'d-none'"
                  />

                  <!-- 主圖片預覽 -->
                  <div v-if="values.image.match(/^https:\/\//)">
                    <h5 class="mb-0 mt-2">主圖片預覽</h5>
                    <img
                      class="img-fluid border border-2"
                      :src="values.image"
                      :alt="values.title"
                    />
                  </div>

                  <!-- 副圖 1 圖片預覽 -->
                  <div v-if="values.imagesUrl[0].match(/^https:\/\//)">
                    <h5 class="mb-0 mt-2">文章副圖片 [1] 預覽</h5>
                    <img
                      class="img-fluid border border-2"
                      :src="values.imagesUrl[0]"
                      :alt="values.title"
                    />
                  </div>
                  <!-- 副圖 2 圖片預覽 -->
                  <div v-if="values.imagesUrl[1].match(/^https:\/\//)">
                    <h5 class="mb-0 mt-2">文章副圖片 [2] 預覽</h5>
                    <img
                      class="img-fluid border border-2"
                      :src="values.imagesUrl[1]"
                      :alt="values.title"
                    />
                  </div>
                </div>

                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-6">
                      <VeeValidateCustomInput
                        :name="'title'"
                        :id="'admin-article-title'"
                        :required="true"
                        :labelText="'文章主標題'"
                      />
                    </div>
                    <div class="col-md-6">
                      <VeeValidateCustomInput
                        :name="'subtitle'"
                        :id="'admin-article-subtitle'"
                        :required="true"
                        :labelText="'文章副標題'"
                      />
                    </div>
                    <div class="col-md-6">
                      <VeeValidateCustomInput
                        :name="'author'"
                        :id="'admin-article-author'"
                        :required="true"
                        :labelText="'文章作者'"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {{ values }}
              <input type="submit" value="提交" />
            </form>
          </div>

          <div v-else class="text-center py-64">讀取中，請稍候..</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, markRaw } from 'vue';
import { Modal } from 'bootstrap';
import axios from 'axios';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

import VeeValidateCustomInput from '@/components/common/VeeValidateCustomInput.vue';
import { useAlert } from '@/composables/useAlert';

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const { showAlert } = useAlert();
const articleId = ref('');
const modalType = ref('');
const articleState = ref(false);
const articleSubmitState = ref(false);

const bsAdminArticleModalRef = ref(null);
const bsAdminArticleModalInstance = ref(null); // 實體存放區

const emits = defineEmits(['refetch-articles']);
const initialFormValues = ref({
  title: '',
  subtitle: '',
  description: '',
  image: '',
  imagesUrl: ['', ''],
  tag: [''],
  create_at: new Date().getTime(),
  author: '小白',
  isPublic: false,
  content: '',
});

const urlRegExp = /^https:\/\//;
const { setFieldValue, values, errors, handleSubmit, resetForm } = useForm({
  initialValues: JSON.parse(JSON.stringify(initialFormValues.value)),
  // 使用 markRaw 阻止 Vue 將 yup 設定成響應式內容
  validationSchema: markRaw(
    // shape 可以指定物件的結構並為每個屬性定義相應的驗證規則
    yup.object().shape({
      // title: yup.string().required('此欄位必填'),
      title: yup.string().required('此欄位必填'),
      subtitle: yup.string().required('此欄位必填'),
      image: yup
        .string()
        .required('此欄位必填')
        .matches(urlRegExp, { message: 'URL 必須以 https:// 開頭', excludeEmptyString: true }),
      imagesUrl: yup
        .array()
        .of(
          yup
            .string()
            .required('此欄位必填')
            .matches(urlRegExp, { message: 'URL 必須以 https:// 開頭', excludeEmptyString: true }),
        ),
      author: yup.string().required('此欄位必填'),
    }),
  ),
});

const onSubmit = handleSubmit((val) => {
  alert(JSON.stringify(val, null, 2));
});

onMounted(() => {
  // bootstrap modal init
  bsAdminArticleModalInstance.value = new Modal(bsAdminArticleModalRef.value, {
    backdrop: 'static',
    keyboard: false,
  });
});

onUnmounted(() => {
  // bootstrap modal close 清除實體化
  if (bsAdminArticleModalInstance.value) {
    bsAdminArticleModalInstance.value.dispose();
  }
});

const fetchArticle = async (id) => {
  try {
    articleState.value = true;
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/api/${import.meta.env.VITE_APP_API_PATH}/admin/article/${id}`;
    const response = await axios.get(api);
    console.log('edit', response.data.article);
    resetForm({
      values: response.data.article,
    }); // 更新表單內容
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
  } finally {
    articleState.value = false;
  }
};

const openModal = ({ id, type }) => {
  modalType.value = type || '';
  articleId.value = id || '';
  if (type === 'create') {
    modalType.value = type;
  } else if (type === 'edit') {
    fetchArticle(id);
  }
  bsAdminArticleModalInstance.value.show();
};

const closeModal = () => {
  resetForm({ values: JSON.parse(JSON.stringify(initialFormValues.value)) }); // 表單初始化
  bsAdminArticleModalInstance.value.hide();
}; // 關閉模組

const addOrEditArticle = async () => {
  try {
    articleSubmitState.value = true;
    const type = articleState.value.id ? '儲存' : '新增';
    let api;
    let response;
    if (type === '新增') {
      api = `${baseApiUrl}/v2/api/${apiPath}/admin/article`;
      response = await axios.post(api, {
        data: {
          title: '新增第一篇文章',
          subtitle: '副主標題內容',
          description: '文章內容',
          image: 'test.testtest',
          imagesUrl: ['1', '2', '3'],
          tag: ['tag1'],
          create_at: 1555459220,
          author: 'alice',
          isPublic: false,
          content: '這是內容，配合副標題用',
        },
      });
    } else if (type === '儲存') {
      api = `${baseApiUrl}/v2/api/${apiPath}/admin/article/${articleState.value.id}`;
      response = await axios.put(api, { data: articleState.value });
    }
    console.log('response', response);
    if (response.data.success) {
      closeModal(); // 新增或更新成功後關閉模組
      showAlert({
        position: 'top-start',
        title: `成功 | ${response.data.message}`,
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
      });
      setTimeout(() => {
        emits('refetch-articles', true); // 呼叫父層 = 重新取得文章資料
      }, 1000);
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
  } finally {
    articleSubmitState.value = false;
  }
};

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
    formData.append('file-to-upload', fileRef.value.files[0]);
    const api = `${baseApiUrl}/v2/api/${apiPath}/admin/upload`;
    const headers = {
      'Content-Type': 'multipart/form-data',
    };
    const response = await axios.post(api, formData, { headers });
    if (response.data.success) {
      setFieldValue('image', response.data.imageUrl); // 更新表簪
      showAlert({
        position: 'top-start',
        title: '成功 | 圖片上傳成功',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
      });
    }
  } catch (error) {
    showAlert({
      title: `失敗 | ${error.response.data.message}`,
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
    });
  } finally {
    uploadLoading.value = false;
  }
};

defineExpose({
  openModal,
  closeModal,
});
</script>
