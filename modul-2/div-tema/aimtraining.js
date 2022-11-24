// Model

const game = {
  app: {
    user: 123,
  },

  input: {
    name: "",
    username: "",
    login: {},
    reactionTime: [],
    startTime: 0,
    finishTime: 0,
  },

  data: {
    users: [
      {
        id: 123,
        name: "Robert",
        username: "Robhimself",
        score: 200,
      },
      {
        id: 124,
        name: "Simen",
        username: "dankert",
        score: 100,
      },
      {
        id: 125,
        name: "David",
        username: "David",
        score: 350,
      },
    ],
    scores: [
      {
        id: 123,
        time: 10.05,
        date: "2022-11-24T12:01:41.372Z",
      },
      {
        id: 123,
        time: 10.15,
        date: "2022-11-23T12:02:41.372Z",
      },
      {
        id: 123,
        time: 11.15,
        date: "2022-11-22T12:03:41.372Z",
      },
      {
        id: 123,
        time: 7.15,
        date: "2022-11-24T12:04:41.372Z",
      },
      {
        id: 124,
        time: 7.15,
        date: "2022-11-24T12:04:41.372Z",
      },
      {
        id: 125,
        time: 8.15,
        date: "2022-11-24T12:04:41.372Z",
      },
      {
        id: 125,
        time: 10.15,
        date: "2022-11-24T12:04:41.372Z",
      },
    ],
  },
};

// View
updateView();
function updateView() {
  let html = document.getElementById("app");
  html.innerHTML = "";
  html.innerHTML += /*HTML*/ `
    <div class="leaderboard">
    ${showLeaderboard()}
    </div>
    <div class="game">
    ${createBoard()}
    </div>
    <div class="info">
        <div class="info-text">
            "For å starte spillet: Trykk på den gule sirkelen. Obs! Dette får timeren til å starte. Ett spill = 10 treff."
        </div>
        <div class="results">
            ${drawResult()}
        </div>
        <div class="historic">
            ${userScores()}
        </div>
    </div>
    `;
}

function showLeaderboard() {
  const users = game.data.users;
  const sorted = [...users].sort((a, b) => {
    return b.score - a.score;
  });

  const scoreboard = sorted.map((user) => {
    return /*HTML*/ `<div class="lb-line">
              <div class="lb-text">
                ${user.username}:
              </div>
              <div class="lb-text">
                ${user.score}
              </div>
            </div>`;
  });
  return scoreboard.join("");
}

function userScores() {
  const scores = game.data.scores;
  const list = [...scores].filter((score) => score.id === game.app.user);
  console.log(list);
}

// Controller

function createBoard() {
  let gameHtml = "";
  let randomDiv = Math.floor(Math.random() * 25);
  for (let i = 0; i < 25; i++) {
    if (randomDiv == i) {
      gameHtml += `<div class="lightOn" onclick="hit()"></div>`;
    } else {
      gameHtml += `<div class="lamp"></div>`;
    }
  }
  return gameHtml;
}

function hit() {
  let reactionTime = game.input.reactionTime;
  if (game.input.startTime == 0) {
    game.input.startTime = new Date().getTime();
  } else {
    game.input.finishTime = new Date().getTime();
    let reaction = Math.floor(game.input.finishTime - game.input.startTime);
    console.log("f ", game.input.finishTime, ", s ", game.input.startTime, ", r ", reaction);
    reactionTime.push(reaction);
    game.input.startTime = new Date().getTime();
    game.input.finishTime = 0;
  }
  if (reactionTime.length >= 10) {
    drawResult();
    game.input.startTime = 0;
    game.input.finishTime = 0;
  } else {
    updateView();
  }
}

function drawResult() {
  let reactionTime = game.input.reactionTime;
  let scores = game.data.scores;
  let userId = game.app.user;
  let showScore = "";

  let sum = reactionTime.reduce(function (a, b) {
    return a + b;
  }, 0);

  let totalTime = sum / 1000;

  let newScore = {
    id: userId,
    time: totalTime,
    date: new Date().toISOString(),
  };

  scores.push(newScore);
  let bestTime = scores.filter((item) => item.id == userId);
  bestTime.sort((a, b) => {
    return b.time - a.time;
  });
  showScore += /*HTML*/ `
    <div>
        <div>
            Du brukte totalt: ${totalTime} sekunder på 10 riktige trykk!
        </div>
        <div>
            Din beste tid er: ${bestTime[0].time}
        </div>
    </div>`;
  game.input.reactionTime = [];
  return showScore;
}
