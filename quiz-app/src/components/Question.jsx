import React, { useEffect, useState } from "react";

const Question = ({ question, onAnswer }) => {
  const [optionValue, setOptionValue] = useState(null);

  useEffect(() => {
    setOptionValue(null);
  }, [question]);

  const handleOptionChange = (event) => {
    setOptionValue(event.target.value);
  };

  const handleSubmit = () => {
    if (optionValue !== null) {
      onAnswer(optionValue);
    }
  };

  return (
    <div className="bg-blue-200 rounded p-5">
      <p className="p-3 font-bold">{question.question}</p>
      <form>
        {question.options.map((option, index) => (
          <div className="flex" key={index}>
            <input
              type="radio"
              name="answer"
              value={option}
              className="m-1"
              checked={optionValue === option}
              onChange={handleOptionChange}
            />
            <p className="p-1">{option}</p>
          </div>
        ))}
        <button
          className="bg-blue-500 p-1 px-2 rounded m-2 font-bold text-gray-200"
          type="button"
          onClick={handleSubmit}
          disabled={optionValue === null}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Question;
