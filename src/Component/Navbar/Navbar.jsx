import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
        <Link to="/login-page">
          <button className="login_btn btn">Login</button>
        </Link>
      </aside>
    </nav>
  )
}

export { Navbar }
