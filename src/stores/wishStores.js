import { defineStore } from 'pinia';
import {
  ref, onMounted, watch,
} from 'vue';

import useToast from '@/composables/useToast';
import { useAlert } from '@/composables/useAlert';

const { showAlert } = useAlert();
const { toastAlert } = useToast();

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
      toastAlert({
        message: '🌠 已移除商品追蹤',
      });
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
        description:product.description
      };
      wishlist.value.push(newProduct);
      toastAlert({
        message: '⭐已新增商品追蹤',
      });
    }
  };

  // 判斷當前願望清單有沒有相同id
  const isWishListed = (item) => wishlist.value.some((wishItem) => wishItem.id === item.id);

  // 刪除單獨的項目
  const removeWishItem = (product) => {
    showAlert({
      title: '移除此商品追蹤?',
      text: '確認後此追蹤項目將會被移除',
      icon: 'question',
      confirmButtonColor: '#111c30',
      cancelButtonColor: '#b2bec3',
      confirmButtonText: '確認',
      cancelButtonText: '取消',
      showCancelButton: true,
      showCloseButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        wishlist.value = wishlist.value.filter((item) => item.id !== product.id);
        toastAlert({
          message: '🌠 已移除商品追蹤',
        });
      }
    });
  };

  // 清除所有項目
  const removeAllWishlist = () => {
    showAlert({
      title: '移除所有追蹤項目?',
      text: '確認後所有追蹤項目將會移除',
      icon: 'question',
      confirmButtonColor: '#111c30',
      cancelButtonColor: '#b2bec3',
      confirmButtonText: '確認',
      cancelButtonText: '取消',
      showCancelButton: true,
      showCloseButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        wishlist.value = []; // 確認後重新清除
        toastAlert({
          message: '🌌 已移除所有商品追蹤',
        });
      }
    });
  };

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

  return {
    wishlist, addWishList, isWishListed, removeWishItem, removeAllWishlist,
  };
});
export default useWishStore;
