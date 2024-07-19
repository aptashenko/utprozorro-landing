<template>
  <div class="px-[20px] min-h-[100vh] py-[30px] flex flex-col items-center">
    <div class="relative z-[2] bg-[#AD90FF] rounded-[12px] p-[10px] overflow-hidden">
      <div class="absolute top-0 left-0 right-0 bottom-0 z-[-1] scores-bg" />
      <div class="px-[5px] py-[40px] border-solid border-[1px] rounded-[12px] border-[#fff]">
        <div class="relative scores-gradient border-solid border-[2px] border-[#F7D9FF] rounded-full w-[100px] h-[100px] grid place-items-center mx-auto mb-[20px]">
          <p class="text-[#fff] text-[32px] leading-[1.2] text-center">9/10</p>
          <img src="@/assets/images/emoji/confetti-icon.png" class="absolute top-[60%] left-[70%] w-[48px]" />
        </div>
        <h2 class="text-[#fff] text-[26px] leading-[1.2] font-[600] mb-[18px] text-center">
          Вам підходить професія спеціаліста з публічних закупівель
        </h2>
        <p class="text-[#fff] text-[14px] leading-[1.2] mb-[8px] text-center">
          Ваші якості ідеально підходять для професії тендерного спеціаліста. Ринок терміново потребує 1000 таких професіоналів.
        </p>
        <p class="text-[#fff] text-[16px] leading-[1.2] font-[600] mb-[8px] text-center">
          Ваші навички затребувані, і компанії чекають саме на вас!
        </p>
      </div>
    </div>
    <base-button
        variant="quiz"
        class="w-full mt-auto"
        :to="nextQuestionPath"
    >
      Продовжити
    </base-button>
  </div>
</template>

<script setup>

import BaseButton from "@/components/ui/BaseButton.vue";
import {useQuiz} from "@/composables/useQuiz.js";
const { nextQuestionPath } = useQuiz()
</script>

<style scoped>
.scores-bg {
  background: url('@/assets/images/users-scores-bg.png');
  background-size: cover;
}
.scores-gradient {
  background: linear-gradient(150deg, #A880FC -34.53%, #101079 94.55%);
}
</style>
