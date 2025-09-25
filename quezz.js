// let ObjThem = {
//   Programation: [
//     {
//       Questionn: "Que signifie un élément sémantique en HTML ?",
//       Reponses: [
//         "Un élément qui donne du sens à son contenu et aide le SEO et les lecteurs automatiques",
//         "Un élément utilisé uniquement pour le style sans signification",
//         "Un élément réservé à JavaScript",
//         "Un élément qui change selon le navigateur",
//       ],
//       BonneReponse:
//         "Un élément qui donne du sens à son contenu et aide le SEO et les lecteurs automatiques",
//       NbrQst: "1/10",
//     },

//     {
//       Questionn:
//         "Quel est l’élément le plus approprié pour représenter un article autonome (self-contained article) ?",
//       Reponses: ["<div>", "<article>", "<span>", "<section>"],
//       BonneReponse: "<article>",
//       NbrQst: "2/10",
//     },
//     {
//       Questionn:
//         "Si on applique les règles suivantes au même élément : #id { color: red; } .class { color: blue; }, laquelle sera appliquée ?",
//       Reponses: [
//         ".class { color: blue; }",
//         "#id { color: red; }",
//         "La dernière dans le fichier peu importe le type",
//         "Le navigateur choisit le sélecteur le plus court",
//       ],
//       BonneReponse: "#id { color: red; }",
//       NbrQst: "3/10",
//     },
//     {
//       Questionn:
//         "Quelle propriété définit l’espace intérieur (distance entre le contenu et la bordure) ?",
//       Reponses: ["margin", "border", "padding", "outline"],
//       BonneReponse: "padding",
//       NbrQst: "4/10",
//     },
//     {
//       Questionn: "Qu’est-ce que le hoisting en JavaScript ?",
//       Reponses: [
//         "Le déplacement des déclarations de variables et fonctions en haut de leur portée avant exécution",
//         "La désactivation des variables",
//         "Une méthode pour accélérer le chargement des images",
//         "Ajouter des propriétés au DOM uniquement",
//       ],
//       BonneReponse:
//         "Le déplacement des déclarations de variables et fonctions en haut de leur portée avant exécution",
//       NbrQst: "5/10",
//     },
//     {
//       Questionn: "Quelle est la différence entre == et === en JavaScript ?",
//       Reponses: [
//         "Aucune différence",
//         "== compare après conversion de type, tandis que === compare type et valeur (strict)",
//         "== compare uniquement le type, === compare uniquement la valeur",
//         "=== n’est disponible qu’à partir d’ES6",
//       ],
//       BonneReponse:
//         "== compare après conversion de type, tandis que === compare type et valeur (strict)",
//       NbrQst: "6/10",
//     },
//     {
//       Questionn: ") Comment déclare-t-on une variable en PHP ?",
//       Reponses: ["var x = 5", "$x = 5", "x := 5", "let x = 5"],
//       BonneReponse: "$x = 5",
//       NbrQst: "7/10",
//     },
//     {
//       Questionn: "Qu’est-ce qu’une superglobale comme $_GET en PHP ?",
//       Reponses: [
//         "Une variable définie uniquement dans les fonctions",
//         "Un tableau accessible dans tous les contextes (global) sans global $var",
//         "Une variable utilisable une seule fois",
//         "Une variable contenant uniquement des fonctions",
//       ],
//       BonneReponse:
//         "Un tableau accessible dans tous les contextes (global) sans global $var",
//       NbrQst: "8/10",
//     },
//     {
//       Questionn: "Dans quel fichier définit-on les routes web dans Laravel ?",
//       Reponses: [
//         "routes/web.php",
//         "app/Http/routes.php",
//         "config/routes.php",
//         "public/index.php",
//       ],
//       BonneReponse: "routes/web.php",
//       NbrQst: "9/10",
//     },
//     {
//       Questionn:
//         "Quelle est la différence principale entre routes/web.php et routes/api.php dans Laravel ?",
//       Reponses: [
//         "Aucune différence",
//         "web.php est utilisé pour les interfaces web avec middleware (sessions, CSRF), tandis que api.php est",
//         "api.php est réservé aux fichiers statiques",
//         "web.php ne fonctionne qu’avec JSON",
//       ],
//       BonneReponse:
//         "web.php est utilisé pour les interfaces web avec middleware (sessions, CSRF), tandis que api.php est",
//       NbrQst: "10/10",
//     },
//   ],
//   Math: [
//     {
//       Questionn: "Quelle est la valeur de :7x8 ?",
//       Reponses: ["54", "56", "64", "58"],
//       BonneReponse: "56",
//       NbrQst: "1/10",
//     },

//     {
//       Questionn: "Quelle est la racine carrée de 144 ?",
//       Reponses: ["10", "11", "12", "14"],
//       BonneReponse: "12",
//       NbrQst: "2/10",
//     },
//     {
//       Questionn: "si x=5, quelle est la valeur de 2x^2+3?",
//       Reponses: ["48", "50", "53", "55"],
//       BonneReponse: "53",
//       NbrQst: "3/10",
//     },
//     {
//       Questionn: "Quelle est la fraction équivalente à 3/4",
//       Reponses: ["6/8", "8/12", "5/7", "9/16"],
//       BonneReponse: "6/8",
//       NbrQst: "4/10",
//     },
//     {
//       Questionn: "Résultat de :(15+5)/4",
//       Reponses: ["4", "5", "6", "8"],
//       BonneReponse: "5",
//       NbrQst: "5/10",
//     },
//     {
//       Questionn: "Quelle est la valeur de :3^4?",
//       Reponses: ["27", "64", "81", "243"],
//       BonneReponse: "81",
//       NbrQst: "6/10",
//     },
//     {
//       Questionn:
//         "Un triangle a des côtés de 3 cm, 4 cm et 5 cm. Ce triangle est :",
//       Reponses: ["Isocèle", "Rectangle", "Équilatéral", "Obtus"],
//       BonneReponse: "Rectangle",
//       NbrQst: "7/10",
//     },
//     {
//       Questionn:
//         "Si une pizza est coupée en 12 parts égales et que tu en manges 3, quelle fraction reste ?",
//       Reponses: ["1/4", "2/3", "3/4", "1/3"],
//       BonneReponse: "3/4",
//       NbrQst: "8/10",
//     },
//     {
//       Questionn: "La valeur de 2(x+3) quand x=4 est:",
//       Reponses: ["10", "12", "15", "14"],
//       BonneReponse: "14",
//       NbrQst: "9/10",
//     },
//     {
//       Questionn:
//         "Quelle est l’aire d’un rectangle de longueur 12 cm et de largeur 5 cm ?",
//       Reponses: ["17 cm²", "60 cm²", "24 cm²", "50 cm²"],
//       BonneReponse: "60 cm²",
//       NbrQst: "10/10",
//     },
//   ],
//   Sport: [
//     {
//       Questionn:
//         "Combien de joueurs y a-t-il dans une équipe de football sur le terrain ?",
//       Reponses: ["9", "10", "11", "12"],
//       BonneReponse: "11",
//       NbrQst: "1/10",
//     },

//     {
//       Questionn: "Quel pays a remporté la Coupe du Monde de football en 2018 ?",
//       Reponses: ["Allemagne", "France", "Brésil", "Argentine"],
//       BonneReponse: "France",
//       NbrQst: "2/10",
//     },
//     {
//       Questionn:
//         "Dans le basketball, combien de points vaut un tir à 3 points ?",
//       Reponses: ["1", "2", "3", "4"],
//       BonneReponse: "3",
//       NbrQst: "3/10",
//     },
//     {
//       Questionn: "Quel sport utilise une raquette et un volant ?",
//       Reponses: ["Tennis", "Badminton", "Squash", "Ping-pong"],
//       BonneReponse: "Badminton",
//       NbrQst: "4/10",
//     },
//     {
//       Questionn: "Le marathon a une distance officielle de :",
//       Reponses: ["40 km", "42,195 km", "45 km", "50 km"],
//       BonneReponse: "42,195 km",
//       NbrQst: "5/10",
//     },
//     {
//       Questionn:
//         "Quel joueur de tennis détient le plus de titres du Grand Chelem en simple masculin (2025) ?",
//       Reponses: [
//         "Roger Federer",
//         "Rafael Nadal",
//         "Novak Djokovic",
//         "Andy Murray",
//       ],
//       BonneReponse: "Rafael Nadal",
//       NbrQst: "6/10",
//     },
//     {
//       Questionn: "Dans quel sport utilise-t-on le terme “strike” ?",
//       Reponses: ["Baseball", "Football", "Rugby", "Handball"],
//       BonneReponse: "Baseball",
//       NbrQst: "7/10",
//     },
//     {
//       Questionn:
//         "Combien de joueurs y a-t-il dans une équipe de volleyball sur le terrain ?",
//       Reponses: ["5", "6", "7", "8"],
//       BonneReponse: "6",
//       NbrQst: "8/10",
//     },
//     {
//       Questionn:
//         "Quel pays est considéré comme le berceau des Jeux Olympiques ?",
//       Reponses: ["Italie", "Grèce", "France", "Égypte"],
//       BonneReponse: "Grèce",
//       NbrQst: "9/10",
//     },
//     {
//       Questionn: "Le Tour de France est une compétition de :",
//       Reponses: ["Natation", "Cyclisme", "Course à pied", "Triathlon"],
//       BonneReponse: "Cyclisme",
//       NbrQst: "10/10",
//     },
//   ],
// };

//Affichage des Questions

let ObjThem = {};

const category = JSON.parse(localStorage.getItem("utilisateurs"));

let quizCategory = category[category.length - 1]["theme"];

let question = document.getElementById("question");
let choix1 = document.getElementById("choix1");
let choix2 = document.getElementById("choix2");
let choix3 = document.getElementById("choix3");
let choix4 = document.getElementById("choix4");
let nbr_question = document.getElementById("nbr_question");
 let score = 0;

let btnSuivant = document.getElementById("suivant");
// let btnAccept = document.getElementById("accept");

let clicked = false;
let next = false;
let allow = true;

let NumQst = 0;

fetch(quizCategory + ".json")
  .then((response) => response.json())
  .then((data) => {
    ObjThem = data;

    question.textContent =
      ObjThem[category[category.length - 1]["theme"]][0].Questionn;
    choix1.textContent =
      ObjThem[category[category.length - 1]["theme"]][0].Reponses[0];
    choix2.textContent =
      ObjThem[category[category.length - 1]["theme"]][0].Reponses[1];
    choix3.textContent =
      ObjThem[category[category.length - 1]["theme"]][0].Reponses[2];
    choix4.textContent =
      ObjThem[category[category.length - 1]["theme"]][0].Reponses[3];
    nbr_question.textContent = `1/${ObjThem[quizCategory].length}`;

    //time global
   
  setInterval(updateTime, 1000);

    // setInterval(afficherQst, 15000, 1);

    let time_par_question = document.getElementById("time_par_question");
    time_par_question.textContent = 15;
    let timeQcm = setInterval(() => {
      if (allow) {
        time_par_question.textContent--;
        if (time_par_question.textContent == 0) {
          next = true;
          afficherQst(1);
          saveResult("", "", "");
          time_par_question.textContent = 15;
        }
      }
    }, 1000);

    optionChoisir();
  })
  .catch((err) => console.error(err));

let selectedAnswers = [];

function afficherQst(x) {
  
// let inputs = document.querySelectorAll(".answerInput");
// inputs.forEach(input => {
//     input.type = questionObj.plusOption ? "checkbox" : "radio";
//     input.name = questionObj.plusOption ? `choix${NumQst}` : "choix";
//     input.checked = false;
//     input.disabled = false;
// });


  if (next) {
    selectedAnswers = [];
    allow = true;
    time_par_question.textContent = 15;
    next = false;
    clicked = false;
    let answerInput = document.querySelectorAll(".answerInput");
    answerInput.forEach(input => input.disabled = false);
    NumQst += x;
    let optionsDiv = document.querySelectorAll(".option");
    optionsDiv.forEach((option) => {
      let label = option.querySelector("label");
      label.style.backgroundColor = "";
    });

    if (NumQst > ObjThem[category[category.length - 1]["theme"]].length - 1) {
      btnSuivant.textContent = "Valider";
      btnSuivant.classList.add("valider");
      document
        .getElementsByClassName("valider")[0]
        .addEventListener("click", function () {
          window.location.href = "rapport.html";
        });
      clearInterval(timeQcm);
    } else if (NumQst < 0) {
      NumQst = ObjThem[category[category.length - 1]["theme"]].length - 1;
    } else {
      btnSuivant.textContent = "Suivant";
      btnSuivant.classList.remove("valider");
    }
    question.textContent =
      ObjThem[category[category.length - 1]["theme"]][NumQst].Questionn;
    choix1.textContent =
      ObjThem[category[category.length - 1]["theme"]][NumQst].Reponses[0];
    choix2.textContent =
      ObjThem[category[category.length - 1]["theme"]][NumQst].Reponses[1];
    choix3.textContent =
      ObjThem[category[category.length - 1]["theme"]][NumQst].Reponses[2];
    choix4.textContent =
      ObjThem[category[category.length - 1]["theme"]][NumQst].Reponses[3];
   nbr_question.textContent = `${NumQst + 1}/${ObjThem[quizCategory].length}`;
  }
}


function optionChoisir() {
  let answerCount = 0;
  let score = 0;
  let score2 = document.getElementById("score");
  let ScoreDisplay = document.getElementById("score");
  let options = document.querySelectorAll(".option");
  let answerInput = document.querySelectorAll(".answerInput");
  if (!ObjThem[category[category.length - 1]["theme"]][NumQst].plusOption) {
    let paragraphContenu;
    options.forEach((option) => {
      option.addEventListener("click", () => {
        if (clicked) return;
          allow = false;
          next = true;
          for (let i = 0; i < answerInput.length; i++) {
            answerInput[i].disabled = true;
          }
          paragraphContenu = option.querySelector("span").textContent;
          let answerCOrrect =
            ObjThem[category[category.length - 1]["theme"]][NumQst].BonneReponse;
          let label = option.querySelector("label");
  
          if (paragraphContenu === answerCOrrect) {
            label.style.backgroundColor = "lightgreen";
            score += 10;
            label.style.display = "disable";
          } else {
            label.style.backgroundColor = "#ff7f7f";
          }
          score2.textContent = score;
          ScoreDisplay.textContent = score;
          clicked = true;
          saveResult(paragraphContenu, answerCOrrect, score);
      });
    });
  } else {
    // let selectedAnswers = [];
    let labels = [];

    options.forEach((option) => {
      option.addEventListener("click", () => {
        if (clicked) return; // prevent further clicks

        const answerText = option.querySelector("span").textContent;

        // prevent duplicate clicks on same option
        if (!selectedAnswers.includes(answerText)) {
          selectedAnswers.push(answerText);
        }

        const correctAnswers = ObjThem[category[category.length - 1]["theme"]][NumQst].BonneReponse;

        // only check once user has selected the same number as correct answers
        if (selectedAnswers.length === correctAnswers.length) {
          clicked = true;
          allow = false;
          next = true;
          answerInput.forEach(input => input.disabled = true);

          const isCorrect = selectedAnswers.every(ans => correctAnswers.includes(ans));

            options.forEach((opt) => {
              const text = opt.querySelector("span").textContent;
              const label = opt.querySelector("label");
              if (selectedAnswers.includes(text) && correctAnswers.includes(text)) {
                label.style.backgroundColor = "lightgreen"; // correct answers
              } else if (selectedAnswers.includes(text) && !correctAnswers.includes(text)) {
                label.style.backgroundColor = "#ff7f7f"; // wrong answers chosen
              } else if (!selectedAnswers.includes(text) && correctAnswers.includes(text)) {
                label.style.backgroundColor = "#7fb9ffff"; // wrong answers chosen
                
              }
            });
          if (isCorrect) {
            score += 10;



          }

          score2.textContent = score;
          ScoreDisplay.textContent = score;
          answerInput.forEach(input => input.disabled = false);

          saveResult(selectedAnswers, correctAnswers, score);
        }
      });
    });
  }
}


// function optionChoisir() {
//   let answerInput = document.querySelectorAll(".answerInput");
//   let optionCount = 0;
//   let ArrayAnswerChoisi=[];
//   let paragraphContenu;
//   if(ObjThem[category[category.length - 1]["theme"]][NumQst].plusOption){
//     answerInput[i].disabled = false;
//     paragraphContenu = option.querySelector("span").textContent;
//     ArrayAnswerChoisi.push(paragraphContenu);
//     optionCount++;
//     if(optionCount>=1){
//      answerInput[i].disabled = true;
//     }
//   }
 
//   let score2 = document.getElementById("score");
//   let optionsDiv = document.querySelectorAll(".option");
//   optionsDiv.forEach((option) => {
//     option.addEventListener("click", () => {
//       if (!clicked) {
//         allow = false;
//         next = true;
//         for (let i = 0; i < answerInput.length; i++) {
//           answerInput[i].disabled = true;
//         }
//         paragraphContenu = option.querySelector("span").textContent;
        
//         let answerCorrect =ObjThem[category[category.length - 1]["theme"]][NumQst].BonneReponse;
//         let label = option.querySelector("label");

//         if ( ArrayAnswerChoisi.every((el)=>el.includes(answerCorrect)) ) {
//           label.style.backgroundColor = "lightgreen";
//           score += 10;
//           label.style.display = "disable";
//         } else {
//           label.style.backgroundColor = "#ff7f7f";
//         }
//         score2.textContent = score;
//         clicked = true;
//         saveResult(paragraphContenu, answerCorrect, score);
//       }
//     });
//   });
// }

function saveResult(reponseChoisie, correctAnswer, score) {
  const stocker = localStorage.getItem("utilisateurs");
  if (!stocker) return;

  let utilisateurs = JSON.parse(stocker);
  let lastUser = utilisateurs[utilisateurs.length - 1];

  lastUser.answers.push({
    reponseChoisie: reponseChoisie,
    correctAnswer: correctAnswer,
  });
  lastUser.score = score;

  localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
}

  let minute = 0;
  let seconde = 0;
  function updateTime() {
    seconde++;
    if (seconde === 60) {
      seconde = 0;
      minute++;
    }
    document.getElementById("time_global_minute").textContent = minute;
    document.getElementById("time_global_seconde").textContent = seconde;
  }