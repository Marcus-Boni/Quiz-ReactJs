import { ResultsProps } from "@/@types/ResultsProps"

export const Results = ({questions, answers}: ResultsProps) => {
    return (
        <>
            <div className="border-t border-slate-200 border-b p-4 shadow-lg">
                <div>
                    <h2 className="font-extrabold text-2xl">Resultado</h2>
                    {questions.map((question, index) => (
                        <div key={question.id} className="flex flex-col gap-4 my-4 border-b border-blue-300">
                            <p>{question.title}</p>
                            <p className="font-extrabold">Resposta: {question.answer}</p>
                            <p className="font-extrabold">Sua Resposta: {answers[index + 1]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}