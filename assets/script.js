//Create lets for the questions..?

//vThis is how the quiz will move from one question to the next!v

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

var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
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

// Function to create and append image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  //picture taken from my bitmoji
  imgEl.setAttribute("src", "./assets/images/hotdiggity.png");
  mainEl.appendChild(imgEl);
}

setTime();
