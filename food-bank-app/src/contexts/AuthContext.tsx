import { createContext, useMemo, useContext, useState } from 'react'

interface AuthContextValue {
  accessToken: string
  isAuthenticated: boolean
  setAccessToken: (newAccessToken: string) => void
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [accessToken, setAccessToken] = useState<string>('')

  const contextValue: AuthContextValue = useMemo(() => ({
    accessToken,
    isAuthenticated: accessToken !== '',
    setAccessToken
  }), [accessToken])

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
