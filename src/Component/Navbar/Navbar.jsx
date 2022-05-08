import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/context/authContext'
import { toast } from 'react-toastify'
import { logoutUser } from '../../services/authService'

const Navbar = () => {
  const {
    userInfo: { token, user },
    setuserInfo,
  } = useAuth()
  const navigate = useNavigate()
  const userEmail = localStorage.getItem('userEmail')
  const userName = userEmail?.substring(0, userEmail.lastIndexOf('@'))
  if (userName) {
    localStorage.setItem('userName', userName)
  }

  const logoutHandler = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('userName')
    localStorage.removeItem('userEmail')
    logoutUser()
    setuserInfo({ token: '', user: '' })
    navigate('/')
    toast.success('Logout Successfully')
  }
  return (
    <nav className="navbar">
      <Link to="/" className="text-link">
        <div className="nameWithLogo">
          <img src="/fevicon.ico" alt="logo" className="logoImg" />
          <h1>SkyQuiz</h1>
        </div>
      </Link>
      <aside className="nav_rightside">
        <Link to="/" className="nav_link">
          Home
        </Link>
        <Link to="/category-page" className="nav_link">
          Category
        </Link>
        {token && user ? (
          <p className="userName cursorPointer" onClick={logoutHandler}>
            <i className="fa-solid fa-right-to-bracket"></i>
            Hi, {userName}
          </p>
        ) : (
          <Link to="/login-page">
            <button className="login_btn btn">Login</button>
          </Link>
        )}
      </aside>
    </nav>
  )
}

export { Navbar }
