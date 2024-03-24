<template>
  <div class="home-to-top-container" @click="handleToTop">
    <button type="button" class="btn btn-none">
      <font-awesome-icon :icon="['fas', 'chevron-up']" />
    </button>
  </div>
</template>

<script setup>
const handleToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<style lang="scss">
.home-to-top-container {
  position: fixed;
  right: 25px;
  bottom: 25px;
  background: #fff;
  border: 1px solid #dfe6e9;
  box-shadow: 0.5px 0px 5px 0.5px #c3c3c3;
}
</style>
