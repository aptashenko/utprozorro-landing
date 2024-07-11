<template>
  <component :is="to ? RouterLink : 'button'" :to="to" :class="[buttonStyle]">
    <slot />
  </component>
</template>

<script setup>
import {computed} from "vue";
import {RouterLink} from "vue-router";
const props = defineProps({
  variant: {
    type: String,
    default: 'empty'
  },
  to: {
    type: [String, Object],
    default: null
  }
})

const buttonStyle = computed(() => ({
  empty: 'base-button-empty',
  rounded: 'base-button-rounded',
  quiz: 'base-button-quiz',
  icon: 'base-button-icon'
})[props.variant])
</script>
