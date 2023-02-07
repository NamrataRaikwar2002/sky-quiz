//@ts-nocheck
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { quizReducer } from "../../hooks/Reducer/quizReducer";
import { AuthContext, initialUserInfo } from "../../hooks/context/authContext";
import { Question } from "./Question";
import { initialquizState, quizContext } from "../../hooks/context/quizContext";
import { quizQuestion } from "../../data/quizQuestion";


const initialState = {
  rightAnsArr: [],
  selectedOptions: [],
};

const MockQuestion = () => {
  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{
          userInfo: initialUserInfo,
          setuserInfo: () => {},
          signupUser: jest.fn(),
          loginUser: jest.fn(),
        }}
      >
        <quizContext.Provider
          value={{ quizState: initialquizState, quizDispatch: jest.fn() }}
        >
          <Question />
        </quizContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

describe("testing quiz reducer", () => {
  test("properly add selected options", () => {
    const action = {
      type: "SLECTED_OPTION",
      payload: [],
    };

    const state = quizReducer(initialState, action);

    const expectedState = {
      rightAnsArr: [],
      selectedOptions: [],
    };

    expect(state).toEqual(expectedState);
  });

  test("Currect answer", () => {
    const action = {
      type: "CURRECT_ANS",
      payload: 2,
    };

    const state = quizReducer(initialState, action);

    const expectedState = {
      rightAnsArr: [2],
      selectedOptions: [],
    };

    expect(state).toEqual(expectedState);
  });

  test("Reset when new quiz starts", () => {
    const action = {
      type: "RESET",
      payload: [],
    };

    const state = quizReducer(initialState, action);

    const expectedState = {
      rightAnsArr: [],
      selectedOptions: [],
    };

    expect(state).toEqual(expectedState);
  });

});
