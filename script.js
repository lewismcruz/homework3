// Assignment Code 

// used console.log to check for execution of code after each line of code.
// would remove these lines in tested and functional code.


var generateBtn = document.querySelector("#generate");
// To test output
console.log("Hello. Your JS worked up to here.")

// Input code to ask the user questions to generate their password.
// Ask user how many characters they would like their password to have and confirm their input.
var passwordLengthValue = prompt("How many characters would you like your password to have? Choose a number between 8 and 128");
var userSelectedpassLength = confirm("You entered " + passwordLengthValue);
// To test output
console.log("Hello. Your JS worked up to here.")

// Ask user if they would like to use lower case letters.
var useLowerChar = (prompt("Do you want to use lower case letters?")).toLowerCase();
var LowerCharConf = confirm("You said " + useLowerChar);
// To test output
console.log("Hello. Your JS worked up to here.")

// Ask user if they would like to use upper case letters.
var useUpperChar = (prompt("Do you want to use upper case letters?")).toLowerCase();
var UpperCharConf = confirm("You said " + useUpperChar);
// To test output
console.log("Hello. Your JS worked up to here.")

// Ask user if they would like to use numeric characters.
var useNumeric = (prompt("Do you want to use any numeric characters?")).toLowerCase();
var numericConf = confirm("You selected " + useNumeric);
// To test output
console.log("Hello. Your JS worked up to here.")


// Ask user if they would like to use special characters.
var useSpecialChar = (prompt("Do you want to use special characters? Yes or No.")).toLowerCase();
var specialCharConf = confirm("You entered " + useSpecialChar);
// To test output
console.log("Hello. Your JS worked up to here.")


ge and start again.");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add if else logic statements to select decisions selected by user for their password

// ******************************************

// Arrays to be used in if / else comparision of code

// Array to hold special characters
var arrCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Array to hold alphabetical characters
// Can use Upper Case conversion to select a letter from this array and convert to upper case if user selects upper case letters.
var arrAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Do not need array for all numbers between 8 to 128. Will use Math.Random() and Math.Floor()
// to select random numbers from between 8 and 128.

// ******************************************

// Options are:

// if LowerCharConf is yes or no ===> true or false

// if UpperCharConf is yes or no ===> true or false

// if numericConf is yes or no ===> true or false

// if specialCharConf is yes or no ===> true or false

// Combinations to code out

// LowerCharConf = true
// UpperCharConf = true
// numericConf = true
// specialCharConf = true
// Output var all ChoicesTrue = function writePassword();
// function writePassword() will have to randomly select values from:
// var arrCharacter, var arrAlpha lower case letters and also convert arrAlpha to upper case
// while Math.Random() and Math.Floor() randomly select numbers from 8 to 128



// LowerCharConf = true
// UpperCharConf = false
// numericConf = true
// specialCharConf = false
// Generate password with no upper case letters and no special characters

// LowerCharConf = false
// UpperCharConf = true
// numericConf = false
// specialCharConf = true
// Generate password with no lower case letters and no numbers

// LowerCharConf = false
// UpperCharConf = false
// numericConf = false
// specialCharConf = true
// Output error message - make user select at least one other character type and refresh browser/start again.

// LowerCharConf = true
// UpperCharConf = true
// numericConf = false
// specialCharConf = false
// Generate password with lower and upper case letters only

// LowerCharConf = true
// UpperCharConf = true
// numericConf = true
// specialCharConf = false
// Generate password with lower and upper case letters, and numbers only

// LowerCharConf = false
// UpperCharConf = true
// numericConf = true
// specialCharConf = true

// LowerCharConf = false
// UpperCharConf = false
// numericConf = false
// specialCharConf = false
// Output var allChoicesFalse = prompt("Wrong. You must select options to generate password.  Please refresh pa

// Random number generator
for (var i = 8; i <= 128; i++) {
    // Generate a random whole number between 8 and 128
    var number = Math.floor(Math.random() * 128) + 8;
  
    // Display in console
    console.log(number);
  }
  
  // Loop through random letters selection through array  
  // This array was for testing random loop number generator for loop
  // Will actually try to use arrAlphaLetter and arrCharacter and specialChar arrays
  // in final code
  // var lettersArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  // Need to see how to iterate through arrays arrCharacter and arrAlphaLetter
  
  console.log(arrAlphaLetter[Math.floor(Math.random() * arrAlphaLetter.length)])

  // Then store what is output into password variable to output to browser.

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener that runs on clicking the copy to clipboard button.

// To copy password to clipboard

var clipboardCopy = document.querySelector("#clipboardCopy");
clipboardCopy.addEventListener("click", function () {
    copyPassword();
});
// This copies the password value
function copyPassword() {
  document.getElementById("password").select
//  document.execCommand("clipboardCopy");