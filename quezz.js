let ObjThem = {};
const utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
let quizCategory = utilisateurs[utilisateurs.length - 1]["theme"];

let question = document.getElementById("question");
let choix1 = document.getElementById("choix1");
let choix2 = document.getElementById("choix2");
let choix3 = document.getElementById("choix3");
let choix4 = document.getElementById("choix4");
let nbr_question = document.getElementById("nbr_question");
let scoreDisplay = document.getElementById("score");
let btnSuivant = document.getElementById("suivant");
let inputs = document.querySelectorAll(".answerInput");

let NumQst = 0;
let clicked = false;
let next = false;
let allow = true;
let score = 0;
let selectedAnswers = [];
let time_par_question = document.getElementById("time_par_question");
let timeQcm; // move here so accessible everywhere

// fetch quiz data
fetch(quizCategory + ".json")
  .then((res) => res.json())
  .then((data) => {
    ObjThem = data;
    afficherQst(0); // show first question
    startTimer();
    optionChoisir();
  })
  .catch((err) => console.error(err));

// ---------- Functions ----------

function startTimer() {
  time_par_question.textContent = 15;
  timeQcm = setInterval(() => {
    if (allow) {
      time_par_question.textContent--;
      if (time_par_question.textContent == 0) {
        next = true;
        saveResult(
          "No Selection",
          ObjThem[quizCategory][NumQst].BonneReponse,
          score
        );
        afficherQst(1);
      }
    }
  }, 1000);
}

function afficherQst(x) {
  if (!next && x !== 0) return;

  NumQst += x;
  if (NumQst >= ObjThem[quizCategory].length) {
    btnSuivant.textContent = "Valider";
    btnSuivant.classList.add("valider");
    btnSuivant.addEventListener("click", () => {
      window.location.href = "rapport.html";
    });
    return;
  } else {
    btnSuivant.textContent = "Suivant";
    btnSuivant.classList.remove("valider");
  }

  // reset
  clicked = false;
  allow = true;
  next = false;
  selectedAnswers = [];
  time_par_question.textContent = 15;

  const currentQuestion = ObjThem[quizCategory][NumQst];
  question.textContent = currentQuestion.Questionn;
  choix1.textContent = currentQuestion.Reponses[0];
  choix2.textContent = currentQuestion.Reponses[1];
  choix3.textContent = currentQuestion.Reponses[2];
  choix4.textContent = currentQuestion.Reponses[3];
  nbr_question.textContent = `${NumQst + 1}/${ObjThem[quizCategory].length}`;

  inputs.forEach((input) => {
    input.type = currentQuestion.plusOption ? "checkbox" : "radio";
    input.checked = false;
    input.disabled = false;
  });

  // reset option backgrounds
  document
    .querySelectorAll(".option label")
    .forEach((label) => (label.style.backgroundColor = ""));
}

function optionChoisir() {
  let options = document.querySelectorAll(".option");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const currentQuestion = ObjThem[quizCategory][NumQst];
      const answerText = option.querySelector("span").textContent;
      const label = option.querySelector("label");

      if (!currentQuestion.plusOption) {
        if (clicked) return;
        clicked = true;
        allow = false;
        next = true;
        inputs.forEach((input) => (input.disabled = true));

        if (answerText === currentQuestion.BonneReponse) {
          label.style.backgroundColor = "lightgreen";
          score += 10;
        } else {
          label.style.backgroundColor = "#ff7f7f";
        }

        scoreDisplay.textContent = score;
        saveResult(answerText, currentQuestion.BonneReponse, score);
      } else {
        if (clicked) return;

        if (!selectedAnswers.includes(answerText))
          selectedAnswers.push(answerText);

        if (selectedAnswers.length === currentQuestion.BonneReponse.length) {
          clicked = true;
          allow = false;
          next = true;
          inputs.forEach((input) => (input.disabled = true));

          selectedAnswers.forEach((ans) => {
            options.forEach((opt) => {
              const text = opt.querySelector("span").textContent;
              const label = opt.querySelector("label");
              if (
                selectedAnswers.includes(text) &&
                currentQuestion.BonneReponse.includes(text)
              ) {
                label.style.backgroundColor = "lightgreen";
              } else if (
                selectedAnswers.includes(text) &&
                !currentQuestion.BonneReponse.includes(text)
              ) {
                label.style.backgroundColor = "#ff7f7f";
              } else if (
                !selectedAnswers.includes(text) &&
                currentQuestion.BonneReponse.includes(text)
              ) {
                label.style.backgroundColor = "#7fb9ffff";
              }
            });
          });

          if (
            selectedAnswers.every((ans) =>
              currentQuestion.BonneReponse.includes(ans)
            )
          )
            score += 10;

          scoreDisplay.textContent = score;
          saveResult(selectedAnswers, currentQuestion.BonneReponse, score);
        }
      }
    });
  });
}

function saveResult(reponseChoisie, correctAnswer, scoreValue) {
  let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs"));
  let lastUser = utilisateurs[utilisateurs.length - 1];

  lastUser.answers.push({
    reponseChoisie,
    correctAnswer,
  });
  lastUser.score = scoreValue;

  localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
}

// ---------- Global Timer ----------
let minute = 0,
  seconde = 0;
setInterval(() => {
  seconde++;
  if (seconde === 60) {
    seconde = 0;
    minute++;
  }
  document.getElementById("time_global_minute").textContent = minute;
  document.getElementById("time_global_seconde").textContent = seconde;
}, 1000);
