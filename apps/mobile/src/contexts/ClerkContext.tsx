import { ReactNode } from 'react'
import { ClerkProvider as ClerkProviderLib } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'

const CLERK_PUBLISHABLE_KEY = process.env.CLERK_PUBLISHABLE_KEY

type ClerkProviderProps = {
  children: ReactNode
}

export function ClerkProvider({ children }: ClerkProviderProps) {
  const tokenCache = {
    getToken(key: string) {
      try {
        return SecureStore.getItemAsync(key)
      } catch (err) {
        return null
      }
    },
    saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value)
      } catch (err) {
        return null
      }
    },
  }

  return (
    <ClerkProviderLib
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      {children}
    </ClerkProviderLib>
  )
}
