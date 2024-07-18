<template>
  <div class="fixed top-[30%] left-0 w-full px-[20px]">
    <div class="relative border-[#5B7DFB] border-solid border-[1px] overflow-hidden z-[2] max-w-[400px] w-full mx-auto bg-[#20222E] pt-[50px] pb-[24px] px-[10px] rounded-[16px]">
      <template v-if="planIndex === 0">
        <h2 class="text-[#fff] text-[18px] font-[600] leading-[1.2]">
          Спробуйте два урока
        </h2>
        <p class="text-[#786CFF] my-[10px] text-[24px] font-[700] leading-[1.2] uppercase">
          всього за 400₴
        </p>
        <p class="text-[#fff] text-[18px] font-[600] leading-[1.2]">
          замість <span class="line-through font-[500]">1000₴</span> за повний курс
        </p>
      </template>
      <template v-if="planIndex === 1">
        <h2 class="text-[#fff] text-[18px] font-[600] leading-[1.2]">
          Спробуйте <span class="text-[#fff] my-[10px] text-[24px] font-[700] leading-[1.2] uppercase">ВЕСЬ КУРС</span>
        </h2>
        <p class="text-[#786CFF] my-[10px] text-[24px] font-[700] leading-[1.2] uppercase">
          всього за 400₴
        </p>
        <p class="text-[#fff] text-[18px] font-[600] leading-[1.2]">
          замість <span class="line-through font-[500]">1000₴</span>
        </p>
      </template>
      <div class="mt-[24px] w-[70%] mx-auto flex flex-col gap-[16px]">
        <base-button variant="rounded" class="w-full py-[10px]" @click="handleCta">
          Спробувати
        </base-button>
        <button class="text-[#fff] text-[12px] font-[600] underline w-full leading-[1.2]" @click="toggleComponent">
          НЕ ПОТРІБНО
        </button>
      </div>
      <img src="@/assets/images/discount.png" alt="icon" class="absolute animated top-0 right-0 z-[-1] pointer-events-none w-[100px]">
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { usePlansSettings } from '@/composables/usePlansSettings.js'
import { usePopups } from '@/composables/usePopups.js'
const { setPlan, planIndex, priceSettings } = usePlansSettings();
const { toggleComponent, openCheckout } = usePopups();

const handleCta = () => {
  setPlan();
  toggleComponent()
  setTimeout(() => {
    openCheckout({price: priceSettings.value})
  }, 1000)
}
</script>

<style scoped>
@keyframes tada {
  0% {
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}
.animated {
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: tada;
}
</style>
