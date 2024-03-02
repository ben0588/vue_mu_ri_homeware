<template>
  <div>
    布置靈感

    <div :style="{ width: '320px', height: '48px' }" class="overflow-hidden position-relative">
      <input
        class="form-control h-100 border-2"
        type="text"
        :style="{ borderLeft: 'none' }"
        placeholder="輸入商品"
        aria-label="default input example"
        v-model="searchStore.searchText"
        @keydown.enter="handleSearch"
        @input="handleInput"
      />
      <font-awesome-icon
        :icon="['fas', 'magnifying-glass']"
        class="search-icon"
        role="button"
        @click="handleSearch"
        :title="'搜尋'"
      />
    </div>
    {{ searchStore.searchText }} ||
  </div>
</template>
<script setup>
import useSearchStore from '@/stores/searchStores';

const searchStore = useSearchStore();
const { handleSearch, handleInput } = searchStore;
</script>
<style lang="scss"></style>
