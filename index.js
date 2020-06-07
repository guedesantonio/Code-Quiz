//add variable with necessary html elements
var todoList = document.querySelector("#todo-list");
// listener that when the btn start is clicked start quiz activate function timer
todoList.addEventListener("click", function(event) {
var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
// function timer start the countdown and call function random question
    // when time is up call function recordscore
// random question that gives the screen a new question 
//function record score records the score on storage 
// function that when Highscore page is loaded adds whatever is on storage to Highscores
//listener that when the btn goback is clicked goes back to start quiz page
// listener that when the btn clear highscore is clicked clear Highscores
//