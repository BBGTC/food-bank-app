import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse
} from 'axios'

import InventoryModel from '../../models/InventoryModel'

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

interface AxiosInstanceHeaders {
  'Content-Type': string
  Authorization?: string

}

class HttpClient {
  private readonly instance: AxiosInstance
  private readonly token: string

  public constructor (baseURL?: string, token?: string) {
    if (baseURL === null || baseURL === undefined) {
      throw new Error('Invalid base URL')
    }

    const headers: AxiosInstanceHeaders = { 'Content-Type': 'application/json' }

    this.token = token ?? ''

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

  public readonly getInventories = async (): Promise<InventoryModel[]> => {
    return await this.instance.get<InventoryModel[]>('/inventory/')
  }
}

export default HttpClient
