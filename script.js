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


    describe('Password Generator', () => {
      it('should generate a password of specified length', () => {
        const length = 10;
        const password = generatePassword(length);
        assert.equal(password.length, length);
      });
    
      it('should generate a secure password', () => {
        const password = generatePassword(8);
        assert.match(password, /[a-z]/); // has a lowercase letter
        assert.match(password, /[A-Z]/); // has an uppercase letter
        assert.match(password, /\d/); // has a number
        assert.match(password, /\W|_/); // has a special character
      });
    });