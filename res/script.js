var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numericCharacters = "0123456789";
var specialCharacters = "\"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
