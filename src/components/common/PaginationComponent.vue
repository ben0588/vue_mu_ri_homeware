<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pagination.has_pre }">
        <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page - 1)"
          >&lt;</a
        >
      </li>
      <li class="page-item" v-for="page in pagination.total_pages" :key="page + 2123">
        <a
          class="page-link"
          href="#"
          @click.prevent="changePage(page)"
          :class="{ active: page === pagination.current_page }"
          >{{ page }}</a
        >
      </li>
      <li class="page-item" :class="{ disabled: !pagination.has_next }">
        <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page + 1)">></a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
defineProps({
  pagination: Object,
  'get-products': Function,
});

const emits = defineEmits(['updated:page']);

const changePage = (page) => {
  emits('updated:page', page);
};
</script>
