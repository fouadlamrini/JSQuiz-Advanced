let StartQuiz=document.getElementById("StartQuiz");
const inputName = document.getElementById("input_name");
const themeInput = document.getElementById("ChoixTheme");
const errorName = document.getElementById("Error");
const errorTheme = document.getElementById("Error1");
const themeCards = document.querySelectorAll(".theme-card");
const lastScoreValue = document.getElementById("lastScoreValue");

const utilisateursStockes = JSON.parse(localStorage.getItem("utilisateurs")) || [];
if (lastScoreValue && utilisateursStockes.length > 0) {
  const lastUser = utilisateursStockes[utilisateursStockes.length - 1];
  lastScoreValue.textContent = `${lastUser.score} / 10 dans la thematique ${lastUser.theme}`;
}

themeCards.forEach((card) => {
  card.addEventListener("click", () => {
    themeCards.forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
    themeInput.value = card.dataset.theme;
    errorTheme.textContent = "";
  });
});

function InfoUtilisateur() {
  let ChoixTheme = themeInput.value;
  let input_name = inputName.value.trim();

  if (ChoixTheme === 'Theme' || input_name === '') {
    return;
  }
  let utilisateurs;
  const stocker = localStorage.getItem("utilisateurs");
  if (stocker) {
    utilisateurs = JSON.parse(stocker);
  } else {
    utilisateurs = [];
  }

  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  utilisateurs.push({ name: input_name, theme: ChoixTheme, answers: [], score: 0, Datetime: { jour: day, mois: month, an: year } });
  localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
}

StartQuiz.addEventListener('click' ,()=>{
  errorName.textContent = "";
  errorTheme.textContent = "";
  inputName.style.borderColor = "rgba(255, 255, 255, 0.14)";

  InfoUtilisateur();
  if(inputName.value.trim()=='' || themeInput.value==="Theme"){
    if (themeInput.value==="Theme") {
      errorTheme.textContent="Choisir un theme";
    }
    if (inputName.value.trim() === '') {
      errorName.textContent="Entrer le nom d'utilisateur";
      inputName.style.borderColor="red";
    }
  } else {
    window.location.href = 'quezz.html';
  }

})

