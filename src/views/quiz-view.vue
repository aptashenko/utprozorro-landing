<template>
  <div>
    <transition name="slide-top">
      <div v-if="currentQuestion.component === 'question'">
        <question-head />
        <question-progress />
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
  'reviews-page': 'reviews-page.vue'
};

const currentComponent = ref(null);

const loadComponent = () => {
  currentComponent.value = defineAsyncComponent(() => import(`../components/quiz/${components[currentQuestion.value.component]}`));
}

watch(currentQuestion, loadComponent, {immediate: true})
</script>
