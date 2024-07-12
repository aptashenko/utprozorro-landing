<template>
  <div class="px-[20px] py-[40px]">
    <h2 class="text-[#C7D2FF] text-center text-[16px] font-[600] leading-[1.2] mb-[26px]">
      Получите полные знания о тендерах<br>на UTPROZORRO и сделайте шаг к<br>успешной карьере
    </h2>
    <div>
      <transition name="slide-left" mode="out-in">
        <div v-show="plusesList.length" class="relative z-[2] min-h-[230px] bg-[#EFF2FF] p-[20px] pb-[36px] rounded-[12px]">
          <img src="@/assets/images/emoji/awesome-icon.png" class="absolute top-[-30px] left-[-10px] w-[71px]" />
          <h3 class="text-[#20222E] text-[13px] font-[600] leading-[1.2] text-center mb-[16px]">
            Пройти курс на UTPROZORRO
          </h3>
          <transition-group
              tag="ul"
              class="flex flex-col gap-[8px] items-start"
          >
            <li
                v-for="(plus, idx) of plusesList"
                :key="idx"
                class="flex items-start gap-[6px]"
            >
              <i-svg name="check-bullet" class="flex-shrink-0" />
              <p class="text-[#20222E] text-[14px] font-[500] leading-[1.2]">{{plus}}</p>
            </li>
          </transition-group>
          <img src="@/assets/images/emoji/stars-icon.png" class="absolute right-0 bottom-0 w-[45px] z-[-1]" />
        </div>
      </transition>
      <transition name="slide-right" mode="out-in">
        <div v-show="minusesList.length" class="relative z-[2] bg-[#4D5280] min-h-[246px] p-[20px] pb-[36px] rounded-[12px] mt-[18px]">
          <h3 class="text-[#D9DEFF] text-[13px] font-[600] leading-[1.2] text-center mb-[16px]">
            Не проходить курс
          </h3>
          <transition-group
              tag="ul"
              class="flex flex-col gap-[8px] items-start"
          >
            <li
                v-for="(minus, idx) of minusesList"
                :key="idx"
                class="flex items-start gap-[6px]"
            >
              <i-svg name="unchecked-bullet" class="flex-shrink-0" />
              <p class="text-[#D9DEFF] text-[14px] font-[500] leading-[1.2]">{{minus}}</p>
            </li>
          </transition-group>
          <img src="@/assets/images/emoji/sad-icon.png" class="absolute right-[-20px] bottom-[-20px] w-[80px] z-[-1]" />
        </div>
      </transition>
    </div>
    <transition name="slide-left" mode="out-in">
      <base-button
          v-show="plusesList.length === pluses.length && minusesList.length === minuses.length"
          variant="quiz"
          class="mt-[18px] w-full"
          :to="nextQuestionPath"
      >
        Продолжить
      </base-button>
    </transition>
  </div>
</template>

<script setup>
import ISvg from "@/components/shared/ISvg.vue";
import {ref} from "vue";
import iterateWithDelay from "@/utils/iterate-with-delay.js";
import BaseButton from "@/components/ui/BaseButton.vue";
import {useQuiz} from "@/composables/useQuiz.js";

const plusesList = ref([]);
const minusesList = ref([]);

const {nextQuestionPath} = useQuiz()

const pluses = [
  'Высокий спрос на тендерных специалистов.',
  'Качественное обучение от экспертов.',
  'Качественное обучение от экспертов.',
  'Отличные карьерные перспективы.'
]

const minuses = [
  'Упускаете важные карьерные возможности.',
  'Не понимаете, как работать с тендерами.',
  'Ограниченное профессиональное развитие.',
  'Невостребованность на рынке труда.'
]

const startPlusesQueue = (value) => {
  plusesList.value.push(value);

  if (plusesList.value.length === pluses.length) {
    iterateWithDelay({array: minuses, callback: statMinusesQueue, delay: 1000})
  }
}

const statMinusesQueue = (value) => {
  minusesList.value.push(value)
}

iterateWithDelay({array: pluses, callback: startPlusesQueue, delay: 1000})

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
