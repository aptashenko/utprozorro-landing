<template>
  <Form
      id="email"
      @submit="emit('on-submit')"
      :validation-schema="schema"
      v-slot="{ errors, values }"
  >
    <base-input
        name="email"
        type="email"
        label="Почта"
        placeholder="example@gmail.com"
    />
    <base-button :disabled="errors.email || !values.email" variant="quiz" class="w-full mt-[24px]">
      Получить промокод
    </base-button>
  </Form>
</template>

<script setup>
import { Form } from "vee-validate";
import {defineRule} from "vee-validate";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

const emit = defineEmits(['on-submit'])

defineRule('required', value => {
  if (!value || !value.length) {
    return 'Це поле обов\'язкове';
  }
  return true;
});
defineRule('email', value => {
  if (!value || !value.length) {
    return true;
  }
  if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(value)) {
    return 'Введіть корректний емейл';
  }
  return true;
});

const schema = {
  email: 'required|email',
};
</script>
