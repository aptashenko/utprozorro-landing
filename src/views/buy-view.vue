<template>
  <div :class="{'pt-[75px]': usersData.promocode}">
    <div v-if="usersData.promocode" class="fixed top-0 left-0 z-[100] w-full">
      <div class="max-w-[32rem] h-[75px] mx-auto bg-[#ffcc00] rounded-b-[10px] py-[10px] px-[24px] text-center">
        <p class="font-[600] text-primary">
          Ваш промокод на знижку ({{usersData.discount}}%):
          <span class="bg-primary block w-fit mx-auto text-[#fff] p-[5px] rounded-[10px]">
            {{usersData.promocode}}
          </span>
        </p>
      </div>
    </div>
    <the-header />
    <div>
      <main class="relative mx-auto">
        <div class="px-[20px] pb-[50px]">
          <div class="rounded-[465px] bg-[#2A2A50] blur-[100px] w-full pb-[130%] absolute-center-x top-[-390px] pointer-events-none z-[-1]" />
          <h3 class="text-[17px] font-[600] text-violet leading-[1.3] tracking-[-0.17px] uppercase mb-[20px]">
            Наша спеціальна пропозиція для вас
          </h3>
          <h2 class="text-[16px] leading-[1.2] text-neutral mb-[6px]">
            Ми пропонуємо унікальний онлайн курс
          </h2>
          <h1 class="text-[36px] font-[700] text-[#fff] leading-[1.2] tracking-[-0.36px] mb-[28px]">
            Станьте експертом з тендерів з нуля!
          </h1>
          <base-button variant="rounded" class="w-full flex items-center justify-center pr-[8px] mb-[31px]" @click="openPayCheckout">
        <span class="flex-1">
          Записатись на курс
        </span>
            <i-svg name="button-angle" class="flex-shrink-0" />
          </base-button>
          <p class="text-[22px] leading-[1.2] font-[600] text-[#fff] mb-[16px]">
            Діаграма нижче покаже, як наш курс покращить Ваше життя.
          </p>
          <div class="px-[28px]">
            <img src="@/assets/images/diagram.png" class="w-full mx-auto block" />
          </div>
          <div class="flex items-center gap-[6px] mt-[24px]">
            <div class="flex items-center gap-[4px]">
              <span class="bg-[#FC9822] w-[21px] h-[9px] rounded-[20px]" />
              <p class="text-[#C7D2FF] text-[12px] font-[500] leading-[23px]">до курсу</p>
            </div>
            <div class="flex items-center gap-[4px]">
              <span class="bg-[#2276FC] w-[21px] h-[9px] rounded-[20px]" />
              <p class="text-[#C7D2FF] text-[12px] font-[500] leading-[23px]">після курса</p>
            </div>
          </div>
          <div class="mt-[30px] flex flex-col gap-[12px]">
            <div>
              <h3 class="mb-[2px] text-[#C7D2FF] leading-[1.2] text-[15px] font-[600]">
                A. Фінансова стабільність:
              </h3>
              <p class="text-[#fff] text-[18px] leading-[1.2] font-[600]">
                Підвищується з 40% до 85%
              </p>
            </div>
            <div>
              <h3 class="mb-[2px] text-[#C7D2FF] leading-[1.2] text-[15px] font-[600]">
                B. Професійні навички:
              </h3>
              <p class="text-[#fff] text-[18px] leading-[1.2] font-[600]">
                Зростає з 30% до 90%
              </p>
            </div>
            <div>
              <h3 class="mb-[2px] text-[#C7D2FF] leading-[1.2] text-[15px] font-[600]">
                C. Можливості для кар'єрного зросту:
              </h3>
              <p class="text-[#fff] text-[18px] leading-[1.2] font-[600]">
                Зростає з 25% до 80%
              </p>
            </div>
            <div>
              <h3 class="mb-[2px] text-[#C7D2FF] leading-[1.2] text-[15px] font-[600]">
                D. Впевненність в собі:
              </h3>
              <p class="text-[#fff] text-[18px] leading-[1.2] font-[600]">
                Зростає з 50% до 95%
              </p>
            </div>
            <div>
              <h3 class="mb-[2px] text-[#C7D2FF] leading-[1.2] text-[15px] font-[600]">
                E. Робочі зв'язки та нетворкінг:
              </h3>
              <p class="text-[#fff] text-[18px] leading-[1.2] font-[600]">
                Зростає з 35% до 75%
              </p>
            </div>
            <div>
              <h3 class="mb-[2px] text-[#C7D2FF] leading-[1.2] text-[15px] font-[600]">
                F. Робоча гнучкість та вільний час:
              </h3>
              <p class="text-[#fff] text-[18px] leading-[1.2] font-[600]">
                Зростає з 20% до 70%
              </p>
            </div>
          </div>
          <p class="text-[#C7D2FF] leading-[1.2] text-[18px] font-[600] mt-[24px]">
            З діаграми видно, що наш курс забезпечить вам фінансову стабільність, кар'єрний зріст, впевненість та гнучкість, покращуючи всі аспекти вашого життя.
          </p>
          <base-button variant="rounded" class="w-full mt-[24px] flex items-center justify-center pr-[8px] mb-[31px]" @click="openPayCheckout">
        <span class="flex-1">
          Записатись на курс
        </span>
            <i-svg name="button-angle" class="flex-shrink-0" />
          </base-button>
        </div>
        <div class="rounded-[620px] frame-gradient blur-[150px] w-[620px] pb-[100%] absolute left-[-300px] bottom-0 pointer-events-none z-[-1]" />
      </main>
      <section class="relative z-[2] bg-[#F4F5FB] py-[80px]">
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
            @click="openPayCheckout"
          >
            Вступити на курс
          </base-button>
        </div>
        <img src="@/assets/images/diamant-bottom.png" class="absolute left-0 bottom-0 w-[310px] blur-[6px] z-[-1] pointer-events-none" />
      </section>
      <section class="relative px-[20px] pt-[80px] pb-[40px] overflow-hidden">
        <div class="rounded-[420px] bg-[#2A2A50] blur-[100px] w-full pb-[100%] absolute left-[-100px] top-[-200px] pointer-events-none z-[-1]" />
        <h2 class="font-[700] leading-[1.4] text-[32px] text-[#fff] mb-[40px]">Наш курс підходить тим, хто:</h2>
        <div class="flex flex-col gap-[16px]">
          <div class="border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] py-[25px] flex flex-col items-start justify-end min-h-[230px] gap-[12px]">
            <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Шукає нову професію</h2>
            <p class="text-neutral leading-[1.3] text-[15px]">Опануйте затребувану професію та почніть заробляти на тендерах вже за кілька місяців.</p>
          </div>
          <div class="border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] py-[25px] flex flex-col items-start justify-end min-h-[230px] gap-[12px]">
            <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Бажає збільшити дохід</h2>
            <p class="text-neutral leading-[1.3] text-[15px]">Навчіться вигравати тендери та забезпечте стабільний потік замовлень для вашого бізнесу.</p>
          </div>
          <div class="border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] py-[25px] flex flex-col items-start justify-end min-h-[230px] gap-[12px]">
            <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Прагне професійного зростання</h2>
            <p class="text-neutral leading-[1.3] text-[15px]">Розвивайте навички управління тендерами та піднімайтесь кар'єрними сходами.</p>
          </div>
          <div class="border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] py-[25px] flex flex-col items-start justify-end min-h-[230px] gap-[12px]">
            <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Бізнесмени та підприємці</h2>
            <p class="text-neutral leading-[1.3] text-[15px]">Дізнайтеся, як успішно брати участь у державних та комерційних тендерах і розширюйте можливості вашого бізнесу.</p>
          </div>
        </div>
      </section>
      <section v-if="!usersData.discount">
        <div class="relative z-[2] bg-gift px-[20px] pt-[40px] pb-[120px]">
          <div class="absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-[url('@/assets/images/gift-bg.png')] bg-cover z-[-1] pointer-events-none" />
          <p class="text-[17px] text-neutral font-[700] leading-[1.4] uppercase mb-[6px]">
            До кінця спеціальної пропозиції залишилось
          </p>
          <p class="text-[22px] text-[#fff] font-[700] leading-[1.5] mb-[24px]">
            {{time.hours}} год.: {{ time.minutes }} хв.: {{time.seconds}} сек.
          </p>
          <p class="text-[28px] text-[#fff] font-[700] leading-[1.5] mb-[2px]">
            Залишились сумніви?
          </p>
          <p class="text-[34px] text-[#fff] font-[700] leading-[1.5] mb-[12px]">
            Пройдіть безкоштовний тест!
          </p>
          <p class="text-[18px] text-neutral leading-[1.5] mb-[24px]">
            Дізнайтеся, наскільки ця сфера вам підходить, і зробіть перший крок до успішної кар'єри в тендерах.
          </p>
          <router-link
            to="/start"
            class="text-primary block text-[16px] font-[700] leading-normal uppercase px-[24px] py-[16px] rounded-[100px] bg-[#FAFBFF] w-fit"
          >
            Пройти тест
          </router-link>
          <img src="@/assets/images/gift.png" class="absolute bottom-[-90px] right-0 w-[230px]"/>
        </div>
      </section>
      <section class="relative pt-[80px] pb-[40px] px-[20px]">
        <div class="rounded-[420px] bg-[#2A2A50] blur-[100px] w-full pb-[100%] absolute left-[-100px] top-[-200px] pointer-events-none z-[-1]" />
        <h2 class="text-neutral text-[24px] font-[600] leading-normal mb-[12px]">
          Середня зарплата спеціаліста з публічних закупівель
        </h2>
        <p class="text-[46px] font-[700] leading-normal text-[#fff] mb-[40px]">
          27 000 ₴
        </p>
        <p class="text-[46px] font-[700] leading-normal text-[#fff] mb-[12px]">
          >29 617
        </p>
        <p class="text-neutral text-[24px] font-[600] leading-normal mb-[40px]">
          середня кількість вакансій за рік
        </p>
        <p class="text-[46px] font-[700] leading-normal text-[#fff] mb-[12px]">
          342
        </p>
        <p class="text-neutral text-[24px] font-[600] leading-normal mb-[40px]">
          студенти вже працевлаштовано
        </p>
        <div class="flex flex-col gap-[16px] mb-[40px]">
          <div class="border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] py-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">
            <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Спеціаліст із публічних закупівель</h2>
            <p class="font-[600] text-[#fff]">22 000₴</p>
            <div class="flex items-center gap-[6px] mb-[16px]">
              <span class="bg-[#C4C4FF] rounded-[8px] py-[6px] px-[10px] text-primary text-[14px] font-[600] leading-normal ">Можна віддалено</span>
              <span class="bg-[#C4C4FF] rounded-[8px] py-[6px] px-[10px] text-primary text-[14px] font-[600] leading-normal ">Без досвіду</span>
            </div>
            <p class="text-neutral leading-[1.3] text-[15px] mb-[24px]">
              Ми шукаємо енергійного та цілеспрямованого спеціаліста по тендерам, готового розпочати кар'єру в динамічній та перспективній сфері.
            </p>
          </div>
          <div class="border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] py-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">
            <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Тендерний спеціаліст (віддалено)</h2>
            <p class="font-[600] text-[#fff]">25 000 - 30 000₴</p>
            <div class="flex items-center gap-[6px] mb-[16px]">
              <span class="bg-[#C4C4FF] rounded-[8px] py-[6px] px-[10px] text-primary text-[14px] font-[600] leading-normal ">Віддалено</span>
              <span class="bg-[#C4C4FF] rounded-[8px] py-[6px] px-[10px] text-primary text-[14px] font-[600] leading-normal ">Досвід 1-3 роки</span>
            </div>
            <p class="text-neutral leading-[1.3] text-[15px] mb-[24px]">
              Основні обов'язки включають пошук тендерів, підготовку пропозицій та співпрацю з різними командами. Вища освіта не обов'язкова.        </p>
          </div>
          <div class="border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] py-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">
            <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Молодший спеціаліст по тендерам (без досвіду)</h2>
            <p class="font-[600] text-[#fff]">20 000₴</p>
            <div class="flex items-center gap-[6px] mb-[16px]">
              <span class="bg-[#C4C4FF] rounded-[8px] py-[6px] px-[10px] text-primary text-[14px] font-[600] leading-normal ">Можна віддалено</span>
              <span class="bg-[#C4C4FF] rounded-[8px] py-[6px] px-[10px] text-primary text-[14px] font-[600] leading-normal ">Без досвіду</span>
            </div>
            <p class="text-neutral leading-[1.3] text-[15px] mb-[24px]">
              Запрошуємо на роботу молодшого спеціаліста по тендерам. Ваше завдання — стати частиною команди та пройти навчання для розвитку у сфері тендерних закупівель.
            </p>
          </div>
        </div>
        <a href="https://www.work.ua/jobs-%D0%BF%D1%83%D0%B1%D0%BB%D1%96%D1%87%D0%BD%D0%B8%D1%85+%D0%B7%D0%B0%D0%BA%D1%83%D0%BF%D1%96%D0%B2%D0%B5%D0%BB%D1%8C/" target="_blank">
          <base-button class="py-[18px] w-full">
            Продивитись всі вакансії
          </base-button>
        </a>
      </section>
      <section class="relative z-[2] py-[80px] bg-[#F4F5FB] px-[20px]">
        <h2 class="text-[32px] font-[700] text-[#2E2F5B] mb-[40px] leading-[1.3]">
          Чому ви навчитесь:
        </h2>
        <div class="flex items-center">
          <div class="relative flex flex-col gap-[40px] pl-[40px] numeric-dot-line flex-1">
            <div class="relative flex flex-col gap-[8px] numeric-dot before:content-['1']">
              <h3 class="text-[#2E2F5B] text-[18px] font-[700] leading-[1.2]">Основи тендерного процесу</h3>
              <p class="text-[#3C445E] text-[15px] font-[500] leading-[1.2]">Вивчення законодавчої бази, типів тендерів і ключових етапів.</p>
            </div>
            <div class="relative flex flex-col gap-[8px] numeric-dot before:content-['2']">
              <h3 class="text-[#2E2F5B] text-[18px] font-[700] leading-[1.2]">Ознайомлення з процесами закупівель</h3>
              <p class="text-[#3C445E] text-[15px] font-[500] leading-[1.2]">Глибоке розуміння всіх етапів процесу публічних закупівель від планування до виконання контрактів.</p>
            </div>
            <div class="relative flex flex-col gap-[8px] numeric-dot before:content-['3']">
              <h3 class="text-[#2E2F5B] text-[18px] font-[700] leading-[1.2]">Робота з тендерною документацією</h3>
              <p class="text-[#3C445E] text-[15px] font-[500] leading-[1.2]">Навички складання, аналізу та оцінки тендерної документації, включаючи технічні завдання та кваліфікаційні критерії.</p>
            </div>
            <div class="relative flex flex-col gap-[8px] numeric-dot before:content-['4']">
              <h3 class="text-[#2E2F5B] text-[18px] font-[700] leading-[1.2]">Підвищення конкурентоспроможності</h3>
              <p class="text-[#3C445E] text-[15px] font-[500] leading-[1.2]">Отримання знань та навичок, які допоможуть стати більш конкурентоспроможним на ринку праці у сфері публічних закупівель.</p>
            </div>
            <div class="relative flex flex-col gap-[8px] numeric-dot before:content-['5']">
              <h3 class="text-[#2E2F5B] text-[18px] font-[700] leading-[1.2]">Управління ризиками</h3>
              <p class="text-[#3C445E] text-[15px] font-[500] leading-[1.2]">Знання методів і технік для ідентифікації, оцінки та управління ризиками, пов'язаними з публічними закупівлями.</p>
            </div>
          </div>
        </div>
        <base-button
          variant="rounded"
          class="w-full py-[16px] mt-[40px]"
          @click="openPayCheckout"
        >
          Вступити на курс
        </base-button>
        <img src="@/assets/images/steps-frame.png" class="absolute bottom-0 right-0 blur-[10px] z-[-1]" />
      </section>
      <!--  <section class="px-[20px] bg-primary py-[80px]">-->
      <!--    <h2 class="text-[32px] font-[700] text-[#fff] mb-[40px] leading-[1.2]">-->
      <!--      Наші переваги перед іншими-->
      <!--    </h2>-->
      <!--    <div class="flex flex-col gap-[16px] max-w-[335px] mx-auto">-->
      <!--      <div class="relative z-[2] overflow-hidden border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] pt-[32px] pb-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">-->
      <!--        <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Зручний онлайн формат</h2>-->
      <!--        <p class="text-neutral leading-[1.3] text-[15px]">-->
      <!--          Навчайтеся у будь-який час і в будь-якому місці на нашій зручній платформі.-->
      <!--        </p>-->
      <!--      </div>-->
      <!--      <div class="relative z-[2] overflow-hidden border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] pt-[32px] pb-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">-->
      <!--        <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Доступ до закритого співтовариства в Telegram</h2>-->
      <!--        <p class="text-neutral leading-[1.3] text-[15px]">-->
      <!--          Отримуйте підтримку, поради та рекомендації від досвідчених фахівців.-->
      <!--        </p>-->
      <!--      </div>-->
      <!--      <div class="relative z-[2] overflow-hidden border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] pt-[32px] pb-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">-->
      <!--        <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Платформа для пошуку роботи</h2>-->
      <!--        <p class="text-neutral leading-[1.3] text-[15px]">-->
      <!--          Знайдіть роботу прямо на нашій платформі та почніть застосовувати отримані знання на практиці.-->
      <!--        </p>-->
      <!--      </div>-->
      <!--      <div class="relative z-[2] overflow-hidden border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] pt-[32px] pb-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">-->
      <!--        <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Форум всередині курсу</h2>-->
      <!--        <p class="text-neutral leading-[1.3] text-[15px]">-->
      <!--          Обмінюйтеся досвідом і знаннями з учасниками курсу, обговорюйте актуальні теми та отримуйте нові інсайти, які допоможуть вам у професійному зростанні.-->
      <!--        </p>-->
      <!--      </div>-->
      <!--      <div class="relative z-[2] overflow-hidden border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] pt-[32px] pb-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">-->
      <!--        <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Сертифікат про закінчення курсу</h2>-->
      <!--        <p class="text-neutral leading-[1.3] text-[15px]">-->
      <!--          Сертифікат, що підтверджує знання, допоможе виділитися серед конкурентів і підвищити шанси на успіх у тендерних закупівлях.-->
      <!--        </p>-->
      <!--      </div>-->
      <!--    </div>-->
      <!--    <base-button-->
      <!--        variant="rounded"-->
      <!--        class="w-full py-[16px] mt-[40px]"-->
      <!--        @click="openPayCheckout"-->
      <!--    >-->
      <!--      Вступити на курс-->
      <!--    </base-button>-->
      <!--  </section>-->
      <section class="relative z-[2] pt-[80px] pb-[106px] bg-primary px-[20px]">
        <h2 class="text-[32px] font-[700] text-[#fff] mb-[12px] leading-[1.3]">
          Часто задавані питання
        </h2>
        <p class="text-[#fff] text-[15px] leading-[1.2] mb-[12px]">
          Не знайшли відповідь на своє питання?<br>
          <span class="font-[700]">Надішліть заявку</span> і ми вам відповімо найближчим часом.
        </p>
        <a href="#callback">
          <base-button class="bg-[#EDE9FF] text-[#202430] text-[16px] py-[16px] w-full mb-[40px] font-[700]">
            Задати питання
          </base-button>
        </a>
        <div class="flex flex-col gap-[16px] mb-[40px]">
          <div
            v-for="(question, idx) in collapseItems"
            :key="question.id"
            class="bg-[#fff] p-[20px] rounded-[20px] shadow-faq-box"
          >
            <button
              @click="setCollapsed(idx)"
              class="flex items-start w-full justify-between gap-[8px]"
            >
          <span class="text-left text-[16px] font-[600] leading-[1.2] text-[#170F49]">
            {{question.question}}
          </span>
              <div :class="[collapseItems[idx].isExpanded ? 'faq-item-button' : 'p-[5px]']">
                <i-svg v-show="collapseItems[idx].isExpanded" name="minus" class="flex-shrink-0" />
                <i-svg v-show="!collapseItems[idx].isExpanded" name="plus" class="flex-shrink-0" />
              </div>
            </button>
            <collapse as="p" :when="collapseItems[idx].isExpanded" class="mt-[8px] text-[15px] leading-[1.2] text-[#22233C]">
              {{question.answers}}
            </collapse>
          </div>
        </div>
        <base-button variant="rounded" class="w-fit gap-[14px] mx-auto flex items-center justify-center pr-[8px]" @click="openPayCheckout">
        <span class="flex-1">
          Записатись на курс
        </span>
          <i-svg name="button-angle" class="flex-shrink-0" />
        </base-button>
        <img src="@/assets/images/faq-frame.png" class="absolute bottom-0 right-0 blur-[10px] z-[-1]" />
      </section>
      <section class="bg-[#F4F5FB] py-[80px]">
        <div class="px-[20px]">
          <h2 class="text-[32px] font-[700] text-[#2E2F5B] mb-[40px] leading-[1.2]">
            Відгуки студентів
          </h2>
        </div>
        <swiper-container
          :allow-touch-move="false"
          :autoplay="true"
          slides-per-view="1.5"
          space-between="18"
          slides-offset-after="20"
          slides-offset-before="20"
        >
          <swiper-slide>
            <img src="@/assets/images/reviews/1.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/reviews/2.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/reviews/3.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/reviews/4.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/reviews/5.png" />
          </swiper-slide>
        </swiper-container>
      </section>
      <section id="callback" class="relative z-[2] pt-[80px] pb-[106px] bg-primary px-[20px]">
        <h2 class="text-[32px] font-[700] text-[#fff] mb-[12px] leading-[1.3]">
          Допоможемо вирішити всі питання
        </h2>
        <p class="text-[15px] leading-[1.2] text-[#fff] mb-[40px]">
          Якщо ви хочете дізнатися більше про тендери або потребуєте консультації щодо їх організації, залиште заявку — і ми зв'яжемося з вами.
        </p>

        <form-support />
      </section>
    </div>
    <the-footer />
  </div>
</template>
<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import ISvg from "@/components/shared/ISvg.vue";
import {Collapse} from "vue-collapsed";
import {useCollapse} from "@/composables/useCollapse.js";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import {usePopups} from "@/composables/usePopups.js";
import {useQuiz} from "@/composables/useQuiz.js";
import { useCountdown } from '@/composables/useCountdown.js'
import { usePlansSettings } from '@/composables/usePlansSettings.js'
import FormSupport from '@/components/forms/FormSupport.vue'
const questions = [
  {
    id: 1,
    question: 'Що таке тендери і чому це перспективна професія?',
    answers: 'Тендери — це процес подання заявок на виконання робіт або постачання товарів для державних і комерційних замовників. Ця професія затребувана, оскільки компанії та державні організації постійно шукають надійних постачальників через тендери. Успішна участь у тендерах може принести компанії значні контракти та доходи.'
  },
  {
    id: 2,
    question: 'Який досвід потрібен, щоб почати працювати в тендерах?',
    answers: 'Наш курс підходить як для початківців, так і для тих, хто вже мав досвід роботи з тендерами. Ми навчимо вас усім необхідним навичкам, від пошуку тендерів до підготовки та подання заявки. Також курс корисний для бізнесменів та підприємців, які бажають успішно брати участь у тендерах і розширювати свій бізнес.'
  },
  {
    id: 3,
    question: 'Що я дізнаюся на цьому курсі?',
    answers: 'Ви отримаєте комплексні знання про тендерні процедури, навчитеся шукати підходящі тендери, аналізувати конкуренцію, готувати конкурентоспроможні пропозиції та уникати поширених помилок. Також будуть розглянуті юридичні аспекти та приклади успішних кейсів.'
  },
  {
    id: 4,
    question: 'Скільки часу потрібно на проходження курсу?',
    answers: 'Курс розрахований на 2 тижні, з урахуванням лекцій, практичних завдань і домашніх робіт. Ви можете проходити курс у своєму темпі, оскільки доступ до матеріалів буде відкритий протягом року.'
  },
  {
    id: 5,
    question: 'Як записатися на курс?',
    answers: 'Записатися на курс можна на нашому сайті, заповнивши реєстраційну форму та обравши зручний спосіб оплати. Після реєстрації ви отримаєте доступ до навчальних матеріалів та інструкції з початку навчання.'
  },
  {
    id: 6,
    question: 'На яку підтримку я можу розраховувати під час навчання?',
    answers: 'Ми надаємо всебічну підтримку. Ви можете ставити питання викладачам у чаті Telegram і брати участь в обговореннях на форумі всередині курсу. Якщо у вас вже є питання по курсу, задайте їх, і ми оперативно відповімо.'
  }
];

const { time, startTimer, stopTimer } = useCountdown({key: 'prize_timer', count: 86400});

startTimer()

const { usersData } = useQuiz();
const { collapseItems, setCollapsed } = useCollapse(questions)
const { openCheckout } = usePopups();
const { priceSettings } = usePlansSettings();
const openPayCheckout = () => {
  openCheckout({price: priceSettings.value})
}
console.log(priceSettings.value)

</script>

<style scoped>
.frame-gradient {
  background: linear-gradient(227deg, rgba(26, 30, 179, 0.50) 25.67%, rgba(255, 101, 236, 0.25) 97.35%);
}
</style>
