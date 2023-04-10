import { ReactNode } from 'react'
import { ClerkProvider as ClerkProviderLib } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'
import { CLERK_PUBLISHABLE_KEY } from '@env'

type ClerkProviderProps = {
  children: ReactNode
}

export function ClerkProvider({ children }: ClerkProviderProps) {
  const tokenCache = {
    getToken(key: string) {
      return SecureStore.getItemAsync(key)
    },
    saveToken(key: string, value: string) {
      return SecureStore.setItemAsync(key, value)
    },
  }

  if (!CLERK_PUBLISHABLE_KEY) {
    throw Error('Invalid Clerk Publishable key.')
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
