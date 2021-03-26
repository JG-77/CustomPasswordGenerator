// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables for character type 
var addNumberOpt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//double quote, single quote, backslash, and grave accent unable to be used in special character string
var addSpecialOpt = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"]; 
var addUpperOpt = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var addLowerOpt = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables for user selctions
var addNumber
var addSpecial
var addUpper
var addLower
var numSelection
var charSelection

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
}

function generatePassword(){
    //logic for password length selections
    numSelection = window.prompt("How many characters do you generated password to be?(Must be between 8 and 128 characters)");
    var pwLength = Number(numSelection)
    if (!numSelection) {
        window.alert("Please enter a value between 8 and 128");
        return;
    } else if (pwLength < 8 || pwLength > 128){
        window.alert("Password must be between 8 and 128 characters");
        return;
    }else (pwLength >= 8 || pwLength <= 128); {
        addNumber = window.confirm("Would you like password to generate numbers?");
        addSpecial = window.confirm("Would you like password to generate special characters?");
        addUpper = window.confirm("Would you like password to generate uppercase letters?");
        addLower = window.confirm("Would you like password to generate lowercase letters?");
    }
    //if statements for character type selections
    //if no character type is selected, user is alerted and must retry
    if (!addNumber && !addSpecial && !addUpper && !addLower) {
        charSelection = window.alert("You must select at least on charater type for random password to generate!");
        return;
    } 
    //if all character types selected
    else if (addNumber && addSpecial && addUpper && addLower) {
        charSelection = addNumber.concat(addSpecial, addUpper, addLower);
    }
    //if 3 types selected
    

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);