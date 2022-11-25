import { useContext, createContext, useState, useEffect } from 'react'

const SERVER_URL = `${import.meta.env.SERVER_URL || 'http://localhost'}:${import.meta.env.SERVER_PORT || '8000'}`
const REFRESH_TOKEN_STORAGE_KEY = 'refresh_token'

interface Props {
    children: JSX.Element | JSX.Element[]
}

interface AuthContextValue {
    isAuthenticated: boolean
    token: string | null
    isLoading: boolean
    setAuth: (isAuthenticated: boolean, token: string, isLoading: boolean) => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export const AuthProvider = ({children}: Props): JSX.Element => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [token, setToken] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        // Check for token in local storage
        const token = localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY)
        if (!token) {
            setToken(null)
            setIsLoading(false)
            return
        }
        performRefresh(token)
    }, [])

    const performRefresh = async (token: string): Promise<void> => {
        setIsLoading(true)
        const refreshTokenUrl = `${SERVER_URL}/auth/login/refresh`
        try {
            const response: Response = await fetch(refreshTokenUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ refresh:  token})
            })

            const { access } = await response.json()
            setToken(access)
            setIsAuthenticated(true)
            setIsLoading(false)
        } catch (error){
            setToken(null)
            setIsLoading(false)
            setIsAuthenticated(false)
            console.log(error)
        }
    }

    const setAuth = (authValue: boolean, tokenValue: string, isLoadingValue: boolean) => {
        setIsAuthenticated(authValue)
        setToken(tokenValue)
        setIsLoading(isLoadingValue)
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            token,
            isLoading,
            setAuth,
        }}>
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