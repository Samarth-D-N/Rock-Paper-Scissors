let imgs = document.querySelectorAll(".box");
let startBtn = document.querySelector(".start");
let winner = document.querySelector(".winner");
let restart = document.querySelector(".reStart");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");

for (let btn of imgs) {
  btn.addEventListener("click", function () {
    let rand = computer();
    if (btn.getAttribute("value") == "rock") {
      if (rand == 2) {
        winner.innerText = "Computer Won!!!";
        compScore.innerText = Number(compScore.innerText) + 1;
      } else {
        winner.innerText = "You Won!!!";
        userScore.innerText = Number(userScore.innerText) + 1;
      }
    }
    if (btn.getAttribute("value") == "paper") {
      if (rand == 1) {
        winner.innerText = "Computer Won!!!";
        compScore.innerText = Number(compScore.innerText) + 1;
      } else {
        winner.innerText = "You Won!!!";
        userScore.innerText = Number(userScore.innerText) + 1;
      }
    }
    if (btn.getAttribute("value") == "scissors") {
      if (rand == 0) {
        winner.innerText = "Computer Won!!!";
        compScore.innerText = Number(compScore.innerText) + 1;
      } else {
        winner.innerText = "You Won!!!";
        userScore.innerText = Number(userScore.innerText) + 1;
      }
    }
  });
}

function computer() {
  let rand = Math.floor(Math.random() * 3);
  return rand;
}

restart.addEventListener("click", () => {
  winner.innerText = "";
  compScore.innerText = "0";
  userScore.innerText = "0";
});
