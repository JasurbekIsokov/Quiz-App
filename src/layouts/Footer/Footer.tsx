import { useContext } from "react";

import cls from "./Footer.module.scss";
import { classNames } from "../../helpers/classNames/classNames";

import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { QuizBtnContext } from "../../lib/context/QuizContext";
import { quizData } from "../../constants/quizList/QuizList";

const Footer = () => {
  const {
    isSelectedAnswer,
    isCorrectAnswer,
    isCheckedAnswer,
    setIsCheckedAnswer,
    setIsCorrectAnswer,
    setIsSelectedAnswer,
    currentQuizNumber,
    setCurrentQuizNumber,
  } = useContext(QuizBtnContext);

  const handleClickCheckAns = () => {
    setIsCheckedAnswer(true);
  };

  const handleClickNextQuiz = () => {
    if (currentQuizNumber < quizData.length) {
      setCurrentQuizNumber(currentQuizNumber + 1);
      setIsCheckedAnswer(false);
      setIsCorrectAnswer(false);
      setIsSelectedAnswer(false);
    }
  };

  const handleClickPrevQuiz = () => {
    if (currentQuizNumber > 1) {
      setCurrentQuizNumber(currentQuizNumber - 1);
      setIsCheckedAnswer(false);
      setIsCorrectAnswer(false);
      setIsSelectedAnswer(false);
    }
  };

  return (
    <div
      className={classNames(cls.Footer)}
      style={{
        backgroundColor:
          !isCorrectAnswer && isCheckedAnswer
            ? "#f9c6c6"
            : isCorrectAnswer
            ? "#c6ecdb"
            : "",
        borderTop: "2px solid #d0d0d0",
      }}
    >
      <div className={cls.Footer__container}>
        <div className={classNames(cls.Footer__ansverAction)}>
          {isCorrectAnswer && (
            <div className={cls.correctAns}>
              <div>
                <FaCheck style={{ fontSize: "32px", color: "#1a7a5e" }} />
              </div>

              <h2>Ofarin, siz topdingiz!</h2>
            </div>
          )}

          {!isCorrectAnswer && isCheckedAnswer && (
            <div className={cls.mistakeAns}>
              <div className={cls.mistakeAns__sircle}>
                <IoClose style={{ fontSize: "36px", color: "#c62a2f" }} />
              </div>

              <div>
                <h2>Javob noto'g'ri!</h2>
                <p>Yana urinib ko'ring.</p>
              </div>
            </div>
          )}
        </div>

        <div className={cls.Footer__bnts}>
          {(isCorrectAnswer || !isCorrectAnswer) &&
            isCheckedAnswer &&
            currentQuizNumber > 1 && (
              <div
                className={classNames(cls.Footer__prevQuiz)}
                onClick={handleClickPrevQuiz}
              >
                Avvalgi savol
              </div>
            )}

          {/* {!isCorrectAnswer && isCheckedAnswer && (
            <div className={classNames(cls.Footer__reaction)}>
              Qayta urinish
            </div>
          )} */}

          {(isCorrectAnswer || !isCorrectAnswer) &&
            isCheckedAnswer &&
            currentQuizNumber < quizData.length && (
              <div
                className={classNames(cls.Footer__nextQuiz)}
                onClick={handleClickNextQuiz}
              >
                Keyingi savol
              </div>
            )}

          {!isCheckedAnswer && (
            <div
              className={classNames(cls.Footer__checkAns, {
                [cls.Footer__checkAnsDisabled]: !isSelectedAnswer,
              })}
              onClick={handleClickCheckAns}
            >
              Javobni tekshirish
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
