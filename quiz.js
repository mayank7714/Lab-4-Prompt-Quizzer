
// ========================================
// Web Dev I - Lab Assignment 4
// Prompt Quizzer - A Quiz Game
// ========================================

// 1. Create an array of quiz questions
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answer: "paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "mars"
    },
    {
        question: "What is 5 + 7?",
        answer: "12"
    },
    {
        question: "Who is the President of Russia?",
        answer: "vladimir putin"
    },
    {
        question: "Which language is used for web development?",
        answer: "javascript"
    },
    {
        question: "What does HTML stand for?",
        answer: "hypertext markup language"
    },
    {
        question: "Which company developed JavaScript?",
        answer: "netscape"
    },
    {
        question: "What does CSS stand for?",
        answer: "cascading style sheets"
    },
    {
        question: "Which keyword declares a constant in JavaScript?",
        answer: "const"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        answer: "//"
    }
];

// 2. Function to run the quiz
function runQuiz() {

    // 3. Initialize score
    let score = 0;

    // 4. Loop through all questions
    for (let i = 0; i < quizQuestions.length; i++) {

        // 5. Take input from the user
        let userAnswer = prompt(quizQuestions[i].question);

        // 6. Normalize the user input
        userAnswer = (userAnswer || "").toLowerCase().trim();

        // 7. Check the answer
        if (userAnswer === quizQuestions[i].answer) {

            score++;

            // 8. Give correct answer feedback
            alert("Correct! Well done.");

        } else {

            alert(
                "Wrong Answer!\nCorrect Answer: " +
                quizQuestions[i].answer
            );
        }
    }

    // 9. Display the final score
    alert(
        "Quiz Completed!\nYour Final Score: " +
        score + " out of " + quizQuestions.length
    );
}

// 10. Start the quiz
runQuiz();
