/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
const correctAnswer1 = "pizza";
const correctAnswer2 = 2015;
const correctAnswer3 = "POS";
const correctAnswer4 = "yes";
const correctAnswer5 = "no";

let correctAnswerCount = 0;

// 2. Store the rank of a player
let rankOfPlayer = "";

// 3. Select the <main> HTML element

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
// What is the first real thing traded by Bitcoin?
const answer1 = prompt("What is the first real thing traded by Bitcoin?");
if (answer1.toLowerCase() === correctAnswer1) {
  correctAnswerCount += 1;
}
// Which year did Ethereum launch?
const answer2 = prompt("Which year did Ethereum launch?");
if (+answer2 === correctAnswer2) {
  correctAnswerCount += 1;
}
// Which consensus mechanism is implemented on Ethereum?
const answer3 = prompt("Which consensus mechanism is implemented on Ethereum?");
if (answer3.toUpperCase() === correctAnswer3) {
  correctAnswerCount += 1;
}
// Do current transactions in Ethereum follow EIP-1559 rule? (Yes or No)
const answer4 = prompt(
  "Do current transactions in Ethereum follow EIP-1559 rule? (Yes or No)"
);
if (answer4.toLowerCase() === correctAnswer4) {
  correctAnswerCount += 1;
}
// Dose Compound is a DEX?
const answer5 = prompt("Dose Compound is a DEX? (Yes or No)");
if (answer5.toLowerCase() === correctAnswer5) {
  correctAnswerCount += 1;
}
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (correctAnswerCount === 5) {
  rankOfPlayer = "Gold";
} else if (correctAnswerCount === 4 || correctAnswerCount === 3) {
  rankOfPlayer = "Silver";
} else if (correctAnswerCount === 2 || correctAnswerCount === 1) {
  rankOfPlayer = "Bronze";
} else {
  rankOfPlayer = "No crown";
}

// 6. Output results to the <main> element
document.querySelector(
  "main"
).innerHTML = `<h1>${correctAnswerCount} of 5 answers are correct.
You are ranked ${rankOfPlayer} !</h1>`;
