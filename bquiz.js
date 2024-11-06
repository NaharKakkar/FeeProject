// List of 40 biology questions
const questions = [
  {
      question: "What is the basic unit of life?",
      options: ["Atom", "Cell", "Tissue", "Organ"],
      correctAnswer: 1
  },
  {
      question: "What is the function of ribosomes?",
      options: ["Protein synthesis", "DNA replication", "Energy production", "Photosynthesis"],
      correctAnswer: 0
  },
  {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Endoplasmic reticulum", "Golgi apparatus"],
      correctAnswer: 1
  },
  {
      question: "What process do plants use to make food?",
      options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
      correctAnswer: 1
  },
  {
      question: "What is the main component of the cell membrane?",
      options: ["Proteins", "Nucleic acids", "Phospholipids", "Carbohydrates"],
      correctAnswer: 2
  },
  {
      question: "Which molecule carries genetic information?",
      options: ["DNA", "RNA", "Proteins", "Carbohydrates"],
      correctAnswer: 0
  },
  {
      question: "What is the primary function of the large intestine?",
      options: ["Water absorption", "Nutrient absorption", "Digestion", "Waste elimination"],
      correctAnswer: 0
  },
  {
      question: "What organ is responsible for detoxification in the body?",
      options: ["Liver", "Kidney", "Heart", "Lungs"],
      correctAnswer: 0
  },
  {
      question: "Which type of blood cell is involved in immune response?",
      options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
      correctAnswer: 1
  },
  {
      question: "What is the primary function of chlorophyll?",
      options: ["Photosynthesis", "Respiration", "Energy storage", "Cell division"],
      correctAnswer: 0
  },
  {
      question: "Which process involves the movement of water across a semipermeable membrane?",
      options: ["Diffusion", "Osmosis", "Active transport", "Facilitated diffusion"],
      correctAnswer: 1
  },
  {
      question: "What is the main function of the skin?",
      options: ["Protection", "Digestion", "Respiration", "Reproduction"],
      correctAnswer: 0
  },
  {
      question: "Which structure controls the entry and exit of substances in a cell?",
      options: ["Nucleus", "Cell wall", "Cell membrane", "Cytoplasm"],
      correctAnswer: 2
  },
  {
      question: "What type of reproduction involves only one parent?",
      options: ["Sexual", "Asexual", "Binary fission", "Mitosis"],
      correctAnswer: 1
  },
  {
      question: "Which process describes the conversion of glucose into energy?",
      options: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
      correctAnswer: 1
  },
  {
      question: "What is the genetic makeup of an organism called?",
      options: ["Phenotype", "Genotype", "Chromosome", "Allele"],
      correctAnswer: 1
  },
  {
      question: "Which organelle is known as the 'suicide bag' of the cell?",
      options: ["Lysosome", "Ribosome", "Mitochondria", "Nucleus"],
      correctAnswer: 0
  },
  {
      question: "What type of bond holds the two strands of DNA together?",
      options: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Peptide bond"],
      correctAnswer: 2
  },
  {
      question: "Which vitamin is produced when the skin is exposed to sunlight?",
      options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
      correctAnswer: 3
  },
  {
      question: "What type of cells are responsible for transmitting nerve impulses?",
      options: ["Muscle cells", "Blood cells", "Neurons", "Epithelial cells"],
      correctAnswer: 2
  },
  {
      question: "What is the basic structure of proteins?",
      options: ["Nucleotides", "Amino acids", "Fatty acids", "Monosaccharides"],
      correctAnswer: 1
  },
  {
      question: "What is the role of the enzyme in biological reactions?",
      options: ["Increase temperature", "Slow down reactions", "Lower activation energy", "Change products"],
      correctAnswer: 2
  },
  {
      question: "Which part of the brain controls balance and coordination?",
      options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
      correctAnswer: 1
  },
  {
      question: "What is the study of heredity called?",
      options: ["Evolution", "Genetics", "Biochemistry", "Ecology"],
      correctAnswer: 1
  },
  {
      question: "Which organ is responsible for filtering blood?",
      options: ["Heart", "Liver", "Lungs", "Kidneys"],
      correctAnswer: 3
  },
  {
      question: "What is the primary function of the respiratory system?",
      options: ["Circulate blood", "Exchange gases", "Digest food", "Filter toxins"],
      correctAnswer: 1
  },
  {
      question: "What type of organism is capable of photosynthesis?",
      options: ["Fungi", "Animals", "Plants", "Bacteria"],
      correctAnswer: 2
  },
  {
      question: "What is the name of the molecule that carries oxygen in the blood?",
      options: ["Hemoglobin", "Myoglobin", "Chlorophyll", "Carotene"],
      correctAnswer: 0
  },
  {
      question: "Which process occurs in the mitochondria?",
      options: ["Photosynthesis", "Fermentation", "Cell respiration", "Protein synthesis"],
      correctAnswer: 2
  },
  {
      question: "What is the role of the cell wall in plant cells?",
      options: ["Energy storage", "Protection and support", "Protein synthesis", "Photosynthesis"],
      correctAnswer: 1
  },
  {
      question: "What is the term for a group of similar cells that perform a specific function?",
      options: ["Organ", "Tissue", "Organism", "System"],
      correctAnswer: 1
  },
  {
      question: "What is the name of the largest organ in the human body?",
      options: ["Heart", "Liver", "Skin", "Lung"],
      correctAnswer: 2
  },
  {
      question: "What is the basic unit of heredity?",
      options: ["Chromosome", "Gene", "DNA", "RNA"],
      correctAnswer: 1
  },
  {
      question: "What is the primary function of the pancreas?",
      options: ["Produce hormones", "Digest food", "Regulate temperature", "Filter blood"],
      correctAnswer: 0
  },
  {
      question: "What is the process by which DNA is copied?",
      options: ["Replication", "Transcription", "Translation", "Mutation"],
      correctAnswer: 0
  },
  {
      question: "What is the term for an organism's observable characteristics?",
      options: ["Genotype", "Phenotype", "Allele", "Chromosome"],
      correctAnswer: 1
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
