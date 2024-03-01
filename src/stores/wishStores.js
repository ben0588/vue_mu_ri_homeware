import { defineStore } from 'pinia';
import {
  ref, onMounted, watch,
} from 'vue';

const useWishStore = defineStore('wishStore', () => {
  const wishlist = ref([]);

  // 初始化
  const loadWishlist = () => {
    const storedWishes = localStorage.getItem('wishList');
    if (storedWishes) {
      wishlist.value = JSON.parse(storedWishes);
    }
  };

  // 新增願望清單
  const addWishList = (product) => {
    // 判斷是不是已經有存在
    const index = wishlist.value.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      // 存在的話就取消
      wishlist.value = wishlist.value.filter((item) => item.id !== product.id);
    } else {
      // 不存在就存入清單中
      const newProduct = {
        id: product.id,
        title: product.title,
        content: product.content,
        origin_price: product.origin_price,
        price: product.price,
        imageUrl: product.imageUrl,
        unit: product.unit,
      };
      wishlist.value.push(newProduct);
    }
  };

  // 判斷當前願望清單有沒有相同id
  const isWishListed = (item) => wishlist.value.some((wishItem) => wishItem.id === item.id);

  // 每當願望清單有異動就重新記錄 wish
  watch(
    () => wishlist.value,
    () => {
      localStorage.setItem('wishList', JSON.stringify(wishlist.value));
    },
    { deep: true },
  );

  onMounted(() => {
    loadWishlist();
  });

  return { wishlist, addWishList, isWishListed };
});
export default useWishStore;
