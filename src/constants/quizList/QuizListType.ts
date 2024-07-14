export interface QuizType {
  type: "single" | "multi" | "inputText";
  quizNumber: number;
  question: string;
  options: string[];
  correctAnswer: string | string[];
}
