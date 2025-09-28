let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs"));
//affichage Nombre de parties jouees par thematique
let themes = utilisateurs.map((utilisateur) => utilisateur.theme);

let partiesParTheme = themes.reduce((acc, theme) => {
  acc[theme] = (acc[theme] || 0) + 1;
  return acc;
}, {});
let parties = document.getElementById("parties");
for (let theme in partiesParTheme) {
  parties.textContent += `${theme} : ${partiesParTheme[theme]}\n`;
}

//affichage score moyen
let themesUniques = [...new Set(themes)]; 
let scoreMoyenParTheme = {};
themesUniques.forEach(theme => {
  let joueursTheme = utilisateurs.filter(utilisateur => utilisateur.theme === theme);
  
  let total = joueursTheme.reduce((acc, j) => acc + j.score, 0);
  let moyenne = total / joueursTheme.length;
  scoreMoyenParTheme[theme] = moyenne;
});

let scoresDiv = document.getElementById("scores");

for (let theme in scoreMoyenParTheme) {
  scoresDiv.textContent += `${theme} : ${scoreMoyenParTheme[theme]}\n`;
}
//Meilleur score global 
let scores = utilisateurs.map(utilisateur => utilisateur.score);
let meilleurScore = scores.reduce((max, score) => Math.max(max, score), 0);
let divMeilleur=document.getElementById('meilleur');
divMeilleur.textContent=meilleurScore;