// Assignment code here
// const options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+~|}{[]></=";
// const lenght = 8;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword(Math.floor(Math.random() * options.length));
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

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
