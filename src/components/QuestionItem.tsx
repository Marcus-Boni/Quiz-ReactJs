import { QuestionItemProps } from '@/@types/QuestionItemProps'
import { Options } from './Options'

export const QuestionItem = ({questions, onAnswer}: QuestionItemProps) => {
    return (
        <>
            <div className="border-t border-slate-200 border-b p-4 shadow-lg">
                <div key={questions.id}>
                    <h2 className="font-extrabold text-2xl">{questions.title}</h2>
                    <div className="flex flex-col gap-4 my-4">
                        <Options options={questions.options} onAnswer={(onAnswer)}/>
                    </div>
                </div>
            </div>
        </>
    )
}