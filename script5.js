const questions = [
    {
    question: "1. Which format is used for the Cricket World Cup?",
    options: ["Test match", "One Day International (ODI)", "Twenty20 International (T20I)", "Round Robin"],
    correctAnswer: "One Day International (ODI)"
    },
    {
    question: "2. How many wickets does a cricket team need to take to win the match?",
    options: ["5", "7", "10", "All 11"],
    correctAnswer: "10"
    },
    {
    question: "3. What is the name of the batsman who scores a century?",
    options: ["Half-Centurion", "Centurion", "Double Centurion", "Triple Centurion"],
    correctAnswer: "Centurion"
    },
    {
    question: "4. What is the term used for a bowler who takes five wickets in a single innings?",
    options: ["Hat-trick", "Five-for", "Wicket-maiden", "Double Wicket-Haul"],
    correctAnswer: "Five-for"
    },
    {
    question: "5. Which fielding position stands directly behind the wicket-keeper?",
    options: ["First Slip", "Long-on", "Deep Midwicket", "Fine Leg"],
    correctAnswer: "First Slip"
    },
    {
    question: "6. What is the highest run scorer in test cricket history?",
    options: ["Sachin Tendulkar",  "Virat Kohli",  "Ricky Ponting",  "Jacques Kallis"],
    correctAnswer: "Sachin Tendulkar"
    },
    {
    question: "7. Which country has won the most Cricket World Cups?",
    options: ["India", "Australia", "England", "West Indies"],
    correctAnswer: "Australia"
    },
    {
    question: "8. What is the name of the prestigious award given to the player of the match in a test match?",
    options: ["Man of the Match", "Sir Garfield Sobers Trophy", "Wisden Cricketer of the Year", "ICC Player of the Year"],
    correctAnswer: "Sir Garfield Sobers Trophy"
    },
    {
    question: "9. What is the difference between a doosra and an off-break?",
    options: ["Doosra spins away from the right-handed batsman, off-break spins into the right-handed batsman", "Doosra spins faster than an off-break", "Doosra is a type of fielding position", "There is no difference"],
    correctAnswer: "Doosra spins away from the right-handed batsman, off-break spins into the right-handed batsman"
    },
    {
    question: "10. What is the name of the governing body for international cricket?",
    options: ["FIFA", "International Cricket Council (ICC)", "Board of Control for Cricket in India (BCCI)", "Fédération Internationale de l'Automobile (FIA)"],
    correctAnswer: "International Cricket Council (ICC)"
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