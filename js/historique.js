//------------declarer les variables glbale----------
let btnNext = document.getElementById("next");
let btnPrecedent = document.getElementById("precedent");
let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
let CountUtilisateur = 0;

//------------fonction affichage historique-----------
function affichageHistorique(x = 0) {
  if (utilisateurs.length === 0) {
    // ممكن تعرض رسالة بلا بيانات
    let divEmpty = document.querySelector(".history");
    divEmpty.innerHTML = "<p>لا توجد بيانات في localStorage</p>";
    document.querySelector(".divqst_rep").innerHTML = "";
    return;
  }

  CountUtilisateur += x;
  if (CountUtilisateur >= utilisateurs.length) {
    CountUtilisateur = 0;
  }
  if (CountUtilisateur < 0) {
    CountUtilisateur = utilisateurs.length - 1;
  }

  //--------------- zone historique ----------------
  let div = document.querySelector(".history");
  div.innerHTML = ""; // vider قبل ما نكتب

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

  // append in order
  div.appendChild(pseudo);
  div.appendChild(score);
  div.appendChild(theme);
  div.appendChild(date);

  //--------------- zone questions/reponses ----------------
  let divqst_rep = document.querySelector(".divqst_rep");
  divqst_rep.innerHTML = ""; // vider قبل ما نكتب

  utilisateurs[CountUtilisateur].answers.forEach((ans, index) => {
    console.log(ans);
   
    let questionBloc = document.createElement("div");
    questionBloc.classList.add("question-card");

    let title = document.createElement("p");
    title.textContent = "Question " + (index + 1);
    title.style.fontWeight = "700";
    title.style.marginBottom = "6px";

    let PReponseChoisi = document.createElement("p");
    PReponseChoisi.classList.add("reponse-choisie");
    PReponseChoisi.textContent = "Réponse choisie: " + (ans.reponseChoisie ?? "—");

    let PReponseCorrect = document.createElement("p");
    PReponseCorrect.classList.add("reponse-correcte");
    PReponseCorrect.textContent = "Réponse correcte: " + (ans.correctAnswer ?? "—");

    questionBloc.appendChild(title);
    questionBloc.appendChild(PReponseChoisi);
    questionBloc.appendChild(PReponseCorrect);

    divqst_rep.appendChild(questionBloc);
  });
}

//-----------appel fonction affichage --------------
affichageHistorique();

//-------------------addEventListner----------------
btnNext.addEventListener("click", function () {
  affichageHistorique(1);
});
btnPrecedent.addEventListener("click", function () {
  affichageHistorique(-1);
});
