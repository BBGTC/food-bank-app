import { useMemo } from 'react'

import { useAuthContext } from '../../contexts/AuthContext'
import HttpClient from './httpClient'

const useClient = (): HttpClient => {
  const { accessToken } = useAuthContext()

  const client = useMemo(() => new HttpClient(process.env.API_URL, accessToken), [accessToken])

  return client
}

export default useClient
