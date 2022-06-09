import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Component'
import './Authentication.css'
import { useAuth } from '../../hooks/context/authContext'
import { toast } from 'react-toastify'

const Login = () => {
  const [inputType, setinputType] = useState('password')
  const [loginUserInfo, setloginUserInfo] = useState({
    email: '',
    password: '',
  })
  const { loginUser } = useAuth()

  const { email, password } = loginUserInfo

  const loginHandler = (e) => {
    e.preventDefault()
    if (email !== '' && password !== '') {
      loginUser(email, password)
    } else {
      toast.warning('Please fill the fields')
    }
  }
  const guestLoginHandler = (e) => {
    e.preventDefault()
    setloginUserInfo({ email: 'admin@gmail.com', password: 'admin123' })
  }

  return (
    <main className="login_page">
      <Navbar LoginOrSignup="Signup" address="/signup-page" />
      <section className="login_box content">
        <form>
          <div className="login_div">
            <h2 className="createAccount">Login</h2>
            <label htmlFor="emailInput">Email address</label>
            <input
              type="text"
              className="login_input"
              placeholder="Enter your email"
              id="loginInput"
              value={email}
              onChange={(e) =>
                setloginUserInfo({ ...loginUserInfo, email: e.target.value })
              }
              required
            />
            <label htmlFor="passwordInput">Password</label>
            <div className="showHideDiv">
              <input
                type={inputType}
                className="login_input passwordInputDiv"
                placeholder="Password"
                id="passwordInput"
                value={password}
                onChange={(e) =>
                  setloginUserInfo({
                    ...loginUserInfo,
                    password: e.target.value,
                  })
                }
                required
              />
              <div
                className="passwordIcon"
                onClick={() =>
                  inputType === 'text'
                    ? setinputType('password')
                    : setinputType('text')
                }
              >
                {inputType === 'text' ? (
                  <p className="hideIcon">
                    <i className="fa-regular fa-eye"></i>
                  </p>
                ) : (
                  <p className="hideIcon">
                    <i className="fa-regular fa-eye-slash"></i>
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="primary_btn btn"
              onClick={guestLoginHandler}
            >
             Add Guest Credentials
            </button>
            <button
              type="submit"
              className="primary_btn btn"
              onClick={loginHandler}
            >
              Login
            </button>
            <Link to="/signup-page" className="createAccount login_signup_link">
              Create New Account
            </Link>
          </div>
        </form>
      </section>
    </main>
  )
}
export { Login }
