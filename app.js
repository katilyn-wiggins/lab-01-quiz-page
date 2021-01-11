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



});
// set event listeners to update state and DOM