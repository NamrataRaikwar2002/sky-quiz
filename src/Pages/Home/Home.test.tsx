import {fireEvent, render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext, initialUserInfo } from '../../hooks/context/authContext';
import { Home } from './Home';


const MockHome = () => {
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
          <Home />
        </AuthContext.Provider>
      </BrowserRouter>
    );
  };

describe('home testing', () => {
    test('clicking on maths should go to maths category', () => {
        render(<MockHome/>);
        const linkElement = screen.getByRole('link', {name:/Maths/i});
        fireEvent.click(linkElement);
        expect(window.location.pathname).toBe('/category-page');

    })
})