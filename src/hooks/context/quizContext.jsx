import { useContext, createContext, useReducer } from 'react'
import { quizReducer } from '../Reducer/quizReducer'

const quizContext = createContext(null)
const useQuiz = () => useContext(quizContext)

const QuizProvider = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, {
    rightAnsArr:[],
    selectedOptions: [],
  })
  return (
    <quizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </quizContext.Provider>
  )
}

export { useQuiz, QuizProvider }
