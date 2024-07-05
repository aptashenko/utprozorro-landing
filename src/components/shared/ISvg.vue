<template>
  <component :is="imgComponent" />
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const imgComponent = ref(defineAsyncComponent(
    () => import(`../../assets/images/svg/${props.name.toLowerCase()}.vue`)
))
</script>
