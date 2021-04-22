//v This is how the quiz will move from one question to the next! v

//v function to check the answer v
function checkAnswer() {
  //if the answer is true, then move to the next question
  let answer = this.textContent;
  alert(answer);
}
//v load question function v
function loadQuestion() {
  //go into the array and pick a question
  let questions = [
    {
      text: "The Turnip Prize Reward is…",
      choices: [
        "a turnip nailed to a block of wood",
        "social shame on twitter",
        "a librarian giving you the side eye",
        "a 10 gift card to CVS",
      ],
      answer: "a turnip nailed to a block of wood",
    },

    {
      text: "Underwater Hockey World Championship was invented to what? ",
      choices: [
        "Keep British Navy divers in shape",
        "Train Olympians on the West Coast",
        "Banish the aquaphobic tendencies of the inventor’s children",
        "Enhance the teamwork of certain hockey teams",
      ],
      answer: "Keep British Navy divers in shape",
    },
    {
      text: "The Wife Carrying Championship began where?",
      choices: ["USA", "Finland", "Spain", "India"],
      answer: "Finland",
    },
    {
      text: "Mobile Phone Throwing Champtionship winners receive a ….!",
      choices: [
        "New phone",
        "New laptop",
        "10minute snuggle session with 3 puppies",
        "1 free therapy session",
      ],
      answer: "New phone",
    },
    {
      text: "Cotswold Olimpick Games includes which of these events?",
      choices: [
        "Shin Kicking World Championship",
        "King of the Hill",
        "Running Races",
        "All above and more",
      ],
      answer: "All above and more",
    },
  ];
}
//event listner for the question answer
let answerBtn = document.getElementById("b");
answerBtn.addEventListener("click", checkAnswer);

//event listener for start button- load question

//Create an if statement that states 'when questions are done, move to highscore html
