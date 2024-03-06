<template>
  <div class="form-check" :class="inputContainer">
    <input
      class="form-check-input"
      type="checkbox"
      :id="id"
      v-model="value"
      :class="`${errorMessage && meta.touched && 'is-invalid'}`"
    />
    <label class="form-check-label" :for="id" :class="labelClass">
      <span class="text-danger" v-if="required">*</span>{{ labelText }}
    </label>
    <span class="text-danger" v-if="errorMessage && meta.touched">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
  name: String,
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
