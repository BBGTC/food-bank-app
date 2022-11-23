import { useContext, createContext, useState } from 'react'

interface Props {
    children: JSX.Element | JSX.Element[]
}

interface AuthContextValue {
    setIsAuthenticated: (newIsAuthenticated: boolean) => void
    isAuthenticated: boolean
    token: string | null
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export const AuthProvider = ({children}: Props): JSX.Element => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [token, setToken] = useState<string | undefined>(undefined)


    const authContextValue: AuthContextValue = {
        isAuthenticated: false,
        token: null,
        setIsAuthenticated
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('No provider specified for AuthContext')
    }
    return context
}