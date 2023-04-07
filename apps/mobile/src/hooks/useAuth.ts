import { useContext } from 'react'

import { AuthContext } from '../contexts/AuthContext'

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
