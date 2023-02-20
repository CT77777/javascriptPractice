// 1. Declare variables and capture input.
const nftProject = prompt("Input NFT project");
console.log(nftProject);

const price = prompt("Input price");
console.log(price);

const year = prompt("Input year");
console.log(year);

// 2. Combine the input with other words to create a story.
const forecast = `<p>The ${nftProject} will be to ${price} ETH in ${year} !!!</p>`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector("main").innerHTML = forecast;
