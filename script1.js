const questions = [
    {
        question: "1. Which of the following is not a database management software.?",
        options: ["MySQL", "Oracle", "Sybase", "COBOL"],
        correctAnswer: "COBOL"
    },
    {
        question: "2. Number of layers in the OSI (Open Systems Interconnection) Model.",
        options: ["9", "3", "7", "11"],
        correctAnswer: "7"
    },
    {
        question: "3. 1024 bit is equal to how many byte.?",
        options: ["1 Byte", "128 Byte", " 32 Byte", "64 Byte"],
        correctAnswer: "128 Byte"
    },
    {
        question: "4. Number of bit used by the IPv6 address?",
        options: ["32 bit", "64 bit", "128 bit", "256 bit"],
        correctAnswer: "128 bit"
    },
    {
        question: "5. Mac Operating System is developed by which company.",
        options: ["IBM", "Apple", "Microsoft", "Samsung"],
        correctAnswer: "Apple"
    },
    {
        question: "6. Where is the headquter of Microsoft office located ?",
        options: ["Texas", "NewYork", "California", "Washington"],
        correctAnswer: "Washington"
    },
    {
        question: "7. .gif is an extension of ?",
        options: ["Image file", "Video file", "Audio file", "Word file"],
        correctAnswer: "Image file"
    },
    {
        question: "8. Which one is the first fully supported 64-bit operating system ?",
        options: ["Windows Vista", "Mac", "Linux", "Windows XP"],
        correctAnswer: "Linux"
    },
    {
        question: "9. Computer Hard Disk was first introduced in 1956 by...?",
        options: ["Dell", "Apple", "Microsoft", "IBM"],
        correctAnswer: "IBM"
    },
    {
        question: "10. Which of the following is not a web browser ?",
        options: ["MOSAIC", "WWW", "Facebook", "Netscape navigator"],
        correctAnswer: "Facebook"
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