import { Link, useNavigate } from 'react-router-dom'
import './CategoryCard.css'
const CategoryCard = ({ categoryImg, categoryName, categoryId }) => {
  const navigate = useNavigate()
  const categoryCardHandler = (categoryId) => {
    navigate('/rules-page')
    sessionStorage.setItem('categoryId', categoryId)
  }

  return (
    <div className="card" onClick={() => categoryCardHandler(categoryId)}>
      <Link to="/rules-page" className="text-link">
        <img src={categoryImg} alt="number img" className="category_img" />
        <div className="category_play_div">
          <p>{categoryName}</p>
          <button className="btn number_play_btn">Play Now</button>
        </div>
      </Link>
    </div>
  )
}

export { CategoryCard }
