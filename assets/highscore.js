//function to display the saved scores
function displayLastScore() {
  let showScore = JSON.parse(localStorage.getItem("highscores"));
  showScore.forEach((score) => {
    document.getElementById("saved-name").innerHTML += `${score.initials}<br>`;
    document.getElementById("saved-score").innerHTML += `${score.score}<br>`;
  });
}

//As soon as the page opens
function init() {
  displayLastScore();
}
init();
