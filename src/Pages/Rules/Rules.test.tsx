import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext, initialUserInfo } from '../../hooks/context/authContext';
import { Rules } from './Rules';


const MockRules = () => {
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
          <Rules />
        </AuthContext.Provider>
      </BrowserRouter>
    );
  };

  const quizId = sessionStorage.getItem('categoryId');

 beforeEach(() => {
  render(<MockRules/>)
 })

describe('testing Rules', () => {
    test('start button should start the ', () => {
        const startButton = screen.getByRole('button', {name:/Start/i});
        expect(startButton).toBeInTheDocument();
    })

    test('start button should start the ', () => {
        const startButton = screen.getByRole('button', {name:/Start/i});
        fireEvent.click(startButton);
        expect(window.location.pathname).toBe(`/quiz/${quizId}`);
    })

    test("should present heading", () => {
        const headingElement = screen.getByRole('heading', {name:/Rules/i})
        expect(headingElement).toBeInTheDocument();
    })
})