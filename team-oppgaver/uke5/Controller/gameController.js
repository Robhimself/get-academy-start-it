function selectHand(selection) {
  if (playerHp > 0 || computerHp > 0) {
    if (selection == "stein") {
      selectedHand = "🗿";
    } else if (selection == "saks") {
      selectedHand = "✂️";
    } else if (selection == "papir") {
      selectedHand = "📃";
    } else if (selection == "lizard") {
      selectedHand = "🦎";
    } else {
      selectedHand = "🖖";
    }
    computerHand();
  }
  gameView();
}

function computerHand() {
  computerSelectedHand =
    handChoices[Math.floor(Math.random() * handChoices.length)];
  round += 1;
  checkWinner();
  // gameView();
}

//TODO: Refactor?
function checkWinner() {
  if (selectedHand == computerSelectedHand) {
    roundWinner = "Tied";
    computerStreak = 0;
    playerStreak = 0;
  } else if (
    selectedHand == handChoices[0] &&
    (computerSelectedHand == whatBeatsWhat[0] ||
      computerSelectedHand == whatBeatsWhat[3])
  ) {
    roundWinner = `${playerName} Won`;
    computerHp -= 10 * (1 + 0.1 * playerStreak);
    playerStreak += 1;
    computerStreak = 0;
  } else if (
    selectedHand == handChoices[1] &&
    (computerSelectedHand == whatBeatsWhat[1] ||
      computerSelectedHand == whatBeatsWhat[3])
  ) {
    roundWinner = `${playerName} Won`;
    computerHp -= 10 * (1 + 0.1 * playerStreak);
    playerStreak += 1;

    computerStreak = 0;
  } else if (
    selectedHand == handChoices[2] &&
    (computerSelectedHand == whatBeatsWhat[2] ||
      computerSelectedHand == whatBeatsWhat[4])
  ) {
    roundWinner = `${playerName} Won`;
    computerHp -= 10 * (1 + 0.1 * playerStreak);
    playerStreak += 1;

    computerStreak = 0;
  } else if (
    selectedHand == handChoices[3] &&
    (computerSelectedHand == whatBeatsWhat[1] ||
      computerSelectedHand == whatBeatsWhat[4])
  ) {
    roundWinner = `${playerName} Won`;
    computerHp -= 10 * (1 + 0.1 * playerStreak);
    playerStreak += 1;

    computerStreak = 0;
  } else if (
    selectedHand == handChoices[4] &&
    (computerSelectedHand == whatBeatsWhat[0] ||
      computerSelectedHand == whatBeatsWhat[2])
  ) {
    roundWinner = `${playerName} Won`;
    computerHp -= 10 * (1 + 0.1 * playerStreak);
    playerStreak += 1;

    computerStreak = 0;
  } else {
    roundWinner = "Computer Won";
    playerHp -= 10 * (1 + 0.1 * computerStreak);
    playerStreak = 0;
    computerStreak += 1;
  }
  checkHP();
  gameView();
}

function checkHP() {
  if (computerHp <= 0) {
    computerHp = 0;
    playerHp = 0;
    playerStreak = 0;
    computerStreak = 0;
    playerScore++;
    selectedHand = "";
    computerSelectedHand = "";
    roundWinner = `<div>${playerName} won the game</div>
    <button style="align-items: center; justify-self: center" onclick="restartGame()">Next Game</button>
    <button style="background-color: Red" onclick="exitgame()">Exit Game</button>
    `;
  } else if (playerHp <= 0) {
    playerHp = 0;
    computerHp = 0;
    playerStreak = 0;
    computerStreak = 0;
    computerScore++;
    selectedHand = "";
    computerSelectedHand = "";
    roundWinner = `<div>Computer won the game</div>
      <button style="align-items: center; justify-self: center" onclick="restartGame()">Next Game</button>
      <button style="background-color: Red" onclick="exitgame()">Exit Game</button>
    `;
  }
  gameView();
}
function restartGame() {
  playerHp = 100;
  computerHp = 100;
  round = 0;
  game++;
  roundWinner = "";

  gameView();
}

function exitgame() {
  game = 1;
  round = 0;

  playerHp = 100;
  computerHp = 100;

  playerScore = 0;
  computerScore = 0;

  playerStreak = 0;
  computerStreak = 0;

  roundWinner = "";

  selectedHand = "";
  computerSelectedHand = "";
  html = "";
  mainView();
}
