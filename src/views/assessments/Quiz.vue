<script setup>
import { ref, computed, watch, onMounted } from "vue";

const quiz = ref([]);
const questionIndex = ref(0);
const correctAnswers = ref(0);
const showResults = ref(false);
const timer = ref(10);

const fetchQuiz = async () => {
    // try {
    //     const response = await axios.get("your-api-url");
    //     quiz.value = response.data;
    // } catch (error) {
    //     console.error(error);
    // }

    return []

    
};

const startCountdown = () => {
    const countdown = setInterval(() => {
        if (timer.value > 0) {
            timer.value--;
        } else {
            clearInterval(countdown);
        }
    }, 1000);
};

const checkAnswer = (index) => {
    if (quiz.value[questionIndex.value].correct === index) {
        correctAnswers.value++;
    }
    questionIndex.value++;
};

const restartQuiz = () => {
    questionIndex.value = 0;
    correctAnswers.value = 0;
    showResults.value = false;
    timer.value = 10;
    startCountdown();
};

const submitQuiz = async () => {
    try {
        await axios.post("your-api-url", { score: correctAnswers.value });
        // Handle success
    } catch (error) {
        console.error(error);
        // Handle error
    }
};
function currentQuestion() {
    return this.quiz[this.questionIndex];
}

function finishedQuiz() {
    return this.questionIndex >= this.quiz.length;
}
// function finishedQuiz(val) {
//     if (val) {
//         this.showResults = true;
//     }
// }
fetchQuiz();
startCountdown();
</script>

<template>
    <div class="w-full h-96 bg-red-300">
        <h2>{{ currentQuestion.question }}</h2>
        <ul>
            <li v-for="(answer, index) in currentQuestion.answers">
                <button @click="checkAnswer(index)">{{ answer }}</button>
            </li>
        </ul>
        <div v-if="showResults">
            <h2>Your score: {{ correctAnswers }} out of {{ quiz.length }}</h2>
            <button @click="submitQuiz">Submit</button>
            <button @click="restartQuiz">Restart Quiz</button>
        </div>
    </div>
</template>
