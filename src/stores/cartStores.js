import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';
import axios from 'axios';

import { useAlert } from '@/composables/useAlert';
import useToast from '@/composables/useToast';

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const { showAlert } = useAlert();
const { toastAlert } = useToast();

const useCartStore = defineStore('cartStores', () => {
  const cartList = ref([]);
  const cartFinalTotal = ref(0);
  const cartTotal = ref(0);
  const addTargetId = ref('');
  const cartLoading = ref(false);

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
        fetchCarts();
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
  const editCart = async () => { };
  const deleteCart = async () => { };
  const deleteCarts = async () => { };

  onMounted(() => {
    fetchCarts();
  });

  return {
    addTargetId,
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
