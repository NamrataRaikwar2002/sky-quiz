import { createContext, useContext, useId, useState } from 'react'
import { createUser } from '../../services/authService'
import { toast } from 'react-toastify'
import { signInUser } from '../../services/authService'
import { useNavigate, useLocation } from 'react-router-dom'

const AuthContext = createContext(null)
const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {
  const [userInfo, setuserInfo] = useState({
    token: localStorage.getItem('token') || '',
    user: localStorage.getItem('user') || '',
  })
  const location = useLocation()
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState(
    localStorage.getItem('userEmail') || '',
  )

  const loginUser = async (email, password) => {
    try {
      const response = await signInUser(email, password)
      localStorage.setItem('token', response.user.accessToken)
      localStorage.setItem('user', response.user.uid)
      localStorage.setItem('userEmail', email)
      setuserInfo({
        ...userInfo,
        token: response.user.accessToken,
        user: response.user.uid,
      })
      setUserEmail(email)
      navigate(location?.state?.form?.pathname || '/', { replace: true })
      toast.success('Logged in Successfully')
    } catch (error) {
      const errorMsg = error.message.match(/\/(\S+)[)]./i)[1].replace(/-/g, ' ')
      toast.error(errorMsg)
    }
  }

  const signupUser = async (email, password) => {
    try {
      const response = await createUser(email, password)
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
    } catch (error) {
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
