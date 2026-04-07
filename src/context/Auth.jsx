import { createContext, useContext, useEffect, useState } from 'react'

const Auth = createContext()

const initialState = { isAuth: false, user: {} }

const AuthContext = ({ children }) => {

    const [state, setState] = useState(initialState)
    const [isAppLoading, setIsAppLoading] = useState(true)

    const readProfile = () => {
        const user = { uid: '123', name: 'John Doe', email: 'john.doe@example.com' }
        setState({ isAuth: true, user })
        setTimeout(() => {
            setIsAppLoading(false)
        }, 2000)
    }

    useEffect(() => {
        readProfile()
    }, [])

    const handleLogout = () => {
        setState(initialState)
    }

  return (
    <Auth.Provider value={{...state, isAppLoading, handleLogout }}>
      {children}
    </Auth.Provider>
  )
}

export default AuthContext

export const useAuth = () => useContext(Auth)