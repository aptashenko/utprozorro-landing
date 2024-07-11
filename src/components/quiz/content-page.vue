<template>
  <div class="grid place-items-center">
    <h2 class="text-[#fff]">
      CONTENT PAGE
    </h2>
    <h2 class="text[#fff]">
      {{currentQuestion.title}}
    </h2>
  </div>
</template>

<script setup>
import {useQuiz} from "@/composables/useQuiz.js";

const { currentQuestion } = useQuiz()
</script>
