// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var especials = "!@#$%&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //criar pronts que vão mostrar lMai, LMin, NUM, SYM, Tamanho
  var size = parseInt(prompt("Set a length from 8 to 128 characters"));
  var symbols = confirm("Do you want to put some special character?");
  var upper = confirm("You want upperLetters?");
  var lower = confirm("You want lowerLetters?");
  var number = confirm("Do you want to put some number?");
  var choices = "";
  var passStr = "";

  if (size > 8 || size < 128) {

  }

  if (symbols === true) {
    choices += especials;
  }

  if (upper === true) {
    choices += upperLetters;
  }

  if (lower === true) {
    choices += lowerLetters;
  }

  if (number === true) {
    choices += numbers;
  }
  var index = 0;
  for (var i = 0; i < size; i++) {
    index = Math.floor(Math.random() * choices.length);
    passStr += choices[index];
  }

  return passStr;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
