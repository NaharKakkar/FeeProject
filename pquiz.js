// List of 40 physics questions
const questions = [
  {
      question: "What is the SI unit of force?",
      options: ["Newton", "Joule", "Watt", "Pascal"],
      correctAnswer: 0
  },
  {
      question: "What is the speed of light in a vacuum?",
      options: ["3 x 10^8 m/s", "5 x 10^8 m/s", "1.5 x 10^8 m/s", "7.5 x 10^7 m/s"],
      correctAnswer: 0
  },
  {
      question: "Which law states that for every action, there is an equal and opposite reaction?",
      options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation of Momentum"],
      correctAnswer: 2
  },
  {
      question: "What is the acceleration due to gravity on Earth?",
      options: ["9.8 m/s^2", "10 m/s^2", "5 m/s^2", "20 m/s^2"],
      correctAnswer: 0
  },
  {
      question: "What is the formula for kinetic energy?",
      options: ["KE = 1/2 mv^2", "KE = mv", "KE = mg", "KE = mgh"],
      correctAnswer: 0
  },
  {
      question: "Which particle has no electric charge?",
      options: ["Proton", "Electron", "Neutron", "Positron"],
      correctAnswer: 2
  },
  {
      question: "What is the unit of electric current?",
      options: ["Ohm", "Volt", "Ampere", "Watt"],
      correctAnswer: 2
  },
  {
      question: "Which wave is used in wireless communication?",
      options: ["Sound Wave", "Radio Wave", "Water Wave", "Microwave"],
      correctAnswer: 1
  },
  {
      question: "What is the resistance of a conductor at absolute zero?",
      options: ["Zero", "Infinity", "Depends on material", "Constant"],
      correctAnswer: 0
  },
  {
      question: "What is the escape velocity on Earth?",
      options: ["11.2 km/s", "10 km/s", "15 km/s", "20 km/s"],
      correctAnswer: 0
  },
  {
      question: "Who proposed the theory of general relativity?",
      options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "James Clerk Maxwell"],
      correctAnswer: 0
  },
  {
      question: "What is the unit of energy?",
      options: ["Newton", "Joule", "Watt", "Pascal"],
      correctAnswer: 1
  },
  {
      question: "What is the primary cause of tides?",
      options: ["The rotation of the Earth", "Gravitational pull of the Moon", "Wind currents", "Temperature changes"],
      correctAnswer: 1
  },
  {
      question: "What is the charge of an electron?",
      options: ["Positive", "Negative", "Neutral", "Depends on the material"],
      correctAnswer: 1
  },
  {
      question: "What is the second law of thermodynamics?",
      options: ["Energy cannot be created or destroyed", "Heat flows from hot to cold", "For every action, there is an equal and opposite reaction", "The entropy of the universe is constantly increasing"],
      correctAnswer: 3
  },
  {
      question: "What is the unit of frequency?",
      options: ["Hertz", "Watt", "Volt", "Ampere"],
      correctAnswer: 0
  },
  {
      question: "What phenomenon explains why the sky is blue?",
      options: ["Diffraction", "Interference", "Scattering", "Reflection"],
      correctAnswer: 2
  },
  {
      question: "What is the density of water?",
      options: ["1 g/cm^3", "0.5 g/cm^3", "2 g/cm^3", "1.5 g/cm^3"],
      correctAnswer: 0
  },
  {
      question: "What is the SI unit of temperature?",
      options: ["Celsius", "Kelvin", "Fahrenheit", "Rankine"],
      correctAnswer: 1
  },
  {
      question: "Who discovered the electron?",
      options: ["James Chadwick", "J.J. Thomson", "Ernest Rutherford", "Niels Bohr"],
      correctAnswer: 1
  },
  {
      question: "What is the law of conservation of energy?",
      options: ["Energy cannot be created or destroyed", "Energy can be transformed", "Energy is always conserved", "All of the above"],
      correctAnswer: 3
  },
  {
      question: "What is the relationship between frequency and wavelength?",
      options: ["Inversely proportional", "Directly proportional", "Dependent on amplitude", "Independent"],
      correctAnswer: 0
  },
  {
      question: "What is the formula for gravitational potential energy?",
      options: ["PE = mgh", "PE = 1/2 mv^2", "PE = Fd", "PE = mv"],
      correctAnswer: 0
  },
  {
      question: "What is the main function of a transformer?",
      options: ["Increase voltage", "Decrease voltage", "Change current type", "All of the above"],
      correctAnswer: 3
  },
  {
      question: "What happens to the pressure of a gas if the volume is decreased?",
      options: ["Pressure decreases", "Pressure increases", "Pressure stays the same", "Depends on temperature"],
      correctAnswer: 1
  },
  {
      question: "Which scientist is known for the laws of motion?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
      correctAnswer: 0
  },
  {
      question: "What is the speed of sound in air at room temperature?",
      options: ["343 m/s", "300 m/s", "1500 m/s", "1200 m/s"],
      correctAnswer: 0
  },
  {
      question: "What type of lens is used to correct nearsightedness?",
      options: ["Convex lens", "Concave lens", "Bifocal lens", "Flat lens"],
      correctAnswer: 1
  },
  {
      question: "What is the primary source of energy for the Earth?",
      options: ["The Moon", "The Sun", "The Earth itself", "Nuclear power"],
      correctAnswer: 1
  },
  {
      question: "What is the term for the bending of light as it passes from one medium to another?",
      options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
      correctAnswer: 1
  },
  {
      question: "What is the primary factor that determines the temperature of an object?",
      options: ["Mass", "Volume", "Energy content", "Color"],
      correctAnswer: 2
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
