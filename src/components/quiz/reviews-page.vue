<template>
  <div class="px-[20px] pt-[40px] pb-[80px] min-h-[100vh] flex flex-col">
    <h2 class="text-[#C7D2FF] text-center text-[16px] font-[600] leading-[1.2] mb-[26px]">
      Что говорят ученики прощедшие курс «Тендер с нуля»
    </h2>
    <div class="flex-1">
      <div class="relative pb-[100px]">
        <transition name="slide-left" mode="out-in">
          <img v-show="reviewIdx >= 1" src="@/assets/images/quiz/reviews/review1.png" class="w-[314px]" />
        </transition>
        <transition name="slide-right" mode="out-in">
          <img v-show="reviewIdx >= 2" src="@/assets/images/quiz/reviews/review2.png" class="w-[257px] absolute bottom-0 right-[-10px]" />
        </transition>
      </div>
      <div class="mx-auto">
        <div class="bg-[#54468A] blur-[100px] w-[174px] h-[174px] absolute-center-x absolute-center-y z-[-1]" />
        <img
            src="@/assets/images/rating.png"
            class="w-[235px] mx-auto block transition duration-500"
            :class="[reviewIdx >= 5 ? 'opacity-100' : 'opacity-0']"
        />
      </div>
      <div class="relative pb-[85px]">
        <transition name="slide-left" mode="out-in">
          <img v-show="reviewIdx >= 3" src="@/assets/images/quiz/reviews/review3.png" class="w-[224px] relative left-[-10px]" />
        </transition>
        <transition name="slide-right" mode="out-in">
          <img v-show="reviewIdx >= 4" src="@/assets/images/quiz/reviews/review4.png" class="w-[252px] absolute bottom-0 right-[-10px]" />
        </transition>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div v-show="reviewIdx >= 6" class="fixed bg-primary bottom-0 left-0 py-[10px] px-[20px] w-full">
        <div class="max-w-[32rem] mx-auto">
          <base-button variant="quiz" :to="nextQuestionPath" class="w-full">
            Продолжить
          </base-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import {ref} from "vue";
import iterateWithDelay from "@/utils/iterate-with-delay.js";
import BaseButton from "@/components/ui/BaseButton.vue";
import {useQuiz} from "@/composables/useQuiz.js";

const steps = [1,2,3,4,5,6];
const reviewIdx = ref(0);

const { nextQuestionPath } = useQuiz()

const setIdx = idx => {
  reviewIdx.value = idx
}

iterateWithDelay({array: steps, callback: setIdx, delay: 1000})
</script>
