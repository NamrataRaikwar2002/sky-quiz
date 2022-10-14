import { Option } from "../../data/quizQuestion.types";

export type QuizInitialState = {
  rightAnsArr:any[],
  selectedOptions:Object[]  }
  
export type QuizAction =
| {
    type: "SELECTED_OPTION";
    payload: Option[];
  }
| { type: "CURRECT_ANS"; payload: string }
| { type: "RESET"; payload: [] };

export type QuizDispatch = (quizAction:QuizAction) => void;

export type QuizContext = {
  quizState: QuizInitialState,
  quizDispatch : QuizDispatch
}