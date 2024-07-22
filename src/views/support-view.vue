<template>
  <div class="pt-[20px] pb-[40px] px-[20px]">
    <div class="flex items-center">
      <router-link :to="{ name: 'home' }" class="ml-auto">
        <base-button variant="icon">
          <i-svg name="cross" fill="#fff" />
        </base-button>
      </router-link>
    </div>
    <form-support />
  </div>
</template>
<script setup>
import FormSupport from '@/components/forms/FormSupport.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import ISvg from '@/components/shared/ISvg.vue'
</script>
