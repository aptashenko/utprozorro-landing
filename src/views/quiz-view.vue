<template>
  <div>
    <transition name="slide-top" mode="out-in">
      <div v-if="currentQuestion.component === 'question'" class="fixed top-0 left-0 w-full">
        <div class="max-w-[32rem] mx-auto">
          <question-head />
          <question-progress />
        </div>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <component :is="currentComponent" :key="questionId" />
    </transition>
  </div>
</template>

<script setup>
import {defineAsyncComponent, ref, watch} from "vue";
import {useQuiz} from "@/composables/useQuiz.js";
import QuestionHead from "@/components/quiz/question-elements/question-head.vue";
import QuestionProgress from "@/components/quiz/question-elements/question-progress.vue";
const { currentQuestion, questionId } = useQuiz();
const components = {
  question: 'question.vue',
  content: 'content-page.vue',
  'right-place': 'right-place.vue',
  'users-scores': 'users-scores.vue',
  'get-knowledge': 'get-knowledge.vue',
  'reviews-page': 'reviews-page.vue',
  'loading-page': 'loading-page.vue',
  'email-page': 'email-page.vue',
  'fortune-wheel': 'fortune-wheel.vue'
};

const currentComponent = ref(null);

const loadComponent = () => {
  currentComponent.value = defineAsyncComponent(() => import(`../components/quiz/${components[currentQuestion.value.component]}`));
}

watch(currentQuestion, loadComponent, {immediate: true})
</script>
