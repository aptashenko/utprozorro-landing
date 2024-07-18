import {ref, computed, reactive, onBeforeUnmount} from "vue";

export function useCountdown({key, count}) {
    let timerCount = ref(localStorage.getItem(key) || count);

    const hours = computed(() => Math.floor(timerCount.value / 3600).toString().padStart(2, "0"));

    const minutes = computed(() => Math.floor((timerCount.value % 3600) / 60).toString().padStart(2, "0"));

    const seconds = computed(() => (timerCount.value % 60).toString().padStart(2, "0"));

    const timer = computed(() => `${minutes.value}:${seconds.value}`);

    const time = reactive({
        hours,
        minutes,
        seconds
    })

    let intervalId = null;

    const startTimer = (customTimer) => {
        if (customTimer !== undefined) {
            timerCount.value = customTimer;
        }

        if (!!Number(timerCount.value)) {
            intervalId = setInterval(() => {
                timerCount.value--;
                localStorage.setItem(key, timerCount.value);

                if (timerCount.value <= 0) {
                    stopTimer();
                }
            }, 1000);
        }
    }

    const formatTime = totalSeconds => {
        const minutes = Math.floor(totalSeconds / 60)
            .toString()
            .padStart(2, "0");
        const seconds = (totalSeconds % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    }

    const stopTimer = () => {
        clearInterval(intervalId);
    }

    onBeforeUnmount(stopTimer)

    return {
        timer,
        timerCount,
        time,
        stopTimer,
        startTimer
    }
}
