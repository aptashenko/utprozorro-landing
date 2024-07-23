<template>
  <form @submit.prevent="submit">
    <slot :errors="errors" :values="formsClone" />
  </form>
</template>

<script setup>
import { useFormValidate } from '@/composables/useFormValidate.js'
import { computed, ref } from 'vue'
import ERROR_MESSAGES from '@/static/error-messages.js'

const emit = defineEmits(['on-submit'])
const props = defineProps({
  form: {
    type: Object,
    required: true
  },
  rules: {
    type: Object,
    required: true
  }
})

const formsClone = ref(JSON.parse(JSON.stringify(props.form)));

const errors = computed(() => {
  const result = {};
  const entries = Object.entries(formsClone.value);
  entries.forEach(([key, value]) => {
    result[key] = value.serverError ? value.serverError : errorMessage(key, value.validationError)
  })

  return result
})

const errorMessage = (key, value) => ERROR_MESSAGES[key][value] || '';

const { validate } = useFormValidate(props.rules, formsClone.value);

const resetForm = () => {
  formsClone.value = props.form;
}

const submit = async () => {
  const valid = await validate();
  if (valid) {
    emit('submit-event', formsClone.value);
    resetForm()
  }
}

defineExpose({submit, formsClone})
</script>
