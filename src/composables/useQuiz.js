import {computed, reactive} from "vue";
import questionsContent from "@/common/quiz-configs/content.json";
import {useRouter} from "vue-router";

const savedAnswers = JSON.parse(localStorage.getItem('answers'));
const answers = reactive(savedAnswers || {})

const questions = reactive({
    1: {
        question: questionsContent[1].question,
        answers: questionsContent[1].answers,
        component: 'question',
        image: 'quiz-1.png',
        answer: answers[1] || null
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
        answer: answers[2] || null
    },
    4: {
        question: questionsContent[3].question,
        answers: questionsContent[3].answers,
        component: 'question',
        image: 'quiz-4.png',
        answer: answers[3] || null
    },
    5: {
        question: questionsContent[4].question,
        answers: questionsContent[4].answers,
        component: 'question',
        image: 'quiz-5.png',
        answer: answers[4] || null
    },
    6: {
        question: questionsContent[5].question,
        answers: questionsContent[5].answers,
        component: 'question',
        image: 'quiz-7.png',
        answer: answers[5] || null
    },
    7: {
        question: questionsContent[6].question,
        answers: questionsContent[6].answers,
        component: 'question',
        image: 'quiz-8.png',
        answer: answers[6] || null
    },
    8: {
        question: questionsContent[7].question,
        answers: questionsContent[7].answers,
        component: 'question',
        image: 'quiz-9.png',
        answer: answers[7] || null
    },
    9: {
        question: questionsContent[8].question,
        answers: questionsContent[8].answers,
        component: 'question',
        image: 'quiz-10.png',
        answer: answers[8] || null
    },
})

export function useQuiz() {
    const router = useRouter();

    const questionId = computed(() => Number(router.currentRoute.value.params.id));
    const questionsLength = computed(() => Object.keys(questions).length)
    const currentQuestion = computed(() => questions[questionId.value]);
    const nextQuestionPath = computed(() => {
        const nextId = questionId.value + 1;
        const nextPageExist = questions[nextId];
        return nextPageExist ? {name: 'quiz', params: {id: nextId}} : null
    })
    const prevQuestionPath = computed(() => {
        const prevId = questionId.value - 1;
        const nextPageExist = questions[prevId];
        return nextPageExist ? {name: 'quiz', params: {id: prevId}} : null
    })

    const quizProgress = computed(() => (questionId.value / questionsLength.value) * 100)
    const setAnswer = answer => {
        answers[questionId.value] = answer;
        questions[questionId.value].answer = answer;
        localStorage.setItem('answers', JSON.stringify(answers))
    }

    const nextPage = answer => {
        setAnswer(answer);
        router.push(nextQuestionPath.value);
    }

    return {
        currentQuestion,
        questionId,
        nextPage,
        questionsLength,
        nextQuestionPath,
        prevQuestionPath,
        quizProgress
    }
}
