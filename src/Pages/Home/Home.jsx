import { Navbar, Footer } from '../../Component'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home_section">
        <h1 className="heading">Let's Play</h1>
        <h3 className='page-heading'>Select one to Start</h3>
        <div className="featured_category">
          <Link to="/category-page" className="each_category">
            Maths<i className="fa-solid fa-lock-open"></i>
          </Link>
          <Link to="" className="each_category">Animals
            <i className="fa-solid fa-lock"></i>
          </Link>
            <p className="each_category">
              Environment<i className="fa-solid fa-lock"></i>
            </p>
          <p className="each_category">
            Indian Food<i className="fa-solid fa-lock"></i>
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
export { Home }
