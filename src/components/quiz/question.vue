<template>
  <div class="grid place-items-center pt-[52px] pb-[30px]">
    <div class="img-gradient-top relative">
      <div class="img-gradient-bottom relative">
        <img :src="image" />
      </div>
    </div>
    <div class="px-[20px]">
      <h2 class="font-[600] text-[24px] leading-[1.2] text-[#fff] mb-[40px]">
        {{currentQuestion.question}}
      </h2>

      <div class="flex flex-col gap-[10px] mt-[20px]">
        <button
            v-for="answer of currentQuestion.answers"
            class="py-[18px] border-[1px] border-solid px-[16px] transition rounded-[8px] bg-[#4D5280] text-[#fff] text-[16px] leading-[1.2] text-left"
            :class="[
                answer === currentQuestion.answer
                ? 'border-solid border-[#fff] font-[600]'
                : 'border-[transparent] font-[500]',
                currentQuestion.answer && answer !== currentQuestion.answer ? 'opacity-20' : 'opacity-100'
                ]"
            :disabled="disableAnswerButton"
            @click="nextPage(answer)"
        >
          {{answer}}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useQuiz} from "@/composables/useQuiz.js";
import {computed} from "vue";
const { currentQuestion, nextPage, disableAnswerButton } = useQuiz();
const image = computed(() => new URL(`../../assets/images/quiz/${currentQuestion.value.image}`, import.meta.url).href)
</script>

<style scoped>
.img-gradient-top::before {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 10px;
  background: linear-gradient(180deg, #20222E 0%, #20222E 35%, rgba(32, 34, 46, 0.00) 100%);
  z-index: 1;
  pointer-events: none;
}
.img-gradient-bottom::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 55px;
  background: linear-gradient(0deg, #20222E 0%, #20222E 35%, rgba(32, 34, 46, 0.00) 100%);
  z-index: 1;
  pointer-events: none;
}
</style>
