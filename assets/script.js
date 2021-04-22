let startButton = document.getElementById("start");
let saveScore = document.getElementById("save-score");

// functions //////////////////////////////////
// start quiz - init
function startQuiz() {
  // start timer
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
startBtn.addEventListener("click", startQuiz);

// save high score
saveScore.addEventListener("click", saveHighScore);

//v This is how the quiz will move from one question to the next! v

//listOfQues = {
//     firstQues: 1,
//     secondQues: 2,
//     thirdQues: 3,
//     fourthQues: 4,
//     fifthQues: 5
// }
// console.log(listOfQues.secondExample)

//Create an if statement that states 'when questions are done, move to highscore html

//Create an if statement that states 'when timer is done, move to highscore html
