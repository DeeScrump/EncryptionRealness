//   var charLength = function() {
//     // Ask user for their choice
//     var userNumber = window.prompt("To generate your random password, first advise how many characters should it be?\n\n(requires a number between 8 and 128)");
//     // If user pressed Cancel, immediately end function
//     if (!userNumber) {
//       return;
//     } else if (userNumber < 8 || userNumber > 128) {
//       window.alert("please choose a value between 8 and 128");
//       charLength();
//     } else {
//       console.log(userNumber);
//       return;
//     }
//   }
// charLength();

u = function () {
  var userUpper = window.prompt("Would you like any 'CAPITAL' letters to be used?\n\n(requires y or n response)");
  
  if (!userUpper) {
    console.log(userUpper);
    return;
  } else if (userUpper == 'Y' || userUpper == 'y') {
    console.log(userUpper);
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
  var userLower = window.prompt("Would you like any 'lowercase' letters to be used?\n\n(requires y or n response)");
  
  if (!userLower) {
    console.log(userLower);
    return;
  } else if (userLower == 'Y' || userLower == 'y') {
    console.log(userLower);
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
  var userCharSpec = window.prompt("Would you like any 'special' characters to be used?\n\n(requires y or n response)");
  
  if (!userCharSpec) {
    console.log(userCharSpec);
    return;
  } else if (userCharSpec == 'Y' || userCharSpec == 'y') {
    console.log(userCharSpec);
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

// var userCharacterSelect = function () {
// }
// userCharacterSelect();









// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// var userLength = window.prompt("How many characters for your password?\n(It must be between 8 and 128 characters)");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//     generatePassword(charLength) {
//         var result           = '';
//         var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         var charLength = characters.length;
//         for ( var i = 0; i < length; i++ ) {
//           result += characters.charAt(Math.floor(Math.random() * 
//       charactersLength));
//       }
//       return result;
//     }

//   passwordText.value = password;

// }

// // Add event listener to generate button
// // charLength();
// generateBtn.addEventListener("click", writePassword);


// // function makeid(length) {
// //   var result           = '';
// //   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// //   var charactersLength = characters.length;
// //   for ( var i = 0; i < length; i++ ) {
// //     result += characters.charAt(Math.floor(Math.random() * 
// // charactersLength));
// //  }
// //  return result;
// // }

// // console.log(makeid(5));