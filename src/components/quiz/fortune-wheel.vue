<template>
  <div class="fortune-bg min-h-[100vh] px-[20px] pt-[150px]">
    <wheel-of-fortune
        ref="wheel"
        :settings="playSettings"
        @set-prize="setPrize"
    />
    <transition name="fade" mode="out-in">
      <button
          v-if="currentTry > 1 && !wheel?.isSpinning"
          class="block text-[#C7D2FF] transition duration-1000 text-[15px] font-[700] uppercase leading-[1.2] tracking-[-1px] mx-auto w-fit"
          @click="endGame"
      >
        закончить игру
      </button>
    </transition>
    <transition mode="out-in">
      <base-button
          v-if="showButton"
          variant="fortune"
          :disabled="wheel?.isSpinning"
          class="w-full mt-[10px]"
          @click="rotateWheel"
      >
        {{buttonName}}
      </base-button>
    </transition>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import WheelOfFortune from "@/components/quiz/fortune-elements/WheelOfFortune.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import {useRouter} from "vue-router";
import {useQuiz} from "@/composables/useQuiz.js";
import {useFetchUsers} from "@/composables/useFetchUsers.js";

const router = useRouter();
const { sendPromocode } = useFetchUsers();
const { lastQuestionRedirect, setPromoCode, usersData } = useQuiz();
const wheel = ref(null)
const gameRules = [
  {
    id: 1,
    degree: 290,
    prize: 1
  },
  {
    id: 1,
    degree: 325,
    prize: 10
  },
  {
    id: 1,
    degree: 260,
    prize: 25
  },
]
const playSettings = {
  maxTries: 3,
  gameRules
}
const prize = ref(null);
const currentTry = computed(() => wheel.value?.tries)
const setPrize = value => {
  prize.value = value;
  setPromoCode(value)
}

const buttonName = computed(() => currentTry.value < 1 ? 'Прокрутить' : `Попробовать снова (${playSettings.maxTries - currentTry.value})`)
const showButton = computed(() => currentTry.value < playSettings.maxTries);
const rotateWheel = () => {
  wheel.value.launchSpin()
}

const endGame = async () => {
  const success = await sendPromocode({promocode: usersData.promocode, email: usersData.email})
  if (success) {
    router.push(lastQuestionRedirect.value)
  }
}

if (!usersData.email) {
  router.push({name: 'quiz', params: {id: 16}})
}
</script>

<style scoped>
.fortune-bg {
  background: url('@/assets/images/fortune-bg.png');
  background-size: cover;
}

.v-enter-active,
.v-leave-active {
  transition: all .5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(300%);
}
</style>
