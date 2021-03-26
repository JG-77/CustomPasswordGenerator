// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables for character type 
var addNumberOpt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//double quote, single quote, backslash, and grave accent unable to be used in special character string
var addSpecialOpt = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"]; 
var addUpperOpt = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var addLowerOpt = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
}

function generatePassword(){
    
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