import { createContext, useMemo, useContext, useState } from 'react'

interface AuthContextValue {
  isAuthenticated: boolean
  setIsAuthenticated: (newIsAuthenticated: boolean) => void
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const contextValue: AuthContextValue = useMemo(() => ({
    isAuthenticated, setIsAuthenticated
  }), [isAuthenticated])

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = (): AuthContextValue => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuthContext must be used withing an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuthContext }
