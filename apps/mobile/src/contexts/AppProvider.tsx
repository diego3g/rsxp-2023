import { ReactNode } from 'react'
import { ClerkProvider } from './ClerkContext'
import { AuthProvider } from './AuthContext'

type AppProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ClerkProvider>
      <AuthProvider>{children}</AuthProvider>
    </ClerkProvider>
  )
}
