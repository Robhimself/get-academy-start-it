const mainContainer = document.getElementById("main-container");
const startQuiz = document.getElementById("startQuiz");
//const rightAnswer = (placeholder)
//const wrongAnswer = (placeholder)

//Funksjon som starter og viser quiz
console.log(mainContainer.style.visibility, " før funskjon");
startQuiz.addEventListener("click", function handleClick() {
  console.log(mainContainer.style.visibility, "etter funksjon");

  if (mainContainer.style.visibility == "") {
    startQuiz.textContent = "Stopp Quiz";
    mainContainer.style.visibility = "visible";
  } else {
    startQuiz.textContent = "Start Quiz igjen";
    mainContainer.style.visibility = "";
  }
});
