import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse
} from 'axios'

import ContributorModel from '../../models/ContributorModel'

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> { }
}

interface AxiosInstanceHeaders {
  'Content-Type': string
  Authorization?: string
}

interface Tokens {
  refresh: string
  access: string
}

class HttpClient {
  private readonly instance: AxiosInstance
  private readonly token: string

  public constructor(baseURL?: string, token?: string) {
    if (baseURL === null || baseURL === undefined) {
      throw new Error('Invalid base URL')
    }

    this.token = token ?? ''

    const headers: AxiosInstanceHeaders = { 'Content-Type': 'application/json' }

    if (this.token !== '') {
      headers.Authorization = `Bearer ${this.token}`
    }

    this.instance = axios.create({ baseURL, headers, withCredentials: true })

    this._initializeResponseInterceptor()
  }

  private readonly _initializeResponseInterceptor = (): void => {
    this.instance.interceptors.response.use(this._handleResponse, this._handleError)
  }

  private readonly _handleResponse = ({ data }: AxiosResponse): any => data

  private readonly _handleError = async (error: AxiosError): Promise<any> => {
    if (process.env.TARGET_ENV !== 'production') {
      // This is temporary, WE REALLY NEED AN ERROR HANDLING MECHANISM
      console.log(error.response?.data)
    }

    return await Promise.reject(error)
  }

  public signup = async (email: string, password: string, passwordConfirm: string): Promise<{ email: string, auth: Tokens }> => {
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

  public refreshAuth = async (refreshToken: string): Promise<{ accessToken: string }> => {
    const { access } = await this.instance.post<{ access: string, refresh: string }>(
      'auth/login/refresh',
      { refresh: refreshToken }
    )

    return { accessToken: access }
  }

  public getProfile = async (accessToken?: string): Promise<ContributorModel | null> => {
    try {
      return await this.instance.get<ContributorModel>('contributors/me')
    } catch (error) {
      if ((error as AxiosError).response?.status === 409) {
        return null
      }
      throw error
    }
  }
}

export default HttpClient
