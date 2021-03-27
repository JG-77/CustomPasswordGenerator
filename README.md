# CustomPasswordGenerator
Github Repository:https://github.com/JG-77/CustomPasswordGenerator.git 
Github Pages live app:https://jg-77.github.io/CustomPasswordGenerator/
![Password Generator Screenshot](https://user-images.githubusercontent.com/76461629/112707375-15e4ef00-8e68-11eb-8511-8c51cfcf53c7.png)

## Description
The Javascript file for this application includes two main functions, several variables, and a loop for generating the password. The main function 'writePassword,' is the code that displays the generated password in the 'textarea' element of the html file. The password itself is generated in the 'generatePassword' function, and this function contains all the window prompts and character type selction choices. An array loop is also included to generate a random password based on the user's input, and the character types are contained in arrays in dinstinguished variables. 'If' statements have been included as well in the 'generatePassword' function to describe the coding logic based on user selection choices for their custom password.

### Notes
A bug was found where booleans would appear in generated passwords when all character types were selected for password. The screenshot below shows the bug displayed where 'True' would appear in the password. Thanks to multiple tutoringsessions help from BCS support, the issue was resolved. An 'if else' statement containing all array variables concatting into one variable was removed to resolve the issue (lines 56-58). 
![Bug issue Screenshot](https://user-images.githubusercontent.com/76461629/112708505-8e02e300-8e6f-11eb-9476-06008dae25bc.png)
