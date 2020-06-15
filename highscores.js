//add variable with necessary html elements
var scoreListEl = document.getElementById("highscores-list");

// add necessary variables
  var highscoresList = JSON.parse(localStorage.getItem("highscoresList")) || [];

  // Render todos to the DOM
  renderScores();

function renderScores() {
  // Clear scoreListEl element
  scoreListEl.innerHTML = "";

  // Render a new li for each highscore

  for (var i = 0; i < highscoresList.length; i++) {
    var highscore = highscoresList[i];
  
    var li = document.createElement("li");
    li.textContent = highscore;
    li.setAttribute("data-index", i);
    li.setAttribute("class", "p1 bg-fuchsia");
    scoreListEl.appendChild(li);
  
  }
}

// listener that when the btn clear highscore is clicked clear Highscores
function clearHighscores() {
  highscoreList = [];
  }