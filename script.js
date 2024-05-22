const questions = [
    {
        question: "What is the main goal of ethical hacking?",
        options: [
            "A. To cause harm to an organization",
            "B. To identify vulnerabilities and fix them",
            "C. To steal sensitive data",
            "D. To create malware"
        ],
        answer: "B"
    },
    {
        question: "Which of the following is not a phase of the ethical hacking process?",
        options: [
            "A. Reconnaissance",
            "B. Scanning",
            "C. Gaining Access",
            "D. Social Engineering"
        ],
        answer: "D"
    },
    {
        question: "What is the purpose of a vulnerability assessment?",
        options: [
            "A. To exploit known vulnerabilities",
            "B. To identify and evaluate vulnerabilities",
            "C. To install security patches",
            "D. To create a backdoor"
        ],
        answer: "B"
    },
    // Add more questions here (total 50 questions)
];

document.addEventListener("DOMContentLoaded", () => {
    const questionsContainer = document.getElementById("questions-container");
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        
        const questionTitle = document.createElement("h3");
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);
        
        const optionsList = document.createElement("ul");
        optionsList.classList.add("options");
        
        q.options.forEach((option, optIndex) => {
            const optionItem = document.createElement("li");
            
            const optionLabel = document.createElement("label");
            optionLabel.textContent = option;
            
            const optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = `question${index}`;
            optionInput.value = option[0]; // A, B, C, or D
            
            optionLabel.prepend(optionInput);
            optionItem.appendChild(optionLabel);
            optionsList.appendChild(optionItem);
        });
        
        questionDiv.appendChild(optionsList);
        questionsContainer.appendChild(questionDiv);
    });
});

function submitQuiz() {
    const resultsContainer = document.getElementById("results");
    let correctAnswers = 0;
    
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        
        if (selectedOption && selectedOption.value === q.answer) {
            correctAnswers++;
        }
    });
    
    const totalQuestions = questions.length;
    const percentage = (correctAnswers / totalQuestions) * 100;
    
    resultsContainer.innerHTML = `You got ${correctAnswers} out of ${totalQuestions} correct.<br>Your score: ${percentage.toFixed(2)}%`;
}
