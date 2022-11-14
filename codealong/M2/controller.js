function addGame() {
  model.data.games.push(model.inputs.newGame);
  updateView();
}

function removeGame(index) {
  model.data.games.splice(index, 1);
  updateView();
}
