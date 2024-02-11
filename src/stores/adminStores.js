import { defineStore } from 'pinia';
import { ref } from 'vue';

const useAdminStore = defineStore('adminStore', () => {
  const isCheck = ref(false);
  function checkToken() {
    isCheck.value = !isCheck.value;
  }

  return { isCheck, checkToken };
});

export default useAdminStore;
