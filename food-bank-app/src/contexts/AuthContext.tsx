import { useContext, createContext } from 'react'
import { useAuth, UseAuth } from '../hooks/useAuth'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const AuthContext = createContext<UseAuth>({})

const AuthProvider = ({ children }: Props): JSX.Element => {
  const { isAuthenticated, setIsAuthenticated } = useAuth(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = (): UseAuth => {
  return useContext(AuthContext)
}

export { AuthProvider, useAuthContext }
