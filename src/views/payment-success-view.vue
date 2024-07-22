<template>
  <div class="flex flex-col p-[20px] pb-[40px] min-h-[100dvh] h-full">
    <div class="bg-[#fff] flex-1 py-[60px] px-[10px]">
      <i-svg name="check-bullet" class="w-[60px] h-[60px] mx-auto mb-[24px]" />
      <h2 class="text-[#292758] text-center text-[24px] leading-[1.2] font-[600] tracking-[-0.32px] mb-[24px]">
        Дякуємо за оплату!
      </h2>
      <p class="text-[#22233C] text-[14px] leading-[1.2] font-[500] tracking-[-0.32px] mb-[18px]">
        Вітаємо! Ви успішно оплатили курс по навчанню професії тендернго спеціаліста.
      </p>
      <p class="text-[#22233C] text-[14px] leading-[1.2] font-[700] tracking-[-0.32px] mb-[40px]">
        На ваш email відправлені логін та пароль для входу на нашу платформу.
      </p>
      <a href="https://accounts.softbook.app/signin" class="block w-full bg-button-gradient rounded-[100px] text-[#FCFCFC] text-[18px] font-[700] uppercase text-center py-[18px] px-[20px] mb-[40px]">
        Увійти на платформу
      </a>
      <p class="text-[#22233C] text-[14px] leading-[1.2] font-[500] tracking-[-0.32px] mb-[40px]">
        Якщо ви не отримали лист, перевірте папку "Спам" або зв'яжіться з нашою <router-link :to="{name: 'support'}" class="text-[#5960FF] underline">службою підтримки</router-link>.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import ISvg from '@/components/shared/ISvg.vue'
</script>
