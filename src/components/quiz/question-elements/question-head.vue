<template>
  <div class="flex items-center justify-between w-full px-[20px] py-[12px]">
    <base-button variant="icon" :to="prevQuestionPath">
      <i-svg name="angle-button" />
    </base-button>
    <div>
      <p class="text-[14px] text-[#fff] font-[600] leading-[1.2]">
        Вопрос {{questionCount}} из {{onlyQuestions.length}}
      </p>
    </div>
  </div>
</template>

<script setup>
import {useQuiz} from "@/composables/useQuiz.js";
import ISvg from "@/components/shared/ISvg.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
const { questionCount, onlyQuestions, prevQuestionPath } = useQuiz();

</script>
