// List of 40 chemistry questions
const questions = [
  {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "HO"],
      correctAnswer: 0
  },
  {
      question: "Which element has the atomic number 1?",
      options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
      correctAnswer: 0
  },
  {
      question: "What is the pH of pure water?",
      options: ["0", "7", "14", "10"],
      correctAnswer: 1
  },
  {
      question: "What is the main gas found in the Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: 1
  },
  {
      question: "What type of bond involves the sharing of electron pairs?",
      options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
      correctAnswer: 1
  },
  {
      question: "What is the formula for sodium chloride?",
      options: ["NaCl", "Na2Cl", "NaCl2", "Na3Cl"],
      correctAnswer: 0
  },
  {
      question: "What is the common name for dihydrogen monoxide?",
      options: ["Water", "Hydrogen peroxide", "Salt", "Alcohol"],
      correctAnswer: 0
  },
  {
      question: "What is the primary component of natural gas?",
      options: ["Propane", "Butane", "Methane", "Ethane"],
      correctAnswer: 2
  },
  {
      question: "Which element is a noble gas?",
      options: ["Oxygen", "Nitrogen", "Neon", "Chlorine"],
      correctAnswer: 2
  },
  {
      question: "What is the process of a solid turning directly into a gas called?",
      options: ["Condensation", "Sublimation", "Evaporation", "Deposition"],
      correctAnswer: 1
  },
  {
      question: "What is the chemical formula for carbon dioxide?",
      options: ["CO2", "CO", "C2O", "C2O2"],
      correctAnswer: 0
  },
  {
      question: "Which of the following is a strong acid?",
      options: ["Acetic acid", "Sulfuric acid", "Citric acid", "Carbonic acid"],
      correctAnswer: 1
  },
  {
      question: "What is the most abundant element in the universe?",
      options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
      correctAnswer: 1
  },
  {
      question: "What is the atomic mass of Carbon?",
      options: ["12.01", "14.01", "16.00", "18.02"],
      correctAnswer: 0
  },
  {
      question: "Which particle is positively charged?",
      options: ["Electron", "Neutron", "Proton", "All of the above"],
      correctAnswer: 2
  },
  {
      question: "What is the chemical formula for ammonia?",
      options: ["NH3", "N2H4", "NH4", "N2H3"],
      correctAnswer: 0
  },
  {
      question: "What type of reaction involves the exchange of ions?",
      options: ["Synthesis", "Decomposition", "Single Replacement", "Double Replacement"],
      correctAnswer: 3
  },
  {
      question: "What is the unit of measurement for moles?",
      options: ["Liters", "Grams", "Atoms", "None of the above"],
      correctAnswer: 3
  },
  {
      question: "Which of the following is not a state of matter?",
      options: ["Solid", "Liquid", "Gas", "Plasma", "Energy"],
      correctAnswer: 4
  },
  {
      question: "What is the most electronegative element?",
      options: ["Fluorine", "Chlorine", "Oxygen", "Nitrogen"],
      correctAnswer: 0
  },
  {
      question: "What is the primary use of sulfuric acid?",
      options: ["Fertilizer", "Batteries", "Detergents", "Food preservative"],
      correctAnswer: 1
  },
  {
      question: "What is the general formula for alkanes?",
      options: ["C_nH_(2n)", "C_nH_(2n+2)", "C_nH_(2n-2)", "C_nH_(n+1)"],
      correctAnswer: 1
  },
  {
      question: "What type of reaction is photosynthesis?",
      options: ["Exothermic", "Endothermic", "Catalytic", "Redox"],
      correctAnswer: 1
  },
  {
      question: "What is the primary component of proteins?",
      options: ["Nucleic acids", "Amino acids", "Fatty acids", "Carbohydrates"],
      correctAnswer: 1
  },
  {
      question: "Which acid is found in vinegar?",
      options: ["Lactic acid", "Acetic acid", "Citric acid", "Phosphoric acid"],
      correctAnswer: 1
  },
  {
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Au", "Pb", "Fe"],
      correctAnswer: 1
  },
  {
      question: "Which gas is released during cellular respiration?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: 1
  },
  {
      question: "What is the main component of the cell membrane?",
      options: ["Proteins", "Lipids", "Carbohydrates", "Nucleic acids"],
      correctAnswer: 1
  },
  {
      question: "Which of the following is an alkali metal?",
      options: ["Magnesium", "Calcium", "Potassium", "Aluminum"],
      correctAnswer: 2
  },
  {
      question: "What is the term for a solution that can conduct electricity?",
      options: ["Electrolyte", "Solvent", "Solute", "Acid"],
      correctAnswer: 0
  },
  {
      question: "What is the main type of bond in table salt?",
      options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
      correctAnswer: 0
  },
  {
      question: "What is the process of a liquid turning into a gas called?",
      options: ["Condensation", "Evaporation", "Freezing", "Sublimation"],
      correctAnswer: 1
  },
  {
      question: "What is the primary component of the Earth's crust?",
      options: ["Iron", "Silicon", "Oxygen", "Aluminum"],
      correctAnswer: 2
  },
  {
      question: "What type of reaction releases energy?",
      options: ["Exothermic", "Endothermic", "Catalytic", "Reversible"],
      correctAnswer: 0
  },
  {
      question: "Which of the following elements is not a halogen?",
      options: ["Fluorine", "Chlorine", "Bromine", "Argon"],
      correctAnswer: 3
  }
];
  
  // Shuffle the questions array and select 10 random questions
  function getRandomQuestions() {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, 10); // Get the first 10 shuffled questions
  }
  
  let currentQuestion = 0;
  let score = 0;
  const selectedQuestions = getRandomQuestions(); // Get random 10 questions for the quiz
  
  const questionText = document.getElementById("question-text");
  const optionsList = document.getElementById("options");
  const resultText = document.getElementById("result-text");
  const progressIndicator = document.getElementById("progress-indicator");
  
  const delayBetweenQuestions = 1000;
  
  function displayQuestion() {
    if (currentQuestion < selectedQuestions.length) {
      const question = selectedQuestions[currentQuestion];
      questionText.textContent = question.question;
      optionsList.innerHTML = "";
      question.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("option");
        optionButton.textContent = option;
        optionButton.dataset.index = index;
        optionButton.addEventListener("click", () => checkAnswer(optionButton, question.correctAnswer));
        optionsList.appendChild(document.createElement("li")).appendChild(optionButton);
      });
      updateProgressIndicator();
    } else {
      showFinalResult();
    }
  }
  
  function checkAnswer(selectedOption, correctAnswerIndex) {
    if (parseInt(selectedOption.dataset.index) === correctAnswerIndex) {
      score++;
      resultText.textContent = "Correct!";
      resultText.style.color = "green";
    } else {
      resultText.textContent = "Incorrect!";
      resultText.style.color = "red";
    }
    currentQuestion++;
    displayQuestionWithDelay();
  }
  
  function displayQuestionWithDelay() {
    setTimeout(() => {
      displayQuestion();
    }, delayBetweenQuestions);
  }
  
  function showFinalResult() {
    questionText.textContent = "Quiz completed!";
    optionsList.innerHTML = "";
    resultText.textContent = `Your score: ${score} / ${selectedQuestions.length}`;
    resultText.style.color = "black";
    progressIndicator.textContent = "";
  
    if (score > 7) {
      const celebration = document.getElementById("celebration");
      celebration.style.display = "flex";
  
      setTimeout(() => {
        celebration.style.display = "none";
      }, 5000);
    }
  }
  
  function updateProgressIndicator() {
    progressIndicator.textContent = `Question ${currentQuestion + 1} of ${selectedQuestions.length}`;
  }
  
  displayQuestion();
  