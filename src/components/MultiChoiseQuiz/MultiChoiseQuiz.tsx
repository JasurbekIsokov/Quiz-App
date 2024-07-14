import React, { useContext, useEffect, useState } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import cls from "./MultiChoiseQuiz.module.scss";
import { classNames } from "../../helpers/classNames/classNames";
import QuizTitle from "../QuizTitle/QuizTitle";
import { QuizBtnContext } from "../../lib/context/QuizContext";

type QuestionProps = {
  quizNumber: number;
  question: string;
  options: string[];
  correctAnswer: string[] | string;
};

const MultiChoiseQuiz: React.FC<QuestionProps> = ({
  quizNumber,
  question,
  options,
  correctAnswer,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const {
    setIsSelectedAnswer,
    setIsCheckedAnswer,
    isCheckedAnswer,
    setIsCorrectAnswer,
    ansvers,
    setAnsvers,
    currentQuizNumber,
  } = useContext(QuizBtnContext);

  const handleClickAns = (option: string) => {
    if (isCheckedAnswer) {
      return;
    }

    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((item) => item !== option)
        : [...prevSelectedOptions, option]
    );

    setIsSelectedAnswer(true);
  };

  useEffect(() => {
    if (isCheckedAnswer) {
      const isCorrect =
        selectedOptions.every((option) => correctAnswer.includes(option)) &&
        selectedOptions.length === correctAnswer.length;
      setIsCorrectAnswer(isCorrect);

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
  }, [isCheckedAnswer]);

  useEffect(() => {
    // @ts-ignore
    if (ansvers[currentQuizNumber]?.isChecked) {
      // @ts-ignore
      setSelectedOptions(ansvers[currentQuizNumber].ans);
      setIsSelectedAnswer(true);
      setIsCheckedAnswer(true);
    } else {
      setIsSelectedAnswer(false);
      setIsCheckedAnswer(false);
    }
  }, [currentQuizNumber]);

  return (
    <FormGroup>
      <QuizTitle quizNumber={quizNumber} quizText={question} />

      <div className={classNames(cls.SingleChoise)}>
        {options.map((option) => (
          <div
            className={classNames(
              cls.SingleChoise__option,
              {
                [cls.activeOption]: selectedOptions.includes(option),
                [cls.correctOption]:
                  selectedOptions.includes(option) &&
                  correctAnswer.includes(option) &&
                  isCheckedAnswer,
                [cls.mistakeOption]:
                  selectedOptions.includes(option) &&
                  !correctAnswer.includes(option) &&
                  isCheckedAnswer,
              },
              []
            )}
            key={option}
            onClick={() => handleClickAns(option)}
          >
            <FormControlLabel
              onClick={() => handleClickAns(option)}
              style={{ width: "100%", height: "100%", padding: "10px 20px" }}
              control={
                <Checkbox
                  checked={selectedOptions.includes(option)}
                  onClick={() => handleClickAns(option)}
                />
              }
              label={option}
            />
          </div>
        ))}
      </div>
    </FormGroup>
  );
};

export default MultiChoiseQuiz;
