const questions = [
    {
        question: "1. In computer world, Trojan refer to ?",
        options: ["Virus", "Malware", "Worm", "Spyware"],
        correctAnswer: "Malware"
    },
    {
        question: "2. Which one of the followings is a programming language ?",
        options: ["HTTP", "HTML", "HPML", "FTP"],
        correctAnswer: "HTML"
    },
    {
        question: "3. Which protocol is used to received e-mail ?",
        options: ["SMTP", "POP3", " HTTP", "FTP"],
        correctAnswer: "POP3"
    },
    {
        question: "4. Which protocol is used to send e-mail ?",
        options: ["HTTP", "POP3", "SMTP", "SSH"],
        correctAnswer: "SMTP"
    },
    {
        question: "5. Which computer program converts assembly language to machine language ?",
        options: ["Interpreter", "Compiler", "Assembler", "Comparator"],
        correctAnswer: "Assembler"
    },
    {
        question: "6. In which year ‘@’ sign was first chosen for its use in e-mail address ?",
        options: ["1976", "1980", " 1977", "1972"],
        correctAnswer: "1972"
    },
    {
        question: "7. Which one is the latest one from PARAM SuperSries computers ?",
        options: ["PARAM Yuva II", "PARAM 10000", "PARAM Padma", "PARAMnet"],
        correctAnswer: "PARAM Yuva II"
    },
    {
        question: "8. Who is also know as the father of Indian Supercomputing ?",
        options: ["Ragunath Mashelkar", "Vijay Bhatkar", "Jayant Narlikar", "Nandan Nilekani"],
        correctAnswer: "Vijay Bhatkar"
    },
    {
        question: "9. A folder in windows computer can’t be made with the name ?",
        options: ["can", "con", "mak", "make"],
        correctAnswer: "con"
    },
    {
        question: "10. A computer use which type of number system to calculate and to store data ?",
        options: ["decimal", "octal", "binary", "hexadecimal"],
        correctAnswer: "binary"
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