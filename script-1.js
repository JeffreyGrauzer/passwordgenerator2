// all the various letters, numbers and characters that can possibly comprise a password
var lowercaseArr = [
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
  "z",
];

var uppercaseArr = [
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
  "Z",
];
var numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharsArr = [
  "`",
  "-",
  "=",
  "[",
  "]",
  ";",
  ",",
  ".",
  "/",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
];
// Ask user how many and what type of letter or character will constitute their password
function getPasswordOptions() {
  var pwdLength = parseInt(
    prompt("How many characters would you like your password to contain")
  );
  if (pwdLength < 8 || pwdLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }
  var hasSpecialChars = confirm("Would you like special characters?");
  var hasUppercaseLetters = confirm(
    "Would you like uppercase letters in your password?"
  );
  var hasLowercaseLetters = confirm(
    "Would you like lowercase letters in your password?"
  );
  var hasNumbers = confirm("Would you like numbers in your password?");
  // series of conditionals to assign chosen letters or characters to an array
  if (
    hasSpecialChars === false &&
    hasLowercaseLetters === false &&
    hasUppercaseLetters === false &&
    hasNumbers === false
  ) {
    alert("You must select at least one option");
    return;
  }
  var optionsObj = {
    length: pwdLength,
    specialChars: hasSpecialChars,
    numbers: hasNumbers,
    uppercase: hasUppercaseLetters,
    lowercase: hasLowercaseLetters,
  };
  return optionsObj;
}
function getRandomChar(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}
// Assignment Code
function generatePassword() {
  var options = getPasswordOptions();

  var result = [];
  var possibleChars = [];
  var guaranteedChars = [];

  if (options.specialChars) {
    possibleChars = possibleChars.concat(specialCharsArr);
    guaranteedChars.push(getRandomChar(specialCharsArr));
  }
  if (options.uppercase) {
    possibleChars = possibleChars.concat(uppercaseArr);
    guaranteedChars.push(getRandomChar(uppercaseArr));
  }
  if (options.lowercase) {
    possibleChars = possibleChars.concat(lowercaseArr);
    guaranteedChars.push(getRandomChar(lowercaseArr));
  }
  if (options.numbers) {
    possibleChars = possibleChars.concat(numbersArr);
    guaranteedChars.push(getRandomChar(numbersArr));
  }
  for (var i = 0; i < options.length; i++) {
    var possibleChar = getRandomChar(possibleChars);
    result.push(possibleChar);
    console.log(possibleChar);
  }
  for (var i = 0; i < guaranteedChars.length; i++) {
    result[i] = guaranteedChars[i];
  }
  return result.join("");
}
//guaranteedChars=result
//method called join which will combine arrays like result.join

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
