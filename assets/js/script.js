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

// user input variables
var getPasswordLength = function() { 
  var passwordLength = prompt("How many characters would you like your password to be?");
  passwordLength = parseInt(passwordLength);
  while (!(passwordLength >= 8 && passwordLength <= 128)) {
    window.alert("Please enter a number between 8 and 128.");
    passwordLength = prompt("How many characters would you like your password to be?");
    passwordLength = parseInt(passwordLength);
  }
  return passwordLength;
};

var userInput = {
  length: getPasswordLength(),
  upperCaseConfirm: window.confirm("Would you like to use upper case letters in your password?"),
  lowerCaseConfirm: window.confirm("Would you like to use lower case letters in your password?"),
  numberConfirm: window.confirm("Would you like to use numbers in your password?"),
  specialCharConfirm: window.confirm("Would you like to use special characters in your password?")
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
