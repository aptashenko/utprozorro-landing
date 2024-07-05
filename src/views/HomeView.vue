<template>
  <main class="relative max-w-md mx-auto">
    <div class="px-[30px]">
      <div class="rounded-[465px] bg-[#2A2A50] blur-[100px] w-full pb-[130%] absolute-center-x top-[-390px] pointer-events-none z-[-1]" />
      <h3 class="text-[17px] font-[600] text-violet uppercase mb-[20px]">
        Великий онлайн курс по тендерам
      </h3>
      <h2 class="text-[15px] text-neutral mb-[6px]">
        Ваша нова кар’єра починається тут:
      </h2>
      <h1 class="text-[34px] font-[700] text-[#fff] leading-[1.2] tracking-[-0.36px] mb-[28px]">
        Станьте експертом з тендерів з нуля!
      </h1>
      <base-button variant="rounded" class="w-full flex items-center justify-center pr-[8px]">
        <span class="flex-1">
          Записатись на курс
        </span>
        <i-svg name="button-angle" class="flex-shrink-0" />
      </base-button>
    </div>
    <img src="@/assets/images/judicial-gavel.png" class="block w-full mt-[30px]" />
    <div class="rounded-[620px] frame-gradient blur-[150px] w-[620px] pb-[100%] absolute left-[-300px] bottom-0 pointer-events-none z-[-1]" />
  </main>
</template>
<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import ISvg from "@/components/shared/ISvg.vue";
</script>

<style scoped>
.frame-gradient {
  background: linear-gradient(227deg, rgba(26, 30, 179, 0.50) 25.67%, rgba(255, 101, 236, 0.25) 97.35%);
}
</style>
