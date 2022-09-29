// These hold the character sets for each option
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numericCharacters = "0123456789";
var specialCharacters = "\"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // This holds the complete list of valid characters
  var validCharacters = "";

  // These give the user a prompt for each character type and then add them to the list of valid characters if allowed //
  if(confirm("Do you want to include uppercase characters?")) {
    validCharacters += uppercaseCharacters;
  }
  if(confirm("Do you want to include lowercase characters?")) {
    validCharacters += lowercaseCharacters;
  }
  if(confirm("Do you want to include numeric characters?")) {
    validCharacters += numericCharacters;
  }
  if(confirm("Do you want to include special characters?")) {
    validCharacters += specialCharacters;
  }
  // ----------------------------------------------------------------------------------------------------------------- //

  // This will only generate a password if there is at least one character type allowed
  // If there is none, it will alert the user instead
  if(validCharacters.length > 0) {

    // This prompts the user for a password length and will loop until a valid value is entered
    var passwordLength = prompt("Choose a length between 8-128 (inclusive).");
    while(passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Choose a length between 8-128 (inclusive).");
    }
    var output = "";

    // This picks a random character from the complete list and adds it to the output for the given length
    for(var i = 0; i < passwordLength; i++) {
      output += validCharacters.charAt(Math.random() * validCharacters.length);
    }

    return output;
  } else {
    alert("Choose at least one character type option.");
  }

  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
