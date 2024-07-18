import {computed, reactive, ref} from "vue";
import questionsContent from "@/common/quiz-configs/content.json";
import {useRouter} from "vue-router";
const defaultUsersData = {
    answers: {},
    promocode: null,
    email: null,
    user_id: null
}
const savedUsersData = JSON.parse(localStorage.getItem('usersData'));
const usersData = reactive(savedUsersData || defaultUsersData);
const disableAnswerButton = ref(false);


const questions = reactive({
    1: {
        question: questionsContent[1].question,
        answers: questionsContent[1].answers,
        component: 'question',
        image: 'quiz-1.png',
        answer: usersData.answers[1] || null
    },
    2: {
        image: 'quiz-2.png',
        component: 'right-place'
    },
    3: {
        question: questionsContent[2].question,
        answers: questionsContent[2].answers,
        component: 'question',
        image: 'quiz-3.png',
        answer: usersData.answers[3] || null
    },
    4: {
        question: questionsContent[3].question,
        answers: questionsContent[3].answers,
        component: 'question',
        image: 'quiz-4.png',
        answer: usersData.answers[4] || null
    },
    5: {
        question: questionsContent[4].question,
        answers: questionsContent[4].answers,
        component: 'question',
        image: 'quiz-5.png',
        answer: usersData.answers[5] || null
    },
    6: {
      component: 'users-scores'
    },
    7: {
        question: questionsContent[5].question,
        answers: questionsContent[5].answers,
        component: 'question',
        image: 'quiz-7.png',
        answer: usersData.answers[7] || null
    },
    8: {
        question: questionsContent[6].question,
        answers: questionsContent[6].answers,
        component: 'question',
        image: 'quiz-8.png',
        answer: usersData.answers[8] || null
    },
    9: {
        question: questionsContent[7].question,
        answers: questionsContent[7].answers,
        component: 'question',
        image: 'quiz-9.png',
        answer: usersData.answers[9] || null
    },
    10: {
        question: questionsContent[8].question,
        answers: questionsContent[8].answers,
        component: 'question',
        image: 'quiz-10.png',
        answer: usersData.answers[10] || null
    },
    11: {
        component: 'get-knowledge'
    },
    12: {
        question: questionsContent[9].question,
        answers: questionsContent[9].answers,
        component: 'question',
        image: 'quiz-12.png',
        answer: usersData.answers[12] || null
    },
    13: {
        question: questionsContent[10].question,
        answers: questionsContent[10].answers,
        component: 'question',
        image: 'quiz-13.png',
        answer: usersData.answers[13] || null
    },
    14: {
        component: 'reviews-page'
    },
    15: {
        component: 'loading-page'
    },
    16: {
        component: 'email-page'
    },
    17: {
        component: 'fortune-wheel'
    },
    18: {
        redirect: 'landing'
    }
})

export function useQuiz() {
    const router = useRouter();

    const onlyQuestions = computed(() => {
        const values = Object.values(questions);
        return values.filter(value => value.component === 'question');
    })
    const questionId = computed(() => Number(router.currentRoute.value.params.id));

    const currentQuestion = computed(() => questions[questionId.value]);
    const nextQuestionPath = computed(() => {
        const nextId = questionId.value + 1;
        const nextPageExist = questions[nextId];
        return nextPageExist ? {name: 'quiz', params: {id: nextId}} : null
    })
    const lastQuestionRedirect = computed(() => {
        const allValues = Object.values(questions);

        return {name: allValues[allValues.length - 1].redirect}
    })
    const prevQuestionPath = computed(() => {
        const prevId = questionId.value - 1;
        const nextPageExist = questions[prevId];
        return nextPageExist ? {name: 'quiz', params: {id: prevId}} : null
    })

    const questionCount = computed(() => onlyQuestions.value.findIndex(item => item.question === currentQuestion.value.question) + 1)


    const quizProgress = computed(() => (questionCount.value / onlyQuestions.value.length) * 100)
    const setAnswer = answer => {
        usersData.answers[questionId.value] = answer;
        questions[questionId.value].answer = answer;
        localStorage.setItem('usersData', JSON.stringify(usersData))
    }

    const setPromoCode = value => {
        usersData.promocode = value;
        localStorage.setItem('usersData', JSON.stringify(usersData))
    }

    const nextPage = answer => {
        disableAnswerButton.value = true;
        setAnswer(answer);
        setTimeout(() => {
            router.push(nextQuestionPath.value);
            disableAnswerButton.value = false;
        }, 500)
    }

    return {
        currentQuestion,
        questionId,
        nextPage,
        nextQuestionPath,
        prevQuestionPath,
        disableAnswerButton,
        quizProgress,
        lastQuestionRedirect,
        questions,
        usersData,
        onlyQuestions,
        questionCount,
        setPromoCode
    }
}
