const questions = [
    {
        question: "1. What is the extension type of the excel 2007 files ?",
        options: [".xls", ".xlsx", ".xsl", "None of the above"],
        correctAnswer: ".xlsx"
    },
    {
        question: "2.The basic units of a excel spreedsheet where we enter data is called ?",
        options: ["Tab", "Cell", "Box", "None of the above"],
        correctAnswer: "Cell"
    },
    {
        question: "3. The maximum number of rows supported by Excel 2003 spreadsheet is ?",
        options: ["10,000", "35,356", " 55,782", "65,536"],
        correctAnswer: "65,536"
    },
    {
        question: "4. The maximum number of rows supported by Excel 2007 spreadsheet is ?",
        options: ["9,68,576", "12,15,857", "13,42,554", "10,48,576"],
        correctAnswer: "10,48,576"
    },
    {
        question: "5. Which one is a ‘text editor’ for Microsoft Windows ?",
        options: ["MS Word", "Ms Excel", "WordPad", "Notepad"],
        correctAnswer: "Notepad"
    },
    {
        question: "6. Which one is the default ‘Word Processor’ for Microsoft Windows ?",
        options: ["MS Word", "Ms Paint", " WordPad", "Notepad"],
        correctAnswer: "WordPad"
    },
    {
        question: "7. What is the maximum size of a word document created ?",
        options: ["1 MB", "32 MB", "16MB", "999KB"],
        correctAnswer: "32 MB"
    },
    {
        question: "8. What is the maximum number of Primary Partitions that can be created on a Hard-disk ?",
        options: ["2", "3", "4", "1"],
        correctAnswer: "4"
    },
    {
        question: "9. How many layers in the TCP/IP protocol layers ?",
        options: ["7", "5", "4", "11"],
        correctAnswer: "4"
    },
    {
        question: "10. Which key combination is used to minimize all open windows and displays in the screen ?",
        options: ["Alt+M", "Shift+M", "Windows Key+D", "CTRL+D"],
        correctAnswer: "Windows Key+D"
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