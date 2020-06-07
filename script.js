//add variable with necessary html elements
var startBtn = document.querySelector("#start-btn");
var timerEl = document.getElementById("#seconds");
console.log(timerEl.nodeValue);
// listener that when the btn start quiz is clicked activate function timerCountdown()
startBtn.addEventListener("click", function(event) {
event.preventDefault();
var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    timerCountdown()
  }})
// function timerCountdown() start the countdown and call function newquestion
function timerCountdown() {
    var timeLeft = "60";
  
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft;
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "0";
        alert("Is working");
        clearInterval(timeInterval);
      }
  
    }, 1000);
}
//     when time is up call function recordscore && Question counter call record score
// newquestion function that gives the screen a new question 
// function record score records the score on storage 
// function that when Highscore page is loaded adds whatever is on storage to Highscores
// listener that when the btn clear highscore is clicked clear Highscores
