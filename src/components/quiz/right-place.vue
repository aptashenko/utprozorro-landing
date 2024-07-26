<template>
  <div class="min-h-[100dvh] flex flex-col pb-[40px]">
    <img src="@/assets/images/quiz/quiz-2.png" />
    <div class="px-[20px] flex flex-col flex-1">
      <div class="flex-1">
        <p class="text-[#C7D2FF] text-[14px] font-[600] leading-[1.2] text-center mb-[6px]">
          Ви знаходитесь в правильному місці
        </p>
        <h2 class="text-[#F47AFF] text-[34px] font-[600] leading-[1.2] text-center mb-[4px]">
          Більше тисячі +
        </h2>
        <p class="text-[#fff] text-[26px] font-[600] leading-[1.2] text-center mb-[14px]">
          студентів вже отримали роботу мрії
        </p>
        <p class="text-[#C7D2FF] text-[24px] font-[600] leading-[1.2] text-center">
          з UTPROZORRO
        </p>
      </div>
      <base-button variant="quiz" class="w-full" :to="nextQuestionPath">
        Продовжити
      </base-button>
    </div>
  </div>
</template>
<script setup>
import {useQuiz} from "@/composables/useQuiz.js";
import BaseButton from "@/components/ui/BaseButton.vue";

const { nextQuestionPath } = useQuiz()
</script>
