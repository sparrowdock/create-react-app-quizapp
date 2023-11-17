// Quiz.js

import React, { useState } from 'react';

const questions = [
  {
    question: 'Which is the fastest printer?',
    options: ['Laser Printer', 'Jet Printer', 'Thermal Printer', 'Daisy wheel printer'],
    correctAnswer: 'Laser Printer',
  },
  {
    question: 'Which programming language is this app built with?',
    options: ['Java', 'Python', 'JavaScript', 'C#'],
    correctAnswer: 'JavaScript',
  },
  {
    question: 'What is the mascot of the Linux operating system??',
    options: ['Bear', 'Blue Whale', 'Penguin', 'Hippopotamus'],
    correctAnswer: 'Penguin',
  },
  {
    question: 'In what year was React first released?',
    options: ['2010', '2013', '2015', '2017'],
    correctAnswer: '2013',
  },
  {
    question: 'Which symbol is used to separate the username of an email address?',
    options: ['@', '&', '$', '#'],
    correctAnswer: '@',
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;
    setUserAnswers([...userAnswers, { question: currentQuestion, answer: selectedOption, isCorrect }]);
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score} out of {questions.length}</p>
        <button onClick={resetQuiz}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].question}</p>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index} onClick={() => handleAnswerClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
