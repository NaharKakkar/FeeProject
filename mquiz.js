// List of 40 mathematics questions
const questions = [
  {
      question: "What is the derivative of sin(x) with respect to x?",
      options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
      correctAnswer: 0
  },
  {
      question: "What is the value of π (Pi) approximately?",
      options: ["2.718", "3.141", "1.414", "1.732"],
      correctAnswer: 1
  },
  {
      question: "What is the sum of angles in a triangle?",
      options: ["90 degrees", "270 degrees", "180 degrees", "360 degrees"],
      correctAnswer: 2
  },
  {
      question: "What is the integral of x^2 with respect to x?",
      options: ["(1/2)x^2 + C", "x^3 + C", "(1/3)x^3 + C", "x^2 + C"],
      correctAnswer: 2
  },
  {
      question: "What is the square root of 64?",
      options: ["6", "8", "10", "12"],
      correctAnswer: 1
  },
  {
      question: "What is the formula for the area of a circle?",
      options: ["πd", "r^2", "2πr", "πr^2"],
      correctAnswer: 3
  },
  {
      question: "What is the solution to the equation 2x + 3 = 7?",
      options: ["x = 3", "x = 4", "x = 5", "x = 2"],
      correctAnswer: 3
  },
  {
      question: "What is the value of log10(100)?",
      options: ["10", "2", "100", "1"],
      correctAnswer: 1
  },
  {
      question: "What is 5 factorial (5!)?",
      options: ["120", "24", "60", "720"],
      correctAnswer: 0
  },
  {
      question: "What is the value of e (Euler's number) approximately?",
      options: ["3.141", "1.618", "1.414", "2.718"],
      correctAnswer: 3
  },
  {
      question: "What is the sum of the series 1 + 2 + 3 + ... + 100?",
      options: ["5000", "5150", "5050", "5500"],
      correctAnswer: 2
  },
  {
      question: "What is the formula for the Pythagorean theorem?",
      options: ["a + b = c", "a^2 - b^2 = c^2", "a^2 + b = c^2", "a^2 + b^2 = c^2"],
      correctAnswer: 3
  },
  {
      question: "What is the value of cos(0)?",
      options: ["1", "-1", "0", "Undefined"],
      correctAnswer: 0
  },
  {
      question: "Which of the following is a prime number?",
      options: ["4", "6", "9", "17"],
      correctAnswer: 3
  },
  {
      question: "What is the solution to the equation x^2 = 16?",
      options: ["x = 4", "x = 0", "x = ±4", "x = -4"],
      correctAnswer: 2
  },
  {
      question: "What is the formula for the circumference of a circle?",
      options: ["πr^2", "2πr", "r/2", "πd^2"],
      correctAnswer: 1
  },
  {
      question: "What is the derivative of e^x?",
      options: ["x^e", "e^x", "xe^(x-1)", "ln(x)"],
      correctAnswer: 1
  },
  {
      question: "What is the mean of the numbers 2, 4, 6, 8, 10?",
      options: ["5", "8", "6", "7"],
      correctAnswer: 2
  },
  {
      question: "What is the solution of the equation |x| = 5?",
      options: ["x = 5", "x = ±5", "x = -5", "x = 0"],
      correctAnswer: 1
  },
  {
      question: "What is the mode of the set {2, 4, 4, 6, 8, 10}?",
      options: ["8", "4", "2", "6"],
      correctAnswer: 1
  },
  {
      question: "What is 2^3?",
      options: ["6", "4", "8", "16"],
      correctAnswer: 2
  },
  {
      question: "What is the value of sin(90 degrees)?",
      options: ["0.5", "1", "-1", "0"],
      correctAnswer: 1
  },
  {
      question: "What is the derivative of x^3?",
      options: ["3x^2", "x^3", "2x", "x^2"],
      correctAnswer: 0
  },
  {
      question: "What is the equation of a line with slope 2 passing through (0, 1)?",
      options: ["y = x - 2", "y = 2x + 1", "y = x + 2", "y = 2x - 1"],
      correctAnswer: 1
  },
  {
      question: "What is the hypotenuse of a right triangle with legs 3 and 4?",
      options: ["5", "7", "6", "10"],
      correctAnswer: 0
  },
  {
      question: "What is the square of i, where i is the imaginary unit?",
      options: ["0", "-1", "1", "i"],
      correctAnswer: 1
  },
  {
      question: "What is the limit of (1/x) as x approaches infinity?",
      options: ["Infinity", "0", "-Infinity", "1"],
      correctAnswer: 1
  },
  {
      question: "What is the formula for compound interest?",
      options: ["A = P * rt", "A = P * e^(rt)", "A = P(1 + rt)", "A = P(1 + r/n)^(nt)"],
      correctAnswer: 3
  },
  {
      question: "What is the area of a triangle with base 5 and height 10?",
      options: ["25", "30", "50", "10"],
      correctAnswer: 0
  },
  {
      question: "What is the logarithmic form of the equation 10^3 = 1000?",
      options: ["log3(10) = 1000", "log10(1000) = 3", "log3(1000) = 10", "log10(3) = 1000"],
      correctAnswer: 1
  },
  {
      question: "What is the result of 1/2 + 1/3?",
      options: ["2/5", "1/5", "1/6", "5/6"],
      correctAnswer: 3
  },
  {
      question: "What is the tangent of 45 degrees?",
      options: ["1", "0.5", "Undefined", "0"],
      correctAnswer: 0
  },
  {
      question: "What is the midpoint of the segment joining (1, 2) and (3, 4)?",
      options: ["(1, 3)", "(2, 3)", "(2, 4)", "(3, 5)"],
      correctAnswer: 1
  },
  {
      question: "What is the result of the cross product of i and j?",
      options: ["0", "-k", "k", "j"],
      correctAnswer: 2
  },
  {
      question: "What is the probability of rolling a sum of 7 with two dice?",
      options: ["1/12", "1/6", "1/36", "1/4"],
      correctAnswer: 1
  },
  {
      question: "What is the slope of the line perpendicular to y = 2x + 3?",
      options: ["-2", "-1/2", "2", "1/2"],
      correctAnswer: 1
  },
  {
      question: "What is the discriminant of the quadratic equation ax^2 + bx + c = 0?",
      options: ["b^2 + 4ac", "b^2 - 4ac", "b^2 - ac", "4b^2 - ac"],
      correctAnswer: 1
  },
  {
      question: "What is the sum of the angles in a quadrilateral?",
      options: ["180 degrees", "90 degrees", "270 degrees", "360 degrees"],
      correctAnswer: 3
  },
  {
      question: "What is the geometric mean of 4 and 16?",
      options: ["8", "6", "12", "10"],
      correctAnswer: 0
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

