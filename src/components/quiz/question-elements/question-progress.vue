<template>
  <div class="h-[4px] bg-[#4B506C] w-full">
    <div
        class="bg-[#5754FF] transition rounded-tr-[4px] rounded-br-[4px] h-full"
        :style="{width: quizProgress + '%'}"
    />
  </div>
</template>

<script setup>
import {useQuiz} from "@/composables/useQuiz.js";

const { quizProgress } = useQuiz()
</script>

<style scoped>
.transition {
  transition: all .25s ease
}
</style>
