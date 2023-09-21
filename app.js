// a function is a block of code in a container - we can use whenever we want.
// a function definition may also be referred to as
// function invoke
let username = prompt("What is your name?");
alert("Well hello there " + username + " and welcome to my website!");

let correct = 0;

function askQuestion() {
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
    correct++;
    console.log(correct);
    console.log("Your guessing score is " + correct);
  } else {
    alert("Nope, nice try though!");
  }

  let ans2 = prompt("Do I love chicken and chips? (yes/no)")
    .toLowerCase()
    .trim();
  while (ans2 !== "yes" && ans2 !== "no") {
    ans2 = prompt("It must be yes or no!").toLowerCase().trim();
  }
  if (ans2 === "yes") {
    alert("You are indeed correct!");
    correct++;
    console.log(correct);
    console.log("Your guessing score is " + correct);
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
    correct++;
    console.log(correct);
    console.log("Your guessing score is " + correct);
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
    correct++;
    console.log(correct);
    console.log("Your guessing score is " + correct);
  } else {
    alert("Nope, nice try though!");
  }

  let ans5 = prompt("Marmite? (yes/no)").toLowerCase().trim();
  while (ans5 !== "yes" && ans5 !== "no") {
    ans = prompt("It must be yes or no!").toLowerCase().trim();
  }

  if (ans5 === "no") {
    alert("You are ABSOLUTELY correct!");
    correct++;
    console.log(correct);
    console.log("Your guessing score is " + correct);
  } else {
    alert("Nope, nice try though!");
  }

  // guessing number game

  let answer = 4;
  let number = prompt("Guess a number between 1 and 10");
  let attempts = 4;

  while (attempts > 1) {
    attempts--;
    if (number > answer) {
      alert("Too high");
      number = prompt("Guess again! You have " + attempts + " left");
    } else if (number < answer) {
      alert("Too low");
      number = prompt("Guess again! You have " + attempts + " left");
    } else if (parseInt(number) === answer) {
      alert("That's right, well done!");
      correct++;
      break;
    }
  }

  if (parseInt(number) !== answer) {
    alert("The answer was 4");
  }
}

const quizButton = document.getElementById("quizButton");

quizButton.addEventListener("click", askQuestion);
alert(`Well done, you got ${correct} out of 6 questions correct!`);
