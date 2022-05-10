import { Navbar } from '../../Component'
import { quizQuestion } from '../../data/quizQuestion'
import { useState } from 'react'
import './Question.css'
import { useQuiz } from '../../hooks/context/quizContext'

const Question = () => {
  const quizId = sessionStorage.getItem('categoryId')
  const [ques, setQues] = useState(0)
  const [optionToggle, setoptionToggle] = useState('')
  const {
    quizState: { selectedQuestion },
    quizDispatch,
  } = useQuiz()
  const categoryQues = quizQuestion.find(
    (eachCategory) => eachCategory.categoryId === quizId,
  )
  const categorymatch = quizQuestion.some(
    (eachCategory) => eachCategory.categoryId === quizId,
  )
  const quesInCategory = categoryQues.questions
  const nextQuesHandler = () => {
    setQues(ques + 1)
    if (categorymatch) {
      quizDispatch({ type: 'NEXT_QUES', payload: quesInCategory[ques] })
    } else {
      quizDispatch({ type: 'NEXT_QUES', payload: [] })
    }
  }
  console.log(selectedQuestion)
  const optionHandler = (optionValue) => {
    setoptionToggle(optionValue)
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
              <h3>{quesInCategory[ques].question}</h3>
              <div className="options">
                {quesInCategory[ques].options.map((eachOption) => (
                  <label
                    className={`each_option ${
                      optionToggle === eachOption.value
                        ? 'selectedOption'
                        : 'each_option'
                    }`}
                    key={eachOption.value}
                    onClick={() => optionHandler(eachOption.value)}
                  >
                    {eachOption.value}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="buttonDiv">
            {ques === 4 ? (
              <button className="btn large_btn">View Result</button>
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
