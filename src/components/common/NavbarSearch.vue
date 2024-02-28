<!-- eslint-disable max-len -->
<template>
  <div class="d-flex">
    <div class="dropdown mt-0">
      <button
        class="btn btn-outline-primary-sup-light dropdown-toggle text-dark border-secondary border-2"
        type="button"
        id="headerDropdownMenuButton"
        data-bs-toggle="dropdown"
        :aria-expanded="isOpen"
        :style="{ width: '128px', height: '48px' }"
        @click.prevent="toggleOpen"
      >
        {{ categoryTarget }}

        <font-awesome-icon
          :icon="isOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
          class="ms-2"
        />
      </button>
      <ul
        class="dropdown-menu"
        aria-labelledby="headerDropdownMenuButton"
        :class="{ show: isOpen }"
      >
        <li v-for="category in categoryList" :key="category.id">
          <router-link
            to="/products"
            class="dropdown-item fw-500"
            @click="
              () => {
                handleChangeCategory(category.text);
                toggleOpen();
              }
            "
            :class="{ active: category.text === categoryTarget }"
            >{{ category.text }}</router-link
          >
        </li>
      </ul>
    </div>
    <div :style="{ width: '320px', height: '48px' }" class="overflow-hidden position-relative">
      <input
        class="form-control h-100 border-2"
        type="text"
        :style="{ borderLeft: 'none' }"
        placeholder="輸入商品"
        aria-label="default input example"
        v-model="searchText"
        @keyup.enter="handleSearch"
      />
      <font-awesome-icon
        :icon="['fas', 'magnifying-glass']"
        class="search-icon"
        role="button"
        @click="handleSearch"
        :title="'搜尋'"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';

const categoryTarget = ref('全部商品');
const searchText = ref('');
const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const handleChangeCategory = (target) => {
  console.log('選擇主類型，準備換頁', target);
  categoryTarget.value = target;
};

watch(
  () => searchText.value,
  () => {
    console.log('searchText', searchText.value);
  },
);

const handleSearch = () => {
  console.log('改變搜尋目標中', searchText.value);
};

const categoryList = [
  { id: '0', text: '全部商品' }, // 全部商品
  { id: '1', text: '特價中' }, // 特價中
  { id: '2', text: '家具' }, // 家具
  { id: '3', text: '家飾' }, // 家飾
  { id: '4', text: '燈具' }, // 燈具
  { id: '5', text: '廚房用品' }, // 廚房用品
  { id: '6', text: '浴室用品' }, // 浴室用品
  { id: '7', text: '寢具' }, // 寢具
  { id: '8', text: '收納' }, // 收納
];
</script>
<style lang="scss">
.dropdown-item {
  width: 240px;
  font-size: 1rem;
  padding-left: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &:hover {
    background-color: $primary-sup-light !important;
  }
}

/* 當前選擇時的樣式改變 */
.dropdown-item.active {
  background-color: $primary-sup-light !important;
  color: $dark !important;
}

.dropdown-toggle::after {
  content: none !important; /* 隱藏預設箭頭 */
}

.search-icon {
  position: absolute;
  top: 20%;
  right: 5%;
  transform: translate(-6%, 6%);
  width: 24px;
  height: 24px;
  z-index: 99;

  &:hover {
    color: $primary;
  }
}
</style>
