updateView();

function updateView() {
  let html = document.getElementById("app");
  html.innerHTML = "";

  html.innerHTML += `
  <input onchange="model.inputs.newGame.title = this.value" placeholder="title"></input>
  <input onchange="model.inputs.newGame.onlinePlayers = this.value" placeholder="onlinePlayers"></input>
  <input onchange="model.inputs.newGame.launchYear = parseInt(this.value)" placeholder="launchYear"></input>
  <button onclick="addGame()">Add game</button>
  <div>
  Dette er alle spillene i listen: <br>
  </div><br>
  `;
  for (let i = 0; i < model.data.games.length; i++) {
    let gameTitle = model.data.games[i].title;
    html.innerHTML += `<div>${gameTitle}<button onclick="removeGame(${i})">X</button></div>`;
  }
}
