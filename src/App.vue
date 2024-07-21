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
import { useCookies } from '@/composables/useCookies.js'
import { generateId } from '@/utils/id-generator.js'
import { useQuiz } from '@/composables/useQuiz.js'
const { globalPopUpState } = usePopups();
const { usersData } = useQuiz();
const { getCookie, setCookie } = useCookies();
const manageUserId = () => {
  const user_id = getCookie('user_id');
  if (!user_id) {
    const id = generateId();
    setCookie('user_id', id, 30)
    usersData.user_id = id;
  } else {
    usersData.user_id = user_id;
  }
}

manageUserId()
</script>

<style scoped>

</style>
