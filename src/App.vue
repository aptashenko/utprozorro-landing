<template>
  <router-view />
  <teleport to="body">
    <base-popup-component v-if="globalPopUpState.component" />
  </teleport>
</template>

<script setup>
import { RouterView } from 'vue-router';
import {usePopups} from "@/composables/usePopups.js";
import BasePopupComponent from "@/components/popups/BasePopupComponent.vue";
import {useFetchUsers} from "@/composables/useFetchUsers.js";
const { globalPopUpState } = usePopups();

const { getAllUsers } = useFetchUsers();

getAllUsers()
</script>

<style scoped>

</style>
