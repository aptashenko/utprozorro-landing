<template>
  <div class="fixed top-0 left-0 z-[100] w-full">
    <div class="max-w-[32rem] flex items-center transition justify-between gap-[10px] h-[75px] mx-auto bg-[#ffcc00] rounded-b-[10px] py-[10px] px-[24px] text-center">
      <p class="font-[600] text-primary">
        Ваша знижка {{usersData.discount}}%:
      </p>
      <base-button variant="rounded" class="text-[14px]" @click="openPayCheckout">
        Оплатити
      </base-button>
    </div>
  </div>
</template>

<script setup>
import { useQuiz } from '@/composables/useQuiz.js'
import BaseButton from '@/components/ui/BaseButton.vue'
import { usePlansSettings } from '@/composables/usePlansSettings.js'
import { usePopups } from '@/composables/usePopups.js'

const { usersData } = useQuiz();
const { openCheckout } = usePopups()

const { priceSettings } = usePlansSettings();
const openPayCheckout = () => {
  openCheckout({price: priceSettings.value})
}
</script>
