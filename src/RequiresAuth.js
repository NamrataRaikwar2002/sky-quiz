import { useAuth } from './hooks/context/authContext'
import { Navigate, useLocation } from 'react-router-dom'
import React from 'react';
const RequiresAuth = ({ children }) => {
const { userInfo } = useAuth()
const { token } = userInfo
const location = useLocation()
return token ? (
  children
) : (
  <Navigate to="/login-page" state={{ from: location }} replace />
)
}

export { RequiresAuth }
