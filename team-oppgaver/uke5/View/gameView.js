//game view

function gameView() {
  html = "";
  html = /*HTML*/ `
    <div class="header">Rock, Paper, Scissors, Lizard, Spock<br>Emoji Battle</div>
    <div class="body">
      <div class="game-mainContainer">
        <div class="game-infoContainer">

          <div class="game-score">PLAYER WINS: ${playerScore}</div>
          <div class="game-score">GAME: ${game}</div>
          <div class="game-roundnumber">ROUND: ${round}</div>
          <div class="game-roundnumber">COMPUTER WINS: ${computerScore}</div>
        </div>
        <div class="game-gameContainer">
          <div class="game-playerContainer">${playerName}
            <div class="game-health">HP: ${playerHp}</div>
            <div class="game-streak">STREAK: ${playerStreak}</div>
          </div>
          <div class="game-arenaContainer">
            <div class="game-playerCard">${selectedHand}</div>
            <div>${roundWinner ? roundWinner : "VS"}</div>
            <div class="game-computerCard">${computerSelectedHand}</div>
          </div>
          <div class="game-computerContainer">COMPUTER
            <div class="game-health">HP: ${computerHp}</div>
            <div class="game-streak">STREAK: ${computerStreak}</div>
          </div>
        </div>
        <div class="game-selectedHand">
            <div onclick="selectHand('stein')" class="game-hand">🗿</div>
            <div onclick="selectHand('saks')" class="game-hand">✂️</div>
            <div onclick="selectHand('papir')" class="game-hand">📃</div>
            <div onclick="selectHand('lizard')" class="game-hand">🦎</div>
            <div onclick="selectHand('spock')" class="game-hand">🖖</div>
          </div>
      </div>
    </div>
    <div class="footer"></div>
  `;
  appDiv.innerHTML = html;
}
