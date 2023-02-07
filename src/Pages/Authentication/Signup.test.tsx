import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, initialUserInfo } from "../../hooks/context/authContext";
import { Signup } from "./Signup";

const MockSignup = () => {
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
        <Signup />
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

describe("signup testing", () => {
  test("should open login page", () => {
    render(<MockSignup />);
    const linkElement = screen.getByText(/Already have an account/i);
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe("/login-page");
  });

  test("should show and hide password", () => {
    render(<MockSignup />);
    const closedEyeIcon = screen.getByTestId(/closeEyeIcon/i);
    const pswdInputElement = screen.getByPlaceholderText("Enter Password");
    userEvent.click(closedEyeIcon);
    expect(pswdInputElement).toHaveAttribute("type", "text");
    const openEyeIcon = screen.getByTestId(/openEyeIcon/i);
    userEvent.click(openEyeIcon);
    expect(pswdInputElement).toHaveAttribute("type", "password");
  });

});
