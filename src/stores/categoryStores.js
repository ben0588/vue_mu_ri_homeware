import { defineStore } from 'pinia';
import { ref } from 'vue';

const useCategoryStore = defineStore('categoryStores', () => {
  const categoryTarget = ref('全部商品');
  function toggleCategoryTarget(target) {
    categoryTarget.value = target;
  }

  return { categoryTarget, toggleCategoryTarget };
});

export default useCategoryStore;
