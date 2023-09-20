let username = prompt("What is your name?");
alert("Well hello there " + username + " and welcome to my website!");

let guesses = "0";

let ans = prompt("Do I have a degree in Sociology? (yes/no)")
  .toLowerCase()
  .trim();
while (ans !== "yes" && ans !== "no") {
  ans = prompt("It must be yes or no. Do I have a degree in Sociology?")
    .toLowerCase()
    .trim();
}

if (ans === "yes") {
  alert("You are ABSOLUTELY correct!");
} else {
  alert("Nope, nice try though!");
}

let ans2 = prompt("Do I love chicken and chips? (yes/no)").toLowerCase().trim();
while (ans2 !== "yes" && ans2 !== "no") {
  ans2 = prompt("It must be yes or no!").toLowerCase().trim();
}
if (ans2 === "yes") {
  alert("You are indeed correct!");
} else {
  alert("Nope! Good try though.");
}

let ans3 = prompt("Did I visit Bali for my honeymoon? (yes/no)")
  .toLowerCase()
  .trim();
while (ans3 !== "yes" && ans3 !== "no") {
  ans3 = prompt("It must be yes or no!").toLowerCase().trim();
}

if (ans3 === "no") {
  alert("You are ABSOLUTELY correct!");
} else {
  alert("Nope, nice try though!");
}

let ans4 = prompt("Am I a huge fan of World of Warcraft? (yes/no)")
  .toLowerCase()
  .trim();
while (ans4 !== "yes" && ans4 !== "no") {
  ans4 = prompt("It must be yes or no!").toLowerCase().trim();
}

if (ans4 === "yes") {
  alert("You are ABSOLUTELY correct!");
} else {
  alert("Nope, nice try though!");
}

let ans5 = prompt("Marmite? (yes/no)").toLowerCase().trim();
while (ans5 !== "yes" && ans5 !== "no") {
  ans = prompt("It must be yes or no!").toLowerCase().trim();
}

if (ans5 === "no") {
  alert("You are ABSOLUTELY correct!");
} else {
  alert("Nope, nice try though!");
}

let minNumber = 1;
let maxNumber = 10;
let attempts = 4;
let mainNumber = 3;

let guessNumber = prompt("Guess a number between 1-10");
if (guessNumber === "3") {
  alert("Wow you guessed it - well done dude!");
} else {
  alert("Nope you gotta try again!");
}
