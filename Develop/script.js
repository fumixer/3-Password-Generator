


const passwordListElement = document.getElementById('generate')

//Start the process after the clik of "Generate Password". Deactivate the reloaing page because no data is created here.

document.getElementById("generate").addEventListener("click", event => {
  event.preventDefault();

//confirm the numerica characters
var generateBtn = window.confirm("Click OK to confirm including numeric characters")
// If the answer was smaller than 8, confirm the text //
 var generateBtn = window.alert("Password length must be at least 8 characters")
// Ask including special characters
  var generateBtn = window.confirm('Click OK to confirm including special characters.');
//Ask how many caracters they want
  var passwordLength = window.prompt("How many characters would  you like your password to contain?")
//confirm the numerica characters
  var generateBtn = window.confirm("Click OK to confirm including numeric characters")
//confrim lowercase characters
  var generateBtn = window.confirm("Click OK to confirm including lowercase characters.")

  //Stop duplicated/multiple expression of password
    passwordListElement.innerHTML = '';

  // Sending the result to HTML
const li = document.createElement('li'),
    input = document.createElement('input');
    input.value = passwords;
    li. appendChild(input);
    passwordListElement.appendChild(li);
  })


//Password creation logic
  // making lists of texts and number
const passwordTexts = [];
  // making lists of small alphabets
for (let i = 0; i < 26; i++) {
  passwordTexts.push((String.fromCharCode(('a'.charCodeAt(0)) + i)))
}
  //making lists of capital aphabets
for (let i = 0; i < 26; i++) {
  passwordTexts.push((String.fromCharCode(('A'.charCodeAt(0)) + i)))
}
  // making lists of numbers
for (let i = 0; i < 10; i++) {
  passwordTexts.push(i)
  //making lists of special caracters
  //for (let i = "!\"#$%&'()-=^~\\|@`[{;+:*]},<.>/?\_" ,) {
  //passwordTexts.push(i)
}
console.log(passwordTexts)

 //conditions
//const passwordListElement = document.getElementById('generate'),
      const passwordLength = 8;
      const generateNumberOfTimes = 1;

// // //Pasword length
// let passwordLength =(value);

  //Generate random number
let passwords = '';
for (let i = 0; i < passwordLength; i++) {
  passwords += passwordTexts[Math.floor(Math.random() * passwordTexts.length)];
}
console.log(passwords)
document.getElementById


///////////////////////////////////////
// generateBtn.addEventListener("click", writePassword);

// function writePassword(){
//   window.confirm("Click OK to confirm including special characters.");
// }

// Generating password//

//if yes, 
//else

//hold the number

///////////////////////////////////////


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);