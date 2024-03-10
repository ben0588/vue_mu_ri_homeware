<template>
  <div class="container" v-if="!cartStore.cartLoading">
    <div v-if="cartStore.cartList.length">
      <router-link
        to="/carts"
        class="d-inline-block text-dark text-decoration-underline hover-opacity p-3"
        title="返回購物車"
        >返回上頁</router-link
      >
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

      <div class="border-start border-end border-2 border-dark mb-3">
        <div class="d-flex justify-content-end pb-12 mb-12 pe-3">
          <div class="d-flex flex-column align-items-end">
            <span class="fs-5">
              <span> 共 {{ cartStore.cartList.length }} 項商品 | </span>
              <span class="fw-700"> 合計 NT{{ usePriceToTw(cartStore.cartTotal) }} </span></span
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
          >
            <form @submit="handleSubmit($event, onSubmit)">
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
              <button
                type="submit"
                class="btn btn-dark w-100"
                :disabled="!meta.valid || isSubmitting"
              >
                <span v-if="isSubmitting">
                  <span class="spinner-grow spinner-grow-sm me-1" aria-hidden="true"></span>
                  <span role="status"></span> 建立訂單中
                </span>
                <span v-else>建立訂單</span>
              </button>
            </form>
          </VeeForm>
        </div>

        <!-- 備註填寫 -->
        <div class="border border-2 border-dark p-3 mt-3">
          <div class="mb-3">
            <label
              for="order-message"
              class="form-label fs-5 border-bottom border-dark w-100 pb-2 mb-3"
            >
              <font-awesome-icon :icon="['far', 'pen-to-square']" /> 訂單備註/告知客服內容</label
            >
            <textarea
              name="message"
              id="order-message"
              cols="30"
              rows="5"
              placeholder="若您的配送地點可能有道路、樓梯間、戶門狹窄而無法駛入或搬入的問題，請在訂單留言"
              class="form-control"
              v-model.trim="message"
            ></textarea>
          </div>
        </div>

        <!-- 運輸方式 -->
        <div class="border border-2 border-dark p-3 mt-3">
          <p class="fs-5 border-bottom border-dark pb-2 mb-3">
            <font-awesome-icon :icon="['fas', 'truck-fast']" /> 運輸方式
          </p>
          <div class="border border-2 border-dark p-3">
            <div class="row justify-content-between align-items-center">
              <div class="col-sm-9">
                <div>
                  <h5>宅配-一般家飾</h5>
                  <p class="mb-0">費運120元，商品金額滿100元免運</p>
                  <p>(期間限定：2023/01/01~2024/12/31)</p>
                </div>
              </div>
              <div class="col-sm-3"><p class="fs-3 fw-700 mb-0">$ 120</p></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右側訂單折價卷  -->
      <div class="col-lg-6">
        <div class="border border-2 border-dark p-3">
          <div class="fs-5 border-bottom border-dark pb-2 mb-3">
            <div class="d-flex justify-content-between align-content-center">
              <span><font-awesome-icon :icon="['fas', 'ticket']" /> 優惠卷</span>
              <span
                ><button
                  type="button"
                  class="btn btn-primary text-white px-3"
                  @click="openCouponModal"
                >
                  選擇優惠卷
                </button></span
              >
            </div>
          </div>

          <!-- 優惠卷 -->
          <div class="border-bottom border-dark">
            <div class="row pb-3">
              <div class="col-lg-3"></div>
              <div class="col-lg-9">
                <div class="row">
                  <div class="col-0 col-sm-4 col-md-6 col-lg-2"></div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-6">商品總金額</div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-4 text-end">
                    {{ usePriceToTw(cartStore.cartTotal) }}
                  </div>
                  <div class="col-0 col-sm-4 col-md-6 col-lg-2"></div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-6">運費小計</div>
                  <div
                    class="col-6 col-sm-4 col-md-3 col-lg-4 text-end text-decoration-line-through"
                  >
                    <span class="text-muted"> {{ usePriceToTw(0) }}</span>
                  </div>
                </div>

                <div class="row" v-if="cartStore.cartList[0].coupon">
                  <div class="col-0 col-sm-4 col-md-6 col-lg-2 text-danger text-end">
                    - {{ Math.floor(discountPercentage) }} %
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-7 text-danger">
                    <font-awesome-icon :icon="['fas', 'ticket-simple']" /> 折價卷折抵
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-3 text-danger text-end">
                    {{ usePriceToTw(cartStore.cartFinalTotal - cartStore.cartTotal) }}
                  </div>
                </div>
                <div v-else class="row">
                  <div class="col-0 col-sm-4 col-md-6 col-lg-2"></div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-6">
                    <font-awesome-icon :icon="['fas', 'ticket-simple']" /> 折價卷折抵
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-4 text-end">未使用</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 最終金額 -->
          <div class="border-bottom border-dark">
            <div class="row py-3">
              <div class="col-lg-3"></div>
              <div class="col-lg-9">
                <div class="row">
                  <div class="col-0 col-sm-4 col-md-6 col-lg-2"></div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-6">
                    <div class="fs-5 fw-700">訂單最終總金額</div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3 col-lg-4 text-end">
                    <span class="fs-5 fw-700">NT{{ usePriceToTw(cartStore.cartFinalTotal) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 注意事項 -->
        <div class="mt-3">
          <div class="border border-2 border-dark p-3">
            <p class="fs-5 border-bottom border-dark pb-2 mb-3">
              <font-awesome-icon :icon="['fas', 'circle-exclamation']" /> 訂購注意事項
            </p>
            <ul class="w-100">
              <li v-for="(text, index) in orderInformationList" :key="index" class="mb-2">
                {{ text }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 訂單的購物車沒資料時顯示 -->
    <div v-else class="flex-center flex-column">
      <p class="fs-4 mb-4">購物車目前並無任何商品</p>
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
  <CouponModal ref="couponModal" @refetch-carts="refetchCartsFn" />
</template>

<script setup>
import { ref, computed } from 'vue';
import VueLoading from 'vue-loading-overlay';
import { Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

import usePriceToTw from '@/composables/usePriceToTw';
import useComputedDiscount from '@/composables/useComputedDiscount';
import useCartStore from '@/stores/cartStores';
import VeeValidateInput from '@/components/common/VeeValidateInput.vue';
import { useAlert } from '@/composables/useAlert';
import CouponModal from '@/components/front/cart/CouponModal.vue';

const cartStore = useCartStore();
const { fetchCarts } = cartStore;
const { showAlert } = useAlert();

const message = ref('');
const couponModal = ref(null);
const router = useRouter();
const orderId = ref('');

const orderInformationList = ref([
  '訂購有任何需要注意事項或備註項目，請先確保在建立訂單前填寫完畢，謝謝 !',
  '在結帳前，請務必仔細核對您的訂單信息，確保一切正確無誤，以免因錯誤信息導致不必要的麻煩。',
  '如果您在購物過程中遇到任何問題或需要幫助，請隨時聯繫我們的客戶支援團隊。',
  '我們為您提供全面的售後服務，包括維修、保固等。您可以在購買後放心享受我們的售後支援。',
]);

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

const discountPercentage = computed(
  // eslint-disable-next-line comma-dangle
  () => ((cartStore.cartTotal - cartStore.cartFinalTotal) / cartStore.cartTotal) * 100,
);

async function onSubmit(values) {
  try {
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/api/${import.meta.env.VITE_APP_API_PATH}/order`;
    const data = {
      user: {
        name: values.username,
        email: values.email,
        tel: values.phone,
        address: values.address,
      },
      message: message.value,
    };
    showAlert({
      title: '建立訂單',
      text: '注意：確認建立後聯絡人資料異動須透過客服修改',
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
          return await axios.post(api, { data });
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
        orderId.value = result.value.data.orderId;
        showAlert({
          title: '成功',
          text: `${result.value.data.message}`,
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: '前往付款',
          confirmButtonColor: '#000000',
          cancelButtonColor: '#b2bec3',
          cancelButtonText: '繼續逛逛',
          reverseButtons: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
        }).then((res) => {
          if (res.isConfirmed) {
            // 前往付款頁面，並且把剛完成的訂單id傳遞過去
            router.replace({ name: 'front_order_payment', params: { id: orderId.value } });
            fetchCarts();
          } else if (res.dismiss === 'cancel') {
            // 取消繼續逛逛，進入產品列表
            router.replace({ path: '/products' });
            fetchCarts();
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
  }
}

const openCouponModal = () => {
  couponModal.value.openModal();
};

// 重新獲取購物車
const refetchCartsFn = () => {
  fetchCarts();
};
</script>
