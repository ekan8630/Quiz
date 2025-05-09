const questions = [
    {
      question: "1.  What is the process of turning liquid water into vapor called?",
      options: ["Condensation", "Precipitation", "Evaporation", "Sublimation"],
      correctAnswer: "Evaporation"
    },
    {
      question: "2.  Which is the longest river in Europe?",
      options: ["Volga", "Danube", "Rhine", "Seine"],
      correctAnswer: "Volga"
    },
    {
      question: "3.  What is the name of the largest hot desert in North America?",
      options: ["Sonoran Desert", "Great Basin Desert", "Mojave Desert", "Chihuahuan Desert"],
      correctAnswer: "Sonoran Desert"
    },
    {
      question: "4.  The Great Barrier Reef is located off the coast of which country?",
      options: ["Indonesia", "Philippines", "Australia", "New Zealand"],
      correctAnswer: "Australia"
    },
    {
      question: "5.  What is the scientific name for a common house cat?",
      options: ["Felis silvestris domesticus", "Canis lupus familiaris", "Equus caballus", "Sus scrofa domesticus"],
      correctAnswer: "Felis silvestris domesticus"
    },
    {
      question: "6.  Which country is famous for its flamenco dancing tradition?",
      options: ["France", "Italy", "Spain", "Portugal"],
      correctAnswer: "Spain"
    },
    {
      question: "7.  What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter"
    },
    {
      question: "8.  The Liberty Bell is a famous landmark located in which American city?",
      options: ["New York City", "Los Angeles", "Philadelphia", "Chicago"],
      correctAnswer: "Philadelphia"
    },
    {
      question: "9.  What is the name of the world's most famous work of Renaissance art?",
      options: ["The Mona Lisa", "The Creation of Adam", "The Last Supper", "Guernica"],
      correctAnswer: "The Mona Lisa"
    },
    {
      question: "10.  What is the strongest muscle in the human body?",
      options: ["Bicep", "Tricep", "Calf", "Gluteus Maximus"],
      correctAnswer: "Gluteus Maximus"
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