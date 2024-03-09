<!-- eslint-disable max-len -->
<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="adminEventModalLabel"
    aria-hidden="true"
    ref="bsAdminEventModalRef"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="adminEventModalLabel" class="modal-title">
            <span v-if="modalType === 'create'">新增文章</span>
            <span v-else>編輯文章 - 文章編碼：{{ eventId }}</span>
          </h5>
          <button
            type="button"
            class="bg-dark text-white fs-4 fw-bolder border-0"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
            :disabled="eventSubmitState"
          >
            X
          </button>
        </div>
        <div class="modal-body position-relative">
          <div v-if="!eventState">
            <form @submit="onSubmit">
              <div class="row">
                <div class="col-md-4">
                  <VeeValidateCustomInput
                    :name="'image'"
                    :id="'admin-event-image'"
                    :required="true"
                    :labelText="'文章封面圖片網址(URL)'"
                    :labelClass="'fs-6'"
                  />

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
                    :id="'admin-event-imagesUrl-0'"
                    :required="true"
                    :labelText="'文章副圖片網址(URL) [橫、直、直]'"
                    :inputContainer="'mb-1'"
                    :labelClass="'fs-6'"
                  />
                  <VeeValidateCustomInput
                    :name="'imagesUrl[1]'"
                    :id="'admin-event-imagesUrl-1'"
                    :required="true"
                    :labelText="''"
                    :labelClass="'d-none'"
                    :inputContainer="'mb-1'"
                  />
                  <VeeValidateCustomInput
                    :name="'imagesUrl[2]'"
                    :id="'admin-event-imagesUrl-2'"
                    :required="true"
                    :labelText="''"
                    :labelClass="'d-none'"
                  />

                  <!-- 主圖片預覽 -->
                  <div v-if="values?.image?.match(/^https:\/\//)">
                    <h5 class="mb-1 mt-2">主圖片預覽</h5>
                    <img
                      class="img-fluid border border-2"
                      :src="values.image"
                      :alt="values.title"
                    />
                  </div>

                  <!-- 副圖 1 圖片預覽 -->
                  <div v-if="values?.imagesUrl">
                    <div v-if="values?.imagesUrl[0].match(/^https:\/\//)">
                      <h5 class="mb-1 mt-2">文章副圖片 [1] 預覽</h5>
                      <img
                        class="img-fluid border border-2"
                        :src="values.imagesUrl[0]"
                        :alt="values.title"
                      />
                    </div>
                    <!-- 副圖 2 圖片預覽 -->
                    <div v-if="values?.imagesUrl[1]?.match(/^https:\/\//)">
                      <h5 class="mb-1 mt-2">文章副圖片 [2] 預覽</h5>
                      <img
                        class="img-fluid border border-2"
                        :src="values.imagesUrl[1]"
                        :alt="values.title"
                      />
                    </div>
                    <!-- 副圖 3 圖片預覽 -->
                    <div v-if="values?.imagesUrl[2]?.match(/^https:\/\//)">
                      <h5 class="mb-1 mt-2">文章副圖片 [3] 預覽</h5>
                      <img
                        class="img-fluid border border-2"
                        :src="values.imagesUrl[2]"
                        :alt="values.title"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-6">
                      <VeeValidateCustomInput
                        :name="'title'"
                        :id="'admin-event-title'"
                        :required="true"
                        :labelText="'活動主標題'"
                        :labelClass="'fs-6'"
                      />
                    </div>
                    <div class="col-md-6">
                      <VeeValidateCustomInput
                        :name="'subtitle'"
                        :id="'admin-event-subtitle'"
                        :required="true"
                        :labelText="'活動副標題'"
                        :labelClass="'fs-6'"
                      />
                    </div>

                    <div class="col-12">
                      <VeeValidateCustomTextarea
                        :name="'description'"
                        :id="'admin-event-description'"
                        :required="true"
                        :labelText="'主標題內容'"
                        :labelClass="'fs-6'"
                        :inputContainer="'mt-3'"
                      />
                    </div>
                    <div class="col-12">
                      <VeeValidateCustomTextarea
                        :name="'content'"
                        :id="'admin-event-center'"
                        :required="true"
                        :labelText="'副標題內容'"
                        :labelClass="'fs-6'"
                        :inputContainer="'mt-3'"
                      />
                    </div>

                    <div class="col-12">
                      <VeeValidateCustomCheckbox
                        :name="'isPublic'"
                        :id="'admin-event-isPublic'"
                        :labelText="'活動開啟狀態'"
                        :labelClass="'fs-6'"
                        :inputContainer="'mt-3'"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer mt-3">
                <button
                  type="button"
                  class="btn btn-outline-secondary text-dark"
                  @click="closeModal"
                >
                  取消
                </button>
                <button
                  type="submit"
                  class="btn btn-primary text-white px-5"
                  :disabled="eventSubmitState"
                >
                  <span v-if="eventSubmitState">
                    <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                    <span role="status"></span>
                    <span>{{ eventId ? '儲存中' : '新增中' }}</span>
                  </span>
                  <span v-else>
                    {{ eventId ? '儲存' : '新增' }}
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div v-else class="text-center py-64">讀取中，請稍候..</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, markRaw, watch } from 'vue';
import { Modal } from 'bootstrap';
import axios from 'axios';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import vSelect from 'vue-select';

import VeeValidateCustomInput from '@/components/common/VeeValidateCustomInput.vue';
import VeeValidateCustomTextarea from '@/components/common/VeeValidateCustomTextarea.vue';
import VeeValidateCustomCheckbox from '@/components/common/VeeValidateCustomCheckbox.vue';
import { useAlert } from '@/composables/useAlert';

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const { showAlert } = useAlert();
const eventId = ref('');
const modalType = ref('');
const eventState = ref(false);
const eventSubmitState = ref(false);

const bsAdminEventModalRef = ref(null);
const bsAdminEventModalInstance = ref(null); // 實體存放區

const emits = defineEmits(['refetch-events']);
const initialFormValues = ref({
  id: new Date().getTime(),
  create_at: 0,
  title: '',
  subtitle: '',
  description: '',
  content: '',
  image: '',
  imagesUrl: ['', '', ''],
  ActivityTime: '',
  isPublic: true,
});
// Math.floor(new Date().getTime() / 1000)

const { setFieldValue, values, errors, handleSubmit, meta, resetForm } = useForm({
  initialValues: JSON.parse(JSON.stringify(initialFormValues.value)),
  // 使用 markRaw 阻止 Vue 將 yup 設定成響應式內容
  validationSchema: markRaw(
    // shape 可以指定物件的結構並為每個屬性定義相應的驗證規則
    yup.object().shape({
      create_at: yup.number(),
      title: yup.string().required('此欄位必填'),
      subtitle: yup.string().required('此欄位必填'),
      image: yup
        .string()
        .required('此欄位必填')
        .matches(
          /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\\/~+#-]*[\w@?^=%&amp;\\/~+#-])?/,
          { message: 'URL 必須以 https:// 開頭', excludeEmptyString: true },
        ),
      imagesUrl: yup.array().of(
        yup
          .string()
          .required('此欄位必填')
          .matches(
            /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\\/~+#-]*[\w@?^=%&amp;\\/~+#-])?/,
            { message: 'URL 必須以 https:// 開頭', excludeEmptyString: true },
          ),
      ),
      content: yup.string().required('此欄位必填'),
      description: yup.string().required('此欄位必填'),
      isPublic: yup.boolean().required('此欄位必填'),
    }),
  ),
});

// watch(
//   () => selectedTag.value,
//   () => {
//     setFieldValue('tag', JSON.parse(JSON.stringify(selectedTag.value))); // 動態更新 tag 資料
//   },
// );

onMounted(() => {
  // bootstrap modal init
  bsAdminEventModalInstance.value = new Modal(bsAdminEventModalRef.value, {
    backdrop: 'static',
    keyboard: false,
  });
});

onUnmounted(() => {
  // bootstrap modal close 清除實體化
  if (bsAdminEventModalInstance.value) {
    bsAdminEventModalInstance.value.dispose();
  }
});

const fetchEvent = async (id) => {
  try {
    eventState.value = true;
    const api = `${import.meta.env.VITE_APP_EVENTS_API_URL}?id=${id}`;
    const response = await axios.get(api);
    const [newData] = response.data;
    console.log('response', response);
    resetForm({ values: newData }); // 更新表單內容
  } catch (error) {
    showAlert({
      title: '失敗',
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
  } finally {
    eventState.value = false;
  }
};

const openModal = ({ id, type }) => {
  modalType.value = type || '';
  eventId.value = id || '';
  if (type === 'create') {
    modalType.value = type;
  } else if (type === 'edit') {
    fetchEvent(id);
  }
  bsAdminEventModalInstance.value.show();
};

const closeModal = () => {
  resetForm({ values: JSON.parse(JSON.stringify(initialFormValues.value)) }); // 表單初始化
  bsAdminEventModalInstance.value.hide();
}; // 關閉模組

const addOrEditArticle = async (val) => {
  try {
    eventSubmitState.value = true;
    const type = eventId.value ? '儲存' : '新增';
    let api;
    let response;
    if (type === '新增') {
      api = `${baseApiUrl}/v2/api/${apiPath}/admin/article`;
      response = await axios.post(api, {
        data: { ...val, create_at: Math.floor(new Date().getTime() / 1000) },
      });
    } else if (type === '儲存') {
      api = `${baseApiUrl}/v2/api/${apiPath}/admin/article/${eventId.value}`;
      response = await axios.put(api, { data: { ...val } });
    }
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
        emits('refetch-events', true); // 呼叫父層 = 重新取得文章資料
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
    eventSubmitState.value = false;
  }
};
const onSubmit = handleSubmit((val) => {
  addOrEditArticle(val);
});

// 圖片模組
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
    if (fileRef.value.files) {
      const formData = new FormData();
      formData.append('file-to-upload', fileRef?.value?.files[0]);
      const api = `${baseApiUrl}/v2/api/${apiPath}/admin/upload`;
      const headers = { 'Content-Type': 'multipart/form-data' };
      const response = await axios.post(api, formData, { headers });
      if (response?.data?.success) {
        setFieldValue('image', response?.data?.imageUrl); // 更新表簪
        if (fileRef.value) {
          fileRef.value.value = ''; // 直接清空 <input> 元素的值
        }
        uploadLoading.value = false;
        showAlert({
          position: 'top-start',
          title: '成功 | 圖片上傳成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000,
        });
      }
    }
  } catch (error) {
    showAlert({
      title: `失敗 | ${error?.response?.data?.message}`,
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

<style lang="scss">
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  padding-top: 0.2rem;
  padding-bottom: 0.5rem;
  border-radius: 0 !important ;
  border: var(--bs-border-width) solid var(--bs-border-color);
}

.style-chooser.border-danger-important .vs__dropdown-toggle {
  border-color: var(--bs-form-invalid-border-color) !important;
}
</style>
