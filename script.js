function playGame(playerChoice) {
  // playerChoice is already "rock", "paper", or "scissors"
  let computerChoice = Math.floor(Math.random() * 3);
console.log(computerChoice);

if (computerChoice === 0) {
    computerChoice = "rock";
}
else if (computerChoice === 1) {
    computerChoice = "paper";
}   
else {
    computerChoice = "scissors";
}
console.log(computerChoice);


if (computerChoice === playerChoice) {
     document.getElementById("result").textContent = "It's a tie!";
}
else if (computerChoice === "rock" && playerChoice === "scissors") {
    document.getElementById("result").textContent = "Computer wins!";
}
else if (computerChoice === "paper" && playerChoice === "rock") {
    document.getElementById("result").textContent = "Computer wins!";
}
else if (computerChoice === "scissors" && playerChoice === "paper") {
    document.getElementById("result").textContent = "Computer wins!";
}
else {
    document.getElementById("result").textContent = "Player wins!";
}
document.getElementById("player-choice").textContent = "Player: " + playerChoice;
document.getElementById("computer-choice").textContent = "Computer: " + computerChoice;

}
function resetGame() {
    document.getElementById("player-choice").textContent = "";
    document.getElementById("computer-choice").textContent = "";
    document.getElementById("result").textContent = "";
}
function quitGame() {
    if (confirm("Are you sure you want to quit?")) {
        document.querySelector(".game-container").innerHTML =
            "<h2>Thanks for playing! 👋</h2>";
    }
}
//Rps v1.0


