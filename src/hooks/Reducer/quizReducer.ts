import { QuizInitialState, QuizAction } from "../context/quizContext.types";

export const quizReducer = (
  quizState: QuizInitialState,
  quizAction: QuizAction
) => {
  switch (quizAction.type) {
    case "SELECTED_OPTION":
      return {
        ...quizState,
        selectedOptions: quizAction.payload,
      };
    case "RESET":
      return { ...quizState, selectedOptions: quizAction.payload };
    case "CURRECT_ANS":
      return {
        ...quizState,
        rightAnsArr: [...(quizState.rightAnsArr as []), quizAction.payload],
      };
    default:
      return quizState;
  }
};
