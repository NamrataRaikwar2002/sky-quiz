import { Navbar } from '../../Component'
import './Rules.css'
import { useNavigate } from 'react-router'

const Rules = () => {
  const navigate = useNavigate()
  const startQuizHandler = () => {
    const quizId = sessionStorage.getItem('categoryId')
    navigate(`/quiz/${quizId}`)
  }
  return (
    <main className="rule_page">
      <Navbar />
      <section className="rule_section">
        <h2 className="page-heading">Rules</h2>
        <ul className="rules_list">
          <li className="each_rule">
            There will be 5 questions in each round.
          </li>
          <li className="each_rule">
            You will have 20 seconds for each question.
          </li>
          <li className="each_rule">10 Points for each question.</li>
          <li className="each_rule">
            There will be MCQs so there will be only 1 correct answer.
          </li>
          <li className="each_rule">No Negative marking for wrong answer.</li>
        </ul>
        <button className="btn large_btn" onClick={startQuizHandler}>
          Start
        </button>
      </section>
    </main>
  )
}

export { Rules }
