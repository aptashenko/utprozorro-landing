<template>
  <component :is="imgComponent" />
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';

const props = defineProps({
  name: {
    type: [String, Object],
    required: true,
  },
});

const imgComponent = ref(defineAsyncComponent(
    () => props.name.dir
        ? import(`../../assets/images/svg/${props.name.dir}/${props.name.icon.toLowerCase()}.vue`)
        : import(`../../assets/images/svg/${props.name.toLowerCase()}.vue`)
))
</script>
