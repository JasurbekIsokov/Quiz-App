import React, { useContext, useEffect, useState } from "react";
import { FormGroup } from "@mui/material";
import cls from "./InputQuiz.module.scss";
import { classNames } from "../../helpers/classNames/classNames";
import QuizTitle from "../QuizTitle/QuizTitle";
import { QuizBtnContext } from "../../lib/context/QuizContext";

type QuestionProps = {
  quizNumber: number;
  question: string;
  options: string[];
  correctAnswer: string[] | string;
};

const InputQuiz: React.FC<QuestionProps> = ({
  quizNumber,
  question,
  options,
  correctAnswer,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    new Array(options.length).fill("")
  );
  const [inputValues, setInputValues] = useState<Record<number, string>>({});

  const {
    setIsSelectedAnswer,
    setIsCheckedAnswer,
    isCheckedAnswer,
    setIsCorrectAnswer,
    ansvers,
    setAnsvers,
    currentQuizNumber,
  } = useContext(QuizBtnContext);

  const handleInputChange = (index: number, value: string) => {
    if (isCheckedAnswer) {
      return;
    }

    setSelectedOptions((prevSelectedOptions) => {
      const newOptions = [...prevSelectedOptions];
      newOptions[index] = value;
      return newOptions;
    });

    setInputValues((prevValues) => ({
      ...prevValues,
      [index]: value,
    }));

    setIsSelectedAnswer(true);
  };

  useEffect(() => {
    if (isCheckedAnswer) {
      const isCorrect = selectedOptions.every(
        (option, idx) => option === correctAnswer[idx]
      );
      setIsCorrectAnswer(isCorrect);

      if (selectedOptions[0] ?? selectedOptions[1]) {
        // @ts-ignore
        setAnsvers((prevAnsvers) => ({
          ...prevAnsvers,
          [currentQuizNumber]: {
            isCorrect,
            isChecked: true,
            ans: selectedOptions,
          },
        }));
      }
    }
  }, [isCheckedAnswer]);

  useEffect(() => {
    // @ts-ignore
    if (ansvers[currentQuizNumber]?.isChecked) {
      // @ts-ignore
      setInputValues(ansvers[currentQuizNumber].ans);
      setIsSelectedAnswer(true);
      setIsCheckedAnswer(true);
    }
  }, [currentQuizNumber]);

  return (
    <FormGroup>
      <QuizTitle quizNumber={quizNumber} quizText={question} />

      <div className={classNames(cls.SingleChoise)}>
        {options.map((option, index) => (
          <div className={classNames(cls.SingleChoise__option)} key={index}>
            {option.split("").map((word, idx) => {
              if (word === "$") {
                return (
                  <input
                    key={idx}
                    className={classNames(
                      cls.TextInput,
                      {
                        [cls.correctOption]:
                          selectedOptions[index] === correctAnswer[index] &&
                          isCheckedAnswer,
                        [cls.mistakeOption]:
                          selectedOptions[index] !== correctAnswer[index] &&
                          isCheckedAnswer,
                      },
                      []
                    )}
                    value={inputValues[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                );
              } else {
                return <span key={idx}>{word}</span>;
              }
            })}
          </div>
        ))}
      </div>
    </FormGroup>
  );
};

export default InputQuiz;
