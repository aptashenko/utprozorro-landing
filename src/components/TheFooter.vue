<template>
  <div class="py-[40px] text-center bg-[#F4F5FB] px-[20px]">
    <the-logo class="mb-[18px] !text-[#2E2F5B] mx-auto" />

    <p class="text-[#2E2F5B] text-[12px] font-[600]">
      ФОП Пташенко Артем Олегович
    </p>
    <p class="text-[#2E2F5B] text-[12px] font-[600]">
      ІПН 3425205557
    </p>
    <a href="mailto:aptashenko@utprozorro.com.ua" class="text-[#2E2F5B] text-[12px] font-[600] leading-[26px]">
      aptashenko@utprozorro.com.ua
    </a>
    <div class="flex items-center justify-center gap-[8px] mt-[18px]">
      <a href="https://t.me/tender_ukraine" target="_blank" class="">
        <i-svg name="telegram" class="w-[40px] h-[40px]" />
      </a>
      <a href="https://facebook.com/ptashenko.tender/" target="_blank">
        <i-svg name="facebook" class="w-[40px] h-[40px]" />
      </a>
    </div>
  </div>
</template>
<script setup>
import TheLogo from "@/components/TheLogo.vue";
import BaseButton from '@/components/ui/BaseButton.vue'
import ISvg from '@/components/shared/ISvg.vue'
</script>
