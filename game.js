const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

const game = {
  playerHand: "",
  aiHand: "",
};

const hands = [...document.querySelectorAll(".select img")];
const btn = document.querySelector("button");
const playerChoice = document.querySelector('[data-summary="your-choice"]');
const aiChoice = document.querySelector("#AIC");
const winner = document.querySelector("h2 span");
const gameNumbers = document.querySelector(".numbers span");
const winsNumbers = document.querySelector(".wins span");
const lossesNumbers = document.querySelector(".losses span");
const drawsNumbers = document.querySelector(".draws span");

function handSelection() {
  hands.forEach((hand) => {
    hand.style.boxShadow = "";
  });
  game.playerHand = this.dataset.option;
  this.style.boxShadow = " 0 0 14px 4px red";
}

hands.forEach((hand) => {
  hand.addEventListener("click", handSelection);
});

const checkAiChoice = () => {
  return (game.aiHand =
    hands[Math.floor(Math.random() * hands.length)].dataset.option);
};

const checkWhoWin = () => {
  if (game.playerHand === game.aiHand) {
    gameSummary.draws++;
    winner.style.color = "black";
    return "remis";
  } else if (
    (game.playerHand === "papier" && game.aiHand === "kamień") ||
    (game.playerHand === "kamień" && game.aiHand === "nożyczki") ||
    (game.playerHand === "nożyczki" && game.aiHand === "papier")
  ) {
    gameSummary.wins++;
    winner.style.color = "green";
    return "ty";
  } else {
    gameSummary.losses++;
    winner.style.color = "red";
    return "komputer";
  }
};

const txtContentChanger = () => {
  playerChoice.textContent = game.playerHand;
  aiChoice.textContent = game.aiHand;
  gameSummary.numbers++;
  gameNumbers.textContent = gameSummary.numbers;
  winsNumbers.textContent = gameSummary.wins;
  lossesNumbers.textContent = gameSummary.losses;
  drawsNumbers.textContent = gameSummary.draws;
};

const startGame = function () {
  if (!game.playerHand) {
    alert("Wybierz jedną z opcji klikając na obrazek");
    return;
  }
  hands.forEach((hand) => {
    hand.style.boxShadow = "";
  });
  checkAiChoice();
  txtContentChanger();
  winner.textContent = checkWhoWin();
  game.playerHand = "";
};

btn.addEventListener("click", startGame);
