<template>
  <main class="relative max-w-md mx-auto">
    <div class="px-[20px]">
      <div class="rounded-[465px] bg-[#2A2A50] blur-[100px] w-full pb-[130%] absolute-center-x top-[-390px] pointer-events-none z-[-1]" />
      <h3 class="text-[18px] font-[600] text-violet uppercase mb-[20px]">
        Великий онлайн курс по тендерам
      </h3>
      <h2 class="text-[16px] text-neutral mb-[6px]">
        Ваша нова кар’єра починається тут:
      </h2>
      <h1 class="text-[36px] font-[700] text-[#fff] leading-[1.2] tracking-[-0.36px] mb-[28px]">
        Станьте експертом з тендерів з нуля!
      </h1>
      <base-button variant="rounded" class="w-full flex items-center justify-center pr-[8px]">
        <span class="flex-1">
          Записатись на курс
        </span>
        <i-svg name="button-angle" class="flex-shrink-0" />
      </base-button>
    </div>
    <img src="@/assets/images/judicial-gavel.png" class="block w-full mt-[30px]" />
    <div class="rounded-[620px] frame-gradient blur-[150px] w-[620px] pb-[100%] absolute left-[-300px] bottom-0 pointer-events-none z-[-1]" />
  </main>
  <section class="relative z-[2] bg-[#F4F5FB] py-[80px] mt-[-50px]">
    <img src="@/assets/images/diamant-top.png" class="absolute right-0 top-0 w-[75px] blur-[6px] z-[-1] pointer-events-none" />
    <div class="px-[20px]">
      <h2 class="text-[36px] font-[700] text-[#2E2F5B]">
        Тендери —
      </h2>
      <p class="text-[#3C445E] text-[16px] leading-[1.3]">
        це конкурси, які проводяться для вибору постачальників товарів або послуг. Вони допомагають організаціям знайти найбільш підходящих виконавців на вигідних умовах.
      </p>
      <div class="mt-[40px]">
        <div class="flex items-center gap-[8px]">
          <i-svg name="data-analytics" class="flex-shrink-0" />
          <h3 class="text-[22px] text-[#2E2F5B] font-[700] leading-[1.4]">Перспективна кар'єра</h3>
        </div>
        <p class="text-[15px] text-[#3C445E] mt-[12px]">
          Високий попит на фахівців у великих компаніях та державних установах — професія затребувана в будь-яких економічних умовах!
        </p>
      </div>
      <hr class="my-[40px] text-transparent border-t-[1px] border-t-[#C7D1EF]" />
      <div>
        <div class="flex items-center gap-[8px]">
          <i-svg name="fulltime" class="flex-shrink-0" />
          <h3 class="text-[22px] text-[#2E2F5B] font-[700] leading-[1.4]">Стабільна робота</h3>
        </div>
        <p class="text-[15px] text-[#3C445E] mt-[12px]">
          Беручи участь у тендерах, ви можете отримати великі й стабільні замовлення, забезпечивши довгострокову співпрацю.
        </p>
      </div>
      <hr class="my-[40px] text-transparent border-t-[1px] border-t-[#C7D1EF]" />
      <div>
        <div class="flex items-center gap-[8px]">
          <i-svg name="partnership" class="flex-shrink-0" />
          <h3 class="text-[22px] text-[#2E2F5B] font-[700] leading-[1.4]">Прозора система</h3>
        </div>
        <p class="text-[15px] text-[#3C445E] mt-[12px]">
          Усі етапи процесу чітко регламентовані та контролюються, що виключає можливість корупції.
        </p>
      </div>
      <base-button
          variant="rounded"
          class="w-full py-[16px] mt-[40px]"
      >
        Вступити на курс
      </base-button>
    </div>
    <img src="@/assets/images/diamant-bottom.png" class="absolute left-0 bottom-0 w-[310px] blur-[6px] z-[-1] pointer-events-none" />
  </section>
</template>
<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import ISvg from "@/components/shared/ISvg.vue";
</script>

<style scoped>
.frame-gradient {
  background: linear-gradient(227deg, rgba(26, 30, 179, 0.50) 25.67%, rgba(255, 101, 236, 0.25) 97.35%);
}
</style>
