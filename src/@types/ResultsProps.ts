export type ResultsProps = {
    questions: {
        id: number;
        title: string;
        options: string[];
        answer: string;
    }[];
    answers: string[];
};
