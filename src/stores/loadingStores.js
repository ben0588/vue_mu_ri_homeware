import { defineStore } from 'pinia';
import { ref } from 'vue';

const useLoadingStore = defineStore('loadingStore', () => {
  const isLoading = ref(false);
  function toggleLoading() {
    isLoading.value = !isLoading.value;
  }

  return { isLoading, toggleLoading };
});
export default useLoadingStore;
