// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  "."
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );
  
  //Complete your function here...
  
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert('password length must be provided as a number');
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('password must be atleast 8 characters long');
    return;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 129) {
    alert('password must be less that 129 characters');
    return;
  }
  // Variable to store boolean regarding the inclusion of special, numeric , lowercase, uppercase characters
  var hasSpecialCharacters = confirm(
    'Click OK to include special charatcers in your password.'
  );

  var hasNumericCharacters = confirm(
    'Click OK to include numeric numbers in your password'
  );

  var hasLowerCasedCharacters = confirm(
    'Click OK to include lowercased characters in your password'
  );

  var hasUpperCasedCharacters = confirm(
    'Click OK to include uppercased characters in your password'
  );
  
  
  // Conditional statement to check if user does not include any types of characters.
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasUpperCasedCharacters === false &&
    hasLowerCasedCharacters === false 
  
  ){
    alert('must select atleast one type of character');
    return;
  }

  var passwordOptions = {
    length: length,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
  };


  //Password generator should ends if all four variables evaluate to false

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}
//Complete your function here...

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(possibleCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(possibleCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(possibleCharacters));
  }

  
  for (var i = 0; i < options.length; i++) {
    var possibleCharacters = getRandom(possibleCharacters);

    result.push(possibleCharacters);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
    return result.join('');
   }
    
  {


  //Complete your function here...
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
