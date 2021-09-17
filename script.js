// Assignment Code
// var generateBtn = document.querySelector("#generate");
var charLength = document.querySelector("#generate");
var userNumber = 0;
var userUpper = '';
var userLower = '';
var userCharSpec = '';
characters = "";
charactersLength = 0;

// Write password to the #password input
function writePassword() {

  var charLength = function() {
    // Ask user for their choice
    userNumber = window.prompt("To generate your random password, first advise how many characters should it be?\n\n(requires a number between 8 and 128)");
    // If user pressed Cancel, immediately end function
    if (!userNumber) {
      console.log(userNumber);
      return;
    } else if (userNumber < 8 || userNumber > 128) {
      window.alert("please choose a value between 8 and 128");
      charLength();
    } else {
      console.log(userNumber);
      return;
    }
  }
  charLength();

  u = function () {
    userUpper = window.prompt("Would you like any 'CAPITAL' letters to be used?\n\n(requires y or n response)");
    
    if (!userUpper) {
      console.log(userUpper);
      return;
    } else if (userUpper == 'Y' || userUpper == 'y') {
      console.log(userUpper);
      characters = characters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      window.alert("got it");
    } else if (userUpper == 'N' || userUpper == 'n') {
      console.log(userUpper);
      window.alert("no capital letters, got it");
    } else if (userUpper == null) {
      console.log(userUpper);
      window.alert("please respond y or n")
      y();
    } else {
      console.log(userUpper);
      window.alert("please respond y or n")
      y();
      return;
    }
  }
  u();

  l = function () {
    userLower = window.prompt("Would you like any 'lowercase' letters to be used?\n\n(requires y or n response)");
    
    if (!userLower) {
      console.log(userLower);
      return;
    } else if (userLower == 'Y' || userLower == 'y') {
      console.log(userLower);
      characters = characters + 'abcdefghijklmnopqrstuvwxyz';
      window.alert("got it");
    } else if (userLower == 'N' || userLower == 'n') {
      console.log(userLower);
      window.alert("no lowercase letters, got it");
    } else if (userLower == null) {
      console.log(userLower);
      window.alert("please respond y or n")
      y();
    } else {
      console.log(userLower);
      window.alert("please respond y or n")
      y();
      return;
    }
  }
  l();

  s = function () {
    userCharSpec = window.prompt("Would you like any 'special' characters to be used?\n\n(requires y or n response)");
    
    if (!userCharSpec) {
      console.log(userCharSpec);
      return;
    } else if (userCharSpec == 'Y' || userCharSpec == 'y') {
      console.log(userCharSpec);
      characters = characters + '!@#$%^&*()';
      window.alert("got it");
    } else if (userCharSpec == 'N' || userCharSpec == 'n') {
      console.log(userCharSpec);
      window.alert("no special characters, got it");
    } else if (userCharSpec == null) {
      console.log(userCharSpec);
      window.alert("please respond y or n")
      y();
    } else {
      console.log(userCharSpec);
      window.alert("please respond y or n")
      y();
      return;
    }
  }
  s();

  function generatePassword() {
  var result = '';
  characters = characters;
  charactersLength = characters.length;
  for ( var i = 0; i < userNumber; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
  var password = generatePassword(userNumber);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generatepassword.addEventListener("click", generatePassword(userNumber));


// console.log(characters);
// console.log(characters.length);
// console.log(userNumber);
// console.log(generatePassword(userNumber));