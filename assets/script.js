//start button reveals quiz
// let revealQuiz = document.querySelector("#start");
// revealQuiz.style.display = "block";
// let answerButton = document.getElementById("");

//variables
let startButton = document.querySelector("#start");
let saveScore = document.querySelector("#save-score");
let questionTitle = document.querySelector("#question-title");
let optionsDiv = document.querySelector("#options");

let questionIndex = 0;

// functions //////////////////////////////////
// start quiz - init

//v function to check the answer v
// function checkAnswer() {
//   //if the answer is true, then move to the next question
//   let answer = this.textContent;
//   alert(answer);
// }

//event listner for the question answer

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
  let currentQuestion = questions[questionIndex];
  // show the question
  questionTitle.textContent = currentQuestion.text;
  //loop show the choices
  currentQuestion.options.forEach((option) => {
    optionsButton.textContent = option;
    optionsButton.setAttribute("value", option);
    optionsButton.onclick = answerCheck;
    let optionsButton = document.createElement("button");
    optionsDiv.appendChild(optionsButton);
  });
  // loop show the choices (buttons)
  // add event listener for the each button created
}

// check user selection
function answerCheck() {
  // check the user selection against correct answer
  if (optionsButton === questions[questionsIndex].answer) {
    alert("correct");
    questionsIndex++;
    if (questionsIndex < questions.length) {
      getQuestion();
    } else {
      endGame();
    }
  } //else{}
}

// end game
function endGame() {
  // set their score
  do keepScore;
  while (option);
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
// saveScore.addEventListener("click", saveHighScore);
// answerButton.addEventListener("click", checkAnswer);
