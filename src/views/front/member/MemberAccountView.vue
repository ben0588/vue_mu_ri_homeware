<template>
  <div class="row border border-secondary border-2 mx-1">
    <div class="col-lg-6">
      <div class="p-4">
        <h3>會員帳戶資料</h3>
        <div class="row">
          <div class="col-6">
            <div class="mt-4">
              <p class="mb-0">電子信箱</p>
              <p class="mb-0">e*****z@gmail.com</p>
            </div>
          </div>
          <div class="col-6">
            <div class="mt-4">
              <p class="mb-0 opacity-0">電子信箱</p>
              <span class="text-success ms-2 pt-5"
                ><font-awesome-icon :icon="['far', 'circle-check']" /> 已驗證</span
              >
            </div>
          </div>
          <div class="col-6">
            <div class="mt-4">
              <p class="mb-0 mt-1">手機號碼</p>
              <p class="mb-0">0985****333</p>
            </div>
          </div>
          <div class="col-6">
            <div class="mt-4">
              <p class="mb-0 opacity-0">手機號碼</p>
              <button
                type="button"
                class="btn btn-secondary btn-sm ms-2"
                :style="{ width: `75px` }"
              >
                修改
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="h-100 p-2">
        <div class="bg-light h-100 p-3">
          <h3 class="px-3">基本資料</h3>
          <div class="row px-3" v-for="(item, index) in userData" :key="index">
            <div class="col-6">
              <div class="mt-2">
                <p class="mb-0">{{ item.title }}</p>
              </div>
            </div>
            <div class="col-6">
              <div class="mt-2">
                <p class="mb-0">{{ item.center }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const userData = ref([
  {
    title: '姓名',
    center: '王*成',
  },
  {
    title: '性別',
    center: '男',
  },
  {
    title: '地址',
    center: '台中*******20號',
  },
  {
    title: '出生日期',
    center: '未填寫',
  },
  {
    title: '電子報訂閱',
    center: '未訂閱',
  },
]);
</script>
