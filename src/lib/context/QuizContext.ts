import { createContext } from "react";

export interface QuizProps {
  isSelectedAnswer: boolean;
  setIsSelectedAnswer: (prop: boolean) => void;
  isCheckedAnswer: boolean;
  setIsCheckedAnswer: (prop: boolean) => void;
  isCorrectAnswer: boolean;
  setIsCorrectAnswer: (prop: boolean) => void;
  currentQuizNumber: number;
  setCurrentQuizNumber: (prop: number) => void;
  ansvers: {};
  setAnsvers: () => void;
}

export const QuizBtnContext = createContext<QuizProps>({
  isSelectedAnswer: false,
  setIsSelectedAnswer: () => {},
  isCheckedAnswer: false,
  setIsCheckedAnswer: () => {},
  isCorrectAnswer: false,
  setIsCorrectAnswer: () => {},
  currentQuizNumber: 1,
  setCurrentQuizNumber: () => {},
  ansvers: {},
  setAnsvers: () => {},
});
