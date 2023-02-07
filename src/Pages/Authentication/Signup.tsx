import React from 'react';
import {useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../Component';
import './Authentication.css';
import { useAuth } from '../../hooks/context/authContext';
import { toast } from 'react-toastify';
import { InputType, SignupUserInfo } from './Authentication.types';


const Signup = () => {
  const [inputType, setinputType] = useState<InputType>({
    passwordType: 'password',
    confirmpaswd: 'password',
  })
  const { signupUser } = useAuth()

  const [signupUserInfo, setsignupUserInfo] = useState<SignupUserInfo>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  } = signupUserInfo
  const signupHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    if (
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      password !== '' &&
      confirmPassword !== ''
    ) {
      if (password === confirmPassword) {
        signupUser(email, password)
        setsignupUserInfo({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        })
      } else {
        toast.error('The passwords entered do not match')
      }
    } else {
      toast.warning('Please fill the fields')
    }
  }

  return (
    <main className="login_page">
      <Navbar />
      <section className="login_box content">
        <form method="POST">
          <div className="login_div">
            <h2 className="createAccount">Signup</h2>
            <label htmlFor="firstNameinput">First Name</label>
            <input
              type="text"
              className="login_input"
              placeholder="Enter your first name"
              id="firstNameinput"
              value={firstName}
              onChange={(e) =>
                setsignupUserInfo({
                  ...signupUserInfo,
                  firstName: e.target.value,
                })
              }
              required
            />
            <label htmlFor="lastNameinput">Last Name</label>
            <input
              type="text"
              className="login_input"
              placeholder="Enter your last name"
              id="lastNameinput"
              value={lastName}
              onChange={(e) =>
                setsignupUserInfo({
                  ...signupUserInfo,
                  lastName: e.target.value,
                })
              }
              required
            />
            <label htmlFor="emailinput">Email address</label>
            <input
              type="email"
              className="login_input"
              placeholder="Enter your Email"
              id="emailinput"
              value={email}
              onChange={(e) =>
                setsignupUserInfo({ ...signupUserInfo, email: e.target.value })
              }
              required
            />
            <label htmlFor="passwordinput">Password</label>
            <div className="showHideDiv">
              <input
                type={inputType.passwordType}
                className="login_input passwordInputDiv"
                placeholder="Enter Password"
                id="passwordinput"
                value={password}
                onChange={(e) =>
                  setsignupUserInfo({
                    ...signupUserInfo,
                    password: e.target.value,
                  })
                }
                required
              />
              <div
                className="passwordIcon"
                onClick={() =>
                  inputType.passwordType === 'text'
                    ? setinputType({ ...inputType, passwordType: 'password' })
                    : setinputType({ ...inputType, passwordType: 'text' })
                }
              >
                {inputType.passwordType === 'text' ? (
                  <p className="hideIcon">
                    <i className="fa-regular fa-eye" data-testid='openEyeIcon'></i>
                  </p>
                ) : (
                  <p className="hideIcon">
                    <i className="fa-regular fa-eye-slash" data-testid='closeEyeIcon'></i>
                  </p>
                )}
              </div>
            </div>

            <label htmlFor="confirmPswdinput">Confirm Password</label>
            <div className="showHideDiv">
              <input
                type={inputType.confirmpaswd}
                className="login_input passwordInputDiv"
                placeholder="Reenter Password"
                id="confirmPswdinput"
                value={confirmPassword}
                onChange={(e) =>
                  setsignupUserInfo({
                    ...signupUserInfo,
                    confirmPassword: e.target.value,
                  })
                }
                required
              />
              {
                <div
                  className="passwordIcon"
                  onClick={() =>
                    inputType.confirmpaswd === 'text'
                      ? setinputType({ ...inputType, confirmpaswd: 'password' })
                      : setinputType({ ...inputType, confirmpaswd: 'text' })
                  }
                >
                  {inputType.confirmpaswd === 'text' ? (
                    <p className="hideIcon">
                      <i className="fa-regular fa-eye"></i>
                    </p>
                  ) : (
                    <p className="hideIcon">
                      <i className="fa-regular fa-eye-slash"></i>
                    </p>
                  )}
                </div>
              }
            </div>
            <button
              type="submit"
              className="primary_btn btn"
              onClick={signupHandler}
            >
              Create New Account
            </button>
            <Link to="/login-page" className="createAccount login_signup_link">
              Already have an account
            </Link>
          </div>
        </form>
      </section>
    </main>
  )
}
export { Signup }
