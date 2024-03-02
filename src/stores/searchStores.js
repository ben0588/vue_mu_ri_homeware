/* eslint-disable import/no-extraneous-dependencies */
import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Fuse from 'fuse.js';

import { useAlert } from '@/composables/useAlert';

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const useSearchStore = defineStore('searchStore', () => {
  const { showAlert } = useAlert();

  const fuseOptions = {
    keys: ['title', 'category', 'subcategory'],
  };

  const fuse = new Fuse([], fuseOptions); // 先初始化空資料
  const searchText = ref('');
  const productsList = ref([]);
  const isSearch = ref(false);

  // 取得所有產品資料用來關鍵字搜尋
  const fetchProducts = async () => {
    try {
      const api = `${baseApiUrl}/v2/api/${apiPath}/products/all`;
      const response = await axios.get(api);
      fuse.setCollection(response.data.products);
    } catch (error) {
      showAlert({
        title: `${error}`,
        text: '取得商品資料失敗，請聯繫網站提供者',
        icon: 'error',
        confirmButtonText: '確認',
        confirmButtonColor: '#000000',
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
    }
  };

  // 實現一個帶有取消功能的防抖函數
  function debounce(func, wait) {
    let timeout;
    const debounced = (...args) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
    debounced.cancel = () => {
      clearTimeout(timeout);
    };
    return debounced;
  }

  const debounceSearch = debounce(() => {
    // 輸入文字後停兩秒後執行
    productsList.value = fuse.search(searchText.value);
    isSearch.value = true;
  }, 2000);

  const handleSearch = () => {
    // 按下Enter後直接觸發
    debounceSearch.cancel(); // 取消防抖計時器
    productsList.value = fuse.search(searchText.value);
    isSearch.value = true;
  };

  const handleInput = (event) => {
    searchText.value = event.target.value; // 更新 searchText
    debounceSearch();
  };

  onMounted(() => {
    fetchProducts();
  });

  return {
    isSearch, searchText, productsList, handleSearch, handleInput,
  };
});

export default useSearchStore;
