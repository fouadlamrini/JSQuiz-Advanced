let StartQuiz=document.getElementById("StartQuiz");

    function InfoUtilisateur() {
        let ChoixTheme=document.getElementById("ChoixTheme").value;
  let input_name=document.getElementById("input_name").value;

    if(ChoixTheme==='Theme'||input_name==''){
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

      utilisateurs.push({ name:input_name, theme:ChoixTheme,  answers: [], score: 0,Datetime:{jour:day,mois:month,an:year} });

      
      localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));

    }

StartQuiz.addEventListener('click' ,()=>{
  // let ChoixTheme=document.getElementById("ChoixTheme");
  // let input_name=document.getElementById("input_name");
  let Error=document.getElementById("Error");
  let Error1=document.getElementById("Error1");
  InfoUtilisateur();
  if(input_name.value.trim()=='' || ChoixTheme.value==="Theme"){
    if (ChoixTheme.value==="Theme") {
      Error1.textContent="Choisir un theme";
    }
    Error.textContent="Entrer le nom d'utilisateur";
    input_name.style.borderBlockColor="red";
  } else {
    window.location.href = 'quezz.html';
  }

})

