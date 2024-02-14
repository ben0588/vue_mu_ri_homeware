<template>
  <div class="mb-3">
    <label :for="value" class="form-label"
      ><span class="text-danger" v-show="isRequired">*</span>{{ label }}
    </label>
    <input
      :id="value"
      :type="type"
      class="form-control"
      :placeholder="placeholder"
      :v-model="value"
      :v-bind="value"
      :class="{ 'is-invalid': errors[`${[i18n]}.imageUrl`] }"
    />
    <!-- v-model="tempData[i18nStore.currentIcon].imageUrl" -->
    <div class="d-black invalid-feedback">
      {{ errors[`${[i18n]}.${name}`] && errors[`${[i18n]}.${name}`] }}
    </div>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
  name: String,
  type: {
    type: String,
    default: 'text',
  },
  label: String,
  isRequired: {
    type: Boolean,
    default: false,
  },
  vModel: Object,
  vBind: Object,
  errors: Object,
  i18n: String,
  placeholder: String,
});

// The `name` is returned in a function because we want to make sure it stays reactive
// If the name changes you want `useField` to be able to pick it up
const { value, errorMessage } = useField(() => props.name);
</script>
