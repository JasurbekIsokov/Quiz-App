import { useContext, useEffect } from "react";
import { quizData } from "../../constants/quizList/QuizList";
import cls from "./Header.module.scss";
import { QuizBtnContext } from "../../lib/context/QuizContext";
import { classNames } from "../../helpers/classNames/classNames";

const Header = () => {
  const {
    currentQuizNumber,
    ansvers,
    setCurrentQuizNumber,
    setIsSelectedAnswer,
    setIsCheckedAnswer,
    setIsCorrectAnswer,
  } = useContext(QuizBtnContext);

  // const handleClickQuizNumber = (quizNumber: number) => {
  //   setCurrentQuizNumber(quizNumber);
  // };

  useEffect(() => {
    setIsSelectedAnswer(false);
    setIsCheckedAnswer(false);
    setIsCorrectAnswer(false);
  }, [currentQuizNumber]);

  return (
    <div className={classNames(cls.header)}>
      <div className={classNames(cls.header__quizNumbersBox)}>
        {quizData.map((quiz) => (
          <div
            // onClick={() => handleClickQuizNumber(quiz.quizNumber)}
            className={classNames(cls["header__quizNumbersBox--quizBox"], {
              [cls.activeQuizBox]: quiz.quizNumber == currentQuizNumber,
              // @ts-ignore
              [cls.correctQuizBox]:
                // @ts-ignore
                ansvers[quiz.quizNumber].isChecked &&
                // @ts-ignore
                ansvers[quiz.quizNumber].isCorrect,
              // @ts-ignore
              [cls.mistakeQuizBox]:
                // @ts-ignore
                ansvers[quiz.quizNumber].isChecked &&
                // @ts-ignore
                !ansvers[quiz.quizNumber].isCorrect,
            })}
          >
            {quiz.quizNumber}
          </div>
        ))}
      </div>

      <div className={cls.header__quizNumbers}>
        {currentQuizNumber}/{quizData.length}
      </div>
    </div>
  );
};

export default Header;
