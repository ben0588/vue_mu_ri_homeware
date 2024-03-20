<template>
  <div class="pt-3">
    <div class="row">
      <span class="col-6">
        <h3 class="">活動列表</h3>
      </span>
      <span class="col-6">
        <div class="float-end pe-3">
          <button
            type="button"
            class="btn btn-success px-4"
            @click="handleOpenModal({ type: 'create' })"
          >
            新增活動
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
            <td>活動時間</td>
            <td>狀態</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in adminEvents" :key="event.id">
            <td>{{ event.id }}</td>
            <td>{{ event.title }}</td>
            <td>
              <div
                class="d-flex flex-column align-items-start text-success"
                v-if="!isExpired(event.activity_end_time)"
              >
                <span>{{ event.activity_start_time }} ~</span>
                <span>{{ event.activity_end_time }}</span>
              </div>
              <div class="d-flex flex-column align-items-start text-danger" v-else>
                <span>{{ event.activity_start_time }} ~</span>
                <span>{{ event.activity_end_time }}</span>
                <span>[活動已結束]</span>
              </div>
            </td>
            <td>
              <span v-if="event.isPublic" class="text-success"> 啟用 </span>
              <span v-else class="text-danger">未啟用</span>
            </td>
            <td>
              <div class="d-flex align-items-center">
                <button
                  type="button"
                  class="btn btn-outline-dark me-1"
                  @click="handleOpenModal({ type: 'edit', id: event.id })"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  :disabled="deleteTarget === event.id"
                  @click="deleteArticle(event.id)"
                >
                  <span v-if="deleteTarget === event.id">
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

    <AdminEventModal ref="adminEventModal" @refetch-events="fetchEvents"></AdminEventModal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import useLoadingStore from '@/stores/loadingStores';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

import { useAlert } from '@/composables/useAlert';
import AdminEventModal from '@/components/admin/event/AdminEventModal.vue';

const router = useRouter();
const { showAlert } = useAlert();
const loadingStore = useLoadingStore();

const adminEventModal = ref(null);
const adminEvents = ref([]);
const deleteTarget = ref('');

const isExpired = (dateString) => {
  const currentDate = new Date();
  if (dateString) {
    const dateParts = dateString?.split('-');
    const dateToCheck = new Date(
      parseInt(dateParts[0], 10),
      parseInt(dateParts[1], 10) - 1,
      parseInt(dateParts[2], 10),
    );

    // 檢查日期是否過期（比較當前日期與要檢查的日期）
    return currentDate > dateToCheck && currentDate.toDateString() !== dateToCheck.toDateString();
  }
  return false;
};

// 傳遞開啟方法與資料給 Modal 子元件
const handleOpenModal = ({ type, id }) => {
  adminEventModal.value.openModal({ type, id });
};

const fetchEvents = async () => {
  try {
    loadingStore.toggleLoading(); // 全頁加載
    const api = `${import.meta.env.VITE_APP_EVENTS_API_URL}/events`;
    const response = await axios.get(api);
    adminEvents.value = response.data;
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
    const api = `${import.meta.env.VITE_APP_EVENTS_API_URL}/events/${id}`;
    showAlert({
      title: '確認刪除活動?',
      text: '注意：確認刪除活動後，內容將無法復原!',
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
      if (result?.value?.status === 200) {
        showAlert({
          position: 'top-start',
          title: `成功`,
          text: '已成功刪除活動',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000,
        });
        setTimeout(() => {
          fetchEvents();
        }, 1000);
      }
    });
  } catch (error) {
    showAlert({
      title: '失敗',
      icon: 'error',
      text: `${error}`,
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
    });
  } finally {
    deleteTarget.value = '';
  }
};

onMounted(() => {
  fetchEvents();
});
</script>
