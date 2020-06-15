//add variable with necessary html elements
var startBtn = document.querySelector("#start-btn");
var timerEl = document.getElementById("seconds");
var startEl = document.getElementById("start");
var q1El = document.getElementById("q1");
var q2El = document.getElementById("q2");
var q3El = document.getElementById("q3");
var q4El = document.getElementById("q4");
var q5El = document.getElementById("q5");
var scoreEl = document.getElementById("score");
var scoreSecondsEl = document.getElementById("scoreSeconds");
var hrEl = document.getElementById("hr");
var correctEl = document.getElementById("correctP");
var wrongEl = document.getElementById("wrongP");
var initialsEl = document.getElementById("initials");
var scoreListEl = document.getElementById("highscores-list");

// add necessary variables

var questionsArray = [q1El, q2El, q3El, q4El, q5El];
var questionCounter = 0;
var timeInterval;
var timeLeft = 150;
var timeAnswerResult = 2;
var highscoresList = [];
var score;

// listener that when the btn start quiz is clicked activate function timerCountdown()
startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var element = event.target;

  if (element.matches("button") === true) {
    timerCountdown()
    newQuestion()
    timerEl.textContent = timeLeft;
  }
})
// function timerCountdown() start the countdown and call function newquestion
function timerCountdown() {

  timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 1) {
      timerEl.textContent = 0;
      // recordScore();
      clearInterval(timeInterval);
    }

  }, 1000);
}
// ?????? when time is up call function recordscore && Question counter call record score

// newquestion function that gives the screen a new question 
function newQuestion() {

  startEl.classList.add('d-none');
  q1El.classList.remove('d-none');

}

// function other question  that gives the screen another question 

function otherQuestion() {
  
  questionCounter++;
  currentQuestion = questionsArray[questionCounter - 1];
  nextQuestion = questionsArray[questionCounter];

  currentQuestion.classList.add('d-none');
  nextQuestion.classList.remove('d-none');

}

// Event listener for wrong, correct questions, submit button, clear highscores
document.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.matches(".correct")) {
    correct()
    otherQuestion()


  } else if (event.target.matches(".wrong")) {
   timeLeft= timeLeft - 10
   wrong() 
   otherQuestion()


  } else if (event.target.matches(".correctLast")) {
    correct()
    recordScore()

  } else if (event.target.matches(".wrongLast")) {
    timeLeft= timeLeft - 10
    wrong() 
    recordScore()

  } else if (event.target.matches("#submit")) {
   submitScore()

  } else if (event.target.matches("#clear")) {
 clearHighscores()
 }
})

// functions correct and wrong adding penalties and informing the user
function correct() {
  timeAnswerResult = 2;
  timeInterval = setInterval(function () {

    
    timeAnswerResult--;
    correctEl.classList.remove('d-none');
    hrEl.classList.remove('d-none');


    if (timeAnswerResult < 1) {
      correctEl.classList.add('d-none');
      hrEl.classList.add('d-none');
      clearInterval(timeInterval);
    }

  }, 1000);

}

function wrong() {
  timeAnswerResult = 2;
  timeInterval = setInterval(function () {

    
    timeAnswerResult--;
    wrongEl.classList.remove('d-none');
    hrEl.classList.remove('d-none');


    if (timeAnswerResult < 1) {
      wrongEl.classList.add('d-none');
      hrEl.classList.add('d-none');
      clearInterval(timeInterval);
    }

  }, 1000);

}

// function recordScore to show the user his score


function recordScore() {

  q5El.classList.add('d-none');
  scoreEl.classList.remove('d-none');
  score = timerEl.textContent;
  scoreSecondsEl.textContent = timeLeft;

  
}

// function submit score to add the user initials and score to the local storage

function submitScore() {
  event.preventDefault();

  var initials = initialsEl.value.trim();

  // Return from function early if submitted initials is blank
  if (initialsEl === "") {
    return;
  }

  // Add new score and initials to scoreList and initiallist array
 var highscore = {initials:score};
 highscoresList.push(highscore);

  // Store updated highscoresList in localStorage
  localStorage.setItem("highscoresList", JSON.stringify(highscoresList));
};


// function that when Highscore page is loaded adds whatever is on storage to Highscores


for (var i = 0; i < highscoresList.length; i++) {
  var highscores = highscoresList[i];

  var li = document.createElement("li");
  li.textContent = highscore;
  li.setAttribute("data-index", i);
  scoreListEl.appendChild(li);

}




// listener that when the btn clear highscore is clicked clear Highscores
function clearHighscores() {
highscoreList = [];
}
