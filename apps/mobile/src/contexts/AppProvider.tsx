import { ReactNode } from 'react'

import { ClerkProvider } from './ClerkContext'
import { AuthProvider } from './AuthContext'
import { ReactQueryProvider } from './ReactQueryProvider'

type AppProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ClerkProvider>
      <AuthProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </AuthProvider>
    </ClerkProvider>
  )
}
