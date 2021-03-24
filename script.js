// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pwLength = window.prompt("How many characters do you generated password to be?(Must be between 8 and 128 characters)");
  var password = generatePassword(addNumber,addSpecial,addUpper,addLower);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  if (!pwLength) {
      return;
  }
}


//booleans for future confirm() messages
var addNumber = true
var addSpecial = true
var addUpper = true
var addLower = true

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);