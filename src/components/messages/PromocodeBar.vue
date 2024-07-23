<template>
  <div class="fixed top-0 left-0 z-[100] w-full">
    <div class="max-w-[32rem] h-[75px] mx-auto bg-[#ffcc00] transition rounded-b-[10px] py-[10px] px-[24px] text-center">
      <p class="font-[600] text-primary">
        Ваш промокод на знижку ({{usersData.discount}}%):
        <button class="bg-primary block w-fit mx-auto text-[#fff] p-[5px] rounded-[10px]" @click="copyOnClick(usersData.promocode)">
            {{usersData.promocode}}
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useQuiz } from '@/composables/useQuiz.js'
import { copyOnClick } from '@/utils/copy-on-click.js'

const { usersData } = useQuiz();


</script>
