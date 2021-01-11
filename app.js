// import functions and grab DOM elements
const quizButton = document.getElementById('quiz-button');
const answerDiv = document.getElementById('hidden-div');
// initialize state
quizButton.addEventListener('click', () => {
    alert('Would you like to take a quiz about raccoons?');
    const takeQuiz = confirm('Are you suuuuure?');
    if (takeQuiz === false) {
        return;
    }
    const firstName = prompt('Please enter first name');
    const lastName = prompt('Please enter last name');

    const answerOne = prompt('Is the raccoon the largest species of the procyonid family?');
    if (answerOne.charAt(0).toUpperCase() === 'Y') {
        console.log('you got it!');
    } else {
        console.log('failed');
    }
    let correctAnswers = 0;
    ++correctAnswers;
    console.log(correctAnswers);

    const answerTwo = prompt('Was the word raccoon originally adapted from a German term?');
    if (answerTwo.charAt(0).toUpperCase() !== 'Y') {
        console.log('you got it!');
    } else {
        console.log('failed');
    }
    ++correctAnswers;
    console.log(correctAnswers);


});
// set event listeners to update state and DOM