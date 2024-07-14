<template>
  <div
      class="fortune-bg min-h-[100vh] px-[20px] pt-[120px]"
      :class="[currentTry !== playSettings.maxTries && prize ? 'pb-[180px]' : 'pb-[100px]']"
  >
    <h2 class="pink-title text-center text-[30px] font-[600] leading-[1.3] uppercase tracking-[-1px] mb-[15px]">
      Крутіть колесо
    </h2>

    <wheel-of-fortune
        ref="wheel"
        :settings="playSettings"
        @set-prize="setPrize"
    />
    <div class="py-[12px] bg-wrapper">
      <img :src="resultEmoji" class="block w-[53px] mx-auto mb-[10px]" />
      <p v-if="prize" class="text-[22px] font-[700] leading-[1.2] text-center text-[#FFCEE6] mb-[10px]">
        {{ prize }}% скидка
      </p>
      <p class="text-[16px] font-[700] leading-[1.2] text-center text-[#FFCEE6]" v-html="resultText" />
    </div>
    <div class="fixed bottom-0 left-0 w-full py-[20px]">
      <div class="max-w-[32rem] mx-auto px-[20px] flex flex-col gap-[10px]">
        <base-button
            v-if="currentTry !== playSettings.maxTries"
            variant="fortune"
            :disabled="wheel?.isSpinning"
            class="w-full"
            :class="{'pulse-animation': !wheel?.isSpinning}"
            @click="rotateWheel"
        >
          {{buttonName}}
        </base-button>
        <transition mode="out-in">
          <base-button
              v-if="prize"
              :variant="currentTry !== playSettings.maxTries ? 'fortune-inverse' : 'fortune'"
              :disabled="wheel?.isSpinning"
              class="w-full"
              @click="endGame"
          >
            Забрать скидку
          </base-button>
        </transition>
      </div>
    </div>
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

const resultText = computed(() => {
  const texts = [
      'Испытайте удачу с нашим Колесом!<br>У вас 3 попытки выиграть максимальную скидку.',
      'Не повезло! Но не расстраивайтесь,<br>попробуйте снова!',
      'Поздравляем!<br>Отличная возможность сэкономить!',
      'Ура! Вам повезло!<br>Это супер классная скидка!'
  ]

  return texts[currentTry.value]
})

const resultEmoji = computed(() => {
  const emoji = [
      'lucky-icon.png',
      'sad-icon.png',
      'finger-up-icon.png',
      'confetti-icon.png'
  ];

  return new URL(`../../assets/images/emoji/${emoji[currentTry.value]}`, import.meta.url).href
})


const buttonName = computed(() => `Прокрутить: ${playSettings.maxTries - currentTry.value}`)
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

.bg-wrapper {
  background: rgba(255, 168, 212, 0.28);
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
