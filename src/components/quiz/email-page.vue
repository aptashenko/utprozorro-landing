<template>
  <div class="relative pt-[12px] min-h-[100vh] flex flex-col">
    <div class="px-[20px] pb-[24px] flex-1">
      <router-link
          :to="{name: 'landing'}"
          class="block text-[#C7D2FF] transition duration-1000 text-[15px] leading-[1.2] tracking-[-1px] ml-auto w-fit mb-[10px] opacity-0"
          :class="{'opacity-100': showSkip}"
      >
        Пропустить
      </router-link>
      <h2 class="relative text-[#fff] font-[600] leading-[1.2] tracking-[-1px] text-[26px] text-center mb-[20px]">
        🎁 Ваш <span class="text-[#F47AFF]">эксклюзивный<br>промокод</span> уже здесь! 🎁
      </h2>
      <div class="w-full grid place-items-center z-[-1] mb-[15px]">
        <div class="relative">
          <img src="@/assets/images/full-gift.png" class="w-[187px] animated m-auto" />
          <div class="bg-[#54468A] blur-[100px] absolute-center-x absolute-center-y absolute-center-x w-[196px] h-[196px] z-[-1]" />
        </div>
        <img src="@/assets/images/email-coffetti.png" class="absolute top-[20px] left-0 z-[-1]" />
      </div>
      <h2 class="text-[#fff] text-[22px] font-[600] leading-[1.3] tracking-[-0.4px] mb-[12px]">
        Введите вашу почту, чтобы получить персональную скидку на курс по тендерам.
      </h2>
      <form-email @on-submit="onSubmit" />
    </div>
    <div class="relative z-[2] stop-watch">
      <img src="@/assets/images/stopwatch.png" class="" />
      <div class="absolute top-[16px] left-[20px] right-[20px]">
        <h2 class="text-[22px] font-[700] leading-[1.2] text-[#fff]">
          Не дайте возможности ускользнуть!
        </h2>
        <p class="text-[28px] font-[600] leading-[1.5] text-[#fff] text-center my-[8px]">
          <span class="w-[40px] inline-block">{{ time.minutes }}</span>
          <span class="mx-[10px]">:</span>
          <span class="w-[40px] inline-block">{{ time.seconds }}</span>
        </p>
        <p class="text-[15px] font-[500] leading-[1.2] text-[#fff]">
          Если вы не введете свою почту сейчас, вы потеряете подарок и скидку.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useCountdown} from "@/composables/useCountdown";
import {ref} from "vue";
import FormEmail from "@/components/forms/FormEmail.vue";
import {useQuiz} from "@/composables/useQuiz.js";
import {useRouter} from "vue-router";
import {useFetchUsers} from "@/composables/useFetchUsers.js";
const { time, startTimer, stopTimer } = useCountdown({key: 'countdown', count: 120});
const { nextQuestionPath, usersData } = useQuiz();
const { addNewUser } = useFetchUsers()
const router = useRouter()
const showSkip = ref(false);

setTimeout(() => {
  showSkip.value = true
}, 5000)

const onSubmit = async (payload) => {
  const success = await addNewUser(payload);
  if (success) {
    usersData.email = payload.email;
    localStorage.setItem('usersData', JSON.stringify(usersData))
    router.push(nextQuestionPath.value)
  }
}

startTimer();
</script>


<style scoped>
.stop-watch {
  background: linear-gradient(105deg, rgba(63, 43, 167, 0.60) 0%, rgba(219, 76, 255, 0.60) 157.33%);
}

@keyframes tada {
  0% {
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}
.animated {
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: tada;
}
</style>
