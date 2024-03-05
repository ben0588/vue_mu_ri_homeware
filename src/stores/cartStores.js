import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';
import axios from 'axios';

import { useAlert } from '@/composables/useAlert';
import useToast from '@/composables/useToast';
import Swal from 'sweetalert2';

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const { showAlert } = useAlert();
const { toastAlert } = useToast();

const useCartStore = defineStore('cartStores', () => {
  const cartList = ref([]);
  const cartFinalTotal = ref(0);
  const cartTotal = ref(0);
  const cartLoading = ref(false);
  const addTargetId = ref('');
  const editState = ref(false);

  const fetchCarts = async () => {
    try {
      cartLoading.value = true;
      const api = `${baseApiUrl}/v2/api/${apiPath}/cart`;
      const response = await axios.get(api);
      cartList.value = response.data.data.carts;
      cartFinalTotal.value = response.data.data.final_total;
      cartTotal.value = response.data.data.total;
    } catch (error) {
      showAlert({
        title: `${error}`,
        text: '取得購物車資訊失敗，請聯繫網站提供者',
        icon: 'error',
        confirmButtonText: '確認',
        confirmButtonColor: '#000000',
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
    } finally {
      cartLoading.value = false;
    }
  };

  const addCart = async ({ id, quantity }) => {
    try {
      // 用 id 判斷防止多個元件共用一個 loading 狀態導致全部都觸發效果
      addTargetId.value = id;
      // 新增重複的商品名稱的時候自動增加數量
      const api = `${baseApiUrl}/v2/api/${apiPath}/cart`;
      const response = await axios.post(api, { data: { product_id: id, qty: quantity } });
      if (response.data.success) {
        toastAlert({
          message: `<img src="https://cdn-icons-gif.flaticon.com/7920/7920939.gif" class="success-icon"/><a href="https://www.flaticon.com/free-animated-icons/tick" title="tick animated icons" class="d-none">Tick animated icons created by Freepik - Flaticon</a> ${response.data.message}`,
          transition: 'slide',
        });
        addTargetId.value = '';
        await fetchCarts();
      }
    } catch (error) {
      showAlert({
        title: '失敗!',
        text: `${error}`,
        icon: 'error',
        confirmButtonText: '確認',
        confirmButtonColor: '#000000',
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
    } finally {
      addTargetId.value = '';
    }
  };

  const editCart = async ({ id, productId, quantity }) => {
    try {
      editState.value = true; // 鎖住單一商品數量，不能連續按多次
      const api = `${baseApiUrl}/v2/api/${apiPath}/cart/${id}`;
      const response = await axios.put(api, { data: { product_id: productId, qty: quantity } });
      if (response.data.success) {
        toastAlert({
          message: `<img src="https://cdn-icons-gif.flaticon.com/7211/7211795.gif" class="success-icon"/><a href="https://www.flaticon.com/free-animated-icons/refresh" title="refresh animated icons" class="d-none">Refresh animated icons created by Freepik - Flaticon</a> ${response.data.message}`,
          transition: 'slide',
        });
        addTargetId.value = '';
        setTimeout(() => {
          fetchCarts();
        }, 1000);
      }
    } catch (error) {
      showAlert({
        title: '失敗!',
        text: `${error}`,
        icon: 'error',
        confirmButtonText: '確認',
        confirmButtonColor: '#000000',
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
    } finally {
      addTargetId.value = '';
      editState.value = false;
    }
  };

  const deleteCart = async (id) => {
    try {
      const api = `${baseApiUrl}/v2/api/${apiPath}/cart/${id}`;
      showAlert({
        title: '移除此商品?',
        text: '確認後此商品項目將會被移除',
        icon: 'question',
        confirmButtonColor: '#d63031',
        cancelButtonColor: '#b2bec3',
        confirmButtonText: '確認',
        cancelButtonText: '取消',
        showCancelButton: true,
        showCloseButton: true,
        showLoaderOnConfirm: true,
        reverseButtons: false,
        preConfirm: async () => {
          try {
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
          toastAlert({
            message: `<img src="https://cdn-icons-gif.flaticon.com/7920/7920939.gif" class="success-icon"/><a href="https://www.flaticon.com/free-animated-icons/tick" title="tick animated icons" class="d-none">Tick animated icons created by Freepik - Flaticon</a> ${result?.value?.data.message}`,
            transition: 'slide',
          });
          await fetchCarts();
        }
      });
    } catch (error) {
      showAlert({
        title: '失敗!',
        text: `${error}`,
        icon: 'error',
        confirmButtonText: '確認',
        confirmButtonColor: '#000000',
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
    }
  };

  const deleteCarts = async () => {
    try {
      const api = `${baseApiUrl}/v2/api/${apiPath}/carts`;
      showAlert({
        title: '移除所有商品?',
        text: '確認後所有商品項目將會被移除',
        icon: 'question',
        confirmButtonColor: '#d63031',
        cancelButtonColor: '#b2bec3',
        confirmButtonText: '確認',
        cancelButtonText: '取消',
        showCancelButton: true,
        showCloseButton: true,
        showLoaderOnConfirm: true,
        reverseButtons: false,
        preConfirm: async () => {
          try {
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
          toastAlert({
            message: `<img src="https://cdn-icons-gif.flaticon.com/7920/7920939.gif" class="success-icon"/><a href="https://www.flaticon.com/free-animated-icons/tick" title="tick animated icons" class="d-none">Tick animated icons created by Freepik - Flaticon</a> ${result?.value?.data.message}`,
            transition: 'slide',
          });
          await fetchCarts();
        }
      });
    } catch (error) {
      showAlert({
        title: '失敗!',
        text: `${error}`,
        icon: 'error',
        confirmButtonText: '確認',
        confirmButtonColor: '#000000',
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
    }
  };

  onMounted(() => {
    fetchCarts();
  });

  return {
    addTargetId,
    editState,
    cartLoading,
    cartList,
    cartFinalTotal,
    cartTotal,
    fetchCarts,
    addCart,
    editCart,
    deleteCart,
    deleteCarts,
  };
});

export default useCartStore;
