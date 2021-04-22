let revealQuiz = document.querySelector("#start");
revealQuiz.style.display = "block";

let startButton = document.getElementById("start");
let saveScore = document.getElementById("save-score");

// functions //////////////////////////////////
// start quiz - init
function startQuiz() {
  // start timer

  //Create an if statement that states 'when timer is done, move to highscore html

  //v Timer Code v
  // let timeEl = document.querySelector(".time");

  // // Selects element by id
  // let mainEl = document.getElementById("main");

  // let secondsLeft = 10;

  // function setTime() {
  //   // Sets interval in variable
  //   let timerInterval = setInterval(function () {
  //     secondsLeft--;
  //     timeEl.textContent = secondsLeft + " seconds left till its over!";

  //     if (secondsLeft === 0) {
  //       // Stops execution of action at set interval
  //       clearInterval(timerInterval);
  //       // Calls function to create and append image
  //       sendMessage();
  //     }
  //   }, 1000);
  // }

  //v Function to create and append image v

  // function sendMessage() {
  //   timeEl.textContent = " ";
  //   let imgEl = document.createElement("img");
  //   //picture taken from my bitmoji
  //   imgEl.setAttribute("src", "./assets/images/hotdiggity.png");
  //   mainEl.appendChild(imgEl);
  // }

  // setTime();

  // find dom element to show the question
  getQuestion();
}

// get the next question
function getQuestion() {
  // get the current question
  // show the question
  // loop show the choices (buttons)
  // add event listener for the each button created
  answerCheck();
}

// check user selection
function answerCheck() {
  // check the user selection against correct answer
  // incorrect remove seconds
  // set score
  // get next question
  getQuestion();
  // if questions.length
  endGame();
}

// end game
function endGame() {
  // set their score
  // show end screen
  // clear out timer
}

// save high score
function saveHighScore() {
  // prompt for initials
  // save score to localstorage
}

// event listeners //////////////////////////////////
// start button click
startButton.addEventListener("click", startQuiz);

// save high score
saveScore.addEventListener("click", saveHighScore);
