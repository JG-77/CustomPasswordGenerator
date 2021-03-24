// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pwLength = window.prompt("How many characters do you generated password to be?(Must be between 8 and 128 characters)");
  var addNumber = window.confirm("Would you like password to generate numbers?");
  var addSpecial = window.confirm("Would you like password to generate special characters?");
  var addUpper = window.confirm("Would you like password to generate uppercase letters?");
  var addLower = window.confirm("Would you like password to generate lowercase letters?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  if (!pwLength) {
      return;
  }
  if (!addNumber) {
    return;
}
  if (!addSpecial) {
    return;
}
if (!addUpper) {
    return;
}
if (!addLower) {
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