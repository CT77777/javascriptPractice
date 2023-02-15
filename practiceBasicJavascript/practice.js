// 1. Attach this file -- practice.js -- to the index.html file using a <script> tag

// 2. In this JavaScript file, add a prompt dialog to capture input from the user and store it in a variable
const firstName = prompt("Please enter your first name.");
// 3. Add a second a prompt dialog to capture input from the user and store it in a second variable
const lastName = prompt("Please enter your last name.");

// 4. Create a third variable and which combines an uppercase version values in the two other variables separated by a space. For example, if the first two variables contain "sally" and "forth", this third variable should contain the string value "SALLY FORTH"
const combineName = firstName + " " + lastName;
console.log(combineName);
// 5. Create a fourth variable to store a number. The number should be the total number of characters in the third variable.
let number = combineName.length;
// 6. Add an alert dialog box that says "The string '[insert value of third variable here]' is X number of characters long." For example, if the third variable contained the string "SALLY FORTH" then the alert dialog should says "The string 'SALLY FORTH' is 11 characters long."
alert(`The string "${combine}" is ${number} number of characters long.`);
