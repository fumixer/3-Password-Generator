const passwordListElement = document.getElementById('password');
// var pw = "khjfbkj"

// passwordListElement.value = pw;


// Start the process after the clik of "Generate Password". Deactivate the reloaing page because no data is created here.
document.getElementById("generate").addEventListener("click", event => {
  event.preventDefault();

  //Ask how many caracters they want
  var length = window.prompt("How many characters would  you like your password to contain?")
  // If the answer was smaller than 8, confirm the text //

  if (length < 8 || length > 128) {
    window.alert("Password length must be at least 8 character and less than 129 characters");
    return;
  }
  //confirm the numerica characters
  var numericNumbers = window.confirm("Click OK to confirm including numeric characters")
  // Ask including special characters
  var specialChar = window.confirm('Click OK to confirm including special characters.');
  //confirm the Uppercase characters
  var uppercase = window.confirm("Click OK to confirm including uppercase characters")
  //confrim lowercase characters
  var lowercase = window.confirm("Click OK to confirm including lowercase characters.")

  if (numericNumbers === false && specialChar === false && uppercase === false && lowercase === false) {
    window.alert("You must choose at least 1 character type")
    return;
  }

  //Stop duplicated/multiple expression of password
  passwordListElement.innerHTML = '';

  var userChoices = {
    length: length,
    numericNumbers: numericNumbers,
    uppercase: uppercase,
    lowercase: lowercase,
    specialChar: specialChar,
  }

  generatePassword(userChoices);

})

function generatePassword(userChoices) {

  console.log('Testing choiuces: ', userChoices)

  //Password creation logic
  // making lists of texts and number
  const passwordTexts = [];

  // making lists of small alphabets
  if (userChoices.lowercase === true) {
    for (let i = 0; i < 26; i++) {
      passwordTexts.push((String.fromCharCode(('a'.charCodeAt(0)) + i)))
    }
  }
  //making lists of Uppercase
  if (userChoices.uppercase === true) {
    for (let i = 0; i < 26; i++) {
      passwordTexts.push((String.fromCharCode(('A'.charCodeAt(0)) + i)))
    }
  }
  // making lists of numbers
  if (userChoices.numericNumbers === true) {
    for (let i = 0; i < 10; i++) {
      passwordTexts.push(i)
    }
  }
  //making lists of special caracters
  if (userChoices.specialChar === true) {
    for (let i = 0; i < 20; i++) {
      passwordTexts.push((String.fromCharCode(('!'.charCodeAt(0)) + i)))
    }
  }
  console.log(passwordTexts)

  const passwordLength = userChoices.length;
  const generateNumberOfTimes = 1;


  //Generate random number
  let passwords = '';
  for (let i = 0; i < passwordLength; i++) {
    passwords += passwordTexts[Math.floor(Math.random() * passwordTexts.length)];
  }
  console.log(passwords)

  passwordListElement.value = passwords;

}

////////////////////////////////////////

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);