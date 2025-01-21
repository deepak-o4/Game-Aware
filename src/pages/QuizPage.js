import React, { useState, useEffect, useCallback } from "react";
import "./QuizPage.css";

const QuizPage = () => {
  // Questions Array
  const questions = [
    {
      question: "What is the main difference between gaming and gambling?",
      options: [
        "Gaming is skill-based, gambling is chance-based.",
        "Gaming always costs money, gambling is free.",
        "Gaming is not competitive, gambling is.",
      ],
      answer: "Gaming is skill-based, gambling is chance-based.",
      image: "https://miro.medium.com/v2/resize:fit:1024/1*8NA3QgQHhfGPUsh9U4MLhw.png", // Placeholder image URL
    },
    {
      question: "What is a responsible gaming practice?",
      options: [
        "Playing games for 12 hours non-stop.",
        "Setting time and spending limits.",
        "Betting all your savings in one go.",
      ],
      answer: "Setting time and spending limits.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYy8n0kyIgTANraVeRsAVs76wmMHnORBL4aocbEG8rWj__rYFM363kVn_0DztWhyH0HY&usqp=CAU",
    },
    {
      question: "What can gambling addiction lead to?",
      options: [
        "Financial losses.",
        "Emotional distress.",
        "Both of the above.",
      ],
      answer: "Both of the above.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ08osFrm8u_6O5W7_mWG3ZmLuADROjbIlaZhwxx5YcgvcwIxxXI5BGtkePVcH_mBqmeoM&usqp=CAU",
    },
    {
      question: "How do video games impact mental health?",
      options: [
        "Can improve cognitive abilities.",
        "Has no impact on mental health.",
        "May cause isolation and stress if overdone.",
      ],
      answer: "May cause isolation and stress if overdone.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cT3sndgRve1BxudNegdHVopQxxLpMvN3-N8AaLlBtD81vabbF6Af_kAQM9kZgPQ02Qs&usqp=CAU",
    },
    {
      question: "What is one sign of gambling addiction?",
      options: [
        "Making informed betting choices.",
        "Gambling as a way to relieve stress.",
        "Setting time and budget limits.",
      ],
      answer: "Gambling as a way to relieve stress.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAO92yLcf9lgYmNQ0pO7PdoTfUe_LBExGZKP2n7kLW5VIgUsr2eegxyxaqCOd-cTJD6ww&usqp=CAU",
    },
    {
      question: "What is a good practice for responsible gaming?",
      options: [
        "Setting a time limit and sticking to it.",
        "Playing continuously without taking breaks.",
        "Betting large amounts to win big.",
      ],
      answer: "Setting a time limit and sticking to it.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Ghkx4XLrcP0TwQdEs9h5qlN5FfWNO0Lhi0MQlD2zbuGT0zPdoADL_ovzwtQX4A0joS4&usqp=CAU",
    },
    {
      question: "What is a red flag for gambling addiction?",
      options: [
        "Winning frequently.",
        "Feeling the need to gamble more to experience the same thrill.",
        "Enjoying games for leisure.",
      ],
      answer: "Feeling the need to gamble more to experience the same thrill.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuzgzEyRrmfSWSBP8owGHBn7YyP1DaiL3jkg&s",
    },
    {
      question: "How can gaming improve cognitive skills?",
      options: [
        "By enhancing memory and problem-solving abilities.",
        "By increasing stress levels.",
        "By promoting unhealthy competition.",
      ],
      answer: "By enhancing memory and problem-solving abilities.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzY6RQlXOessWotksDh5GfYsTaUP6cXDkFl6XWUk5Kjre18Qer_l-N0Ffs6nBZSt0NT0&usqp=CAU",
    },
    {
      question: "What does addiction to gambling often lead to?",
      options: [
        "Physical health improvement.",
        "Strained relationships and financial issues.",
        "Increased enjoyment of life.",
      ],
      answer: "Strained relationships and financial issues.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoYfD4gGM92uRUHVF5saqb1h12o_2P9uu4Q&s",
    },
    {
      question: "What is a good way to prevent gambling addiction?",
      options: [
        "Limit the amount of money spent.",
        "Engage in regular, healthy social interactions.",
        "Avoid all forms of entertainment.",
      ],
      answer: "Limit the amount of money spent.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGm4JD-FqTQ5Irtu9kLgA-WSZ27Yu34nzwQ&s",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Shuffle questions on page load and each time quiz is restarted
  const shuffleQuestions = useCallback(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5); // Randomly shuffling the questions
    setShuffledQuestions(shuffled);
  }, []);

  useEffect(() => {
    shuffleQuestions();
  }, [shuffleQuestions]);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === shuffledQuestions[currentQuestion]?.answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    shuffleQuestions(); // Shuffle questions again on restart
  };

  // Render the current question only if shuffledQuestions is available and has a question
  if (!shuffledQuestions[currentQuestion]) {
    return <div>Loading...</div>;
  }

  const getResultMessage = () => {
    if (score === shuffledQuestions.length) {
      return {
        message: "Excellent! You have a great understanding of responsible gaming and gambling.",
        advice: "Keep up the good work, and always stay mindful of the risks of gambling!"
      };
    } else if (score >= shuffledQuestions.length * 0.7) {
      return {
        message: "Good job! You have a solid understanding, but there's room for improvement.",
        advice: "Consider revisiting some of the responsible gaming practices to improve your knowledge."
      };
    } else {
      return {
        message: "It seems you need to brush up on responsible gaming and gambling.",
        advice: "Be sure to learn about the risks associated with gambling and how to manage your gaming habits."
      };
    }
  };

  const result = getResultMessage();

  return (
    <div className="quiz-page">
      {showScore ? (
        <div className="score-section">
          <h1>Your Score: {score} / {shuffledQuestions.length}</h1>
          <p>{result.message}</p>
          <p>{result.advice}</p>
          <button className="btn" onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-section">
          <div className="question-container">
            <img src={shuffledQuestions[currentQuestion]?.image} alt="Quiz Visual" className="question-image" />
            <h1>{shuffledQuestions[currentQuestion]?.question}</h1>
          </div>
          <div className="options">
            {shuffledQuestions[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                className="option-btn"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;