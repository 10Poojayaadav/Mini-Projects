import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Quiz from "./components/Quiz";

function App() {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      id: 3,
      question: "Who developed the theory of relativity?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Nikola Tesla",
        "Galileo Galilei",
      ],
      correctAnswer: "Albert Einstein",
    },
    {
      id: 4,
      question: "What is the capital of Haryana?",
      options: ["Yamunanagar", "Panipat", "Gurgaon", "Chandigarh"],
      correctAnswer: "Chandigarh",
    },
    {
      id: 5,
      question: "What is the capital of Punjab?",
      options: ["Patiala", "Ludhiana", "Amritsar", "Chandigarh"],
      correctAnswer: "Chandigarh",
    },
    {
      id: 6,
      question: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
      correctAnswer: "Delhi",
    },
    {
      id: 7,
      question: "What is the capital of Uttarakhad?",
      options: ["Roorkee", "Haridwar", "Dehradun", "Nanital"],
      correctAnswer: "Dehradun",
    },
    {
      id: 8,
      question: "What is capital of Uttar Pradesh?",
      options: ["GB Nagar", "Lucknow", "Prayagraj", "Agra"],
      correctAnswer: "Lucknow",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100 flex flex-col" >
        <h1 className="text-4xl font-bold text-blue-600">
         Mini Quiz App
        </h1>
        <div>
          <Quiz question={questions}/>
        </div>
      </div>
    </>
  );
}

export default App;
