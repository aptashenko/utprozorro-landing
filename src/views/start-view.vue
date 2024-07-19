<template>
  <div class="min-h-[100vh] bg-[#20222E] pb-[40px]">
    <div class="relative ml-auto w-[80%]">
      <img src="@/assets/images/woman1_icon1.png" class="absolute top-[130px] left-[-30px] w-[35%] levitate1" />
      <img src="@/assets/images/woman1_icon2.png" class="absolute top-[30px] left-[25px] w-[30%] levitate2" />
      <img src="@/assets/images/woman1_icon3.png" class="absolute top-[80px] right-0 w-[20%] levitate3" />
      <img src="@/assets/images/woman1.png" class="block w-full" />
    </div>
    <div class="relative px-[20px] top-[-100px]">
      <h2 class="font-[600] leading-[1.2] text-[37px] text-[#fff] mb-[8px]">
        Шукаєш перспективну роботу?
      </h2>
      <p class="font-[600] leading-[1.2] text-[22px] text-[#fff]">
        Дійзнайся, як стати юристом без юридичної освіти!
      </p>
      <base-button variant="quiz" :to="{name: 'quiz', params: {id: 1}}" class="w-full mt-[24px]">
        Пройти тест та отримати подарунок
      </base-button>
    </div>
    <div class="relative top-[-60px] z-[2] bg-[#1D2859] px-[20px] pt-[40px] pb-[20px] gift-bg">
      <div class="bg-[#fff] py-[4px] absolute top-[4px] left-0 w-full overflow-hidden max-w-full h-[26px]">
        <p class="text-[10px] font-[600] text-[#0007B2] whitespace-nowrap inline-block overflow-hidden marquee">
          <span v-for="i of 5" class="inline-block mx-[4px]">
            СПЕЦІАЛЬНА ПРОПОЗИЦІЯ
          </span>
        </p>
      </div>
      <img src="@/assets/images/gift.png" class="absolute bottom-[-50px] right-0 z-[-1] w-[37%]" />
      <h2 class="text-[22px] font-[600] leading-[1.2] text-[#fff]">
        Пройди тест зараз та<br> <span class="text-[#F47AFF]">отримай унікальний<br>подарунок</span>
        <span class="relative">.
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              class="absolute right-[-30px] top-[15px]"
          >
          <path d="M1.22648 1.08877C8.52158 1.98515 21.3747 2.42608 20.7022 12.722C20.5374 15.2441 19.1082 16.9214 17.6659 18.8658C17.6036 18.9498 15.8489 20.6632 15.8364 20.3213C15.8029 19.4056 15.5226 14.0128 15.6708 17.511C15.6865 17.8811 15.3687 20.4119 15.6808 20.6434C16.531 21.274 20.939 19.6962 22.0469 19.532" stroke="#EAE5FF" stroke-width="2" stroke-linecap="round"/>
        </svg>
        </span>
      </h2>
      <base-button variant="quiz" class="!text-[14px] mt-[22px] w-fit" :to="{name: 'quiz', params: {id: 1}}">
        Отримати подарунок
      </base-button>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import {generateId} from "@/utils/id-generator.js";
import {useCookies} from "@/composables/useCookies.js";
import {useQuiz} from "@/composables/useQuiz.js";

const { getCookie, setCookie } = useCookies();
const { usersData } = useQuiz();
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
.gift-bg {
  background: url('@/assets/images/start-gift-bg.png');
  background-size: cover;
}

.marquee {
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
