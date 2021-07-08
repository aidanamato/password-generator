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
      var passwordLength = prompt("How many characters would you like your password to be?");
      passwordLength = parseInt(passwordLength);
    while (!(passwordLength >= 8 && passwordLength <= 128)) {
      window.alert("Please enter a number between 8 and 128.");
      passwordLength = prompt("How many characters would you like your password to be?");
      passwordLength = parseInt(passwordLength);
    }
    return passwordLength;
    };
    // user Input object
    var userInputQuestions = {
      length: getPasswordLength(),
      upperCaseConfirm: window.confirm("Would you like to use upper case letters in your password?"),
      lowerCaseConfirm: window.confirm("Would you like to use lower case letters in your password?"),
      numberConfirm: window.confirm("Would you like to use numbers in your password?"),
      specialCharConfirm: window.confirm("Would you like to use special characters in your password?")
    };
    // function will return userInput
    return userInputQuestions;
  };

  // create password from userInput
  function generatePassword() {

    // hold the answers to user input questions in a variable
    var userInputAnswers = userInputFunction();

    // array to hold characters user wants in password
    var userChars = [];

    if (userInputAnswers.upperCaseConfirm === true) {
      // iterate through upper case array and add indices to userChars
      for (let i = 0; i < characters.upperCase.length; i++) {
        userChars.push(characters.upperCase[i]);
      }
    }

    if (userInputAnswers.lowerCaseConfirm === true) {
      for (let i = 0; i < characters.lowerCase.length; i++) {
        userChars.push(characters.lowerCase[i]);
      }
    }

    if (userInputAnswers.numberConfirm === true) {
      for (let i = 0; i < characters.number.length; i++) {
        userChars.push(characters.number[i]);
      }
    }

    if (userInputAnswers.specialCharConfirm === true) {
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
