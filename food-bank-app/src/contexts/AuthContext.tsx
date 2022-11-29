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
import { Contributor as ContributorModel } from '../models'

interface AuthContextValue {
  accessToken: string
  isAuthenticated: boolean
  isLoadingAuth: boolean
  profile: ContributorModel | null
  clearAuth: () => void
  saveAuthTokens: (access: string, refresh: string) => Promise<void>
  saveProfile: (profile: ContributorModel) => void
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const API_URL = process.env.API_URL
const REFRESH_TOKEN_KEY: string = 'refreshToken'

let client = new HttpClient(API_URL)

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [accessToken, setAccessToken] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [profile, setProfile] = useState<ContributorModel | null>(null)

  const loadProfile = useCallback(async (token: string): Promise<void> => {
    // TODO: handle this with a try catch
    setIsLoading(true)

    client = new HttpClient(API_URL, token)

    const fetchedProfile = await client.getProfile()

    if (fetchedProfile !== null) {
      setProfile(fetchedProfile)
    }

    setIsLoading(false)
  }, [accessToken])

  const saveAuthTokens = useCallback(async (access: string, refresh: string): Promise<void> => {
    setAccessToken(access)

    await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refresh)
    await loadProfile(access)
  }, [])

  const clearAuth = useCallback(async () => {
    setAccessToken('')
    setProfile(null)

    await AsyncStorage.clear()
  }, [])

  const contextValue: AuthContextValue = useMemo(() => ({
    accessToken,
    isAuthenticated: accessToken !== '',
    isLoadingAuth: isLoading,
    saveAuthTokens,
    saveProfile: setProfile,
    clearAuth,
    profile
  }), [accessToken, profile, isLoading])

  useEffect(() => {
    const verifyAuthentication = async (): Promise<void> => {
      setIsLoading(true)

      try {
        const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY)

        if (refreshToken !== '' && refreshToken !== undefined && refreshToken !== null) {
          const { accessToken: newAccessToken } = await client.refreshAuth(refreshToken)

          setAccessToken(newAccessToken)
          await loadProfile(newAccessToken)
        }
      } catch (error) {
        console.log(error)
        setAccessToken('')
        await AsyncStorage.removeItem(REFRESH_TOKEN_KEY)
      } finally {
        setIsLoading(false)
      }
    }

    void verifyAuthentication()
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
