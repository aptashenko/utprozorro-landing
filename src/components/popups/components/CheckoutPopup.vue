<template>
  <div class="fixed bottom-0 left-0 w-full">
    <div class="bg-[#EEECF7] relative flex flex-col rounded-tl-[16px] rounded-tr-[16px] w-full max-w-[32rem] mx-auto p-[40px] min-h-[50vh]">
      <div class="absolute top-[15px] right-[15px]">
        <base-button variant="icon" @click="toggleComponent">
          <i-svg name="cross" />
        </base-button>
      </div>
      <div class="mb-[24px]">
        <div class="flex items-center gap-[16px] w-fit mb-[8px]">
          <p class="text-[32px] leading-[1.2] text-[#292758] font-[600] text-center">
            {{ priceToPay }}₴
          </p>
          <p v-if="usersData.discount || price.name !== 'basic'" class="text-[20px] leading-[1.2] line-through text-[#29275899] font-[500]">
            1000,00₴
          </p>
        </div>
        <p v-if="usersData.discount" class="text-[#8799C899] text-[18px] font-[600] leading-[1.2] mb-[16px]">
          Знижка {{usersData.discount}}%
        </p>
        <a :href="price.link">
          <base-button
            variant="rounded"
            class="w-full py-[18px] mt-auto"
            :loading="loaders.payment"
            @click="handlePay"
          >
            Перейти до оплати
          </base-button>
        </a>
      </div>
      <div>
        <h2 class="text-[#292758] text-[20px] font-[600] leading-[1.2] mb-[10px]">Цей курс включає:</h2>
        <ul class="flex flex-col gap-[6px] pb-[12px] border-b-[#DCD4FF] border-b-[1px] border-b-solid">
          <li
            v-for="({value, text}, key) of price.settings"
            class="flex items-start gap-[10px]"
          >
            <i-svg :name="{icon: key, dir: 'checkout'}" class="flex-shrink-0" />
            <p class="text-[16px] text-[#292758] leading-[24px] font-[400]">
              <span v-if="value" class="font-[600]">{{value}}</span>
              {{text}}
            </p>
          </li>
        </ul>
        <ul class="flex flex-col pt-[12px] gap-[6px]">
          <li class="flex items-center gap-[10px]">
            <p class="text-[16px] text-[#292758] leading-[24px] font-[400]">
              <span class="text-[#8799C8]">Рівень:</span>
              початковий
            </p>
          </li>
          <li class="flex items-center gap-[10px]">
            <p class="text-[16px] text-[#292758] leading-[24px] font-[400]">
              <span class="text-[#8799C8]">Графік:</span>
              гнучкий графік
            </p>
          </li>
          <li class="flex items-center gap-[10px]">
            <p class="text-[16px] text-[#292758] leading-[24px] font-[400]">
              <span class="text-[#8799C8]">Формат:</span>
              відео уроки
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import ISvg from "@/components/shared/ISvg.vue";
import {computed, onBeforeUnmount} from "vue";
import {usePopups} from "@/composables/usePopups.js";
import {useQuiz} from "@/composables/useQuiz.js";
import { usePlansSettings } from '@/composables/usePlansSettings.js'
import { useFetchUsers } from '@/composables/useFetchUsers.js'

const { toggleComponent, openAlert } = usePopups()

const props = defineProps({
  price: {
    type: Object,
    required: true
  }
})

const { usersData, setDiscount } = useQuiz();
const { planIndex } = usePlansSettings();
const { loaders } = useFetchUsers();

const discount = computed(() => usersData.discount ? props.price.amount * (usersData.discount / 100) : 0)

const priceToPay = computed(() => (props.price.name === 'basic' ? props.price.amount - discount.value : props.price.amount).toFixed(2).replace('.', ','))
const handlePay = () => {
  loaders.payment = true;
}

onBeforeUnmount(() => {
  setDiscount(60)
  if (planIndex.value < 1) {
    setTimeout(openAlert, 1000)
  }
})
</script>
