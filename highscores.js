//add variable with necessary html elements
var scoreListEl = document.getElementById("highscores-list");
var clearEl = document.getElementById("clear");
var backEl = document.getElementById("back");

// add necessary variables
  var highscoresList = JSON.parse(localStorage.getItem("highscoresList")) || [];

  // Render todos to the DOM
  renderScores();

function renderScores() {
  // Clear scoreListEl element
  scoreListEl.innerHTML = "";

  // Render a new li for each highscore

  for (var i = 0; i < highscoresList.length; i++) {
    let highscore = highscoresList[i]
    var li = document.createElement("li");
    li.textContent = highscore.Initials + " = " + highscore.Score;
    li.setAttribute("data-index", i);
    li.setAttribute("class", "submit-btn");
    scoreListEl.appendChild(li);
    var br = document.createElement("br");
    scoreListEl.appendChild(br);

  
  }
}

// listener that when the btn clear highscore is clicked clear Highscores
function clearHighscores() {
    localStorage.clear();
    window.location.href = "./highscores.html"
  }

//   event listeners

clearEl.addEventListener("click", function (event) {
    event.preventDefault();
  
    if (event.target.matches("#clear")) {
     clearHighscores()
  
  
    } 
})

backEl.addEventListener("click", function (event) {
    event.preventDefault();
  
    if (event.target.matches("#back")) {
        window.location.href = "./index.html"
  
  
    } 
})