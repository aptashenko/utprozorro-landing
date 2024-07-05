<template>
  <button :class="[buttonStyle]">
    <slot />
  </button>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: 'empty'
  }
})

const buttonStyle = computed(() => ({
  empty: 'base-button-empty',
  rounded: 'base-button-rounded',
})[props.variant])
</script>
