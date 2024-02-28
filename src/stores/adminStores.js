import { defineStore } from 'pinia';
import { ref } from 'vue';

const useAdminStore = defineStore('adminStore', () => {
  const isLogin = ref(false);
  function toggleAdminState() {
    isLogin.value = !isLogin.value;
  }

  return { isLogin, toggleAdminState };
});

export default useAdminStore;
