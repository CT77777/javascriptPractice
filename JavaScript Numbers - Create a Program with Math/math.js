const secsPerMinute = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secsPerDay = secsPerMinute * minsPerHour * hoursPerDay;
document.querySelector(
  "main"
).innerHTML = `<h1>There are ${secsPerDay} seconds in a day.</h1>`;

const daysPerYear = daysPerWeek * weeksPerYear;
let infor2 = document.createElement("h2");
infor2.textContent = `There are ${daysPerYear} days in a year.`;
document.querySelector("main").appendChild(infor2);
