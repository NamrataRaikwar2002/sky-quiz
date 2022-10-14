import React from 'react';
import { useContext, createContext, useReducer } from 'react'
import { quizReducer } from '../Reducer/quizReducer'
import { QuizContext } from './quizContext.types';

const quizContext = createContext({} as QuizContext)
const useQuiz = () => useContext(quizContext)

const QuizProvider = ({ children}:any ) => {
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
