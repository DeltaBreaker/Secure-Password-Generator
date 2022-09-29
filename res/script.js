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

  return "";
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
