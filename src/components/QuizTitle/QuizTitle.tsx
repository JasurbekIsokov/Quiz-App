import React from "react";

import cls from "./QuizTitle.module.scss";
import { classNames } from "../../helpers/classNames/classNames";

interface QuizTitleProps {
  quizNumber: number;
  quizText: string;
}

const QuizTitle = ({ quizNumber, quizText }: QuizTitleProps) => {
  return (
    <h2 className={classNames(cls.QuizTitle)}>
      <span>{quizNumber}</span>. {quizText}
    </h2>
  );
};

export default QuizTitle;
