import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, initialUserInfo } from "../../hooks/context/authContext";
import { initialquizState, quizContext } from "../../hooks/context/quizContext";
import { Result } from "./Result";

const MockResult = () => {
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
          <Result />
      </quizContext.Provider>
        </AuthContext.Provider>
    </BrowserRouter>
  );
};

describe("testing Result", () => {
  test("heading should preset", () => {
    render(<MockResult />);
    const headingElement = screen.getByRole("heading", {
      name: /Your Result/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
