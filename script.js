// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate a random password
function generatePassword() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");

  // Validate the length input
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length! Please enter a number between 8 and 128.");
    return "";
  }

  var lowercase = confirm("Include lowercase letters?");
  var uppercase = confirm("Include uppercase letters?");
  var numbers = confirm("Include numbers?");
  var specialChars = confirm("Include special characters?");

  // Define character sets
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialCharChars = "!@#$%^&*()_-+=~`[]{}|:;<>?,.";

  var charSet = "";
  var password = "";

  // Build character set based on user preferences
  if (lowercase) {
    charSet += lowercaseChars;
  }
  if (uppercase) {
    charSet += uppercaseChars;
  }
  if (numbers) {
    charSet += numberChars;
  }
  if (specialChars) {
    charSet += specialCharChars;
  }

  // Generate the password
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
