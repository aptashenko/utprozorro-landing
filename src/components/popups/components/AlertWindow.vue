<template>
  <div class="relative z-[2] max-w-[32rem] mx-auto bg-[#20222E] h-[100dvh]">
    <div class="relative z-[3] h-full px-[20px] pt-[100px]">
      <h2 class="golden-text text-center text-[32px] leading-[1.2] mb-[24px]">
        Цей шанс не можна пропустити!
      </h2>
      <h2 class="text-[#F8FAFC] text-center text-[36px] font-[800] leading-[1.2]">Ексклюзивна знижка</h2>
      <p class="text-[#F8FAFC] shadow-text text-center text-[80px] flex-1 font-[800] leading-[1.2] text-shadow-discount mb-[45px]">60%</p>
      <button class="py-[18px] px-[24px] text-[#fff] text-[16px] leading-[1.4] font-[600] w-full button-styles" @click="handleClose">
        Зрозуміло
      </button>
    </div>
    <div class="absolute left-0 w-full bottom-0 z-[2]">
      <img src="@/assets/images/balloons.png" class="relative top-[30vh] z-[2] opacity-40" />
      <div class="blur-[150px] bg-[#8018FF99] w-[564px] h-[100vh] rounded-full absolute bottom-0 left-0" />
      <img src="@/assets/images/gift-super-discount.png" class="relative z-[2]" />
    </div>
  </div>
</template>

<script setup>
import { usePopups } from '@/composables/usePopups.js'
import { usePlansSettings } from '@/composables/usePlansSettings.js'
import { onBeforeUnmount } from 'vue'

const { toggleComponent } = usePopups();
const { setPlan } = usePlansSettings()

const handleClose = () => {
  toggleComponent();
}

onBeforeUnmount(() => {
  setPlan()
})
</script>

<style scoped>
.button-styles {
  border-radius: 100px;
  background: #6B43E6;
  box-shadow: 0px 0px 12px 0px rgba(68, 56, 102, 0.37);
}
.golden-text {
  background: linear-gradient(77deg, #FFC553 9.16%, #E8900C 23.31%, #E3C576 46.78%, #B39356 54.68%, #C2A047 54.69%, #D4D66B 76.89%, #DDBE6E 85.26%, #EBD484 91.42%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow:
    -1px -1px 0 #FFC553,
    1px -1px 0 #FFC553,
    -1px  1px 0 #FFC553,
    1px  1px 0 #FFC553,
    0px 2px 4px #fff;
}

.shadow-text {
  text-shadow: 0px 0px 7.6px #240F65;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #3F15C3;
}
</style>
