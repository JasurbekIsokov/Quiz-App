import React, { ReactNode, useMemo, useState } from "react";
import { QuizBtnContext } from "../../lib/context/QuizContext";

interface QuizBtnProviderProps {
  initialQuizBtn?: string;
  children: ReactNode;
}

const QuizBtnProvider = (props: QuizBtnProviderProps) => {
  const { initialQuizBtn, children } = props;

  const [currentQuizNumber, setCurrentQuizNumber] = useState(1);
  const [isSelectedAnswer, setIsSelectedAnswer] = useState(false);
  const [isCheckedAnswer, setIsCheckedAnswer] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const [ansvers, setAnsvers] = useState({
    1: { isCorrect: false, isChecked: false, ans: "" },
    2: { isCorrect: false, isChecked: false, ans: "" },
    3: { isCorrect: false, isChecked: false, ans: "" },
    4: { isCorrect: false, isChecked: false, ans: "" },
    5: { isCorrect: false, isChecked: false, ans: "" },
    6: { isCorrect: false, isChecked: false, ans: "" },
    7: { isCorrect: false, isChecked: false, ans: "" },
    8: { isCorrect: false, isChecked: false, ans: "" },
  });

  const defaultProps = useMemo(
    () => ({
      isSelectedAnswer,
      setIsSelectedAnswer,
      isCheckedAnswer,
      setIsCheckedAnswer,
      isCorrectAnswer,
      setIsCorrectAnswer,
      currentQuizNumber,
      setCurrentQuizNumber,
      ansvers,
      setAnsvers,
    }),
    [
      isSelectedAnswer,
      isCheckedAnswer,
      isCorrectAnswer,
      currentQuizNumber,
      ansvers,
    ]
  );

  return (
    // @ts-ignore
    <QuizBtnContext.Provider value={defaultProps}>
      {children}
    </QuizBtnContext.Provider>
  );
};

export default QuizBtnProvider;
