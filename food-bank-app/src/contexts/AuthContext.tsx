import {
  createContext,
  useEffect,
  useMemo,
  useCallback,
  useContext,
  useState
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import HttpClient from '../hooks/useClient/httpClient'

interface AuthContextValue {
  accessToken: string
  isAuthenticated: boolean
  isLoadingAuth: boolean
  saveAuthTokens: (access: string, refresh: string) => Promise<void>
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const API_URL = process.env.API_URL
const REFRESH_TOKEN_KEY: string = 'refreshToken'

const client = new HttpClient(API_URL)

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [accessToken, setAccessToken] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const saveAuthTokens = useCallback(async (access: string, refresh: string): Promise<void> => {
    await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refresh)
    setAccessToken(access)
  }, [])

  const contextValue: AuthContextValue = useMemo(() => ({
    accessToken,
    isAuthenticated: accessToken !== '',
    isLoadingAuth: isLoading,
    saveAuthTokens
  }), [accessToken, isLoading])

  useEffect(() => {
    const verifyAuthentication = async (): Promise<void> => {
      setIsLoading(true)

      try {
        const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY)

        if (refreshToken !== '' && refreshToken !== undefined && refreshToken !== null) {
          const { accessToken: newAccessToken } = await client.refreshAuth(refreshToken)

          setAccessToken(newAccessToken)
        }
      } catch (error) {
        console.log(error)
        setAccessToken('')
        await AsyncStorage.removeItem(REFRESH_TOKEN_KEY)
      } finally {
        setIsLoading(false)
      }
    }

    verifyAuthentication()
  }, [])

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
