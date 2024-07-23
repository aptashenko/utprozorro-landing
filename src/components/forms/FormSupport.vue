<template>
  <base-form
    v-if="!formSubmitted"
    ref="form"
    :form="supportForm"
    :rules="supportValidation"
    @submit-event="onSubmit"
    class="bg-primary rounded-[12px] flex flex-col gap-[18px]"
    v-slot="{ errors, values }"
  >
    <label class="relative">
      <h3 class="text-[18px] font-[500] text-[#EBEBF4] mb-[2px]">Електронна пошта</h3>
      <p class="text-[13px] font-[500] leading-[1.2] text-neutral mb-[8px]">Так ми з вами зв'яжемося.</p>
      <input
        v-model="values.email.value"
        type="email"
        placeholder="example@gmail.com"
        class="bg-[#353A50] py-[18px] px-[20px] w-full rounded-[8px] text-[16px] text-neutral placeholder:text-neutral placeholder:opacity-50"
      />
      <transition name="fade" mode="out-in">
        <p class="absolute top-[100%] text-error text-[12px]" v-show="errors.email">
          {{ errors.email }}
        </p>
      </transition>
    </label>
    <label class="relative">
      <h3 class="text-[18px] font-[500] text-[#EBEBF4] mb-[2px]">Телеграм</h3>
      <p class="text-[13px] font-[500] leading-[1.2] text-neutral mb-[8px]">Так отримаєте відповідь швидше.</p>
      <input
        v-model="values.telegram.value"
        type="text"
        placeholder="@ptashenko_art"
        class="bg-[#353A50] py-[18px] px-[20px] w-full rounded-[8px] text-[16px] text-neutral placeholder:text-neutral placeholder:opacity-50"
      />
      <transition name="fade" mode="out-in">
        <p class="absolute top-[100%] text-error text-[12px]" v-show="errors.telegram">
          {{ errors.telegram }}
        </p>
      </transition>
    </label>
    <label class="relative">
      <h3 class="text-[18px] font-[500] text-[#EBEBF4] mb-[2px]">Ім'я</h3>
      <p class="text-[13px] font-[500] leading-[1.2] text-neutral mb-[8px]">Як ми можемо до вас звертатися.</p>
      <input
        v-model="values.name.value"
        type="text"
        placeholder="Даша"
        class="bg-[#353A50] py-[18px] px-[20px] w-full rounded-[8px] text-[16px] text-neutral placeholder:text-neutral placeholder:opacity-50"
      />
      <transition name="fade" mode="out-in">
        <p class="absolute top-[100%] text-error text-[12px]" v-show="errors.name">
          {{ errors.name }}
        </p>
      </transition>
    </label>
    <label class="relative flex flex-col mb-[24px]">
      <h3 class="text-[18px] font-[500] text-[#EBEBF4] mb-[2px]">Повідомлення</h3>
      <p class="text-[13px] font-[500] leading-[1.2] text-neutral mb-[8px]">Опишіть свої питання в цьому полі, і ми відповімо на них. Якщо ви не знаєте, що запитати, залиште поле порожнім, і ми зв'яжемося з вами для консультації.</p>
      <textarea
        v-model="values.message.value"
        rows="5"
        placeholder="Наприклад: у мене проблема з оплатою"
        class="bg-[#353A50] py-[18px] resize-none px-[20px] w-full rounded-[8px] text-[16px] text-neutral placeholder:text-neutral placeholder:opacity-50"
      ></textarea>
      <transition name="fade" mode="out-in">
        <p class="absolute top-[100%] text-error text-[12px]" v-show="errors.message">
          {{ errors.message }}
        </p>
      </transition>
    </label>
    <base-button
      class="py-[16px] text-[16px] font-[700] leading-[1.2]"
      :disabled="disableRules"
      :loading="loaders.support"
    >
      Надіслати
    </base-button>
  </base-form>
  <div v-else>
    <h2 class="font-[600] text-[#fff] text-center">Дякуємо!<br>Ми вже отримали Ваш запит та опрацьовуємо його!</h2>
  </div>
</template>
<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseForm from '@/components/forms/BaseForm.vue'
import { supportForm, supportValidation } from '@/components/forms/forms-states/support.js'
import { computed, ref } from 'vue'
import { useFetchUsers } from '@/composables/useFetchUsers.js'
const form = ref(null);
const formSubmitted = ref(false)
const { sendSupport, loaders } = useFetchUsers()
const onSubmit = async payload => {
  const data = {
    email: payload.email.value,
    name: payload.name.value,
    telegram: payload.telegram.value,
    text: payload.message.value
  }
  formSubmitted.value = await sendSupport(data)
}

const disableRules = computed(() => {
  const requiredInputs = Object.values(form.value?.formsClone || {}).filter(input => input.required);
  return requiredInputs.some(input => !input.value)
})


</script>
