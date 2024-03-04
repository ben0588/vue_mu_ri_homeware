<template>
  <div class="container" v-if="!cartStore.cartLoading">
    <div v-if="cartStore.cartList.length">
      <!-- 確認訂單 -->
      <div
        class="table-responsive border-start border-end border-top border-2 border-dark px-3 pt-3"
      >
        <p class="fs-5 border-bottom border-dark pb-2 mb-3">
          <font-awesome-icon :icon="['far', 'rectangle-list']" /> 確認訂單
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
            <tr v-for="item in cartStore.cartList" :key="item.id">
              <td>
                <div class="cart-img-container">
                  <img :src="item.product.imageUrl" :alt="item.product.title" class="cart-img" />
                </div>
              </td>
              <td>
                <div>
                  <div>{{ item.product.title }}</div>
                  <div>{{ item.product.content }}</div>
                  <div>{{ item.product.unit }}</div>
                </div>
              </td>
              <td></td>
              <td>
                <div>
                  <span class="text-decoration-line-through text-muted">
                    {{ usePriceToTw(item.product.origin_price) }}</span
                  >
                  <span class="text-danger">
                    -{{ useComputedDiscount(item.product.origin_price, item.product.price) }}</span
                  >
                </div>
                <div class="fw-500">
                  {{ usePriceToTw(item.product.price) }}
                </div>
              </td>

              <td class="text-center">
                {{ item.qty }}
              </td>

              <td class="text-end pe-3">{{ usePriceToTw(item.total) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="border-start border-end border-2 border-dark">
        <div class="d-flex justify-content-end border-bottom border-2 border-dark pb-12 mb-12 pe-3">
          <div class="d-flex flex-column align-items-end">
            <span class="fs-5">
              <span> 共 {{ cartStore.cartList.length }} 項商品 | </span>
              <span class="fw-700">
                合計 NT{{ usePriceToTw(cartStore.cartFinalTotal) }}
              </span></span
            >
            <span class="text-muted">*未含運費</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 下方區塊 -->
    <div class="row" v-if="cartStore.cartList.length">
      <!-- 填寫訂購人資料 + 運送方式 -->
      <div class="col-lg-6">
        <div class="border border-2 border-dark p-3">
          <VeeForm
            v-slot="{ handleSubmit, isSubmitting, errors, meta }"
            :validation-schema="schema"
            as="div"
            ref="orederForm"
          >
            <p class="fs-5 border-bottom border-dark pb-2 mb-3">
              <font-awesome-icon :icon="['far', 'address-card']" /> 訂購人資料
            </p>
            <VeeValidateInput
              :name="'username'"
              :label="'訂購人姓名'"
              :id="'order-username'"
              :placeholder="'請輸入訂購人姓名'"
              :errors="errors"
              :type="'text'"
            />
            <VeeValidateInput
              :name="'phone'"
              :label="'聯絡手機'"
              :id="'order-phone'"
              :placeholder="'請輸入聯絡手機'"
              :errors="errors"
              :type="'tel'"
            />
            <VeeValidateInput
              :name="'email'"
              :label="'聯絡信箱 [ 訂單通知、電子發票寄送 ]'"
              :id="'order-email'"
              :placeholder="'請輸入聯絡電子信箱'"
              :errors="errors"
              :type="'email'"
            />
            <VeeValidateInput
              :name="'address'"
              :label="'地址'"
              :id="'order-address'"
              :placeholder="'請輸入聯絡電子信箱'"
              :errors="errors"
              :type="'text'"
            />

            <VeeValidateInput
              :name="'center'"
              :label="'問題描述'"
              :id="'more-center'"
              :placeholder="'請詳細描述問題'"
              :errors="errors"
              :type="'text'"
              :as="'textarea'"
            />

            <button
              type="submit"
              class="btn btn-dark w-100"
              :disabled="!meta.valid || isSubmitting"
            >
              <span v-if="isSubmitting">
                <span class="spinner-grow spinner-grow-sm me-1" aria-hidden="true"></span>
                <span role="status"></span> 提交表單中
              </span>
              <span v-else>提交表單</span>
            </button>
          </VeeForm>
        </div>

        <div class="border border-2 border-dark p-3 mt-3">
          <p class="fs-5 border-bottom border-dark pb-2 mb-3">
            <font-awesome-icon :icon="['far', 'pen-to-square']" /> 訂單備註/告知客服內容
          </p>
        </div>

        <div class="border border-2 border-dark p-3 mt-3">
          <p class="fs-5 border-bottom border-dark pb-2 mb-3">
            <font-awesome-icon :icon="['fas', 'truck-fast']" /> 運送方式
          </p>
        </div>
      </div>

      <!-- 右側訂單折價卷 + 前往付款 -->
      <div class="col-lg-6">
        <div class="border border-2 border-dark p-3">
          <p class="fs-5 border-bottom border-dark pb-2 mb-3">
            <font-awesome-icon :icon="['fas', 'ticket']" /> 優惠卷
          </p>
          <div class="d-flex justify-content-end pb-12 mb-12">
            <router-link to="/products" class="btn btn-outline-dark" :style="{ width: `150px` }"
              >繼續購物</router-link
            >
            <router-link
              to="/carts/confirm"
              class="btn btn-primary text-white ms-2"
              :style="{ width: `150px` }"
              >填寫訂單資訊</router-link
            >
          </div>
          <button @click="submitForm">外部按鈕控制提交表單</button>
        </div>
      </div>
    </div>

    <!-- 訂單的購物車沒資料時顯示 -->
    <div v-else class="flex-center flex-column">
      <p class="fs-4">購物車目前並無任何商品</p>
      <div>
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/vue-ben0588/1709523797457.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TVpfq289hPAS0eJEUfUdQ094vN5dKwHD%2B261x5OpEH1uHeeE0Nd99HygcwvSAOfHcQJ4%2F%2B9BK4ugP20MZHg4sW9yksSFesbZoGYe6mOP3%2FLGJYD%2BwUyH3Go3d544OviGcMSRW%2FzcR1RKaWsMH1JEKdqCXibbCmwjqmnGufKB%2FeMqTzm3u8%2Fa66DIcFfmJf4t4%2BWdh2R5EQWzKN%2FVTud3sRRhiH%2BrltLOEoty5SBftDQnphuRO19cubaX2FaUG5ZpArGLvfPUgNu8lW9ivRIlaWgEqf36Mki4GOVn1cL2QV5lPje1jeZqN5oQjRZk1%2F52YRpaP7LcSt%2ByA%2FZEa0mnpQ%3D%3D"
          alt="購物車目前並無任何商品"
        />
      </div>
      <div class="mt-4">
        <router-link to="/products" class="btn btn-dark px-4">前去逛逛</router-link>
      </div>
    </div>
  </div>
  <VueLoading :active="cartStore.cartLoading" :can-cancel="false" :color="'#0089A7'"></VueLoading>
</template>

<script setup>
import { ref } from 'vue';
import VueLoading from 'vue-loading-overlay';
import { Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';

import usePriceToTw from '@/composables/usePriceToTw';
import useComputedDiscount from '@/composables/useComputedDiscount';
import useCartStore from '@/stores/cartStores';
import VeeValidateInput from '@/components/common/VeeValidateInput.vue';
import { useAlert } from '@/composables/useAlert';

const cartStore = useCartStore();
const { showAlert } = useAlert();

const orederForm = ref(null);

const phoneRegExp = /^(0|\+?886)9\d{8}$/; // 使用 0或者+886都可以用
const userNameRegExp = /^[\u4E00-\u9FA5]{2,4}$/; // 使用 0或者+886都可以用
const schema = yup.object().shape({
  username: yup
    .string()
    .required('此欄位必填')
    .matches(userNameRegExp, { message: '請輸入有效的中文姓名', excludeEmptyString: true }),
  email: yup.string().required('此欄位必填').email('請輸入正確email格式'),
  phone: yup
    .string()
    .matches(phoneRegExp, { message: '請輸入有效的台灣手機號碼', excludeEmptyString: true })
    .required('手機號碼為必填欄位'),
  address: yup.string().required('聯絡地址必填'),
});

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

async function onSubmit(values, actions) {
  try {
    const response = await apiCall(0); // 呼叫 API
    if (response) {
      await showAlert({
        title: '成功',
        text: '表單資訊已成功提交，我們將會在收到後盡快與您聯絡。謝謝',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
      });
      actions.resetForm(); // 重置表單
    }
  } catch (error) {
    showAlert({
      title: '失敗',
      text: `${error}，請重新提交嘗試`,
      icon: 'error',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
  }
}

// 客製化處理表單
const submitForm = () => {
  orederForm.value.handleSubmit((values) => {
    console.log(values);
    // 在這裡處理表單提交後的行為
  })();
};
</script>

<style lang="scss">
.cart-img-container {
  display: block;
  width: 100px;
  overflow: hidden;
  border: 2px solid #788194c5;

  @media (min-width: 992px) {
    width: 75px;
    height: 75px;
  }

  @media (min-width: 1200px) {
    width: 85px;
    height: 85px;
  }

  @media (min-width: 1400px) {
    width: 96px;
    height: 96px;
  }

  &:hover {
    border: 2px solid #111c30e8;

    & .cart-img {
      transform: scale(1.2);
    }
  }
}
.cart-img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 96px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media (min-width: 992px) {
    height: 75px;
  }

  @media (min-width: 1200px) {
    height: 85px;
  }

  @media (min-width: 1400px) {
    height: 96px;
  }
}
</style>
