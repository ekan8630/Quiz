const questions = [
    {
    question: "1. Which of the following is NOT a greenhouse gas?",
    options: ["Carbon dioxide", "Oxygen", "Methane", "Nitrous oxide"],
    correctAnswer: "Oxygen"
    },
    {
    question: "2. The process by which living organisms obtain nutrients and energy is called...",
    options: ["Respiration", "Photosynthesis", "Transpiration", "Cellular respiration"],
    correctAnswer: "Cellular respiration"
    },
    {
    question: "3. The electromagnetic spectrum is arranged in order of increasing...",
    options: ["Wavelength", "Frequency", "Amplitude", "Energy"],
    correctAnswer: "Frequency"
    },
    {
    question: "4. The outermost layer of the Sun's atmosphere is called the...",
    options: ["Photosphere", "Chromosphere", "Corona", "Convection zone"],
    correctAnswer: "Corona"
    },
    {
    question: "5. The basic unit of heredity is called a...",
    options: ["Chromosome", "Gene", "Allele", "Nucleotide"],
    correctAnswer: "Gene"
    },
    {
    question: "6. The theory of evolution by natural selection was proposed by...",
    options: ["Charles Darwin", "Isaac Newton", "Albert Einstein", "Louis Pasteur"],
    correctAnswer: "Charles Darwin"
    },
    {
    question: "7. The process of separating a mixture of components with different boiling points is called...",
    options: ["Distillation", "Filtration", "Evaporation", "Crystallization"],
    correctAnswer: "Distillation"
    },
    {
    question: "8. The laws of motion were formulated by...",
    options: ["Galileo Galilei", "Johannes Kepler", "Isaac Newton", "Marie Curie"],
    correctAnswer: "Isaac Newton"
    },
    {
    question: "9. The process by which water changes from a liquid to a gas is called...",
    options: ["Evaporation", "Condensation", "Precipitation", "Sublimation"],
    correctAnswer: "Evaporation"
    },
    {
    question: "10. The study of the structure and function of cells is called...",
    options: ["Cytology", "Histology", "Genetics", "Microbiology"],
    correctAnswer: "Cytology"
    },
    
];

    let currentQuestionIndex = 0;
    let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const optionsList = document.getElementById('options');
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('next-button');

    questionElement.textContent = currentQuestion.question;
    optionsList.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'option';
        listItem.textContent = option;
        listItem.onclick = () => selectOption(index);
        optionsList.appendChild(listItem);
    });

    resultElement.textContent = '';
    nextButton.style.display = 'none';

        // Reset animation for the next question
    const questionContainer = document.getElementById('question-container');
    questionContainer.style.transform = 'translateX(0)';
}

function selectOption(optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const optionsList = document.getElementById('options');
    const nextButton = document.getElementById('next-button');

        // Disable further selection
    optionsList.querySelectorAll('.option').forEach((option) => {
        option.onclick = null;
        option.style.cursor = 'not-allowed';
    });

        // Check the answer
    if (currentQuestion.options[optionIndex] === currentQuestion.correctAnswer) {
        score++;
        document.getElementById('result').textContent = 'Correct!';
    } else {
        document.getElementById('result').textContent = 'Wrong!';
    }

        // Display the next button
    nextButton.style.display = 'block';
}

    function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your score: ${score} out of ${questions.length}`;

        // You can add more logic here, like displaying a congratulatory message or suggesting to retry.
}

    // Initial question load
loadQuestion();