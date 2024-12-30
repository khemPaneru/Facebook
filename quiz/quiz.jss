
const questions = [
    
    {
    question: "Who is Khem?",
    answer: [
        { text: "A student studying at Canadore College", correct: true },
        { text: "A professor in Nepal", correct: false },
        { text: "A software engineer", correct: false },
        { text: "A social media influencer", correct: false },
    ],
},
{
        question: "Which city is Canadore College located in?",
        answer: [
            { text: "Toronto", correct: false },
            { text: "Ottawa", correct: false },
            { text: "North Bay", correct: true },
            { text: "Vancouver", correct: false },
        ],
    },
    {
        question: "What field of study does the diploma in Computer System and Networking Technician focus on?",
        answer: [
            { text: "Electrical Engineering", correct: false },
            { text: "Mechanical Engineering", correct: false },
            { text: "Computer Systems and Networking", correct: true },
            { text: "Business Administration", correct: false },
        ],
    },
    {
        question: "In which country did the individual complete their +2 education?",
        answer: [
            { text: "Nepal", correct: true },
            { text: "India", correct: false },
            { text: "Sri Lanka", correct: false },
            { text: "China", correct: false },
        ],
    },
    {
        question: "Which secondary school did the individual attend in Nepal?",
        answer: [
            { text: "NAST Secondary School", correct: true },
            { text: "Himalayan Secondary School", correct: false },
            { text: "Lumbini Secondary School", correct: false },
            { text: "Gandaki Secondary School", correct: false },
        ],
    },
    {
        question: "Which type of cuisine is served at one of the his part-time jobs?",
        answer: [
            { text: "Nepalese", correct: false },
            { text: "Indian", correct: true },
            { text: "Chinese", correct: false },
            { text: "Italian", correct: false },
        ],
    },
    {
        question: "What is one of the key skills being developed in the diploma program?",
        answer: [
            { text: "Cooking", correct: false },
            { text: "System administration", correct: true },
            { text: "Graphic design", correct: false },
            { text: "Art and design", correct: false },
        ],
    },
    {
        question: "What is the primary interest in the technology field?",
        answer: [
            { text: "Cloud computing", correct: false },
            { text: "Networking and system management", correct: true },
            { text: "Game development", correct: false },
            { text: "Software development", correct: false },
        ],
    },
    {
        question: "When did the individual move to Canada?",
        answer: [
            { text: "December 2023", correct: false },
            { text: "January 2024", correct: true },
            { text: "March 2024", correct: false },
            { text: "August 2023", correct: false },
        ],
    },
    {
        question: "Which job involves working at Krispy Kreme?",
        answer: [
            { text: "Customer service", correct: true },
            { text: "Baking", correct: false },
            { text: "Delivery driver", correct: false },
            { text: "Inventory management", correct: false },
        ],
    },
    {
        question: "What is the goal after completing the diploma program?",
        answer: [
            { text: "Start a restaurant", correct: false },
            { text: "Work in network administration", correct: true },
            { text: "Become a game developer", correct: false },
            { text: "Start a business", correct: false },
        ],
    },
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
    currentQuestion.answer.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
