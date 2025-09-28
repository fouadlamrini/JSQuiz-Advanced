//------------ déclarer les variables globales ----------
let btnNext = document.getElementById("next");
let btnPrecedent = document.getElementById("precedent");
let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
let CountUtilisateur = 0;

//------------ fonction affichage historique -----------
function affichageHistorique(x = 0) {
 
  CountUtilisateur += x;
  if (CountUtilisateur >= utilisateurs.length) CountUtilisateur = 0;
  if (CountUtilisateur < 0) CountUtilisateur = utilisateurs.length - 1;

  //--------------- zone historique ----------------
  let div = document.querySelector(".history");
  div.innerHTML = "";

  let pseudo = document.createElement("p");
  let score = document.createElement("p");
  let theme = document.createElement("p");
  let date = document.createElement("p");

  pseudo.textContent = "Nom: " + utilisateurs[CountUtilisateur].name;
  score.textContent = "Score: " + utilisateurs[CountUtilisateur].score;
  theme.textContent = "Thème: " + utilisateurs[CountUtilisateur].theme;
  date.textContent =
    "Date: " +
    utilisateurs[CountUtilisateur].Datetime.jour +
    "/" +
    utilisateurs[CountUtilisateur].Datetime.mois +
    "/" +
    utilisateurs[CountUtilisateur].Datetime.an;

  div.appendChild(pseudo);
  div.appendChild(score);
  div.appendChild(theme);
  div.appendChild(date);

  //--------------- zone questions/réponses ----------------
  let divqst_rep = document.querySelector(".divqst_rep");
  divqst_rep.innerHTML = "";

  utilisateurs[CountUtilisateur].answers.forEach((ans, index) => {
    let questionBloc = document.createElement("div");
    questionBloc.classList.add("question-card");
    questionBloc.style.padding = "10px";
    questionBloc.style.marginBottom = "8px";
    questionBloc.style.borderRadius = "6px";
    questionBloc.style.border = "1px solid #e0e0e0";

    // === changer les valeur a array si il est string ===
let reponseChoisie;
if (Array.isArray(ans.reponseChoisie)) {
  reponseChoisie = ans.reponseChoisie;
} else {
  reponseChoisie = [ans.reponseChoisie];
}

let correctAnswer;
if (Array.isArray(ans.correctAnswer)) {
  correctAnswer = ans.correctAnswer;
} else {
  correctAnswer = [ans.correctAnswer];
}

    // === شرط التلوين ===
    let isCorrect = reponseChoisie.every(el => correctAnswer.includes(el));
    questionBloc.style.background = isCorrect ? "lightgreen" : "#fca5a5";

    // عنوان السؤال
    let title = document.createElement("p");
    title.textContent = "Question " + (index + 1);
    title.style.fontWeight = "700";
    title.style.marginBottom = "6px";

    // عرض الإجابة المختارة
    let PReponseChoisi = document.createElement("p");
    PReponseChoisi.textContent = "Réponse choisie: " + reponseChoisie.join(", ");

    // عرض الإجابة الصحيحة
    let PReponseCorrect = document.createElement("p");
    PReponseCorrect.textContent = "Réponse correcte: " + correctAnswer.join(", ");

    questionBloc.appendChild(title);
    questionBloc.appendChild(PReponseChoisi);
    questionBloc.appendChild(PReponseCorrect);

    divqst_rep.appendChild(questionBloc);
  });
}

//----------- appel fonction affichage --------------
affichageHistorique();

//------------------- addEventListener ----------------
btnNext.addEventListener("click", function () {
  affichageHistorique(1);
});
btnPrecedent.addEventListener("click", function () {
  affichageHistorique(-1);
});
