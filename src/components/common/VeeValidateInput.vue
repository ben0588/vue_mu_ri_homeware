<template>
  <div class="mb-3">
    <label :for="id" class="form-label fs-5 mb-1"
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
    <!-- <span class="d-black invalid-feedback">{{ errors[name] }}</span> -->

    <!-- <div class="mb-3">
      <label for="more-email" class="form-label mb-1"
        ><span class="text-danger">*</span>聯絡人姓名</label
      >
      <Field
        name="email"
        type="email"
        id="more-email"
        class="form-control"
        placeholder="請輸入聯絡電子信箱"
      />
      <ErrorMessage name="email" class="text-danger" />
    </div> -->

    <!-- <Field name="questionType" as="select" id="more-question">
        <option disabled value="">請選擇...</option>
        <option :value="item.title" v-for="item in questionTypeList" :key="item.id">
          {{ item.title }}
        </option>
      </Field> -->
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
});
</script>
