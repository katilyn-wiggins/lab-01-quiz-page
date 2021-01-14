// import functions and grab DOM elements
import { countsAsAYes } from './counts-as-a-yes.js';
import { quizScore, resultsAsPercentage } from './utils.js';

// initialize state
const quizButton = document.getElementById('quiz-button');
const answerDiv = document.getElementById('hidden-div');
// const colorChange = document.getElementById('color-change');

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    alert('Would you like to take a quiz about raccoons?');
    const takeQuiz = confirm('Are you suuuuure?');
    if (takeQuiz === false) {
        return;
    }

    const firstName = prompt('Please enter first name');
    const lastName = prompt('Please enter last name');

    let correctAnswers = 0;

    const answerOne = prompt('Is the raccoon the largest species of the procyonid family?');
    if (countsAsAYes(answerOne)) ++correctAnswers;


    const answerTwo = prompt('Was the word raccoon originally adapted from a German term?');
    if (!countsAsAYes(answerTwo)) ++correctAnswers;


    const answerThree = prompt('Are raccoon babies called Kits?');
    if (countsAsAYes(answerThree)) ++correctAnswers;

    const finishedQuizResults = `Wow, ${firstName} ${lastName}, you scored ${resultsAsPercentage(correctAnswers)}! `;
    answerDiv.textContent = finishedQuizResults + quizScore(correctAnswers);


    // color change function process
    // function colorChange(correctAnswers) {
    //     if (correctAnswers === 2) {
    //         colorChange.classList.contains('pink');
    //     }
    //     if (correctAnswers === 3) {
    //         colorChange.classList.contains('green');
    //     }
    // }


});
