import { useMemo } from 'react'

import HttpClient from './httpClient'
import { useAuthContext } from '../../contexts/AuthContext'

const useClient = (): HttpClient => {
  const { accessToken } = useAuthContext()

  const client = useMemo(() => new HttpClient(process.env.API_URL, accessToken), [accessToken])

  return client
}

export default useClient
