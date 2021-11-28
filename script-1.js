var lowercase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var uppercase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
 var numbers = [
   '1',
   '2',
   '3',
   '4',
   '5',
   '6',
   '7',
   '8',
   '9',
   '0'
];
var specialChars = [
  '`',
  '-',
  '=',
  '[',
  ']',
  ';',
  ',',
  '.',
  '/',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '+'
];
var newPassword;
var finalArray;

function getPasswordOptions() {
  var pwdLength=parseInt(prompt("How many characters would you like your password to contain"));
  console.log(pwdLength);
  if (pwdLength < 8 || pwdLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  } 
  var hasSpecialChars=confirm("Would you like special characters?");
  console.log(hasSpecialChars);
  var hasUppercaseLetters=confirm("Would you like uppercase letters in your password?");
  var hasLowercaseLetters=confirm("Would you like lowercase letters in your password?");
  var hasNumbers=confirm("Would you like numbers in your password?");
  
   
  if (hasSpecialChars === true) {
    var passwordArrayOne = specialChars;
  } 
  if (hasNumbers === true) {
    var passwordArrayTwo = numbers;
  }
  if (hasLowercaseLetters === true) {
    var passwordArrayThree = lowercase;
  }
  if (hasUppercaseLetters === true) {
    var passwordArrayFour = uppercase;
  }
  var finalArray = [passwordArrayOne, passwordArrayTwo, passwordArrayThree, passwordArrayFour];
  console.log(finalArray);
  
  for (var i = 0; i < pwdLength; i++) {
    var newPassword = finalArray[Math.floor(Math.random() * finalArray.length)];
    
  }

    
  }
    
    
  

    //var pwdOptionsObject = {
    //passwordLength: pwdLength,
    //specialChars: hasSpecialChars,


  
 //return pwdOptionsObject;
//};
// Assignment Code
function generatePassword() {
  var options= getPasswordOptions()
  console.log(options);
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);