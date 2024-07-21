<template>
  <div class="relative flex flex-col gap-[8px] mb-[20px]">
    <label
        :for="name"
        class="text-[#EBEBF4] transition text-[13px] font-[500] leading-[1.2]"
        :class="{'!text-error': !!errorMessage}"
    >
      {{ label }}
    </label>
    <input
        :name="name"
        :id="name"
        :type="type"
        v-model="value"
        :placeholder="placeholder"
        class="bg-[#353A50] py-[18px] transition px-[20px] rounded-[8px] outline-none text-[18px] font-[500] leading-[1.2] placeholder:text-[#C7D2FF] placeholder:text-[18px] placeholder:font-[500] placeholder:leading-[1.2] border-[2px]"
        :class="[!!error ? 'border-error text-error' : 'border-transparent text-[#C7D2FF]']"
    />

    <transition name="fade" mode="out-in">
      <p class="absolute top-[100%] text-error text-[12px]" v-show="error">
        {{ error }}
      </p>
    </transition>
  </div>
</template>

<script setup>

const value = defineModel();

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: undefined,
  },
  error: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
});


</script>
