export interface QuizType {
  type: "single" | "multi";
  quizNumber: number;
  question: string;
  options: string[];
  correctAnswer: string | string[];
}
