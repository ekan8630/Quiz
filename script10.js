const questions = [
    {
      question: "1. What is the name of the world's largest desert?",
      options: ["Sahara", "Gobi", "Kalahari", "Patagonia"],
      correctAnswer: "Sahara"
    },
    {
      question: "2. Which is the only continent without native reptiles?",
      options: ["Antarctica", "Australia", "Europe", "South America"],
      correctAnswer: "Antarctica"
    },
    {
      question: "3. What is the chemical symbol for gold?",
      options: ["Fe", "Au", "Cu", "Ag"],
      correctAnswer: "Au"
    },
    {
      question: "4. How many sides does a dodecahedron have?",
      options: ["8", "12", "20", "30"],
      correctAnswer: "12"
    },
    {
      question: "5. Big Ben is the nickname for which famous clock tower?",
      options: ["Leaning Tower of Pisa", "Eiffel Tower", "Palace of Westminster clock tower", "Colosseum clock tower"],
      correctAnswer: "Palace of Westminster clock tower"
    },
    {
      question: "6. What is the largest bone in the human body?",
      options: ["Femur", "Tibia", "Fibula", "Patella"],
      correctAnswer: "Femur"
    },
    {
      question: "7.  What is the capital of New Zealand?",
      options: ["Sydney", "Melbourne", "Wellington", "Auckland"],
      correctAnswer: "Wellington"
    },
    {
      question: "8.  What is the largest freshwater lake by volume?",
      options: ["Lake Superior", "Lake Baikal", "Lake Victoria", "Caspian Sea"],
      correctAnswer: "Lake Baikal"
    },
    {
      question: "9.  Which country is known as the 'Land of the Rising Sun'?",
      options: ["China", "Japan", "South Korea", "North Korea"],
      correctAnswer: "Japan"
    },
    {
      question: "10.  What is the name of the world's first artificial satellite?",
      options: ["Sputnik 1", "Explorer 1", "Luna 1", "Apollo 11"],
      correctAnswer: "Sputnik 1"
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