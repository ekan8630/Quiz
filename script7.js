const questions = [
    {
    question: "1. The war in Ukraine is a major current event. What year did Russia launch a full-scale invasion?",
    options: ["2020", "2021", "2022", "2023"],
    correctAnswer: "2022"
    },
    {
    question: "2. According to a recent UN report, what group is facing severe impacts from the war in Ukraine?",
    options: ["Men", "Children", "The Elderly", "Women and Girls"],
    correctAnswer: "Women and Girls"
    },
    {
    question: "3. In April 2024, NATO celebrated a major anniversary. What is the year NATO was formed?",
    options: ["1945", "1949", "1953", "1960"],
    correctAnswer: "1949"
    },
    {
    question: "4. A recent article in Current Affairs discussed the concept of a 'security dilemma.' What is this concept related to?",
    options: ["Economic Prosperity", "Climate Change", "Nuclear War", "Cybersecurity"],
    correctAnswer: "Nuclear War"
    },
    {
    question: "5. Many countries are working to reduce their reliance on fossil fuels. What is a major alternative energy source being developed?",
    options: ["Hydropower", "Solar Power", "Wind Power", "Nuclear Power"],
    correctAnswer: "Solar Power" 
    },
    {
    question: "6. Space exploration continues to be a hot topic. What private space company is known for its reusable rockets?",
    options: ["Virgin Galactic", "Blue Origin", "SpaceX", "Rocket Lab"],
    correctAnswer: "SpaceX"
    },
    {
    question: "7. The global economy is facing challenges. What is a term used for a significant decline in economic activity?",
    options: ["Inflation", "Deflation", "Recession", "Depression"],
    correctAnswer: "Recession"
    },
    {
    question: "8. Artificial intelligence (AI) is rapidly developing. What is a potential concern regarding AI?",
    options: ["Job displacement", "Ethical considerations", "Lack of transparency", "All of the above"],
    correctAnswer: "All of the above"
    },
    {
    question: "9. Climate change is a pressing issue. What is a major consequence of rising global temperatures?",
    options: ["More extreme weather events", "Rising sea levels", "Loss of biodiversity", "All of the above"],
    correctAnswer: "All of the above"
    },
    {
    question: "10. Cybersecurity threats are becoming more common. What is a method hackers use to gain unauthorized access to computer systems?",
    options: ["Phishing", "Malware", "Denial-of-service attack", "All of the above"],
    correctAnswer: "All of the above"
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