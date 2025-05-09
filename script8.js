const questions = [
    {
      question: "1. In which year was India projected to become the world's most populous country?",
      options: ["2023", "2024", "2025", "2026"],
      correctAnswer: "2024" // Placeholder based on current projections
    },
    {
      question: "2. Which government initiative aims to promote handicrafts and handlooms by enabling direct sales to customers?",
      options: ["Make in India", "Digital India", "Skill India", "Indiahandmade Portal"],
      correctAnswer: "Indiahandmade Portal" // Placeholder based on recent news
    },
    {
      question: "3. The Sittwe Port, recently inaugurated, is located in which country and aims to provide alternative connectivity for which Indian state?",
      options: ["Bangladesh - West Bengal", "Sri Lanka - Tamil Nadu", "Myanmar - Mizoram", "Nepal - Bihar"],
      correctAnswer: "Myanmar - Mizoram" // Placeholder based on recent news
    },
    {
      question: "4. What is the name of the upcoming G20 summit scheduled to be hosted by India?",
      options: ["G20 Delhi Summit", "G20 Mumbai Summit", "G20 Bangalore Summit", "G20 Chennai Summit"],
      correctAnswer: "To be determined" // Placeholder as details may not be finalized yet
    },
    {
      question: "5. Which Indian space agency mission aims to send the first Indian human spaceflight?",    
      options: ["Chandrayaan", "Mangalyaan", "Gaganyaan", "Vikram-S"],
      correctAnswer: "Gaganyaan" // Placeholder based on ongoing space programs
    },
    {
        question: "6. In which Indian city is the headquarters of the International Rice Research Institute (IRRI) located?",
        options: ["Delhi", "Hyderabad", "Chennai", "Cuttack"],
        correctAnswer: "Cuttack" // Placeholder based on IRRI's location
      },
      {
        question: "7. The recently launched 'Fit India Mobile App' is designed to promote what in the Indian population?",
        options: ["Financial literacy", "Mental well-being", "Physical fitness", "Digital literacy"],
        correctAnswer: "Physical fitness" // Placeholder based on the app's purpose
      },
      {
        question: "8. The Pradhan Mantri Jan Dhan Yojana (PMJDY) is a government initiative that provides what kind of financial accounts?",
        options: ["Investment accounts", "Demat accounts", "Savings accounts", "Insurance accounts"],
        correctAnswer: "Savings accounts" // Placeholder based on PMJDY's goals
      },
      {
        question: "9. The National Education Policy (NEP) 2020 emphasizes a shift towards which language of instruction in primary schools?",
        options: ["English only", "Sanskrit only", "Hindi only", "Mother tongue/local language"],
        correctAnswer: "Mother tongue/local language" // Placeholder based on NEP 2020's focus
      },
      {
        question: "10. The Kudankulam Nuclear Power Plant is located in which state in India?",
        options: ["Gujarat", "Maharashtra", "Tamil Nadu", "Kerala"],
        correctAnswer: "Tamil Nadu" // Placeholder based on the plant's location
      }
      
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