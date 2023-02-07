import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AuthContext, initialUserInfo } from "./hooks/context/authContext";

describe("app", () => {
  test("should render whole app", () => {
    render(
      <BrowserRouter>
       <AuthContext.Provider
          value={{
            userInfo: initialUserInfo,
            setuserInfo: () => {},
            signupUser: jest.fn(),
            loginUser: jest.fn(),
          }}
        >

        <App />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    const headingElement = screen.getByRole("heading", { name: "SkyQuiz" });
    expect(headingElement).toBeInTheDocument();
  });
});
