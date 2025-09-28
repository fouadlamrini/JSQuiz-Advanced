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

let classement = [...utilisateurs].sort((a, b) => b.score - a.score);

let top3 = classement.slice(0, 3).map(utilisateur => utilisateur.name);

let divTop3 = document.getElementById("top3");
divTop3.textContent = `Top 3 pseudos: ${top3.join(", ")}`;
//chart js Répartition des parties par thématique.
let labels = Object.keys(partiesParTheme);
let data = Object.values(partiesParTheme);

let ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Nombre de parties',
      data: data,
      backgroundColor: ['#FF6384','#36A2EB','#FFCE56','#4BC0C0','#9966FF'], 
      borderColor: '#fff',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Répartition des parties par thématique'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 1
      }
    }
  }
});

//chart js Courbe de progression des scores dans le temps.

let sortedUsers = [...utilisateurs].sort((a, b) => {
  let dateA = new Date(a.Datetime.an, a.Datetime.mois - 1, a.Datetime.jour);
  let dateB = new Date(b.Datetime.an, b.Datetime.mois - 1, b.Datetime.jour);
  return dateA - dateB;
});

let labelsProgression = sortedUsers.map(u => `${u.Datetime.jour}/${u.Datetime.mois}/${u.Datetime.an}`);
let dataProgression = sortedUsers.map(u => u.score);

let ctxProgression = document.getElementById('progressionChart').getContext('2d');

new Chart(ctxProgression, {
  type: 'line',
  data: {
    labels: labelsProgression,
    datasets: [{
      label: 'Scores dans le temps',
      data: dataProgression,
      fill: false,
      borderColor: '#36A2EB',
      tension: 0.1,
      pointBackgroundColor: '#FF6384',
      pointRadius: 5
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Courbe de progression des scores' }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});