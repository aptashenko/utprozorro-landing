<template>
  <header class="pt-[16px] pb-[30px] px-[20px]">
    <div class="flex items-center gap-[12px] justify-end">
      <router-link :to="{name: 'support'}">
        <base-button class="px-[14px] py-[8px]">
          <i-svg name="letter" />
        </base-button>
      </router-link>
      <a href="https://accounts.softbook.app/signin">
        <base-button>
          Увійти
        </base-button>
      </a>
    </div>
    <the-logo class="mt-[17px]" />
  </header>
</template>
<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import ISvg from "@/components/shared/ISvg.vue";
import TheLogo from "@/components/TheLogo.vue";
</script>
