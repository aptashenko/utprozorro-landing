<template>
  <div
    class="bg-[#EFF2FF] rounded-[12px] p-[12px] flex flex-col gap-[8px]"
    :class="{shadow}"
  >
    <p class="text-[#20222E] font-[600] text-[14px] leading-[1.3]">
      <slot />
    </p>
    <div class="flex items-center gap-[5px]">
      <div class="name">
        <p>{{name.charAt(0).toUpperCase()}}</p>
      </div>
      <p class="text-[#989FBE] text-[14px] leading-[1.2] font-[600]">{{name}}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  shadow: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.name {
  background: rgba(131, 140, 187, 0.20);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  color: #000;

  width: 24px;
  height: 24px;

  display: flex;
  align-content: center;
  justify-content: center;
}

.shadow {
  box-shadow: 0px -2px 12px 0px rgba(53, 62, 102, 0.18);
}

.name p {

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
</style>
