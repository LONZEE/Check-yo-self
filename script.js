// Assignment code here
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const special = "@#$%^&*()_+~|}{[]></=";
// const lenght = 8;
// Math.floor(Math.random() * options.length)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  let options = ""; // options the user wants
  var passwordLength = prompt(" Desired password length?");
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password must be between 8 and 128 characters");
    return "Please Try Again!"; // means to start over
  }
  var capitalLetter = confirm("Do you want to use capital letters?");
  var lowerLetter = confirm("What about lower case letters?");
  var numberLetter = confirm("thought about your favorite number?");
  var specialLetter = confirm("How about special characters?");
  if (capitalLetter) {
    options += capital; // adding in capital letters
  }
  if (lowerLetter) {
    options += lower; // adding in lower case letters
  }
  if (numberLetter) {
    options += number; // adding in numbers
  }
  if (specialLetter) {
    options += special; // adding in special characters
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);

/*
document.addEventListener('DOMContentLoaded', function () {
  const generatePasswordButton = document.querySelector('#generate-password');
  const passwordLengthInput = document.querySelector('#password-length');
  const passwordDisplay = document.querySelector('#password-display');

  generatePasswordButton.addEventListener('click', function () {
    const passwordLength = passwordLengthInput.value;
    const password = generatePassword(passwordLength);
    passwordDisplay.textContent = `Generated Password: ${password}`;
  });

  function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    return password;*/

