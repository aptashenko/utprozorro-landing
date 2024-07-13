import {useQuiz} from "@/composables/useQuiz.js";

export const isNewUser = (to) => {
    const { questions, usersData } = useQuiz();
    const isOldUser = usersData?.promocode;

    if (isOldUser) {
        return {name: 'landing'}
    } else if (!questions[to.params.id].answer && to.params.id > 1 && questions[to.params.id].component === 'question') {
        return {name: 'quiz', params: {id: 1}}
    } else {
        return true
    }
}
