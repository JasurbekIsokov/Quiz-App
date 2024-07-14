import React, { useContext } from "react";

import { quizData } from "../../constants/quizList/QuizList";
import { QuizBtnContext } from "../../lib/context/QuizContext";
import { SingleChoiseQuiz, MultiChoiseQuiz, InputQuiz } from "../../components";

const Home = () => {
  const { currentQuizNumber } = useContext(QuizBtnContext);

  if (quizData[currentQuizNumber - 1].type == "single") {
    return (
      <SingleChoiseQuiz
        key={quizData[currentQuizNumber - 1].quizNumber}
        quizNumber={quizData[currentQuizNumber - 1].quizNumber}
        question={quizData[currentQuizNumber - 1].question}
        options={quizData[currentQuizNumber - 1].options}
        correctAnswer={quizData[currentQuizNumber - 1].correctAnswer}
      />
    );
  }

  if (quizData[currentQuizNumber - 1].type == "multi") {
    return (
      <MultiChoiseQuiz
        key={quizData[currentQuizNumber - 1].quizNumber}
        quizNumber={quizData[currentQuizNumber - 1].quizNumber}
        question={quizData[currentQuizNumber - 1].question}
        options={quizData[currentQuizNumber - 1].options}
        correctAnswer={quizData[currentQuizNumber - 1].correctAnswer}
      />
    );
  }

  if (quizData[currentQuizNumber - 1].type == "inputText") {
    return (
      <InputQuiz
        key={quizData[currentQuizNumber - 1].quizNumber}
        quizNumber={quizData[currentQuizNumber - 1].quizNumber}
        question={quizData[currentQuizNumber - 1].question}
        options={quizData[currentQuizNumber - 1].options}
        correctAnswer={quizData[currentQuizNumber - 1].correctAnswer}
      />
    );
  }

  return <div />;
};

export default Home;
