// object holding password character arrays
var characters = {
  upperCase: [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ],
  lowerCase: [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ],
  number: [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
  ],
  specialChar: [
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "\\", ":", ";", '"', "'", "<", ",", ">", ".", "?", "/"
  ]
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  // function to take user input
  function userInputFunction() {
    // function to take desired password length
    
    function getPasswordLength() {
      var passwordLengthPrompt = prompt("How many characters would you like your password to be?");
      passwordLengthPrompt = parseInt(passwordLengthPrompt);
      while (!(passwordLengthPrompt >= 8 && passwordLengthPrompt <= 128)) {
        window.alert("Please enter a number between 8 and 128.");
        passwordLengthPrompt = prompt("How many characters would you like your password to be?");
        passwordLengthPrompt = parseInt(passwordLengthPrompt);
      }
    return passwordLengthPrompt;
    }

    function getUpperCase() {
      var upperCasePrompt = prompt('Would you like to use uppercase letters in your password? Enter "yes" or "no".');
      if (upperCasePrompt) {
        upperCasePrompt = upperCasePrompt.toLowerCase();
      }
      while (!(upperCasePrompt === "yes" || upperCasePrompt === "no")) {
        window.alert("Please enter a valid response.");
        upperCasePrompt = prompt('Would you like to use uppercase letters in your password? Enter "yes" or "no".');
        upperCasePrompt = upperCasePrompt.toLowerCase();
      }
    return upperCasePrompt;
    }

    function getLowerCase() {
      var lowerCasePrompt = prompt('Would you like to use lowercase letters in your password? Enter "yes" or "no".');
      if (lowerCasePrompt) {
        lowerCasePrompt = lowerCasePrompt.toLowerCase();
      }
      while (!(lowerCasePrompt === "yes" || lowerCasePrompt === "no")) {
        window.alert("Please enter a valid response.");
        lowerCasePrompt = prompt('Would you like to use lowercase letters in your password? Enter "yes" or "no".');
        lowerCasePrompt = lowerCasePrompt.toLowerCase();
      }
    return lowerCasePrompt;
    }

    function getNumber() {
      var numberPrompt = prompt('Would you like to use numbers in your password? Enter "yes" or "no".');
      if (numberPrompt) {
        numberPrompt = numberPrompt.toLowerCase();
      }
      while (!(numberPrompt === "yes" || numberPrompt === "no")) {
        window.alert("Please enter a valid response.");
        numberPrompt = prompt('Would you like to use numbers in your password? Enter "yes" or "no".');
        numberPrompt = numberPrompt.toLowerCase();
      }
    return numberPrompt;
    }

    function getSpecialChar() {
      var specialCharPrompt = prompt('Would you like to use special characters in your password? Enter "yes" or "no".');
      if (specialCharPrompt) {
        specialCharPrompt = specialCharPrompt.toLowerCase();
      }
      while (!(specialCharPrompt === "yes" || specialCharPrompt === "no")) {
        window.alert("Please enter a valid response.");
        specialCharPrompt = prompt('Would you like to use special characters in your password? Enter "yes" or "no".');
        specialCharPrompt = specialCharPrompt.toLowerCase();
      }
      return specialCharPrompt;
    }
    
    // user Input object
    var userInputQuestions = {
      length: getPasswordLength(),
      upperCaseConfirm: getUpperCase(),
      lowerCaseConfirm: getLowerCase(),
      numberConfirm: getNumber(),
      specialCharConfirm: getSpecialChar()
    }

    // function will return userInput
    return userInputQuestions;
  }

  // create password from userInput
  function generatePassword() {

    // hold the answers to user input questions in a variable
    var userInputAnswers = userInputFunction();

    // array to hold characters user wants in password
    var userChars = [];

    if (userInputAnswers.upperCaseConfirm === "yes") {
      // iterate through upper case array and add indices to userChars
      for (let i = 0; i < characters.upperCase.length; i++) {
        userChars.push(characters.upperCase[i]);
      }
    }

    if (userInputAnswers.lowerCaseConfirm === "yes") {
      for (let i = 0; i < characters.lowerCase.length; i++) {
        userChars.push(characters.lowerCase[i]);
      }
    }

    if (userInputAnswers.numberConfirm === "yes") {
      for (let i = 0; i < characters.number.length; i++) {
        userChars.push(characters.number[i]);
      }
    }

    if (userInputAnswers.specialCharConfirm === "yes") {
      for (let i = 0; i < characters.specialChar.length; i++) {
        userChars.push(characters.specialChar[i]);
      }
    }

    var userPassword = "";
    // randomly select characters from userChars array to be put into the password
    for (let i = 0; i < userInputAnswers.length; i++) {
      userPassword = userPassword + userChars[Math.floor(Math.random() * userChars.length)];
    }
    return userPassword;
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
