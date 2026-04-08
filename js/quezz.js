let ObjThem = {};
const utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
// افتراض أن هناك مستخدم مسجل مسبقاً لاختبار الكود
let quizCategory = utilisateurs.length > 0 ? utilisateurs[utilisateurs.length - 1]["theme"] : "php"; 

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
let timeQcm; 
const timerBarFill = document.querySelector(".timer-bar-fill");
const timeSide = document.getElementById("time_side");

async function chargerQuiz() {
    try {
        const res = await fetch("json/" + quizCategory + ".json");
        const data = await res.json();
        ObjThem = data;
        afficherQst(0);
        startTimer();
        optionChoisir();
    } catch (err) {
        console.error("Erreur de chargement:", err);
        question.textContent = "Erreur: Fichier JSON introuvable.";
    }
}
chargerQuiz();

function startTimer() {
    let timeLeft = 15;
    updateQuestionTimerUI(timeLeft);
    
    timeQcm = setInterval(() => {
        if (allow) {
            timeLeft--;
            time_par_question.textContent = timeLeft;
            updateQuestionTimerUI(timeLeft);

            if (timeLeft <= 0) {
                handleNextQuestion();
            }
        }
    }, 1000);
}

function handleNextQuestion() {
    saveResult("No Selection", ObjThem[quizCategory][NumQst].BonneReponse, score);
    if (NumQst >= ObjThem[quizCategory].length - 1) {
        finishQuiz();
    } else {
        next = true;
        afficherQst(1);
    }
}

function afficherQst(x) {
    if (!next && x !== 0) return;

    NumQst += x;
    if (NumQst >= ObjThem[quizCategory].length) {
        finishQuiz();
        return;
    }

    clicked = false;
    allow = true;
    next = false;
    selectedAnswers = [];
    time_par_question.textContent = 15;
    updateQuestionTimerUI(15);

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

    document.querySelectorAll(".option label").forEach(l => l.style.backgroundColor = "");
}

function updateQuestionTimerUI(currentTime) {
    const widthPercent = (currentTime / 15) * 100;
    if (timerBarFill) timerBarFill.style.width = `${widthPercent}%`;
    if (timeSide) timeSide.textContent = currentTime;
}

function optionChoisir() {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
        option.addEventListener("click", () => {
            if (clicked) return;
            const currentQuestion = ObjThem[quizCategory][NumQst];
            const answerText = option.querySelector("span").textContent;

            if (currentQuestion.plusOption) {
                if (!selectedAnswers.includes(answerText)) selectedAnswers.push(answerText);
                if (selectedAnswers.length !== currentQuestion.BonneReponse.length) return;
            } else {
                selectedAnswers = [answerText];
            }

            validateChoice(currentQuestion, options);
        });
    });
}

function validateChoice(currentQuestion, options) {
    clicked = true;
    allow = false;
    next = true;
    inputs.forEach(i => i.disabled = true);

    options.forEach((opt) => {
        const text = opt.querySelector("span").textContent;
        const label = opt.querySelector("label");
        if (currentQuestion.BonneReponse.includes(text)) {
            label.style.backgroundColor = selectedAnswers.includes(text) ? "#22c55e" : "#3b82f6";
        } else if (selectedAnswers.includes(text)) {
            label.style.backgroundColor = "#ef4444";
        }
    });

    const isCorrect = selectedAnswers.every(ans => currentQuestion.BonneReponse.includes(ans));
    if (isCorrect) score += 10;
    scoreDisplay.textContent = score;
    saveResult(selectedAnswers, currentQuestion.BonneReponse, score);
}

function finishQuiz() {
    clearInterval(timeQcm);
    btnSuivant.textContent = "Valider";
    btnSuivant.onclick = () => window.location.href = "rapport.html";
}

function saveResult(reponseChoisie, correctAnswer, scoreValue) {
    let users = JSON.parse(localStorage.getItem("utilisateurs")) || [];
    if (users.length > 0) {
        users[users.length - 1].answers.push({ reponseChoisie, correctAnswer });
        users[users.length - 1].score = scoreValue;
        localStorage.setItem("utilisateurs", JSON.stringify(users));
    }
}

// Global Timer
let minute = 0, seconde = 0;
setInterval(() => {
    seconde++;
    if (seconde === 60) { seconde = 0; minute++; }
    document.getElementById("time_global_minute").textContent = minute;
    document.getElementById("time_global_seconde").textContent = seconde < 10 ? "0" + seconde : seconde;
}, 1000);