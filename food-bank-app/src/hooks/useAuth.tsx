import { useState, useEffect } from 'react'

export interface UseAuth {
  isAuthenticated: boolean
  setIsAuthenticated: (newAuthValue: boolean) => void
}

export const useAuth = (newAuthValue: boolean): UseAuth => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    setIsAuthenticated(newAuthValue)
  }, [newAuthValue])

  return { isAuthenticated, setIsAuthenticated }
}
