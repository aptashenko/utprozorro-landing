<template>
  <Form
      id="email"
      :validation-schema="schema"
      v-slot="{ errors, values }"
  >
    <base-input
        name="email"
        type="email"
        label="Почта"
        :value="usersData.email"
        placeholder="example@gmail.com"
    />
    <base-button
        :disabled="errors.email || !values.email || loaders.addUser"
        variant="quiz"
        type="button"
        class="w-full mt-[24px]"
        @click.prevent="onSubmit(values)"
    >
      Получить промокод
    </base-button>
  </Form>
</template>

<script setup>
import {Form} from "vee-validate";
import {defineRule} from "vee-validate";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import {useFetchUsers} from "@/composables/useFetchUsers.js";
import {useQuiz} from "@/composables/useQuiz.js";

const emit = defineEmits(['on-submit'])

const { addNewUser, loaders } = useFetchUsers()
const { usersData } = useQuiz()
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

const onSubmit = async (payload) => {
  emit('on-submit', payload)
}

const schema = {
  email: 'required|email',
};
</script>
