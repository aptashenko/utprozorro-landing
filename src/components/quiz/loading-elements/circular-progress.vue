<template>
  <div class="relative">
    <svg xmlns="http://www.w3.org/2000/svg" width="261" height="261" viewBox="0 0 261 261" fill="none" style="transform: rotate(-90deg)">
      <circle cx="130.5" cy="130.5" :r="radius" stroke="url(#paint1_linear_179_653)" stroke-opacity="0.1"/>
      <circle cx="130.5" cy="130.5" r="97.8986" fill="url(#paint0_linear_179_653)"/>
      <circle cx="130.5" cy="130.5" r="97.3986" stroke="url(#paint1_linear_179_653)" stroke-opacity="0.1"/>
      <circle cx="130.5" cy="130.5" r="97.3986" stroke="url(#paint1_linear_179_653)" stroke-opacity="0.1"/>
      <circle cx="130.5" cy="130.5" :r="radius" stroke="#6C54FF" stroke-linecap="round" stroke-width="10px" :stroke-dasharray="strokeDasharray + 'px'" :stroke-dashoffset="strokeDashoffset + 'px'"/>
      <defs>
        <linearGradient id="paint0_linear_179_653" x1="130.5" y1="32.6014" x2="130.5" y2="228.399" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.05"/>
          <stop offset="0.9999" stop-opacity="0"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint1_linear_179_653" x1="130.5" y1="32.6014" x2="130.5" y2="228.399" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>
    <div class="absolute-center-x absolute-center-y">
      <p class="text-[12px] text-[#FFFFFF4C] font-[600] text-center">АНАЛІЗ</p>
      <p class="text-[64px] text-[#fff] leading-none font-[600]">{{progress}}%</p>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  progress: {
    type: Number,
    default: 0
  }
})

const radius = 110;

const strokeDasharray = computed(() => (2 * 3.14 * radius));
const strokeDashoffset = computed(() => strokeDasharray.value * ((100 - props.progress)/100))
</script>
