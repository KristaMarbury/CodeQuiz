//list of the declared variables for the password
let specialCharacters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  "/",
  ":",
  ";",
  "<",
  ">",
  ",",
  ".",
  "?",
];

let numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//password generation function
function generatePassword() {
  let characterList = [];

  //list of confirms for the user to check in creating the password
  let passwordLength = prompt(`How many characters in your password, boss?`);

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Nah, stick to 8-128!");
  }

  let specialCharactersConfirm = confirm(`Do you want special characters?`);
  let numberCharactersConfirm = confirm(`Do you want numbers?`);
  let uppercaseCharactersConfirm = confirm(`Do you want uppercase letters?`);
  let lowercaseCharactersConfirm = confirm(`Do you want lowercase letters?`);
  let password = [];

  //if statments for each character type
  if (specialCharactersConfirm === true) {
    password.push(getRandom(specialCharacters));
    characterList = characterList.concat(specialCharacters);
  }

  if (numberCharactersConfirm === true) {
    password.push(getRandom(numberCharacters));
    characterList = characterList.concat(numberCharacters);
  }

  if (uppercaseCharactersConfirm === true) {
    password.push(getRandom(uppercaseCharacters));
    characterList = characterList.concat(uppercaseCharacters);
  }

  if (lowercaseCharactersConfirm === true) {
    password.push(getRandom(lowercaseCharacters));
    characterList = characterList.concat(lowercaseCharacters);
  }

  let remainingPasswordLength = passwordLength - password.length;
  for (let i = 0; i < remainingPasswordLength; i++) {
    password.push(getRandom(characterList));
  }

  return password.join("");
}

function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

let generateBtn = document.querySelector("#generate");

//
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
