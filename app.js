let username = prompt("What is your name?");
alert("Well hello there " + username + " and welcome to my website!");

let ans = prompt("Do I have a degree in Sociology? (yes/no)").toLowerCase();
while (ans !== "yes") {
  ans = prompt(
    "It must be yes or no. Do I have a degree in Sociology?"
  ).toLowerCase();
}

if (ans === "yes") {
  alert("You are ABSOLUTELY correct!");
} else {
  alert("Nope, nice try though!");
}

const alertButton = document.getElementById("alertBuutton");
alertButton.addEventListener("click", () => {
  alert("This is an alert message!");
});
