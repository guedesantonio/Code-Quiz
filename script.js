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
var questionsArray = [q1El , q2El , q3El , q4El, q5El]
var timeInterval;
var timeLeft = 150;

// listener that when the btn start quiz is clicked activate function timerCountdown()
startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    timerCountdown()
  }
})
// function timerCountdown() start the countdown and call function newquestion
function timerCountdown() {

  timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft;
    timeLeft--;
    newQuestion()

    if (timeLeft < 1) {
      timerEl.textContent = 0;
      clearInterval(timeInterval);
    }

  }, 1000);
}
    // when time is up call function recordscore && Question counter call record score

// newquestion function that gives the screen a new question 
function newQuestion() {

  startEl.classList.add('d-none');
  q1El.classList.remove('d-none');

  // for (i=0,i<questionsArray.length,i++) {
  //   var currentQuestion = questionsArray[i];
  //   if (i=0) {
  //   startEl.classList.add('d-none');
  //   currentQuestion.classList.remove('d-none');
  //   }
  //   else {
  //   lastQuestion = questionsArray[i-1]  
  //     lastQuestion.classList.add('d-none');
  //     currentQuestion.classList.remove('d-none'); 
  //   }
    
  // }

 

}
// function record score records the score on storage 
// function that when Highscore page is loaded adds whatever is on storage to Highscores
// listener that when the btn clear highscore is clicked clear Highscores
