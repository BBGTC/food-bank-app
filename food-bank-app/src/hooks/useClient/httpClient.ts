import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

class HttpClient {
  private readonly instance: AxiosInstance

  public constructor (baseURL?: string) {
    if (baseURL === null || baseURL === undefined) {
      throw new Error('Invalid base URL')
    }

    this.instance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this._initializeResponseInterceptor()
  }

  private readonly _initializeResponseInterceptor = (): void => {
    this.instance.interceptors.request.use(this._handleRequestAuthorization)
    this.instance.interceptors.response.use(this._handleResponse, this._handleError)
  }

  private readonly _handleRequestAuthorization = async (initialConfig: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    const requestConfig = initialConfig

    const accessToken: string = await AsyncStorage.getItem('accessToken') ?? ''

    if (requestConfig.headers?.Authorization == null && accessToken != null) {
      requestConfig.headers = {
        ...requestConfig.headers,
        Authorization: `Bearer ${accessToken}`
      }
    }

    return requestConfig
  }

  private readonly _handleResponse = ({ data }: AxiosResponse): any => data

  private readonly _handleError = async (error: AxiosError): Promise<any> => {
    if (process.env.TARGET_ENV !== 'production') {
      // This is temporary, WE REALLY NEED AN ERROR HANDLING MECHANISM
      console.log(error.response?.data)
    }

    return await Promise.reject(error)
  }

  public signup = async (email: string, password: string, passwordConfirm: string): Promise<{ email: string }> => {
    return await this.instance.post('auth/signup', {
      email, password, confirm_password: passwordConfirm
    })
  }

  public login = async (username: string, password: string): Promise<{ accessToken: string, refreshToken: string }> => {
    const { access, refresh } = await this.instance.post<{ access: string, refresh: string }>(
      'auth/login',
      { username, password }
    )

    return { accessToken: access, refreshToken: refresh }
  }
}

export default HttpClient
