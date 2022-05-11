import { Navbar } from '../../Component'
import './Result.css'
import { quizQuestion } from '../../data/quizQuestion'
import { useQuiz } from '../../hooks/context/quizContext'

const Result = () => {
  const quizId = sessionStorage.getItem('categoryId')
  const correctOptions = quizQuestion.find(
    (category) => category.categoryId === quizId,
  )
  const {
    quizState: { rightAnsArr, selectedOptions },
  } = useQuiz()
  const checkAnswer = (optionValue, index) => {
    if (selectedOptions[index]) {
      if (selectedOptions[index] === optionValue) {
        return true
      } else {
        return false
      }
    } else {
      selectedOptions[index] = 'Not attempted'
    }
  }

  return (
    <main className="result_page">
      <Navbar />
      <section className="ques_section">
        <h2>Your Result</h2>
        <div className="show_result">
          <h2>{`${
            rightAnsArr.length * 10 > 20
              ? 'Congratulation! 🎉 Your final score is :'
              : 'Try it again 🙃 Your final score is :'
          } ${rightAnsArr.length * 10}/${
            correctOptions.questions.length * 10
          }`}</h2>
        </div>
        <div className="ques_div">
          <header className="ques_header">
            <h3>{`Question:${correctOptions.questions.length}/${correctOptions.questions.length}`}</h3>
            <h3>{`Score: ${rightAnsArr.length * 10}/${
              correctOptions.questions.length * 10
            }`}</h3>
          </header>
          {correctOptions.questions.map((eachQuestion, index) => {
            return (
              <div className="ques_option_div" key={eachQuestion.question}>
                <h3>{`Q.${index + 1}: ${eachQuestion.question}`}</h3>
                <p className="not_attemted">{`${
                  selectedOptions[index] === 'Not attempted'
                    ? 'Not attempted'
                    : ''
                }`}</p>
                <div className="options">
                  {eachQuestion.options.map((eachOption) => {
                    return (
                      <label
                        key={eachOption.value}
                        className={` resultOptions ${
                          eachOption.isRight && 'correct_option'
                        } ${
                          checkAnswer(eachOption.value, index, eachOption) &&
                          !eachOption.isRight
                            ? 'wrong_option'
                            : ''
                        } `}
                      >
                        {eachOption.value}
                      </label>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export { Result }
