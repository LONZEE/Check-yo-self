// Assignment code here
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const special = "@#$%^&*()_+~|}{[]></=";

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
  var numberLetter = confirm("Thought about your favorite number?");
  var specialLetter = confirm("How about special characters?");
  if (!capitalLetter && !lowerLetter && !numberLetter && !specialLetter) {
    alert("CHECK YO SELF AGAIN!");
    return "Please Try Again!";
  }
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
  var password = "";

  for (var i = 0;i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * options.length);
    password += options.charAt(randomIndex);
  }
  console.log(password);
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);



