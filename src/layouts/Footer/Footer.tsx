import { useContext, useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import cls from "./Footer.module.scss";
import { classNames } from "../../helpers/classNames/classNames";

import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { QuizBtnContext } from "../../lib/context/QuizContext";
import { quizData } from "../../constants/quizList/QuizList";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Footer = () => {
  const [correctCount, setCorrectCount] = useState(0);
  const [mistakeCount, setMistakeCount] = useState(0);

  const {
    isSelectedAnswer,
    isCorrectAnswer,
    isCheckedAnswer,
    setIsCheckedAnswer,
    setIsCorrectAnswer,
    setIsSelectedAnswer,
    currentQuizNumber,
    setCurrentQuizNumber,
    ansvers,
  } = useContext(QuizBtnContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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

  const handleClickDone = () => {
    window.location.reload();
  };

  useEffect(() => {
    let correct = 0;
    let mistakes = 0;

    Object.values(ansvers).forEach((answer) => {
      // @ts-ignore
      if (answer.isChecked) {
        // @ts-ignore
        if (answer.isCorrect) {
          correct += 1;
        } else {
          mistakes += 1;
        }
      }
    });

    setCorrectCount(correct);
    setMistakeCount(mistakes);
  }, [ansvers]);

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

          {(isCorrectAnswer || !isCorrectAnswer) &&
            isCheckedAnswer &&
            currentQuizNumber == quizData.length && (
              <div
                onClick={handleClickOpen}
                className={classNames(cls.Footer__nextQuiz)}
              >
                Natijalar
              </div>
            )}

          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle
              sx={{ m: 0, p: 2, fontSize: "18px", fontWeight: "bold" }}
              id="customized-dialog-title"
            >
              Natijalar
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "#000",
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <div className={classNames(cls.resultContainer)}>
                <h2 className={classNames(cls.resultContainer__correctResult)}>
                  <span>To'g'ri javoblar</span>: {correctCount} ta
                </h2>
                <h2 className={classNames(cls.resultContainer__mistakeResult)}>
                  <span>Xato javoblar</span>: {mistakeCount} ta
                </h2>

                <div
                  className={classNames(cls.resultContainer__resultBtn)}
                  onClick={handleClickDone}
                >
                  Qaytadan bajarish
                </div>
              </div>
            </DialogContent>
          </BootstrapDialog>
        </div>
      </div>
    </div>
  );
};

export default Footer;
