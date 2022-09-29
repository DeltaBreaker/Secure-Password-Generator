var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numericCharacters = "0123456789";
var specialCharacters = "\"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var validCharacters = "";

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

  if(validCharacters.length > 0) {
    var passwordLength = prompt("Choose a length between 8-128 (inclusive).");
    while(passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Choose a length between 8-128 (inclusive).");
    }
    var output = "";

    for(var i = 0; i < passwordLength; i++) {
      output += validCharacters.charAt(Math.random() * validCharacters.length);
    }

    return output;
  } else {
    alert("Choose at least one character type option.");
  }

  return "";
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
