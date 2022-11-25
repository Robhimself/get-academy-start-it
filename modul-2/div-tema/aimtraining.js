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
    misses: 0,
  },

  data: {
    users: [
      {
        id: 123,
        name: "Robert",
        username: "Robhimself",
        score: 0,
      },
      {
        id: 124,
        name: "Simen",
        username: "dankert",
        score: 10,
      },
      {
        id: 125,
        name: "David",
        username: "David",
        score: 50,
      },
    ],
    scores: [
      {
        id: 123,
        time: 10.051,
        date: "2022-11-24T12:01:41.372Z",
      },
      {
        id: 123,
        time: 10.151,
        date: "2022-11-23T12:02:41.372Z",
      },
      {
        id: 123,
        time: 11.151,
        date: "2022-11-22T12:03:41.372Z",
      },
      {
        id: 123,
        time: 7.151,
        date: "2022-11-24T12:04:41.372Z",
      },
      {
        id: 124,
        time: 7.151,
        date: "2022-11-24T12:04:41.372Z",
      },
      {
        id: 125,
        time: 8.151,
        date: "2022-11-24T12:04:41.372Z",
      },
      {
        id: 125,
        time: 10.115,
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
          Ett spill = 10 treff.
        </div>
        <div class="results">
            ${game.input.reactionTime.length == 10 ? drawResult() : ""}
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
  list.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (b.date > a.date) {
      return 1;
    }
    return 0;
  });
  let userHtml = "";
  for (let i = 0; i < list.length; i++) {
    let date = new Date(list[i].date);

    userHtml += /*HTML*/ `
    <div class="userScore">
      <div class="userScore-text">
        ${list[i].time}s 
      </div><div class="userScore-text">
        ${date.toLocaleTimeString("no-NO", {
          hour: "2-digit",
          minute: "2-digit",
        })},  ${date.toLocaleDateString("no-NO", { year: "2-digit", month: "2-digit", day: "2-digit" })}
      </div>
    </div>
    `;
  }
  return userHtml;
}

function createBoard() {
  let gameHtml = "";
  let randomDiv = Math.floor(Math.random() * 25);
  for (let i = 0; i < 25; i++) {
    if (game.input.startTime == 0) {
      if (i == 12) {
        gameHtml += `<div class="lightOn" onclick="hit()">Start!</div>`;
      } else {
        gameHtml += `<div class="lamp" onclick="miss()"></div>`;
      }
    }
    if (game.input.startTime != 0) {
      if (randomDiv == i) {
        gameHtml += `<div class="lightOn" onclick="hit()"></div>`;
      } else {
        gameHtml += `<div class="lamp" onclick="miss()"></div>`;
      }
    }
  }
  return gameHtml;
}

// Controller

function hit() {
  let reactionTime = game.input.reactionTime;
  if (game.input.startTime == 0) {
    game.input.reactionTime = [];
    game.input.startTime = new Date().getTime();
    game.input.misses = 0;
  } else {
    game.input.finishTime = new Date().getTime();
    let reaction = Math.floor(game.input.finishTime - game.input.startTime);
    reactionTime.push(reaction);
    game.input.startTime = new Date().getTime();
    game.input.finishTime = 0;
  }
  if (reactionTime.length >= 10) {
    game.input.startTime = 0;
  }
  updateView();
}

function miss() {
  if (game.input.startTime != 0) {
    game.input.misses++;
  }
  console.log(game.input.misses);
}

function drawResult() {
  let reactionTime = game.input.reactionTime;
  let scores = game.data.scores;
  let userId = game.app.user;
  let showScore = "";

  const sum = reactionTime.reduce(function (a, b) {
    return a + b;
  }, 0);

  const totalTime = sum / 1000;
  const pts = 10 / totalTime;

  let newScore = {
    id: userId,
    time: totalTime,
    points: pts,
    date: new Date().toISOString(),
  };

  scores.push(newScore);
  let bestTime = scores.filter((item) => item.id == userId);
  bestTime.sort((a, b) => {
    if (a.time > b.time) {
      return 1;
    }
    if (b.time > a.time) {
      return -1;
    }
    return 0;
  });
  showScore += /*HTML*/ `
    <div>
        <div>
            Din beste tid er: ${bestTime[0].time}
        </div>
    </div>`;
  return showScore;
}

findScores();
function findScores() {
  const scores = game.data.scores;
  let arr = [...scores];

  let results = arr.group(({ id }) => id);
  console.log(results);
}
