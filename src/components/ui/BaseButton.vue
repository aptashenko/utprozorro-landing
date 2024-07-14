<template>
  <component
      :is="to ? RouterLink : 'button'"
      :to="to"
      :class="[buttonStyle, 'transition', {'opacity-30': $attrs.disabled}]"
  >
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
  icon: 'base-button-icon',
  fortune: 'base-button-fortune',
  'fortune-inverse': 'base-button-fortune-inverse'
})[props.variant])
</script>
