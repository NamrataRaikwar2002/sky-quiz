import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, initialUserInfo } from "../../hooks/context/authContext";
import { Category } from "./Category";

const MockCategory = () => {
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
        <Category />
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

describe("testing category component", () => {
  test("should present heading", () => {
    render(<MockCategory />);
    const headingElement = screen.getByText(
      "Select one to start playing and, show you talent!!"
    );
    expect(headingElement).toBeInTheDocument();
  });
});
