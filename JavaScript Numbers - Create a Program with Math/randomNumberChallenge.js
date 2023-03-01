// Collect input from a user
const input = prompt("Please input a integer number.");
console.log(typeof input);

// Convert the input to a number
const inputNumber = parseInt(input);
console.log(typeof inputNumber);

if (inputNumber) {
  // Use Math.random() and the user's number to generate a random number
  const randomNumber = Math.floor(Math.random() * inputNumber) + 1;

  // Create a message displaying the random number
  document.querySelector(
    "main"
  ).innerHTML = `<h1>Random number is ${randomNumber} from 1 to ${inputNumber}</h1>`;
} else {
  document.querySelector(
    "main"
  ).innerHTML = `<h1>Your input is not a number. Please try again !</h1>`;
}
