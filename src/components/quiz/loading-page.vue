<template>
  <div class="py-[40px] px-[20px]">
    <h2 class="text-[#fff] text-[17px] font-[600] leading-[1.2] text-center ">
      Дякуємо за відповіді!
    </h2>
    <div class="mx-auto w-fit mt-[16px]">
      <circular-progress :progress="Math.floor(progress)" />
    </div>
    <div>
      <h2 class="text-[22px] text-[#fff] font-[600] leading-[1.2] tracking-[-1px] mb-[6px]">
        Ми аналізуємо ваші дані та готуємо персональну пропозицію.
      </h2>
      <p class="text-[16px] text-[#C7D2FF] font-[500] leading-[1.2] mb-[16px]">
        Це займе кілька секунд.
      </p>
      <transition-group
        tag="ul"
        class="flex flex-col gap-[8px]"
        name="fade"
      >
        <li
          v-for="(item, idx) of analyzeList" :key="idx"
          class="flex items-start gap-[6px]"
        >
          <i-svg name="empty-check-bullet" class="flex-shrink-0" />
          <p class="text-[16px] text-[#C7D2FF] font-[500] leading-[1.2]">{{item}}</p>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import CircularProgress from "@/components/quiz/loading-elements/circular-progress.vue";
import ISvg from "@/components/shared/ISvg.vue";
import {computed, ref} from "vue";
import iterateWithDelay from "@/utils/iterate-with-delay.js";
import {useRouter} from "vue-router";
import {useQuiz} from "@/composables/useQuiz.js";
const router = useRouter()

let intervalId = null;
const progress = ref(0);
const interval = 100;
const duration = 10000;
const steps = computed(() => duration / interval);
const increment = computed(() => 100 / steps.value);

const { nextQuestionPath } = useQuiz();
const analyzeList = ref([]);

const analyze = [
  'Здійснено аналіз ваших навичок та уподобань.',
  'Обрано найкращу пропозицію для вашого навчання.',
  'Підготовлено ексклюзивні пропозиції та знижки для вас.',
  'Підготовлена ексклюзивна знижка на наш курс.',
  'Зібрано та проаналізовано всі введені вами дані.'
]

const startProgress = () => {
  intervalId = setInterval(() => {
    progress.value += increment.value;


    if (progress.value >= 100) {
      clearInterval(intervalId);
      setTimeout(() => {
        router.push(nextQuestionPath.value)
      }, 3000)
    }
  }, interval);
}

startProgress();

const showAnalyze = value => {
  analyzeList.value.push(value)
}

iterateWithDelay({array: analyze, callback: showAnalyze, delay: Math.round(duration / analyze.length)})

</script>
