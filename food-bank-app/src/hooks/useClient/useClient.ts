import HttpClient from './httpClient'

const useClient = (): HttpClient => new HttpClient(process.env.API_URL)

export default useClient
