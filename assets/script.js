// Assignment Code
var generateBtn = document.querySelector("#generate");

//OUR GLOBAL VARIABLES define the available values for our password
var length;
var assignChar = [];
var numbers = "123456789".split("")
var symbols = ['!', '@', '#', '$', '%', '&', '_', '^', '?']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var y = true;
console.log(numbers)
// Write password to the #password input

//where is button?
//We need to find out how many characters our user would like (between 8 and 128), and make sure the value...
// is within our given parameterss with 'else if' statements

function chosenValues() {

  length = parseInt(prompt("How many characters long would you like your Password? Pick a value between 8, and 128."));
  console.log(length, typeof (length))
  if (length < 8 || length > 128) {
    alert("Value must be greater than 8.")
    chosenValues();
  } else {


    // The confirm method returns a boolean 

    var numbersChoice = confirm("Would you like to use numbers?");
    var symbolsChoice = confirm("Would you like to use symbols?");
    var lowercaseChoice = confirm("Would you like to use lowercase letters?");
    var uppercaseChoice = confirm("Would you like to use uppercase letters?");
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
      assignChar = assignChar.concat(numbers);

    }
    if (symbolsChoice == y) {
      assignChar = assignChar.concat(symbols);

    }
    if (lowercaseChoice == y) {
      assignChar = assignChar.concat(lowercase);
      if (uppercaseChoice == y) {
        assignChar = assignChar.concat(uppercase);

      }
      console.log(assignChar)
    }
  }
}

function generatePassword() {
  var password = "";
  chosenValues();
  for (var i = 0; i < length; i++) {
    console.log(assignChar)
    //return random index from assginChar arr
    var passwordCharIndex = Math.floor(Math.random() * assignChar.length);
    //return random character from assginChar arr
    var passwordChar = assignChar[passwordCharIndex];
    password += passwordChar
  console.log(passwordCharIndex, passwordChar, password)
  }
  return password;
}
//based on responsess create pool of values
//build password value by value
//generate random int within range of available character length
//add value to result
//computer continues to randomize value until password length input is met
//return result to user

// Add event listener to generate button

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

