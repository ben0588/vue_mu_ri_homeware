<template>
  <p class="d-inline-flex border-bottom-2 gap-1 w-100 mb-2" :class="{ 'border-dark': isOpenFn }">
    <a
      class="d-flex justify-content-between align-items-center text-dark w-100 fs-4 py-3"
      :href="`#collapseExample-${list.id}`"
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample"
      @click.prevent="toggleOpen"
      data-bs-toggle="collapse"
    >
      <span>
        {{ list.title }}
      </span>
      <span>
        <font-awesome-icon
          :icon="isOpenFn ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
        />
      </span>
    </a>
  </p>
  <div class="collapse" :id="`collapseExample-${list.id}`" :class="{ show: index === 0 }">
    <div class="card card-body ps-0">
      <slot></slot>
      <ul class="list-disc">
        <li v-for="(textItem, textIndex) in list.center" :key="textIndex">{{ textItem }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';

const isOpen = ref(false);

const props = defineProps({
  list: Object,
  index: Number,
});

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

onMounted(() => {
  if (props.index === 0) {
    isOpen.value = true;
  }
});

const isOpenFn = computed(() => isOpen.value);
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
