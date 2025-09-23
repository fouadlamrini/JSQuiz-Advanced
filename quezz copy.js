
//Affichage des Questions
// //////////////////////////////////////////////////////////////
let clicked = false;
let next = false;
let allow = true;
let currentIndex = 0;

let category = JSON.parse(localStorage.getItem("utilisateurs"));

async function fetchData(x=currentIndex) {
  try {
    let url = `${category[category.length - 1].theme}.json`;
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Response was not ok");
    }
    let data = await response.json();
       if (next) {
      allow = true;
     time.textContent = 15;
    next = false;
  clicked = false;
    
    let options = document.querySelectorAll(".option");
     options.forEach((option) => {
     let label = option.querySelector("label");
     label.style.backgroundColor = "";
     });}
   
    let question = document.getElementById("question");
let choix1 = document.getElementById("choix1");
let choix2 = document.getElementById("choix2");
let choix3 = document.getElementById("choix3");
let choix4 = document.getElementById("choix4");
let nbr_question = document.getElementById("nbr_question");
question.textContent = data[x].Questionn;
choix1.textContent = data[x].Reponses[0];
choix2.textContent = data[x].Reponses[1];
choix3.textContent = data[x].Reponses[2];
choix4.textContent = data[x].Reponses[3];
nbr_question.textContent = data[x].NbrQst;

 function optionChoisir(x=currentIndex) {
  
   let paragraphContenu;
   let score = 0;
   let scoreElement = document.getElementById("score");
   let options = document.querySelectorAll(".option");
   let answerInput = document.querySelectorAll(".answerInput");
   options.forEach((option) => {
     option.addEventListener("click", () => {
       if (!clicked) {
         allow = false;
         next = true;
         for (let i = 0; i < answerInput.length; i++) {
           answerInput[i].disabled = true;
         }
         paragraphContenu = option.querySelector("span").textContent;
         
         let answerCOrrect = data[x].BonneReponse;
         let label = option.querySelector("label");

         if (paragraphContenu === answerCOrrect) {
           label.style.backgroundColor = "lightgreen";
           score += 10;
           label.style.display = "disable";
         } else {
           label.style.backgroundColor = "#ff7f7f";
         }
         scoreElement.textContent = score;
         clicked = true;
         saveResult(paragraphContenu, answerCOrrect, score);
       }
     });
   });
 }
 optionChoisir();

// currentIndex++;

  } catch (error) {
    console.log(error);
  }
}
fetchData();

let btnSuivant = document.getElementById("suivant");
btnSuivant.addEventListener("click", () => {
  currentIndex++;
  fetchData();
});


// function afficherQst(x) {
  
//   if (next) {
//     allow = true;
//     time.textContent = 15;
//     next = false;
//     clicked = false;
//     NumQst += x;
//     let options = document.querySelectorAll(".option");
//     options.forEach((option) => {
//       let label = option.querySelector("label");
//       label.style.backgroundColor = "";
//     });

//     if (NumQst > [data[data.length - 1]].length - 1) {
//       btnSuivant.textContent = "Valider";
//       btnSuivant.classList.add("valider");
//       document
//         .getElementsByClassName("valider")[0]
//         .addEventListener("click", function () {
//           window.location.href = "rapport.html";
//         });
//       clearInterval(timeQcm);
//     } else if (NumQst < 0) {
//       NumQst = [data[data.length - 1]].length - 1;
//     } else {
//       btnSuivant.textContent = "Suivant";
//       btnSuivant.classList.remove("valider");
//     }
//     question.textContent = [data[data.length - 1]][
//       NumQst
//     ].Questionn;
//     choix1.textContent = [data[data.length - 1]][
//       NumQst
//     ].Reponses[0];
//     choix2.textContent = [data[data.length - 1]][
//       NumQst
//     ].Reponses[1];
//     choix3.textContent = [data[data.length - 1]][
//       NumQst
//     ].Reponses[2];
//     choix4.textContent = [data[category.length - 1]][
//       NumQst
//     ].Reponses[3];
//     nbr_question.textContent = [category[category.length - 1]][
//       NumQst
//     ].NbrQst;
//   }
// }
// setInterval(afficherQst, 15000, 1);

let time = document.getElementById("time");
time.textContent = 15;
let timeQcm = setInterval(() => {
  if (allow) {
    time.textContent--;
    if (time.textContent == 0) {
      fetchData();
      saveResult("", "", "");
      time.textContent = 15;
    }
  }
}, 1000);



// function optionChoisir() {
  
//   let paragraphContenu;
//   let score = 0;
//   let scoreElement = document.getElementById("score");
//   let options = document.querySelectorAll(".option");
//   let answerInput = document.querySelectorAll(".answerInput");
//   options.forEach((option) => {
//     option.addEventListener("click", () => {
//       if (!clicked) {
//         allow = false;
//         next = true;
//         for (let i = 0; i < answerInput.length; i++) {
//           answerInput[i].disabled = true;
//         }
//         paragraphContenu = option.querySelector("span").textContent;
//         console.log(category[category.length - 1]);
//         let answerCOrrect = category[category.length - 1].BonneReponse;
//         let label = option.querySelector("label");

//         if (paragraphContenu === answerCOrrect) {
//           label.style.backgroundColor = "lightgreen";
//           score += 10;
//           label.style.display = "disable";
//         } else {
//           label.style.backgroundColor = "#ff7f7f";
//         }
//         scoreElement.textContent = score;
//         clicked = true;
//         saveResult(paragraphContenu, answerCOrrect, score);
//       }
//     });
//   });
// }
// optionChoisir();

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
