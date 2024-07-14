import React, { useState } from "react";

import cls from "./SingleChoiseQuiz.module.scss";
import { classNames } from "../../helpers/classNames/classNames";
import QuizTitle from "../QuizTitle/QuizTitle";

type Option = {
  id: number;
  text: string;
  isCorrect: boolean;
};

const options: Option[] = [
  {
    text: "Peter Morwell",
    isCorrect: true,
    id: 1,
  },
  {
    text: "Don Norman",
    isCorrect: false,
    id: 2,
  },
  {
    text: "Steve Jobs",
    isCorrect: false,
    id: 3,
  },
  {
    text: "Jacob Nielsen",
    isCorrect: false,
    id: 4,
  },
];

const SingleChoiseQuiz = () => {
  const [activeAns, setActiveAns] = useState(0);

  const handleClickAns = (id: number) => {
    setActiveAns(id);
  };

  return (
    <div>
      <QuizTitle
        quizNumber={1}
        quizText={"UX Dizayn prinsiplari kim tomonidan o'ylab topilgan?"}
      />

      <div className={classNames(cls.SingleChoise)}>
        {options.map((item) => (
          <div
            className={classNames(
              cls.SingleChoise__option,
              {
                // [cls.activeOption]: activeAns === item.id && !item.isCorrect,
                [cls.correctOption]: activeAns === item.id && item.isCorrect,
                [cls.mistakeOption]: activeAns === item.id && !item.isCorrect,
              },
              []
            )}
            key={item.id}
            onClick={() => handleClickAns(item.id)}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleChoiseQuiz;
