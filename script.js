//add variable with necessary html elements
var startBtn = document.querySelector("#start-btn");
// listener that when the btn start quiz is clicked activate function timerCountdown()
startBtn.addEventListener("click", function(event) {
event.preventDefault();
var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    timerCountdown()
  }})
// function timerCountdown() start the countdown and call function random question
function timerCountdown() {
    alert("is working");
}
//     when time is up call function recordscore
// random question that gives the screen a new question 
// function record score records the score on storage 
// function that when Highscore page is loaded adds whatever is on storage to Highscores
// listener that when the btn goback is clicked goes back to start quiz page
// listener that when the btn clear highscore is clicked clear Highscores

