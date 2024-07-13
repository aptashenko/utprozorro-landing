<template>
  <div class="fixed bottom-0 left-0 w-full">
    <div class="bg-[#fff] flex flex-col rounded-tl-[16px] rounded-tr-[16px] w-full max-w-[32rem] mx-auto pt-[40px] pb-[32px] px-[20px] min-h-[50vh]">
      <div class="absolute top-[15px] right-[15px]">
        <base-button variant="icon" @click="toggleComponent">
          <i-svg name="cross" />
        </base-button>
      </div>
      <p class="text-[24px] font-[600] text-center">
        Ваша ціна: {{price}} UAH
      </p>

      <base-button variant="rounded" class="w-full py-[18px] mt-auto">
        Перейти до сплати
      </base-button>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import ISvg from "@/components/shared/ISvg.vue";
import {onBeforeUnmount} from "vue";
import {usePopups} from "@/composables/usePopups.js";

const { toggleComponent } = usePopups()

const props = defineProps({
  price: {
    type: Number,
    required: true
  }
})

onBeforeUnmount(() => {
  console.log('closed')
})
</script>
