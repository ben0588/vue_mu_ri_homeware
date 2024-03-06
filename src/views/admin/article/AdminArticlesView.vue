<template>
  <div class="pt-3">
    <div class="row">
      <span class="col-6">
        <h3 class="">文章列表</h3>
      </span>
      <span class="col-6">
        <div class="float-end pe-3">
          <button
            type="button"
            class="btn btn-success px-4"
            @click="handleOpenModal({ type: 'create' })"
          >
            新增文章
          </button>
        </div>
      </span>
    </div>
    <div class="table-responsive">
      <table class="table align-middle">
        <thead>
          <tr class="fw-500">
            <td>編碼</td>
            <td>主標題</td>
            <td>建立日期</td>
            <td>標籤</td>
            <td>狀態</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in adminArticles" :key="article.id">
            <td>{{ article.id }}</td>
            <td>{{ article.title }}</td>
            <td>{{ new Date(article.create_at * 1000).toISOString().split('T')[0] }}</td>
            <td>
              <span v-for="(item, index) in article.tag" :key="index" class=""
                >{{ item }}<span v-if="index < article.tag.length - 1">、</span></span
              >
            </td>
            <td>
              <span v-if="article.isPublic" class="text-success"> 啟用 </span>
              <span v-else class="text-danger">未啟用</span>
            </td>
            <td>
              <div class="d-flex align-items-center">
                <button
                  type="button"
                  class="btn btn-outline-dark me-1"
                  @click="handleOpenModal({ type: 'edit', id: article.id })"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  :disabled="deleteTarget === article.id"
                  @click="deleteArticle(article.id)"
                >
                  <span v-if="deleteTarget === article.id">
                    <span class="spinner-grow spinner-grow-sm me-1" aria-hidden="true"></span>
                    <span role="status"></span>
                    <span>刪除中</span>
                  </span>
                  <span v-else> 刪除 </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <PaginationComponent
      :pagination="adminPagination"
      @updated:page="fetchArticles"
    ></PaginationComponent>

    <AdminArticleModal
      ref="adminArticleModal"
      @refetch-articles="fetchArticles"
    ></AdminArticleModal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import useLoadingStore from '@/stores/loadingStores';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

import { useAlert } from '@/composables/useAlert';
import PaginationComponent from '@/components/common/PaginationComponent.vue';
import AdminArticleModal from '@/components/admin/article/AdminArticleModal.vue';

const router = useRouter();
const { showAlert } = useAlert();
const loadingStore = useLoadingStore();

const adminArticleModal = ref(null);
const adminArticles = ref([]);
const adminPagination = ref([]);
const deleteTarget = ref('');

// 傳遞開啟方法與資料給 Modal 子元件
const handleOpenModal = ({ type, id }) => {
  adminArticleModal.value.openModal({ type, id });
};

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const fetchArticles = async (page = 1) => {
  try {
    loadingStore.toggleLoading(); // 全頁加載
    const token = localStorage.getItem('s72241'); // 防止重新整理後要重新登入
    axios.defaults.headers.common.Authorization = token;
    const api = `${baseApiUrl}/v2/api/${apiPath}/admin/articles?page=${page}`;
    const response = await axios.get(api);
    adminArticles.value = response.data.articles;
    adminPagination.value = response.data.pagination;
  } catch (error) {
    showAlert({
      title: '失敗',
      text: `${error.response.data.message}`,
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // 按下確認後回到管理者登入頁
        router.replace('/admin');
      }
    });
  } finally {
    loadingStore.toggleLoading();
  }
};

const deleteArticle = async (id) => {
  try {
    const api = `${baseApiUrl}/v2/api/${apiPath}/admin/article/${id}`;
    showAlert({
      title: '確認刪除訂單?',
      text: '注意：確認刪除後，訂單將無法復原!',
      icon: 'question',
      confirmButtonColor: '#29292D',
      cancelButtonColor: '#b2bec3',
      confirmButtonText: '確認',
      cancelButtonText: '取消',
      showCancelButton: true,
      showCloseButton: true,
      showLoaderOnConfirm: true,
      reverseButtons: true,
      preConfirm: async () => {
        try {
          deleteTarget.value = id;
          return await axios.delete(api);
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
          return false;
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then(async (result) => {
      if (result?.value?.data?.success) {
        showAlert({
          position: 'top-start',
          title: `成功 | ${result?.value?.data?.message}`,
          icon: 'success',
          showConfirmButton: false,
          timer: 1000,
        });
        setTimeout(() => {
          fetchArticles();
        }, 1000);
      }
    });
  } catch (error) {
    showAlert({
      title: '失敗',
      text: `${error.response.data.message}`,
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
    });
  } finally {
    deleteTarget.value = '';
  }
};

onMounted(() => {
  fetchArticles();
});
</script>
