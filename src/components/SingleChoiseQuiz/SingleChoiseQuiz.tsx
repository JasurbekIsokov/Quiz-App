import React, { useContext, useEffect, useState } from "react";

import cls from "./SingleChoiseQuiz.module.scss";
import { classNames } from "../../helpers/classNames/classNames";
import QuizTitle from "../QuizTitle/QuizTitle";
import { QuizBtnContext } from "../../lib/context/QuizContext";

type QuestionProps = {
  quizNumber: number;
  question: string;
  options: string[];
  correctAnswer: string[] | string;
};

const SingleChoiseQuiz: React.FC<QuestionProps> = ({
  quizNumber,
  question,
  options,
  correctAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const {
    isSelectedAnswer,
    setIsSelectedAnswer,
    setIsCheckedAnswer,
    isCheckedAnswer,
    setIsCorrectAnswer,
    ansvers,
    setAnsvers,
    currentQuizNumber,
  } = useContext(QuizBtnContext);

  const handleClickAns = (option: string) => {
    if ((isSelectedAnswer || !isSelectedAnswer) && isCheckedAnswer) {
      return;
    }

    setSelectedOption(option);
    setIsSelectedAnswer(true);
  };

  useEffect(() => {
    if (isCheckedAnswer) {
      if (selectedOption == correctAnswer) {
        setIsCorrectAnswer(true);

        // @ts-ignore
        setAnsvers((prevAnsvers) => ({
          ...prevAnsvers,
          [currentQuizNumber]: {
            isCorrect: true,
            isChecked: true,
            ans: selectedOption,
          },
        }));
      } else if (selectedOption !== correctAnswer) {
        setIsCorrectAnswer(false);

        // @ts-ignore
        setAnsvers((prevAnsvers) => ({
          ...prevAnsvers,
          [currentQuizNumber]: {
            isCorrect: false,
            isChecked: true,
            ans: selectedOption,
          },
        }));
      }
    }
  }, [isCheckedAnswer]);

  useEffect(() => {
    // @ts-ignore
    if (ansvers[currentQuizNumber].isChecked) {
      // @ts-ignore
      setSelectedOption(ansvers[currentQuizNumber].ans);
      setIsSelectedAnswer(true);
      setIsCheckedAnswer(true);
    }
  });

  return (
    <div>
      <QuizTitle quizNumber={quizNumber} quizText={question} />

      <div className={classNames(cls.SingleChoise)}>
        {options.map((option) => (
          <div
            className={classNames(
              cls.SingleChoise__option,
              {
                [cls.activeOption]:
                  option == selectedOption && isSelectedAnswer,
                [cls.correctOption]:
                  option == selectedOption &&
                  selectedOption == correctAnswer &&
                  isCheckedAnswer,
                [cls.mistakeOption]:
                  option == selectedOption &&
                  selectedOption !== correctAnswer &&
                  isCheckedAnswer,
              },
              []
            )}
            key={option}
            onClick={() => handleClickAns(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleChoiseQuiz;
