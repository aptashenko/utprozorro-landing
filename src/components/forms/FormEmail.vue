<template>
  <base-form
    ref="form"
    id="emailForm"
    :form="emailForm"
    :rules="emailValidation"
    @submit-event="onSubmit"
    v-slot="{ errors, values }"
  >
    <base-input
      v-model="values.email.value"
      :error="errors.email"
      name="email"
      type="email"
      label="Почта"
      placeholder="example@gmail.com"
    />
    <base-button
      :disabled="!values.email.value"
      :loading="loaders.addUser"
      variant="quiz"
      type="submit"
      class="w-full mt-[24px]"
    >
      Отримати промокод
    </base-button>
  </base-form>
</template>

<script setup>
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import {useFetchUsers} from "@/composables/useFetchUsers.js";
import BaseForm from '@/components/forms/BaseForm.vue'
import { emailForm, emailValidation } from '@/components/forms/forms-states/email.js'
import { ref } from 'vue'

const { loaders } = useFetchUsers()
const emit = defineEmits(['on-submit'])

const form = ref(null)
const onSubmit = payload => {
  emit('on-submit', payload.email.value)
}

</script>
