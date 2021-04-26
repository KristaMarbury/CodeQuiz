//global variables
let startButton = document.querySelector("#start");
let saveScore = document.querySelector("#save-score");
let questionTitle = document.querySelector("#question-title");
let optionsDiv = document.querySelector("#options");
let questionIndex = 0;
let timeEl = document.querySelector("#time");
let secondsLeft = 100;
let mainEl = document.querySelector("#main");
let timerInterval;
let questionDiv = document.querySelector("#question");
//let oldHighscoreTitle

// functions //////////////////////////////////

function startQuiz() {
  setTime();

  getQuestion();
}

function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till its over!";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}

// get the next question
function getQuestion() {
  // get the current question
  let currentQuestion = questions[questionIndex];
  // show the question
  questionTitle.textContent = currentQuestion.text;
  //loop show the choices
  optionsDiv.textContent = "";
  currentQuestion.options.forEach((option) => {
    let optionsButton = document.createElement("button");
    optionsButton.textContent = option;
    optionsButton.setAttribute("value", option);
    optionsDiv.appendChild(optionsButton);
    optionsButton.onclick = answerCheck;
  });
}

function answerCheck() {
  // check the user selection against correct answer
  if (this.value === questions[questionIndex].answer) {
    alert("correct");
    questionIndex++;
    if (questionIndex < questions.length) {
      getQuestion();
    } else {
      endGame();
    }
  } else {
    alert("incorrect!");
    secondsLeft -= 10;
  }
}

// end game
function endGame() {
  clearInterval(timerInterval);
  timeEl.textContent = " ";
  let imgEl = document.createElement("img");
  //picture taken from my bitmoji
  imgEl.setAttribute("src", "./assets/images/hotdiggity.png");
  mainEl.appendChild(imgEl);

  //replace questions with the score
  questionDiv.textContent = `Your Score Is...${secondsLeft}`;
  // show end screen
  saveHighScore();
}

// save high score
function saveHighScore() {
  // prompt for initials
  let isSave = prompt("Enter initials to save the game");
  if (isSave !== "") {
    let highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    // format new score object for current user
    let newScore = {
      score: secondsLeft,
      initials: isSave,
    };
    grade = newScore.score;
    players = newScore.initials;
    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    //trying to create list item for each object in the array, then append to the highScore class element
    // let highScores = JSON.parse(localStorage.getItem("highScore"));
    // //sort here by specific key
    // highScores.sort((a, b) => b.score - a.score);
    // for (i = 0; i < highScores.length; i++) {
    //   let scoreLi = document.createElement("li");
    //   scoreLi.textContent =
    //     `${highScores[i].name}..................` + `${highScores[i].score}`;
    //   oldHighScoresTitle.appendChild(scoreLi);
    // }
  }
}

// event listeners //////////////////////////////////
startButton.addEventListener("click", startQuiz);

// save high score
