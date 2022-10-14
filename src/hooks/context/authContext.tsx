import React from 'react';
import { createContext, useContext, useState } from 'react'
import { createUser } from '../../services/authService'
import { toast } from 'react-toastify'
import { signInUser } from '../../services/authService'
import { useNavigate } from 'react-router-dom'
import { AuthInitialState, AuthContextType } from './authContext.types';

const AuthContext = createContext({} as AuthContextType)
const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({ children } : any) => {
  const [userInfo, setuserInfo] = useState<AuthInitialState >({
    token: localStorage.getItem('token') || '', 
    user: localStorage.getItem('user') || '',
  })

  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState(
    localStorage.getItem('userEmail') || '',
  )

  const loginUser = async (email:string, password:string) => {
    try {
      const response:any= await signInUser(email, password)
      localStorage.setItem('token', response.user.accessToken)
      localStorage.setItem('user', response.user.uid)
      localStorage.setItem('userEmail', email)
      setuserInfo({
        ...userInfo,
        token: response.user.accessToken,
        user: response.user.uid,
      })
      setUserEmail(email)
      
      navigate( '/', { replace: true })
      toast.success('Logged in Successfully')
    } catch (error:any) {
      const errorMsg = error.message.match(/\/(\S+)[)]./i)[1].replace(/-/g, ' ')
      toast.error(errorMsg)
    }
  }

  const signupUser = async (email:string, password:string) => {
    try {
      const response:any = await createUser(email, password)
      navigate('/')
      toast.success(
        'Congratulation, your account has been successfully created.',
      )
      localStorage.setItem('token', response.user.accessToken)
      localStorage.setItem('user', response.user.uid)
      localStorage.setItem('userEmail', email)
      setuserInfo({
        ...userInfo,
        token: response.user.accessToken,
        user: response.user.uid,
      })
    } catch (error:any) {
      const errorMsg = error.message.match(/\/(\S+)[)]./i)[1].replace(/-/g, ' ')
      toast.error(errorMsg)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setuserInfo,
        signupUser,
        loginUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { useAuth, AuthContextProvider }
