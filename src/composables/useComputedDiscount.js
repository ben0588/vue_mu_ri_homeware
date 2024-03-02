import { computed } from 'vue';

function useComputedDiscount(origin, price) {
  const percentage = computed(() => Math.floor(((origin - price) / origin) * 100));

  return `${percentage.value}%`;
}

export default useComputedDiscount;
