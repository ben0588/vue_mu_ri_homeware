<template>
  <header>
    <div class="py-3 bg-dark text-center d-flex align-items-center justify-content-center">
      <span class="text-white">【官網獨享】一般&大型家飾滿千免運+指定品會員點數2倍送</span>
      <button type="button" class="btn btn-outline-light btn-sm ms-3">了解更多</button>
    </div>

    <div class="bg-white">
      <div class="container">asdadasd</div>
    </div>
    <div class="d-flex">
      <!-- <div class="input-group overflow-hidden mb-3" :style="{ width: '128px', height: '48px' }">
        <select class="form-select border-2" id="inputGroupSelect02">
          <option class="header-select" selected>全部商品</option>
          <option class="header-select" value="1">One</option>
          <option class="header-select" value="2">Two</option>
          <option class="header-select" value="3">Three</option>
        </select>
      </div> -->
      <div class="dropdown">
        <button
          class="btn btn-outline-primary-sup-light dropdown-toggle text-dark border-secondary border-2"
          type="button"
          id="headerDropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          :style="{ width: '128px', height: '48px' }"
        >
          全部商品
        </button>
        <ul class="dropdown-menu" aria-labelledby="headerDropdownMenuButton">
          <li v-for="category in categoryList" :key="category.id">
            <router-link to="/products" class="dropdown-item">{{ category.text }}</router-link>
          </li>
        </ul>
      </div>
      <div :style="{ width: '320px', height: '48px' }" class="overflow-hidden">
        <input
          class="form-control h-100 border-2"
          type="text"
          :style="{ borderLeft: 'none' }"
          placeholder="Default input"
          aria-label="default input example"
        />
      </div>
    </div>
  </header>
</template>
<script setup>
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
.header-select {
  background-color: #f8f9fa !important;
  color: #343a40 !important;
  width: 200px;
}
/* 覆盖下拉菜单选项的背景色和文字颜色 */
.dropdown-item {
  /* background-color: #f8f9fa; */
  /* color: #343a40; */
  width: 240px;
  font-size: 1rem;
  padding-left: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &:hover {
    background-color: $primary-sup-light;
  }
}

/* 覆盖选中项的背景色和文字颜色 */
.dropdown-item.active,
.dropdown-item:active {
  background-color: #007bff;
  color: #fff;
}
</style>
