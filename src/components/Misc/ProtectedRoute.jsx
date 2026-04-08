import { useAuth } from '@/context/Auth'
import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ Component }) => {
    const { isAuth } = useAuth()
  return (
    isAuth ? <Component /> : <Navigate to="/auth/login" />
  )
}

export default ProtectedRoute