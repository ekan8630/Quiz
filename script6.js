const questions = [
    {
    question: "1. How many players are on a football field at a time (excluding substitutes)?",
    options: ["7", "11", "13", "15"],
    correctAnswer: "11"
    },
    {
    question: "2. The area behind the goal where the goalkeeper defends is called the...",
    options: ["Penalty area", "Box", "D", "Net"],
    correctAnswer: "Penalty area"
    },
    {
    question: "3. A direct free kick can be scored directly into the goal without needing another touch,  True or False?",
    options: ["True", "False"],
    correctAnswer: "True"
    },
    {
    question: "4. What is the highest level of professional club football competition in Europe?",
    options: ["Champions League", "Europa League", "Premier League", "La Liga"],
    correctAnswer: "Champions League"
    },
    {
    question: "5. The act of deliberately handling the ball with your hands during the game (excluding the goalkeeper in their penalty area) is called a...",
    options: ["Foul", "Offside", "Handball", "Yellow Card"],
    correctAnswer: "Handball"
    },
    {
    question: "6. If a player commits a serious foul play inside the penalty area, what is awarded to the opposing team?",
    options: ["Corner kick", "Indirect free kick", "Penalty kick", "Yellow card"],
    correctAnswer: "Penalty kick"
    },
    {
    question: "7. What term is used to describe a player who is positioned furthest forward on the field and is responsible for scoring goals?",
    options: ["Defender", "Midfielder", "Striker", "Winger"],
    correctAnswer: "Striker"
    },
    {
    question: "8. How long is a regular football match (excluding stoppage time)?",
    options: ["60 minutes", "75 minutes", "90 minutes", "105 minutes"],
    correctAnswer: "90 minutes"
    },
    {
    question: "9. The offside rule is designed to prevent attackers from gaining an unfair advantage. True or False?",
    options: ["True", "False"],
    correctAnswer: "True"
    },
    {
    question: "10. In which year was the first FIFA World Cup held?",
    options: ["1904", "1924", "1930", "1950"],
    correctAnswer: "1930"
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