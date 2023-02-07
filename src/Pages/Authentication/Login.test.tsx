import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, initialUserInfo } from "../../hooks/context/authContext";
import { Login } from "./Login";

const MockLogin = () => {
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
        <Login />
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

describe("testing login page", () => {
  test("clicking on  Create New Account should open signup page", () => {
    render(<MockLogin />);
    const linkElement = screen.getByRole("link", {
      name: /Create New Account/i,
    });
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe("/signup-page");
  });

  test("input should have guest email after clicking on add guest credentials", () => {
    render(<MockLogin />);
    const guestButton = screen.getByRole("button", {
      name: /Add Guest Credentials/i,
    });
    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    userEvent.click(guestButton);
    expect(emailInput).toHaveValue("admin@gmail.com");
  });

  test("should show and hide password", () => {
    render(<MockLogin />);
    const closedEyeIcon = screen.getByTestId(/closeEyeIcon/i);
    const pswdInputElement = screen.getByPlaceholderText("Password");
    userEvent.click(closedEyeIcon);
    expect(pswdInputElement).toHaveAttribute("type", "text");
    const openEyeIcon = screen.getByTestId(/openEyeIcon/i);
    userEvent.click(openEyeIcon);
    expect(pswdInputElement).toHaveAttribute("type", "password");
  });
});
