<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="frontCModalLabel"
    aria-hidden="true"
    ref="bsFrontCouponModalRef"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="frontCModalLabel" class="modal-title">使用優惠卷</h5>
          <button
            type="button"
            class="bg-dark text-white fs-4 fw-bolder border-0"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          >
            X
          </button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="輸入您的優惠卷代碼"
                v-model.trim="couponCode"
                :disabled="useCouponCodeState"
              />
              <label for="floatingInput">輸入優惠卷代碼</label>
            </div>
            <button
              class="btn btn-secondary"
              type="button"
              :disabled="couponCode === '' || useCouponCodeState"
              @click="useCouponCode"
            >
              使用
            </button>
          </div>

          <div class="border border-2 p-3">
            <p class="fs-5 border-bottom border-dark pb-2 mb-2">
              <font-awesome-icon :icon="['far', 'calendar']" /> 「超值特惠」現正舉辦中！
            </p>
            <ul class="mb-0 py-3">
              <li v-for="item in eventList" :key="item.id" class="pb-2">
                <div class="row align-items-center">
                  <div class="col-6">{{ item.title }}|[{{ item.center }}]</div>
                  <div class="col-6">
                    <div class="input-group">
                      <input type="text" class="form-control" readonly :value="item.code" />
                      <button
                        class="btn btn-secondary"
                        type="button"
                        @click="copyCouponCode(item.code)"
                      >
                        複製
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Modal } from 'bootstrap';
import axios from 'axios';

import useToast from '@/composables/useToast';

const bsFrontCouponModalRef = ref(null);
const bsFrontCouponModalInstance = ref(null); // 實體存放區
const couponCode = ref('');
const useCouponCodeState = ref(false);
const { toastAlert } = useToast();

const eventList = ref([
  {
    id: 0,
    title: '新會員折扣優惠',
    center: '7折',
    code: 'new7',
    percentage: '70%',
  },
  {
    id: 1,
    title: '舊會員折扣優惠',
    center: '95折',
    code: 'old95',
    percentage: '95%',
  },
  {
    id: 2,
    title: '回饋會員 85折',
    center: '85折',
    code: 'sale85',
    percentage: '85%',
  },
  {
    id: 3,
    title: '回饋會員 82折',
    center: '82折',
    code: 'sale82',
    percentage: '82%',
  },
]);

const emits = defineEmits(['refetch-carts']);

onMounted(() => {
  // bootstrap modal init
  bsFrontCouponModalInstance.value = new Modal(bsFrontCouponModalRef.value);
});

onUnmounted(() => {
  // bootstrap modal close 清除實體化
  if (bsFrontCouponModalInstance.value) {
    bsFrontCouponModalInstance.value.dispose();
  }
});

const openModal = () => {
  bsFrontCouponModalInstance.value.show();
};

const closeModal = () => {
  bsFrontCouponModalInstance.value.hide();
}; // 關閉模組

const copyCouponCode = (code) => {
  navigator.clipboard.writeText(code).then(() => {
    toastAlert({
      message: `<img src="https://cdn-icons-gif.flaticon.com/8948/8948314.gif" class="success-icon"/><a href="https://www.flaticon.com/free-animated-icons/document" title="document animated icons" class="d-none">Document animated icons created by Freepik - Flaticon</a> 複製代碼成功：${code}`,
      transition: 'slide',
    });
  });
};

// 模擬呼叫後端的 AJAX
function apiCall(state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state) {
        resolve(true);
      } else {
        reject(new Error('呼叫失敗'));
      }
    }, 2000);
  });
}

const useCouponCode = async () => {
  try {
    useCouponCodeState.value = true;
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/api/${import.meta.env.VITE_APP_API_PATH}/coupon`;
    const response = await axios.post(api, { data: { code: couponCode.value } });
    if (response.data.success) {
      toastAlert({
        message: `<img src="https://cdn-icons-gif.flaticon.com/10970/10970392.gif" class="success-icon" /><a href="https://www.flaticon.com/free-animated-icons/success" title="success animated icons" class="d-none">Success animated icons created by Freepik - Flaticon</a>${response.data.message}`,
        transition: 'slide',
      });
      couponCode.value = '';
      setTimeout(() => {
        emits('refetch-carts', true);
        closeModal();
      }, 1000);
    }
  } catch (error) {
    toastAlert({
      message: `<img src="https://cdn-icons-gif.flaticon.com/11257/11257124.gif" class="success-icon" /><a href="https://www.flaticon.com/free-animated-icons/error" title="error animated icons" class="d-none">Error animated icons created by Freepik - Flaticon</a>${error.response.data.message}`,
      transition: 'slide',
    });
    couponCode.value = '';
  } finally {
    useCouponCodeState.value = false;
    couponCode.value = '';
  }
};

defineExpose({
  openModal,
  closeModal,
});
</script>
<style lang="scss"></style>
