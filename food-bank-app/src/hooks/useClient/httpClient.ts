import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse
} from 'axios'
import InventoryModel from '../../models/InventoryModel'

import ContributorModel from '../../models/ContributorModel'
import { contributorAdapter } from '../../adapters'
import { ContributorPayload, inwardsContributorAdapter } from '../../adapters/contributorAdapter'
import { DonationEvent } from '../../models'
import EventAdapter, { EventPayload } from '../../adapters/donationEventAdapter'

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

  public constructor (baseURL?: string, token?: string) {
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

  public getProfile = async (): Promise<ContributorModel | null> => {
    try {
      return inwardsContributorAdapter(await this.instance.get<ContributorPayload>('contributors/me'))
    } catch (error) {
      if ((error as AxiosError).response?.status === 409) {
        return null
      }
      throw error
    }
  }

  public createProfile = async (data: ContributorModel): Promise<ContributorModel | null> => {
    try {
      const payload = contributorAdapter(data)
      return inwardsContributorAdapter(await this.instance.post<ContributorPayload>('contributors/me', { ...payload }))
    } catch (error) {
      if ((error as AxiosError).response?.status === 409) {
        return null
      }
      throw error
    }
  }

  public getEvent = async (id: string): Promise<DonationEvent> => {
    return EventAdapter.inwards(await this.instance.get<EventPayload>(`events/${id}`))
  }

  public readonly getInventories = async (): Promise<InventoryModel[]> => {
    return await this.instance.get<InventoryModel[]>('/inventory/')
  }

  public readonly getEvents = async (): Promise<DonationEvent[]> => {
    const rawEvents = await this.instance.get<EventPayload[]>('events')
    return rawEvents.map(EventAdapter.inwards)
  }
}

export default HttpClient
