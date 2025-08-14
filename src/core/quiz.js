// Quiz de exemplo: "Qual fruta você seria?"
const demoQuiz = {
    title: "Qual fruta você seria?",
    questions: [
      {
        question: "Você prefere:",
        options: [
          { text: "Doce", trait: "doce" },
          { text: "Ácido", trait: "acido" }
        ]
      },
      {
        question: "Você é mais:",
        options: [
          { text: "Energético", trait: "energetico" },
          { text: "Tranquilo", trait: "tranquilo" }
        ]
      }
    ],
    results: {
      "doce-energetico": "🍓 Você seria um Morango!",
      "acido-tranquilo": "🍋 Você seria um Limão!",
      "doce-tranquilo": "🍌 Você seria uma Banana!",
      "acido-energetico": "🍊 Você seria uma Laranja!"
    }
  };
  
  let currentQuestion = 0;
  let answers = [];
  
  document.getElementById("start-btn").addEventListener("click", () => {
    currentQuestion = 0;
    answers = [];
    showQuestion();
  });
  
  function showQuestion() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
  
    if (currentQuestion < demoQuiz.questions.length) {
      const q = demoQuiz.questions[currentQuestion];
      const h2 = document.createElement("h2");
      h2.textContent = q.question;
      container.appendChild(h2);
  
      q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt.text;
        btn.onclick = () => {
          answers.push(opt.trait);
          currentQuestion++;
          showQuestion();
        };
        container.appendChild(btn);
      });
    } else {
      showResult();
    }
  }
  
  function showResult() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
  
    const key = answers.join("-");
    const result = demoQuiz.results[key] || "✨ Você é único como você mesmo!";
    const h2 = document.createElement("h2");
    h2.textContent = result;
    container.appendChild(h2);
  }
  