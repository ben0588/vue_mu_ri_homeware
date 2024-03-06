<template>
  <div :class="inputContainer">
    <label :for="id" class="form-label" :class="labelClass"
      ><span class="text-danger" v-if="required">*</span>{{ labelText }}</label
    >
    <input
      :id="id"
      v-model="value"
      :type="type || 'text'"
      class="form-control"
      :class="`${errorMessage && meta.touched && 'is-invalid'}`"
    />
    <span class="text-danger" v-if="errorMessage && meta.touched">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
  name: String,
  type: String,
  id: String,
  inputContainer: {
    type: String,
    default: 'mb-3',
  },
  required: {
    type: Boolean,
    default: false,
  },
  labelText: String,
  labelClass: {
    type: String,
    default: 'fs-5',
  },
});

const { value, errorMessage, meta } = useField(() => props.name);
</script>
