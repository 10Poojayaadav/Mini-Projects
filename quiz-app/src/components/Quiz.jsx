import React, { useState } from "react";
import Question from "./Question";

const Quiz = ({ question }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [userAnswer, setUserAnswer] = useState([]);
  const [finish, setFinish] = useState(false);

  const handleAnswer = (answer) => {
    setUserAnswer([
      ...userAnswer,
      {
        questionId: question[currentQuestionIndex].id,
        answer,
      },
    ]);
    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
        setFinish(true);
    }
  };

  return (
    <div className="bg-blue-400 text-gray-500 p-5 rounded m-5 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 w-[100%]">
      {!finish ? (
        <Question
          question={question[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <div className="text-gray-200">
          <p> Quiz Finished </p>
          <ul>
            {userAnswer.map((answer, index) => (
              <>
                <li>
                    {`Question ${answer.questionId}: Your Answer ${answer.answer ===
                        question.find((q)=> q.id === answer.questionId).correctAnswer ?"correct": "incorrect"
                    }`}
                </li>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;
