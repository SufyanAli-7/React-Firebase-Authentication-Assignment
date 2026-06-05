import { auth } from '@/config/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = createContext()

const initialState = { isAuth: false, user: {} }

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOGIN':
      return { ...state, isAuth: true, user: action.payload }
    case 'SET_PROFILE':
      return { ...state, isAuth: true, user: action.payload }
    case 'SET_LOGOUT':
      return initialState
    default:
      return state
  }
}

const AuthContext = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const navigate = useNavigate()
  const [isAppLoading, setIsAppLoading] = useState(true)

  const readProfile = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user
        dispatch({ type: 'SET_LOGIN', payload: { uid, email } })        
      }
      setIsAppLoading(false)
    })
  }

  useEffect(() => {
    readProfile()
  }, [])

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'SET_LOGOUT' })
        window.toastify('Logout successful', 'success')
        navigate('auth/login')
      })
      .catch((error) => {
        console.error(error)
        window.toastify('Logout failed. Please try again.', 'error')
      })
  }

  return (
    <Auth.Provider value={{ ...state, isAppLoading, handleLogout, dispatch }}>
      {children}
    </Auth.Provider>
  )
}

export default AuthContext

export const useAuth = () => useContext(Auth)