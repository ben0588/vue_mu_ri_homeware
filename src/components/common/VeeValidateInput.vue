<template>
  <div class="mb-3">
    <label :for="id" class="form-label fw-500 mb-1" :class="labelClass"
      ><span class="text-danger">*</span>{{ label }}</label
    >
    <Field
      :name="name"
      :id="id"
      class="form-control"
      :placeholder="placeholder"
      :type="as === 'select' ? null : type"
      :disabled="disabled"
      :as="as"
      :class="{ 'is-invalid': errors[name] }"
      ><slot></slot>
    </Field>
    <ErrorMessage :name="name" class="text-danger" />
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from 'vee-validate';

defineProps({
  name: String,
  id: String,
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  errors: Object,
  disabled: {
    type: Boolean,
    default: false,
  },
  as: {
    type: String,
    default: 'input',
  },
  labelClass: {
    type: String,
    default: 'fs-5',
  },
});
</script>
