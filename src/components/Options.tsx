import { useState } from "react"
import { questions } from "@/data/questions"
import { OptionsProps } from "@/@types/OptionsProps"

export const Options = ({ options, onAnswer }: OptionsProps) => {
  
  const [correctOption, setSelectedOption] = useState('')
  const [wrongOption, setWrongOption] = useState('')

    const verifyAnswer = (option: string) => {
        const correctAnswer = questions.find( (item) => item.answer === option)
        if (correctAnswer) {
          setSelectedOption(correctAnswer.answer)
          onAnswer("✔");
        } else if (!correctAnswer && correctOption === '') {
          setWrongOption(option)
          onAnswer("❌");
        }
    }

    return (
      <>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`p-3 bg-blue-200 border border-blue-300 text-left rounded-md ${correctOption ? "hover:opacity-100" : "hover:opacity-60"} transition-all
            ${
              correctOption === option &&
              `bg-green-200 border-green-300`
            }
            ${
              wrongOption === option && correctOption === ""
                ? `bg-red-200 border-red-300`
                : "bg-blue-200 border-blue-300"
            }
            `}
            onClick={() => verifyAnswer(option)}
          >
            {option}
          </button>
        ))}
      </>
    );
}