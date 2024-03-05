//Quiz CLASS
class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
  }
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }
  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

//QUESTION CLASS
class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

//DISPLAY QUESTION
const displayQuestion = () => {
  if (quiz.isEnded()) {
    displayQuizEnd();
    return;
  }

  let questionElement = document.getElementById('question');

  const currentQuestion = quiz.getQuestionIndex();
  if (currentQuestion) {
    questionElement.innerHTML = currentQuestion.text;
    currentQuestion.choices.forEach((choice, i) => {
      let choiceElement = document.getElementById('choice' + i);
      choiceElement.innerHTML = choice;
      guess('btn' + i, choice);
    });
  }
  showProgress(quiz);
};

//GUESS FUNCTION
const guess = (id, guess) => {
  document.getElementById(id).onclick = () => {
    quiz.guess(guess);
    displayQuestion();
  };
};

//SHOW PROGRESS
const showProgress = Quiz => {
  document.getElementById('progress').innerHTML = `Question ${
    Quiz.questionIndex + 1
  } of ${Quiz.questions.length}`;
};

//SHOW SCORES
const displayQuizEnd = () => {
  const quizEndHTML = `
      <h1>Quiz Completed</h1>
      <h3 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h3>
      <div class="quiz-repeat">
        <a href="index.html">Repeat Quiz</a>
      </div>
    `;

  document.getElementById('quiz').innerHTML = quizEndHTML;
};

//CREATE QUESTIONS
const questions = [
  new Question(
    'What is the capital of France?',
    ['London', 'Paris', 'Dublin', 'Madrid'],
    'Paris'
  ),
  new Question(
    'What is the capital of Spain?',
    ['London', 'Paris', 'Dublin', 'Madrid'],
    'Madrid'
  ),
  new Question(
    'What is the capital of Ireland?',
    ['London', 'Paris', 'Dublin', 'Madrid'],
    'Dublin'
  ),
  new Question(
    'What is the capital of England?',
    ['London', 'Paris', 'Dublin', 'Madrid'],
    'London'
  ),
];

//INITIALIZE QUIZ
const quiz = new Quiz(questions);

//DISPLAY QUESTION
displayQuestion();

//ADD A COUNTDOWN TIMER
const time = 1; // 10 minutes
let quizTime = (time * 60 * 60) / 60;

const startCountdown = () => {
  const counting = document.getElementById('count-down');
  const quizTimer = setInterval(() => {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      counting.textContent = 'Time is up!';
      displayQuizEnd();
    } else {
      const minutes = Math.floor(quizTime / 60) % 60;
      const seconds = Math.floor(quizTime % 60);
      counting.textContent = `TIME: ${minutes}:${
        seconds < 10 ? '0' : ''
      }${seconds}`;
      quizTime--;
    }
  }, 1000);
};

startCountdown();
