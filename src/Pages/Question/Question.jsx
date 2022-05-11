import { Navbar } from '../../Component'
import { quizQuestion } from '../../data/quizQuestion'
import { useState } from 'react'
import './Question.css'
import { Link } from 'react-router-dom'
import { useQuiz } from '../../hooks/context/quizContext'

const Question = () => {
  const quizId = sessionStorage.getItem('categoryId')
  const [ques, setQues] = useState(0)
  const [optionToggle, setoptionToggle] = useState('')
  const {
    quizState: { rightAnsArr, selectedOptions },
    quizDispatch,
  } = useQuiz()
  const categoryQues = quizQuestion.find(
    (eachCategory) => eachCategory.categoryId === quizId,
  )
  const quesInCategory = categoryQues.questions
  const nextQuesHandler = () => {
    setQues(ques + 1)
  }
  const optionHandler = (optionValue, eachOption) => {
    setoptionToggle(optionValue)
    selectedOptions[ques] = optionValue
    quizDispatch({ type: 'SELECTED_OPTION', payload: [...selectedOptions] })
    if (eachOption.isRight) {
      quizDispatch({ type: 'CURRECT_ANS', payload: eachOption.value })
    }
  }

  return (
    <main className="ques_page">
      <Navbar />
      <section className="ques_section">
        <div>
          <div className="ques_div">
            <header className="ques_header">
              <h3>{`Question: ${ques + 1}/5`}</h3>
            </header>
            <div className="ques_option_div">
              <h3>{`Q${ques + 1}: ${quesInCategory[ques].question}`}</h3>
              <div className="options">
                {quesInCategory[ques].options.map((eachOption) => (
                  <label
                    className={`each_option ${
                      optionToggle === eachOption.value
                        ? 'selectedOption'
                        : 'each_option'
                    }`}
                    key={eachOption.value}
                    onClick={() => optionHandler(eachOption.value, eachOption)}
                  >
                    {eachOption.value}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="buttonDiv">
            {ques === 4 ? (
              <Link to="/result-page">
                <button className="btn large_btn">View Result</button>
              </Link>
            ) : (
              <button className="btn large_btn" onClick={nextQuesHandler}>
                Next <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export { Question }
