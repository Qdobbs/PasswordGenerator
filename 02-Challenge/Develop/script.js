// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables for characters 
var numbers = "1234567890"
var specialCharacters = "!@#%&*+[]=>"
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"




function generatePassword() {
  var passwordOptions = ""
var finalResult = ""
// Character Length //
  let passwordLength = prompt ("how long do you want your password");
  console.log(passwordLength)
  // if less than 8 or more than 128 creates prompt to repick character length //
  if(passwordLength < 8 || 128< passwordLength) {

    alert("Choose between 8 and 128 chracters. Enter selection again")
    return 
  }

  // types of characters to be used //

  var lowercase = confirm ("Click OK if you want lowercase , if you dont click CANCEL.")
  var uppercase = confirm ("Click OK if you want UPPPERCASE , if you dont click CANCEL.")
  var nums= confirm ("Click OK if you want numbers , if you dont click CANCEL.")
  var special = confirm ("Click OK if you want special characters , if you dont click CANCEL.")
  console.log(lowercase,uppercase,nums,special)
  // has to choose at atleast one type of character //
  if (!lowercase && !uppercase && !nums && !special) {
      alert("pick at least one type of character for password")

  }
  // adds selected characters into a pool for generated password//
  if (lowercase) {

      passwordOptions += lowercaseLetters

  }

  if (uppercase) {

    passwordOptions += uppercaseLetters

  }

  if (nums) {

    passwordOptions += numbers

  }

  if (special) {

    passwordOptions += specialCharacters

  }

   // makes it so the characters are random //
  for(var i = 0; i < passwordLength; i++) {
    finalResult += (passwordOptions.charAt(Math.floor(Math.random()*passwordOptions.length)))
  }
  console.log(finalResult)

  return finalResult
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

