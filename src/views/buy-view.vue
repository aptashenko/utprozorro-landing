<template>
  <the-header />
  <main class="relative mx-auto">
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
  <section class="relative px-[20px] pt-[80px] pb-[40px] overflow-hidden">
    <div class="rounded-[420px] bg-[#2A2A50] blur-[100px] w-full pb-[100%] absolute left-[-100px] top-[-200px] pointer-events-none z-[-1]" />
    <h2 class="font-[700] leading-[1.4] text-[32px] text-[#fff] mb-[40px]">Наш курс подойдет тем, кто:</h2>
    <div class="flex flex-col gap-[16px]">
      <div class="border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] py-[25px] flex flex-col items-start justify-end min-h-[230px] gap-[12px]">
        <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Ищет новую профессию</h2>
        <p class="text-neutral leading-[1.3] text-[15px]">Освойте востребованную профессию и начните зарабатывать на тендерах уже через несколько месяцев.</p>
      </div>
      <div class="border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] py-[25px] flex flex-col items-start justify-end min-h-[230px] gap-[12px]">
        <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Хочет увеличить доход</h2>
        <p class="text-neutral leading-[1.3] text-[15px]">Научитесь выигрывать тендеры и обеспечьте стабильный поток заказов для вашего бизнеса.</p>
      </div>
      <div class="border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] py-[25px] flex flex-col items-start justify-end min-h-[230px] gap-[12px]">
        <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Стремится к профессиональному росту</h2>
        <p class="text-neutral leading-[1.3] text-[15px]">Развивайте навыки управления тендерами и поднимайтесь по карьерной лестнице.</p>
      </div>
      <div class="border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] py-[25px] flex flex-col items-start justify-end min-h-[230px] gap-[12px]">
        <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Бизнесмены и предприниматели</h2>
        <p class="text-neutral leading-[1.3] text-[15px]">Узнайте, как успешно участвовать в государственных и коммерческих тендерах и расширьте возможности вашего бизнеса.</p>
      </div>
    </div>
  </section>
  <section>
    <div class="relative z-[2] bg-gift px-[20px] pt-[40px] pb-[120px]">
      <div class="absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-[url('@/assets/images/gift-bg.png')] bg-cover z-[-1] pointer-events-none" />
      <p class="text-[17px] text-neutral font-[700] leading-[1.4] uppercase mb-[6px]">
        До конца специального предложения осталось:
      </p>
      <p class="text-[22px] text-[#fff] font-[700] leading-[1.5] mb-[24px]">
        2 дн.: 13 ч : 09 мин : 05 сек
      </p>
      <p class="text-[28px] text-[#fff] font-[700] leading-[1.5] mb-[2px]">
        Остались сомнения?
      </p>
      <p class="text-[34px] text-[#fff] font-[700] leading-[1.5] mb-[12px]">
        Пройдите бесплатный тест!
      </p>
      <p class="text-[18px] text-neutral leading-[1.5] mb-[24px]">
        Узнайте, насколько эта сфера вам подходит, и сделайте первый шаг к успешной карьере в тендерах.
      </p>
      <button class="text-primary text-[16px] font-[700] leading-normal uppercase px-[24px] py-[16px] rounded-[100px] bg-[#FAFBFF] w-fit">
        Пройти тест
      </button>
      <img src="@/assets/images/gift.png" class="absolute bottom-[-90px] right-0 w-[230px]"/>
    </div>
  </section>
  <section class="relative pt-[80px] pb-[40px] px-[20px]">
    <div class="rounded-[420px] bg-[#2A2A50] blur-[100px] w-full pb-[100%] absolute left-[-100px] top-[-200px] pointer-events-none z-[-1]" />
    <h2 class="text-neutral text-[24px] font-[600] leading-normal mb-[12px]">
      Средняя зарплата специалиста по тендерам в Украине
    </h2>
    <p class="text-[46px] font-[700] leading-normal text-[#fff] mb-[40px]">
      27 000 ₴
    </p>
    <p class="text-[46px] font-[700] leading-normal text-[#fff] mb-[12px]">
      >29 617
    </p>
    <p class="text-neutral text-[24px] font-[600] leading-normal mb-[40px]">
      вакансий по профессии специалист по тендера
    </p>
    <p class="text-[46px] font-[700] leading-normal text-[#fff] mb-[12px]">
      342
    </p>
    <p class="text-neutral text-[24px] font-[600] leading-normal mb-[40px]">
      студента уже трудоустроено
    </p>
    <div class="flex flex-col gap-[16px] mb-[40px]">
      <div class="border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] py-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">
        <h2 class="text-[21px] font-[700] text-[#F3F3F3] mb-[24px]">Специалист по тендерам</h2>
        <div class="flex items-center gap-[6px] mb-[16px]">
          <span class="bg-[#C4C4FF] rounded-[8px] py-[6px] px-[10px] text-primary text-[16px] font-[600] leading-normal ">Можно удаленно</span>
          <span class="bg-[#C4C4FF] rounded-[8px] py-[6px] px-[10px] text-primary text-[16px] font-[600] leading-normal ">Без опыта</span>
        </div>
        <p class="text-neutral leading-[1.3] text-[15px] mb-[24px]">
          Мы ищем энергичного и целеустремленного специалиста по тендерам, готового начать карьеру в динамичной и перспективной сфере.
        </p>
        <a href="#" class="flex items-center gap-[10px] text-[18px] font-[700] leading-normal underline text-[#fff]">
          Посмотреть детали
          <i-svg name="arrow" />
        </a>
      </div>
      <div class="border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] py-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">
        <h2 class="text-[21px] font-[700] text-[#F3F3F3] mb-[24px]">Тендерный специалист (удаленно)</h2>
        <div class="flex items-center gap-[6px] mb-[16px]">
          <span class="bg-[#C4C4FF] rounded-[8px] py-[6px] px-[10px] text-primary text-[16px] font-[600] leading-normal ">Удаленно</span>
          <span class="bg-[#C4C4FF] rounded-[8px] py-[6px] px-[10px] text-primary text-[16px] font-[600] leading-normal ">Опыт 1-3 года</span>
        </div>
        <p class="text-neutral leading-[1.3] text-[15px] mb-[24px]">
          Мы ищем энергичного и целеустремленного специалиста по тендерам, готового начать карьеру в динамичной и перспективной сфере.
        </p>
        <a href="#" class="flex items-center gap-[10px] text-[18px] font-[700] leading-normal underline text-[#fff]">
          Посмотреть детали
          <i-svg name="arrow" />
        </a>
      </div>
      <div class="border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] py-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">
        <h2 class="text-[21px] font-[700] text-[#F3F3F3] mb-[24px]">Младший специалист по тендерам (без опыта)</h2>
        <div class="flex items-center gap-[6px] mb-[16px]">
          <span class="bg-[#C4C4FF] rounded-[8px] py-[6px] px-[10px] text-primary text-[16px] font-[600] leading-normal ">Можно удаленно</span>
          <span class="bg-[#C4C4FF] rounded-[8px] py-[6px] px-[10px] text-primary text-[16px] font-[600] leading-normal ">Без опыта</span>
        </div>
        <p class="text-neutral leading-[1.3] text-[15px] mb-[24px]">
          Приглашаем на работу младшего специалиста по тендерам. Ваша задача — стать частью команды и пройти обучение для развития в области тендерных закупок.
        </p>
        <a href="#" class="flex items-center gap-[10px] text-[18px] font-[700] leading-normal underline text-[#fff]">
          Посмотреть детали
          <i-svg name="arrow" />
        </a>
      </div>
    </div>
    <base-button class="py-[18px] w-full">
      Посмотреть все вакансии
    </base-button>
  </section>
  <section class="relative z-[2] py-[80px] bg-[#F4F5FB] px-[20px]">
    <h2 class="text-[32px] font-[700] text-[#2E2F5B] mb-[40px] leading-[1.3]">
      Чему вы научитесь:
    </h2>
    <div class="flex items-center">
      <div class="relative flex flex-col gap-[40px] pl-[40px] numeric-dot-line">
        <div class="relative flex flex-col gap-[8px] numeric-dot before:content-['1']">
          <h3 class="text-[#2E2F5B] text-[22px] font-[700] leading-[1.2]">Основы тендерного процесса</h3>
          <p class="text-[#3C445E] text-[15px] font-[500] leading-[1.2]">Изучение законодательной базы, типов тендеров и ключевых этапов.</p>
        </div>
        <div class="relative flex flex-col gap-[8px] numeric-dot before:content-['2']">
          <h3 class="text-[#2E2F5B] text-[22px] font-[700] leading-[1.2]">Подготовка тендерных предложений</h3>
          <p class="text-[#3C445E] text-[15px] font-[500] leading-[1.2]">Практические навыки подготовки документов, коммерческих предложений и расчетов.</p>
        </div>
        <div class="relative flex flex-col gap-[8px] numeric-dot before:content-['3']">
          <h3 class="text-[#2E2F5B] text-[22px] font-[700] leading-[1.2]">Анализ и оценка тендерных заявок</h3>
          <p class="text-[#3C445E] text-[15px] font-[500] leading-[1.2]">Методы оценки конкурентных предложений, критерии выбора победителя.</p>
        </div>
        <div class="relative flex flex-col gap-[8px] numeric-dot before:content-['4']">
          <h3 class="text-[#2E2F5B] text-[22px] font-[700] leading-[1.2]">Стратегии участия в тендерах</h3>
          <p class="text-[#3C445E] text-[15px] font-[500] leading-[1.2]">Тактики повышения шансов на победу, изучение кейсов успешного участия в тендерах.</p>
        </div>
        <div class="relative flex flex-col gap-[8px] numeric-dot before:content-['5']">
          <h3 class="text-[#2E2F5B] text-[22px] font-[700] leading-[1.2]">Практика и кейсы</h3>
          <p class="text-[#3C445E] text-[15px] font-[500] leading-[1.2]">Разбор реальных примеров, симуляция тендерного процесса.</p>
        </div>
      </div>
    </div>
    <base-button
        variant="rounded"
        class="w-full py-[16px] mt-[40px]"
    >
      Вступити на курс
    </base-button>
    <img src="@/assets/images/steps-frame.png" class="absolute bottom-0 right-0 blur-[10px] z-[-1]" />
  </section>
  <section class="px-[20px] bg-primary py-[80px]">
    <h2 class="text-[32px] font-[700] text-[#fff] mb-[40px] leading-[1.2]">
      Наши преимущества перед другими
    </h2>
    <div class="flex flex-col gap-[16px] max-w-[335px] mx-auto">
      <div class="relative z-[2] overflow-hidden border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] pt-[160px] pb-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">
        <img src="@/assets/images/calendar.png" class="w-[200px] absolute right-0 top-0 z-[-1]" />
        <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Удобный онлайн формат</h2>
        <p class="text-neutral leading-[1.3] text-[15px]">
          Учитесь в любое время и в любом месте на нашей удобной платформе.
        </p>
      </div>
      <div class="relative z-[2] overflow-hidden border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] pt-[180px] pb-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">
        <img src="@/assets/images/telegram.png" class="w-[88%] absolute right-0 top-[20px] z-[-1]" />
        <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Доступ к закрытому сообществу в Telegram</h2>
        <p class="text-neutral leading-[1.3] text-[15px]">
          Получайте поддержку, советы и рекомендации от опытных специалистов.
        </p>
      </div>
      <div class="relative z-[2] overflow-hidden border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] pt-[150px] pb-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">
        <img src="@/assets/images/work.png" class="w-[80%] absolute right-0 top-0 z-[-1]" />
        <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Платформа для поиска работы</h2>
        <p class="text-neutral leading-[1.3] text-[15px]">
          Найдите работу прямо на нашей платформе и начните применять полученные знания на практике.
        </p>
      </div>
      <div class="relative z-[2] overflow-hidden border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] pt-[170px] pb-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">
        <img src="@/assets/images/messages.png" class="w-[95%] absolute left-[10px] top-0 z-[-1]" />
        <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Форум внутри курса</h2>
        <p class="text-neutral leading-[1.3] text-[15px]">
          Обменивайтесь опытом и знаниями с участниками курса, обсуждайте актуальные темы и получайте новые инсайты, которые помогут вам в профессиональном росте.
        </p>
      </div>
      <div class="relative z-[2] overflow-hidden border-[1px] border-[#323B54] rounded-[16px] bg-[#27293A] px-[20px] pt-[180px] pb-[32px] flex flex-col items-start min-h-[230px] gap-[12px]">
        <img src="@/assets/images/certificate.png" class="w-[80%] absolute right-0 top-0 z-[-1]" />
        <h2 class="text-[21px] font-[700] text-[#F3F3F3]">Сертификат об окончании курса</h2>
        <p class="text-neutral leading-[1.3] text-[15px]">
          Сертификат, подтверждающий знания, поможет выделиться среди конкурентов и повысить шансы на успех в тендерных закупках.
        </p>
      </div>
    </div>
    <base-button
        variant="rounded"
        class="w-full py-[16px] mt-[40px]"
    >
      Вступити на курс
    </base-button>
  </section>
  <section class="relative z-[2] pt-[80px] pb-[106px] bg-[#F4F5FB] px-[20px]">
    <h2 class="text-[32px] font-[700] text-[#2E2F5B] mb-[12px] leading-[1.3]">
      Часто задаваемые вопросы
    </h2>
    <p class="text-[#22233C] text-[15px] leading-[1.2] mb-[12px]">
      Не нашли ответ на свой вопрос?<br>
      <span class="font-[700]">Отправьте заявку</span> и мы вам ответим в ближайшее время.
    </p>
    <a href="#callback">
      <base-button class="bg-[#EDE9FF] text-[#202430] text-[16px] py-[16px] w-full mb-[40px] font-[700]">
        Задать вопрос
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
    <base-button variant="rounded" class="w-fit gap-[14px] mx-auto flex items-center justify-center pr-[8px]">
        <span class="flex-1">
          Записатись на курс
        </span>
      <i-svg name="button-angle" class="flex-shrink-0" />
    </base-button>
    <img src="@/assets/images/faq-frame.png" class="absolute bottom-0 right-0 blur-[10px] z-[-1]" />
  </section>
  <section class="bg-primary py-[80px]">
    <div class="px-[20px]">
      <h2 class="text-[32px] font-[700] text-[#fff] mb-[40px] leading-[1.2]">
        Отзывы учеников
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
  <section id="callback" class="relative z-[2] pt-[80px] pb-[106px] bg-[#F4F5FB] px-[20px]">
    <h2 class="text-[32px] font-[700] text-[#2E2F5B] mb-[12px] leading-[1.3]">
      Поможем решить все вопросы
    </h2>
    <p class="text-[15px] leading-[1.2] text-[#22233C] mb-[40px]">
      Если вы хотите узнать больше о тендерах или нуждаетесь в консультации по их организации, оставьте заявку — и мы свяжемся с вами.
    </p>

    <form class="px-[20px] bg-primary py-[40px] rounded-[12px] flex flex-col gap-[18px]">
      <label>
        <h3 class="text-[18px] font-[500] text-[#EBEBF4] mb-[2px]">Почта</h3>
        <p class="text-[13px] font-[500] leading-[1.2] text-neutral mb-[8px]">Так мы с вами свяжемся.</p>
        <input type="email" placeholder="Example@gmail.com" class="bg-[#353A50] py-[18px] px-[20px] w-full rounded-[8px] text-[16px] text-neutral placeholder:text-neutral placeholder:opacity-50" />
      </label>
      <label>
        <h3 class="text-[18px] font-[500] text-[#EBEBF4] mb-[2px]">Имя</h3>
        <p class="text-[13px] font-[500] leading-[1.2] text-neutral mb-[8px]">Как мы можем к вам обращаться.</p>
        <input type="text" placeholder="Иван" class="bg-[#353A50] py-[18px] px-[20px] w-full rounded-[8px] text-[16px] text-neutral placeholder:text-neutral placeholder:opacity-50" />
      </label>
      <label>
        <h3 class="text-[18px] font-[500] text-[#EBEBF4] mb-[2px]">Сообщение</h3>
        <p class="text-[13px] font-[500] leading-[1.2] text-neutral mb-[8px]">Опишите свои вопросы в этом поле, и мы ответим на них. Если вы не знаете, что спросить, оставьте поле пустым, и мы свяжемся с вами для консультации.</p>
        <textarea
            rows="5"
            placeholder="Например: у меня проблема с оплатой"
            class="bg-[#353A50] py-[18px] resize-none px-[20px] w-full rounded-[8px] text-[16px] text-neutral placeholder:text-neutral placeholder:opacity-50"
        />
      </label>
      <base-button class="py-[16px] text-[16px] font-[700] leading-[1.2]">
        Отправить
      </base-button>
    </form>
  </section>
  <the-footer />
</template>
<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import ISvg from "@/components/shared/ISvg.vue";
import {Collapse} from "vue-collapsed";
import {useCollapse} from "@/composables/useCollapse.js";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
const questions = [
  {
    id: 1,
    question: 'Что такое тендеры и почему это перспективная профессия?',
    answers: 'Тендеры — это процесс подачи заявок на выполнение работ или поставку товаров для государственных и коммерческих заказчиков. Эта профессия востребована, так как компании и государственные организации постоянно ищут надежных поставщиков через тендеры. Успешное участие в тендерах может принести компании значительные контракты и доходы.'
  },
  {
    id: 2,
    question: 'Какой опыт нужен, чтобы начать работать в тендерах?',
    answers: 'Наш курс подходит как для начинающих, так и для тех, кто уже имел опыт работы с тендерами. Мы обучим вас всем необходимым навыкам, от поиска тендеров до подготовки и подачи заявки. Также курс полезен для бизнесменов и предпринимателей, желающих успешно участвовать в тендерах и расширять свой бизнес.'
  },
  {
    id: 3,
    question: 'Что я узнаю на этом курсе?',
    answers: 'Вы получите комплексные знания о тендерных процедурах, научитесь искать подходящие тендеры, анализировать конкуренцию, готовить конкурентоспособные предложения и избегать распространённых ошибок. Также будут рассмотрены юридические аспекты и примеры успешных кейсов.'
  },
  {
    id: 4,
    question: 'Сколько времени нужно на прохождение курса?',
    answers: 'Курс рассчитан на 2 недели, с учётом  лекций, практических заданий и домашних работ. Вы можете проходить курс в своём темпе, так как доступ к материалам будет открыт в течение года.'
  },
  {
    id: 5,
    question: 'Как записаться на курс?',
    answers: 'Записаться на курс можно на нашем сайте, заполнив регистрационную форму и выбрав удобный способ оплаты. После регистрации вы получите доступ к учебным материалам и инструкции по началу обучения.'
  },
  {
    id: 6,
    question: 'Какой поддержкой я могу рассчитывать во время обучения?',
    answers: 'Мы предоставляем всестороннюю поддержку. Вы можете задавать вопросы преподавателям в чате Telegram и участвовать в обсуждениях на форуме внутри курса. Если у вас уже есть вопросы по курсу, задайте их, и мы оперативно ответим.'
  }
]

const { collapseItems, setCollapsed } = useCollapse(questions)

</script>

<style scoped>
.frame-gradient {
  background: linear-gradient(227deg, rgba(26, 30, 179, 0.50) 25.67%, rgba(255, 101, 236, 0.25) 97.35%);
}
</style>
