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

