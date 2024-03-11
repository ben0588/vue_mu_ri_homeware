<template>
  <div class="container" v-if="!fetchLoading">
    <div v-if="orderData.id || route.params.id">
      <!-- 訂單明細 -->
      <div
        class="table-responsive border-start border-end border-top border-2 border-dark px-3 pt-3"
      >
        <p class="fs-5 border-bottom border-dark pb-2 mb-3">
          <font-awesome-icon :icon="['far', 'rectangle-list']" /> 訂單明細
        </p>
        <table class="table align-middle">
          <thead>
            <tr>
              <td class="text-start" colspan="3">商品明細</td>
              <td>售價</td>
              <td class="text-center">數量</td>
              <td class="text-end pe-3">小計</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>
                <div class="cart-img-container">
                  <img :src="item.product.imageUrl" :alt="item.product.title" class="cart-img" />
                  <span class="cart-sale-tag">
                    -{{ useComputedDiscount(item.product.origin_price, item.product.price) }}</span
                  >
                </div>
              </td>
              <td>
                <div>
                  <div>{{ item.product.title }}</div>
                  <div>{{ item.product.description }}</div>
                  <div>單位：{{ item.product.unit }}</div>
                </div>
              </td>
              <td></td>
              <td>
                <div class="d-flex flex-column justify-content-center">
                  <span
                    class="text-decoration-line-through text-muted ms-1"
                    :style="{ fontSize: '15px' }"
                  >
                    {{ usePriceToTw(item.product.origin_price) }}</span
                  >

                  <span class="fw-500 fs-5 text-danger">
                    {{ usePriceToTw(item.product.price) }}
                  </span>
                </div>
              </td>

              <td class="text-center">
                {{ item.qty }}
              </td>

              <td class="text-end pe-3">
                <div class="d-flex flex-column justify-content-end" v-if="item.coupon">
                  <span class="text-decoration-line-through text-muted">{{
                    usePriceToTw(item.total)
                  }}</span>

                  <span>
                    <span class="fw-500 fs-5 text-danger">
                      {{ usePriceToTw(item.final_total) }}
                    </span></span
                  >
                  <span class="fw-500 fs-6 text-danger"
                    ><font-awesome-icon :icon="['fas', 'ticket-simple']" /> 已折
                    <span>{{ item.coupon.code }}</span></span
                  >
                </div>
                <div v-else-if="!item.coupon">
                  <span>{{ usePriceToTw(item.total) }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="border-start border-end border-2 border-dark">
        <div class="d-flex justify-content-end border-bottom border-2 border-dark pb-12 pe-3">
          <div class="d-flex flex-column align-items-end">
            <span class="fs-5">
              <span> 共 {{ products.length }} 項商品 | </span>
              <span class="fw-700"> 合計 NT{{ usePriceToTw(orderData.total) }} </span></span
            >
            <span class="text-muted">*已含運費</span>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <!-- 聯絡人資訊 -->
        <div class="col-lg-6">
          <div class="table-responsive border border-2 border-dark px-3 mb-3 pt-3">
            <p class="fs-5 border-bottom border-dark pb-2 mb-3">
              <font-awesome-icon :icon="['far', 'address-card']" /> 訂購人資料
            </p>
            <table class="table align-middle">
              <tbody>
                <tr>
                  <td>姓名</td>
                  <td>{{ orderData?.user?.name }}</td>
                </tr>
                <tr>
                  <td>連絡電話</td>
                  <td>{{ orderData?.user?.tel }}</td>
                </tr>
                <tr>
                  <td>連絡信箱</td>
                  <td>{{ orderData?.user?.email }}</td>
                </tr>
                <tr>
                  <td>訂購地址</td>
                  <td>{{ orderData?.user?.address }}</td>
                </tr>
                <tr>
                  <td>訂單備註</td>
                  <td>{{ orderData.message }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 付款資訊 -->
        <div class="col-lg-6">
          <div class="border border-2 border-dark p-3">
            <p class="fs-5 border-bottom border-dark pb-2 mb-3">
              <font-awesome-icon :icon="['far', 'credit-card']" /> 付款方式
            </p>
            <form @submit.prevent="submitForm" ref="formRef">
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingSelect_payment"
                  aria-label="Floating label select example"
                  v-model="paymentSelect"
                  required
                  aria-describedby="validation_payment_select"
                  :class="`${paymentSelect !== '' && 'is-valid'}`"
                >
                  <option value="" disabled selected>開始選擇</option>
                  <option value="信用卡">信用卡</option>
                  <option value="ATM">ATM</option>
                </select>
                <label for="floatingSelect_payment">選擇付款方式</label>
              </div>
              <div
                id="validation_payment_select"
                class="invalid-feedback"
                v-if="paymentSelect === '' && isSubmitted"
              >
                付款方式必填
              </div>

              <button type="submit" style="display: none" ref="submitBtn"></button>
            </form>

            <div class="px-2 pt-4">
              <p class="text-success mb-0">
                <font-awesome-icon :icon="['fas', 'shield']" /> 支付安全
              </p>
              <p class="mb-0" :style="{ fontSize: `15px` }">
                沐日家居
                致力於保護您的付款資訊，並且只與同意保護您的資料的付款服務提供商共享您的信用卡資訊。
              </p>
            </div>
            <div class="px-2 pt-3">
              <p class="text-success mb-0">
                <font-awesome-icon :icon="['fas', 'lock']" /> 安全與隱私
              </p>
              <p class="mb-0" :style="{ fontSize: `15px` }">
                沐日家居
                尊重我們網站上用戶和訪問者的隱私，我們致力於通過維護行業標準的物理、技術和管理措施來保護相關隱私，這些措施旨在保護您的個人數據免遭未經授權的處理、使用或披露。
              </p>
            </div>
          </div>
        </div>
      </div>

      <!--  -->
      <div class="d-flex justify-content-end pb-12 mt-12">
        <router-link to="/products" class="btn btn-outline-dark" :style="{ width: `150px` }"
          >繼續逛逛</router-link
        >
        <button
          type="button"
          @click="triggerSubmit"
          class="btn btn-primary text-white ms-2"
          :style="{ width: `150px` }"
          :disabled="paymentLoading"
        >
          進行付款
        </button>
      </div>
    </div>

    <div v-else class="flex-center flex-column">
      <p class="fs-4 mb-4">獲取訂單資訊失敗，請至我的訂單確認</p>
      <div>
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/vue-ben0588/1709621706622.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fLZyIKTO0xXtmpQpOKyoDdl84VK7ew%2BxUkWMypkYUZnck%2BUWoYQS%2BVJnE4EKlaeXsOb48Y1Pbue80Q%2FMlUdCh0Z17wnAWTy1Jw3m29KqfSxuElieGTLIjX%2FUbKe3x5S91LOs%2Fzz4icDvVafVFeWs%2FsXarIqTNnlkuEQ6JM%2Bid%2BzJO9IVRsVRAtXcgDUNmr%2Fj6nOVbw41qX8%2Bps0CliT4cQYZzvDZu%2BsY3BPA95%2B6MQbI9v8sZhPC344ozOi3o1O5Yw5%2FdvHDQsysSzEGdiOAzYtvqcxRlZ%2FXDTNNh1asPBglVsAXyzXIbvCt46GnScZvJR5uj%2F036CACPE1y1QGlrA%3D%3D"
          alt="獲取訂單資訊失敗，請至我的訂單確認"
        />
      </div>
      <div class="mt-4">
        <router-link to="/member" class="btn btn-dark px-4">前往確認</router-link>
      </div>
    </div>
  </div>

  <VueLoading :active="fetchLoading" :can-cancel="false" :color="'#0089A7'"></VueLoading>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import VueLoading from 'vue-loading-overlay';
import axios from 'axios';
import Swal from 'sweetalert2';

import { useAlert } from '@/composables/useAlert';
import usePriceToTw from '@/composables/usePriceToTw';
import useComputedDiscount from '@/composables/useComputedDiscount';

const route = useRoute();
const router = useRouter();

const { showAlert } = useAlert();
const fetchLoading = ref(false);
const orderData = ref({});
const products = ref([]);
const paymentSelect = ref('');
const formRef = ref(null);
const submitBtn = ref(null);
const isSubmitted = ref(false);
const paymentLoading = ref(false);

const fetchOrder = async () => {
  try {
    fetchLoading.value = true;
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/api/${import.meta.env.VITE_APP_API_PATH}/order/${route.params.id}`;
    const response = await axios.get(api);
    orderData.value = response.data.order;
    products.value = Object.values(response?.data?.order?.products || {}); // 取得指定格式
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
    fetchLoading.value = false;
  }
};

const paymentOrder = async () => {
  try {
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/api/${import.meta.env.VITE_APP_API_PATH}/pay/${route.params.id}`;
    paymentLoading.value = true;
    showAlert({
      title: '確認付款',
      text: '注意：請留意訂單資訊是否有誤',
      icon: 'question',
      confirmButtonColor: '#29292D',
      cancelButtonColor: '#b2bec3',
      confirmButtonText: '付款',
      cancelButtonText: '取消',
      showCancelButton: true,
      showCloseButton: true,
      showLoaderOnConfirm: true,
      reverseButtons: true,
      preConfirm: async () => {
        try {
          return await axios.post(api);
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
    }).then((result) => {
      if (result.value.data.success) {
        showAlert({
          title: '成功',
          text: `${result.value.data.message} !`,
          icon: 'success',
          showConfirmButton: false,
          timer: 1800,
          timerProgressBar: true,
          allowEscapeKey: false,
          allowOutsideClick: false,
        }).then((res) => {
          if (res.dismiss === 'timer') {
            // 付款成功後，進入到付款完成頁面，無須使用者點擊
            router.replace({ path: '/carts/complete' });
          }
        });
      }
    });
  } catch (error) {
    showAlert({
      title: '失敗!',
      text: `${error.response.data.message}`,
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
  } finally {
    paymentLoading.value = false;
    isSubmitted.value = false;
  }
};

onMounted(() => {
  if (route.params.id) {
    fetchOrder();
  } else {
    router.replace({ path: '/products' });
  }
});

const submitForm = () => {
  isSubmitted.value = true; // 表單提交時設置為 true
  paymentOrder();
};

const triggerSubmit = () => {
  submitBtn.value.click(); // 觸發隱藏的提交按鈕的點擊事件
};
</script>
<style lang="scss"></style>
