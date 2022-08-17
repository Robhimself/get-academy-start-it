let myQuestions = [
  {
    question: "Hva er favoritt OS til Robert?",
    answers: {
      a: "Windows",
      b: "macOS",
      c: "Linux",
      d: "chrome OS",
    },
    correctAnswer: "c",
  },
  {
    question: "Hva er favorittfargen til Andy?",
    answers: {
      a: "Rosa",
      b: "Grønn",
      c: "Rød",
      d: "Gul",
    },
    correctAnswer: "b",
  },
  {
    question: "Hvor bor Oscar?",
    answers: {
      a: "Oslo",
      b: "Tønsberg",
      c: "Larvik",
      d: "Tjøme",
    },
    correctAnswer: "d",
  },
];

let questionIndex = 0;

function renderQuestion() {
  if (questionIndex >= myQuestions.length) return;
  let show = document.getElementById("question");
  let q = myQuestions[questionIndex];
  show.innerHTML = q.question;
  Object.entries(q.answers).forEach(([letter, text]) => {
    const but = document.getElementById(letter);
    but.innerHTML = text;
    but.dataset.correct = q.correctAnswer === letter;
  });
  questionIndex++;
}
renderQuestion();

document.getElementById("buts").addEventListener("click", function (e) {
  const tgt = e.target;
  if (tgt.type && tgt.type === "button") {
    document.getElementById("result").innerText =
      tgt.dataset.correct === "true" ? "Correct" : "Incorrect";
  }
});

document.getElementById("next").addEventListener("click", renderQuestion);
document.getElementById("next").addEventListener("click", blanketAnswer);

function blanketAnswer() {
  document.getElementById("result").innerHTML = "";
}
