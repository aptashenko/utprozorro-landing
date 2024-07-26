<template>
  <div class="px-[20px] pt-[40px] pb-[80px] min-h-[100dvh] flex flex-col">
    <h2 class="text-[#C7D2FF] text-center text-[16px] font-[600] leading-[1.2] mb-[26px]">
      Що кажуть студенти, які пройшли курс
    </h2>
    <div class="flex-1">
      <div class="relative pb-[100px]">
        <transition name="slide-left" mode="out-in">
          <review-message v-show="reviewIdx >= 1" name="Анна" class="max-w-[314px]">
          <span>
            «Курс допоміг мені <span class="text-[#5754FF]">швидко освоїти</span> всі аспекти роботи з тендерами. <span class="text-[#5754FF]">Вже отримала кілька пропозицій!</span> 👍»
          </span>
          </review-message>
        </transition>
        <transition name="slide-right" mode="out-in">
          <review-message
            v-show="reviewIdx >= 2"
            name="Дмитро"
            shadow
            class="absolute bottom-0 right-0 max-w-[234px]"
          >
          <span>
            «Курс відкрив для мене <span class="text-[#5754FF]">нові кар'єрні можливості</span>. Працюю тендерним спеціалістом в ІТ-компанії»
          </span>
          </review-message>
        </transition>
      </div>
      <div class="mx-auto my-[10px]">
        <div class="bg-[#54468A] blur-[100px] w-[174px] h-[174px] absolute-center-x absolute-center-y z-[-1]" />
        <img
            src="@/assets/images/rating.png"
            class="w-[235px] mx-auto block transition duration-500"
            :class="[reviewIdx >= 5 ? 'opacity-100' : 'opacity-0']"
        />
      </div>
      <div class="relative pb-[85px]">
        <transition name="slide-left" mode="out-in">
          <review-message
            v-show="reviewIdx >= 3"
            name="Олена"
            shadow
            class="w-[224px] relative left-0"
          >
          <span>
            «Відмінне навчання!  <span class="text-[#5754FF]">Багато практики та корисних порад.</span> Впевнений у своїх силах»
          </span>
          </review-message>
        </transition>
        <transition name="slide-right" mode="out-in">
          <review-message
            v-show="reviewIdx >= 4"
            name="Максим"
            shadow
            class="w-[252px] absolute bottom-0 right-[-10px]"
          >
          <span>
            «Дуже задоволена курсом. Все <span class="text-[#5754FF]">зрозуміло та доступно.</span> Працюю тендерним спеціалістом <span class="text-[#5754FF]">у великій компанії</span>🚀»
          </span>
          </review-message>
        </transition>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div v-show="reviewIdx >= 6" class="fixed bg-primary bottom-0 left-0 py-[10px] px-[20px] w-full">
        <div class="max-w-[32rem] mx-auto">
          <base-button variant="quiz" :to="nextQuestionPath" class="w-full">
            Продовжити
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
import ReviewMessage from '@/components/quiz/reviews-elements/ReviewMessage.vue'

const steps = [1,2,3,4,5,6];
const reviewIdx = ref(0);

const { nextQuestionPath } = useQuiz()

const setIdx = idx => {
  reviewIdx.value = idx
}

iterateWithDelay({array: steps, callback: setIdx, delay: 1000})
</script>
