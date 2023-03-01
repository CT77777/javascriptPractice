// Collect input from a user
const inputLow = prompt("Please input a lowest number.");
const inputHigh = prompt("Please input a highest number.");

// Convert the input to a number
const inputLowNumber = parseInt(inputLow);
const inputHighNumber = parseInt(inputHigh);
const differ = inputHighNumber - inputLowNumber;

if (inputLowNumber >= 0 && inputHighNumber) {
  if (inputHighNumber > inputLowNumber) {
    // Use Math.random() and the user's number to generate a random number
    const randomNumber = Math.ceil(Math.random() * differ) + inputLowNumber;

    // Create a message displaying the random number
    document.querySelector(
      "main"
    ).innerHTML = `<h1>Random number is ${randomNumber} from ${inputLowNumber} to ${inputHighNumber}</h1>`;
  } else {
    document.querySelector(
      "main"
    ).innerHTML = `<h1>Highest number input isn't larger than lowest number input</h1>`;
  }
} else {
  document.querySelector(
    "main"
  ).innerHTML = `<h1>At least one of your input is not a number. Please try again !</h1>`;
}

// 10 20

// floor
// 1 > x >= 0
// * (20-10+1)
// 10 >= x >= 0
// 20 >= x >= 10

// ceil
// * (20-10)
// 10 >= x >= 0
// 20 >= x >= 10
