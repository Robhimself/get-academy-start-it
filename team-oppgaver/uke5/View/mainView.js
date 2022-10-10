// Main View

mainView();
function mainView() {
  html = "";
  html += /*HTML*/ `
  <div class="header"></div>
  <div class="body"> 
  <img src="Images/rpsls.png" class="intro">
    <input placeholder='Player name' oninput="playerName = this.value">
    <button onclick="startGame()">Start Game</button>
  </div>
  <div class="footer"></div>
  `;
  appDiv.innerHTML = html;
}
