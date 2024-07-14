import React, { useContext } from "react";
import SingleChoiseQuiz from "../../components/SingleChoiseQuiz/SingleChoiseQuiz";
import { quizData } from "../../constants/quizList/QuizList";
import { QuizBtnContext } from "../../lib/context/QuizContext";

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

  return <div></div>;
};

export default Home;
