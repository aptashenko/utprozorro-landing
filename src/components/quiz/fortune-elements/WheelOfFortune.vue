<template>
  <div class="relative">
    <img src="@/assets/images/fortune-wheel/wheel-container.png" />
    <img
        src="@/assets/images/fortune-wheel/wheel.png"
        class="absolute-center-x absolute-center-y  w-[75%] rotating"
        :style="{transform: `translate(-50%, -49.5%) rotate(${rotateDegree}deg)`}"
    />
    <img src="@/assets/images/fortune-wheel/wheel-center.png" class="absolute-center-x absolute-center-y w-[50px]" />
    <img src="@/assets/images/fortune-wheel/wheel-marker.png" class="top-[40px] absolute-center-x w-[58px]" />
  </div>
</template>

<script setup>
import {pause} from "@/utils/iterate-with-delay.js";
import {ref} from "vue";
const rotateDegree = ref(0);
const currentRotation = ref(0);
const tries = ref(0);
const isSpinning = ref(false)

const props = defineProps({
  settings: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['set-prize'])
const rotateWheel = () => {
  rotateDegree.value = currentRotation.value;
  return pause(10000);
}

const launchSpin = async () => {
  isSpinning.value = true;
  currentRotation.value += props.settings.gameRules[tries.value].degree + 1800;
  await rotateWheel();
  const prize = props.settings.gameRules[tries.value].prize;
  emit('set-prize', prize)
  tries.value += 1;
  isSpinning.value = false;
}

defineExpose({launchSpin, tries, isSpinning})
</script>

<style scoped>
.rotating {
  transition: all 10s;
  transition-timing: ease-out;
}
</style>
