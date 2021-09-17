// Assignment Code
// var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generate");
var userNumber = 0;
var userUpper = "";
var userLower = "";
var userCharSpec = "";
characters = "";
charactersLength = 0;

// Write password to the #password input
function writePassword() {

  // Get user input for the number of characters the password will need to be, within restrictions
  var charLength = function () {
    // Ask user for their choice
    userNumber = window.prompt(
      "To generate your random password, first advise how many characters should it be?\n\n(requires a number between 8 and 128)"
    );
    if (!userNumber) {
      return;
    } else if (userNumber < 8 || userNumber > 128) {
      window.alert("please choose a value between 8 and 128");
      charLength();
    } else {
      return;
    }
  };
  charLength();

  // Get user input for whether they want capital letters to be included in the password.  Limited response to only y or n and when a positive response is received, add the list of available characters for the characters string.
  var upperCase = function () {
    // Ask user for their choice
    userUpper = window.prompt(
      "Would you like any 'CAPITAL' letters to be used?\n\n(requires y or n response)"
    );
    if (!userUpper) {
      return;
    } else if (userUpper == "Y" || userUpper == "y") {
      characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      window.alert("got it");
    } else if (userUpper == "N" || userUpper == "n") {
      window.alert("no capital letters, got it");
    } else if (userUpper == null) {
      window.alert("please respond y or n");
      y();
    } else {
      window.alert("please respond y or n");
      y();
      return;
    }
  };
  upperCase();

  // Get user input for whether they want lowercase letters to be included in the password.Limited response to only y or n and when a positive response is received, add the list of available characters for the characters string.
  var lowerCase = function () {
    // Ask user for their choice
    userLower = window.prompt(
      "Would you like any 'lowercase' letters to be used?\n\n(requires y or n response)"
    );
    if (!userLower) {
      return;
    } else if (userLower == "Y" || userLower == "y") {
      characters = characters + "abcdefghijklmnopqrstuvwxyz";
      window.alert("got it");
    } else if (userLower == "N" || userLower == "n") {
      window.alert("no lowercase letters, got it");
    } else if (userLower == null) {
      window.alert("please respond y or n");
      y();
    } else {
      window.alert("please respond y or n");
      y();
      return;
    }
  };
  lowerCase();

  // Get user input for whether they want special characters to be included in the password. Limited response to only y or n and when a positive response is received, add the list of available characters for the characters string.
  var specialCharacter = function () {
    // Ask user for their choice
    userCharSpec = window.prompt(
      "Would you like any 'special' characters to be used?\n\n(requires y or n response)"
    );
      if (!userCharSpec) {
      return;
    } else if (userCharSpec == "Y" || userCharSpec == "y") {
      characters = characters + " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      window.alert("got it");
    } else if (userCharSpec == "N" || userCharSpec == "n") {
      window.alert("no special characters, got it");
    } else if (userCharSpec == null) {
      window.alert("please respond y or n");
      y();
    } else {
      window.alert("please respond y or n");
      y();
      return;
    }
  };
  specialCharacter();

  // Write password to the #password input
  var password = generatePassword(userNumber);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Generate a randome password with parameter inputs from user
function generatePassword(userNumber) {
  var result = "";
  characters = characters;
  charactersLength = characters.length;
  for (var i = 0; i < userNumber; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
