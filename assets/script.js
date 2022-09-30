// Assignment Code
var generateBtn = document.querySelector("#generate");

//OUR GLOBAL VARIABLES define the available values for our password
var length = 0;
var assignChar = ""
var numbers = [123456789].split
var symbols = ['!', '@', '#', '$', '%', '&', '_', '^', '?']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var y = true;
// Write password to the #password input
function writePassword() {
  chosenValues();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//where is button?
generateBtn.addEventListener("click", writePassword);
//We need to find out how many characters our user would like (between 8 and 128), and make sure the value...
// is within our given parameterss with 'else if' statements

function chosenValues() {
  {
    var length = 0;
    var length  = prompt("How many characters long would you like your Password? Pick a value between 8, and 128.");
    if ( < 8) {
      alert("Value must be greater than 8.")
      return chosenValues;
    } else if ( > 128); {
      alert("Value must be less than 128.")
      return chosenValues;
    } if (length >= 8 && <= 128);
  }

  // The confirm method returns a boolean 

  var numbersChoice = confirm("Would you like to use numbers?\n Choose y for yes, or n for no.");
  var symbolsChoice = confirm("Would you like to use symbols?\n Choose y for yes, or n for no.");
  var lowercaseChoice = confirm("Would you like to use lowercase letters?\n Choose y for yes, or n for no.");
  var uppercaseChoice = confirm("Would you like to use uppercase letters?\n Choose y for yes, or n for no.");
  //What if they say no to everything?

  if (!numbersChoice && !symbolsChoice && !lowercaseChoice && !uppercaseChoice) {
    alert("Please select yes at least once.")
    return chosenValues;
  }

  //Need to tell the computer to disregard all 'falsey' statements from our math.random calculation

  if ((numbersChoice !== y) && (symbolsChoice !== y) && (lowercaseChoice !== y) && (uppercaseChoice !== y));

  // now we must combine answers for math.random. 
  // Use concat to combine arrays into a new array, we will call the new array chosenValues

  if (numbersChoice == y) {
    numbers = assignChar.concat(numbers);
  }
  if (symbolsChoice == y) {
    symbols = assignChar.concat(symbols);
  }
  if (lowercaseChoice == y) {
    lowercase = assignChar.concat(lowercase);
  }
  if (uppercaseChoice == y) {
    uppercase = assignChar.concat(uppercase);
  }
}
function generatePassword () {
  var password = "";
  for ( var i = 0; i < ; i++)
    password = assignChar.concat(Math.floor(Math.random() * assignChar.length));
}
return password;

//based on responsess create pool of values
//build password value by value
//generate random int within range of available character length
//add value to result
//computer continues to randomize value until password length input is met
//return result to user

// Add event listener to generate button


