import axios, { AxiosInstance, AxiosResponse } from 'axios'

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
    this.instance.interceptors.response.use(this._handleResponse)
  }

  private readonly _handleResponse = ({ data }: AxiosResponse): any => data

  public signup = async (email: string, password: string, passwordConfirm: string): Promise<{ email: string }> => {
    return await this.instance.post('auth/signup', {
      email, password, confirm_password: passwordConfirm
    })
  }
}

export default HttpClient
