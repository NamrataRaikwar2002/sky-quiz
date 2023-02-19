import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../../hooks/context/authContext";
import { Navbar } from "./Navbar";
import { initialUserInfo } from "../../hooks/context/authContext";


const MockNavbar = () => {
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
        <Navbar />
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

beforeEach(() => {
  render(   <MockNavbar />)
})

describe("testing navbar", () => {
  test("should open login page when clicking on login button", () => {
    // render(
    //     <MockNavbar />
    // );
    const loginButton = screen.getByRole("button", { name: /Login/i });
    fireEvent.click(loginButton);
    expect(window.location.pathname).toBe("/login-page");
  });

  test('should present all routes in navbar', () => {
    const linkElement = screen.getAllByRole('link');
    expect(linkElement.length).toEqual(4)

  })

  test('should got to category page when clicking on category', () =>{
    const categoryLink = screen.getByText('Category');
    fireEvent.click(categoryLink)
    expect(window.location.pathname).toBe('/category-page');
  })

});
