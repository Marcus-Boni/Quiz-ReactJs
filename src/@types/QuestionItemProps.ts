export type QuestionItemProps = {
  questions: {
    id: number;
    title: string;
    options: string[];
    answer: string;
  };
  onAnswer: (answer: string) => void;
};
