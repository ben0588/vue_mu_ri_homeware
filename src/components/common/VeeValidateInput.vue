<template>
  <div>
    <label :for="name" class="form-label fs-5">{{ label }}</label>
    <Field
      :name="name"
      :id="name"
      :value="value"
      class="form-control"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      :as="as"
      :class="{ 'is-invalid': errorText }"
    />
    <span class="d-black invalid-feedback">{{ errorText }}</span>
  </div>
</template>

<script setup>
import { Field } from 'vee-validate';

const props = defineProps({
  name: String,
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text'
  },
  errorText: String,
  disabled: {
    type: Boolean,
    default: false
  },
  as: String,
  value: String
});
</script>
