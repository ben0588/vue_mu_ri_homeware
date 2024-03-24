<template>
  <p class="d-inline-flex border-bottom-2 gap-1 w-100 mb-2" :class="{ 'border-dark': isOpenState }">
    <a
      class="d-flex justify-content-between align-items-center text-dark w-100 fs-4 py-3"
      :href="`#collapseExample-${list.id}`"
      role="button"
      :aria-expanded="isOpenState"
      aria-controls="collapseExample"
      @click.prevent="toggleOpen"
      :data-bs-toggle="`#collapseExample-${list.id}`"
    >
      <span>{{ list.title }}</span>
      <span>
        <font-awesome-icon
          :icon="isOpenState ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
        />
      </span>
    </a>
  </p>
  <div class="collapse" :id="`collapseExample-${list.id}`" ref="bsCollapseModalRef">
    <div class="card card-body ps-0">
      <slot></slot>
      <ul class="list-disc">
        <li v-for="(textItem, textIndex) in list.center" :key="textIndex">{{ textItem }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { Collapse } from 'bootstrap';

const props = defineProps({
  list: Object,
  index: Number,
});

const isOpenState = ref(false);
const bsCollapseModalRef = ref(null);
const bsCollapseModalInstance = ref(null); // 實體存放區

onMounted(async () => {
  await nextTick(); // 保證 DOM 完成加載完畢

  // 初始化 Bootstrap Collapse 實例
  bsCollapseModalInstance.value = new Collapse(bsCollapseModalRef.value, {
    toggle: false, // 初始化時不切換顯示/隱藏狀態
  });

  // 根據 index 的值來控制顯示或隱藏
  if (props.index !== 0) {
    bsCollapseModalInstance.value.hide();
    isOpenState.value = false;
  } else {
    bsCollapseModalInstance.value.show();
    isOpenState.value = true;
  }
});

onUnmounted(() => {
  // bootstrap modal close 清除實體化
  if (bsCollapseModalInstance.value) {
    bsCollapseModalInstance.value.dispose();
  }
});

const toggleOpen = () => {
  bsCollapseModalInstance.value.toggle();
  isOpenState.value = !isOpenState.value;
};
</script>

<style lang="scss">
.collapse {
  .card-body {
    border: none !important;
  }
}
.collapsing {
  .card-body {
    border: none !important;
  }
}

.border-bottom-2 {
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid #dfe6e9;
}

.border-dark {
  border-bottom: 2px solid #000;
}

.list-disc {
  list-style-type: disc !important;
}
</style>
