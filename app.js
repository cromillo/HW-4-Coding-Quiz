let question = document.querySelector('#question');
let button = document.querySelector('#start-button');
let answerButtons = document.querySelectorAll('.answer-choice');
let scoreTotal = document.querySelector('#score');
let number = 0;
let quiz = document.querySelector('#quiz');
let h1 = document.querySelector('#heading');
let instructions = document.querySelector('#instructions');
let score = 0;

let incorrectScore = 0;



button.addEventListener('click', function() {
    changeQuestionText(data[number].question);
    changeAnswerButtons(data[number].answers);
    hideStartButton();
    h1.style.display = "none";
    instructions.style.display = "none";
    quiz.style.display = "block";


});
// Aim is for Final Page to be visible after 5th question is asked.   
if (data.length < 5)
    displayFinalPage();

for (let i=0; i<answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', checkAnswer);

    
//Aim is for timer to begin minute countdown once start button is clicked ()
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
       
    }
    
    window.onload = function () {
        var oneMinute = 60 * 1,
            display = document.querySelector('#time');
            startTimer(oneMinute, display);
    };
     
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
        console.log('Increment Scores');
        score++;
        console.log("score", score)
        scoreTotal.textContent = score;

 
    } else {
        incorrectScore++;
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

function displayFinalPage () {
    let scorePage = document.querySelector('.scorePage');
    if (scorePage.style.visibility=='visible'){
        scorePage.style.visbility = 'hidden';
    }
    else {
        scorePage.style.visibility = 'visible';
    }
    }



