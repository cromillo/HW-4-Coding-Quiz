let question = document.querySelector('#question');
let button = document.querySelector('#start-button');
let answerButtons = document.querySelectorAll('.answer-choice');
let number = 0;
let quiz = document.querySelector('#quiz');
let h1 = document.querySelector('#heading');
let instructions = document.querySelector('#instructions');
let score = document.querySelector("#score");


button.addEventListener('click', function() {
    changeQuestionText(data[number].question);
    changeAnswerButtons(data[number].answers);
    hideStartButton();
    h1.style.display = "none";
    instructions.style.display = "none";
    quiz.style.display = "block";
});


for (let i=0; i<answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', checkAnswer);
}



/** FUNCTIONS  */

function changeAnswerButtons(answers) {
    for (let i=0; i<answers.length; i++) {
        answerButtons[i].textContent = answers[i];
    }
}

function changeQuestionText(text) {
    //+= append
    question.textContent = text;
}

function checkAnswer(e) {
    if(data[number].correct === e.target.textContent) {
        console.log('Right!');
        console.log('Increment Score');
        //TODO: Increment the score
    } else {
        console.log('Wrong!');
        console.log('Timer decreased by 3 seconds');
        //TODO: Decrement the time
    }
    number = number + 1;
    changeQuestionText(data[number].question);
    changeAnswerButtons(data[number].answers);
}

function hideStartButton() {
    button.classList.add('hide-btn');
}