"use client"

import { useState } from "react";
import { Layout } from "@/components/Layout"
import { QuestionItem } from "@/components/QuestionItem"
import { questions } from "@/data/questions"
import { Results } from "@/components/Results";

const Page = () => {
  const [answers, setAnswers] = useState(['']);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const loadNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  const handleAnswered = (answer: string) => {
    if (answer === '✔' && answers.length === currentQuestion + 1) {
      setAnswers([...answers, answer])
    } else if (answer === '❌' && answers.length === currentQuestion + 1) {
      setAnswers([...answers, answer]);
    } 
    setTimeout(() => {
      loadNextQuestion();
    }, 3000);
  }

  return (
    <Layout>
      <section className="w-full max-w-xl bg-white rounded-md shadow-lg font-mono m-4">
        <h1 className="text-xl font-bold p-4 shadow-lg">Quiz de Culinária</h1>
        {!showResult && 
          <QuestionItem
            questions={questions[currentQuestion]}
            onAnswer={handleAnswered}
          />
        }
        {showResult &&
          <Results questions={questions} answers={answers} />
        }
        {!showResult &&
          <p className="text-center my-4 font-bold">
            {currentQuestion + 1} de {questions.length} pergunta
            {questions.length === 1 ? "" : "s"}
          </p>
        } 
        {showResult &&
          <div className="flex justify-center items-center m-5">
            <button
              type="button"
              className="p-3 bg-blue-200 border border-blue-300 text-center rounded-md hover:opacity-60 transition-all"
              onClick={() => {
                setAnswers(['']);
                setCurrentQuestion(0);
                setShowResult(false);
              }}
              >
              Reiniciar Quiz
            </button>
          </div>
        }
      </section>
    </Layout>
  );
}

export default Page
