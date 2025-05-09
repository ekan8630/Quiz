const questions = [
    {
        question: "1. What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correctAnswer: "Tokyo"
    },
    {
        question: "2. Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "3. Which one is the first search engine in internet?",
        options: ["Google", "Archie", " Altavista", "WAIS"],
        correctAnswer: "Archie"
    },
    {
        question: "4. Number of bit used by the IPv6 address?",
        options: ["32 bit", "64 bit", "128 bit", "256 bit"],
        correctAnswer: "128 bit"
    },
    {
        question: "5. Which one is the first web browser invented in 1990?",
        options: ["Internet Explorer", "Mosaic", "Mozilla", "Nexus"],
        correctAnswer: "Nexus"
    },
    {
        question: "6. Which of the following programming language is used to create programs like applets?",
        options: ["COBOL", "C Language", " Java", "BASIC"],
        correctAnswer: "Java"
    },
    {
        question: "7. First computer virus is known as...?",
        options: ["Rabbit", "Creeper Virus", "Elk Cloner", "SCA Virus"],
        correctAnswer: "Creeper Virus"
    },
    {
        question: "8. Which one programming language is exclusively used for artificial intelligence?",
        options: ["C", "Java", "J2EE", "Prolog"],
        correctAnswer: "Prolog"
    },
    {
        question: "9. Firewall in computer is used for...?",
        options: ["Security", "Data Transmission", "Authentication", "Monitoring"],
        correctAnswer: "Security"
    },
    {
        question: "10. A dual layer Blue-ray Disc can store data upto?",
        options: ["20 GB", "35 GB", "12 GB", "50 GB"],
        correctAnswer: "50 GB"
    },

        // Add more questions as needed
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