// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables for character type 
var addNumber
var addSpecial 
var addUpper 
var addLower 

// Write password to the #password input
function generatePassword(addNumber,addSpecial,addUpper,addLower){
    
}
    

function writePassword() {
  var pwLength = window.prompt("How many characters do you generated password to be?(Must be between 8 and 128 characters)");
  if (!pwLength) {
      return;
  } else if (pwLength < 8 || pwLength > 128){
      pwLength = window.alert("Password must be between 8 and 128 characters");
      return;
  }

  var addNumber = window.confirm("Would you like password to generate numbers?");
  var addSpecial = window.confirm("Would you like password to generate special characters?");
  var addUpper = window.confirm("Would you like password to generate uppercase letters?");
  var addLower = window.confirm("Would you like password to generate lowercase letters?");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

//If user clicks 'cancel,' selection is not added
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




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);