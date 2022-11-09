function addGame() {
  let games = model.data.games;
  let inputs = model.inputs.newGame;

  const newGame = {
    title: inputs.title,
    onlinePlayers: inputs.onlinePlayers,
    launchYear: inputs.launchYear,
  };

  games.push(newGame);
  updateView();
}

function removeGame(index) {
  let game = model.data.games;
  game.splice(index, 1);

  updateView();
}
