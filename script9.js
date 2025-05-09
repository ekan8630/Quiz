const questions = [
    {
      question: "1. What is the tallest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      correctAnswer: "Mount Everest"
    },
    {
      question: "2. The world's longest river is the...",
      options: ["Nile", "Amazon", "Yangtze", "Yellow"],
      correctAnswer: "Nile"
    },
    {
      question: "3. Which country is famous for the Great Wall of China?",
      options: ["Japan", "India", "China", "South Korea"],
      correctAnswer: "China"
    },
    {
      question: "4. What is the largest ocean on Earth?",
      options: ["Pacific", "Atlantic", "Indian", "Arctic"],
      correctAnswer: "Pacific"
    },
    {
      question: "5. Shakespeare is considered a literary genius from which country?",
      options: ["France", "England", "Germany", "Italy"],
      correctAnswer: "England"
    },
    {
      question: "6. What is the currency of Japan?",
      options: ["Euro", "Dollar", "Yen", "Yuan"],
      correctAnswer: "Yen"
    },
    {
      question: "7. Leonardo da Vinci is known for the iconic painting of...",
      options: ["The Scream", "Mona Lisa", "Guernica", "The Kiss"],
      correctAnswer: "Mona Lisa"
    },
    {
      question: "8. What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "9. The Google search engine was founded by...",
      options: ["Bill Gates", "Steve Jobs", "Larry Page and Sergey Brin", "Mark Zuckerberg"],
      correctAnswer: "Larry Page and Sergey Brin"
    },
    {
      question: "10. The human body has how many hearts?",
      options: ["Two", "Three", "One", "Zero"],
      correctAnswer: "One"
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