import type { OAuthStrategy } from '@clerk/types/dist/strategies'

import { ReactNode, createContext, useEffect, useState } from 'react'
import { useSignUp, useSignIn, useAuth, useUser } from '@clerk/clerk-expo'
import * as AuthSession from 'expo-auth-session'
import Constants from 'expo-constants'

type OAUTH_PROVIDERS = 'github'

type User = {
  id: string
  email: string
  fullName: string
  avatar: string
}

type GetSessionInfo = {
  sessionId: string
  token: string
}

export type AuthContextDataProps = {
  user: null | User
  signInOrSignUpWithOAuth: (provider: OAUTH_PROVIDERS) => Promise<void>
  signOut: () => Promise<void>
  getSessionInfo: () => Promise<GetSessionInfo>
  isLoading: boolean
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<null | User>(null)
  const [isLoading, setIsLoading] = useState(true)

  const { signIn, setSession } = useSignIn()
  const { signUp } = useSignUp()
  const { signOut: clerkSignOut, getToken, sessionId } = useAuth()
  const { user: clerkUser } = useUser()

  async function signInOrSignUpWithOAuth(provider: OAUTH_PROVIDERS) {
    try {
      setIsLoading(true)
      const strategy: OAuthStrategy = `oauth_${provider}`
      const redirectUrl = AuthSession.makeRedirectUri({
        scheme: Constants.platform.scheme,
      })

      await signIn.create({
        strategy,
        redirectUrl,
      })

      const {
        firstFactorVerification: { externalVerificationRedirectURL },
      } = signIn

      if (!externalVerificationRedirectURL)
        throw Error('Something went wrong during the OAuth flow. Try again.')

      const authResult = await AuthSession.startAsync({
        authUrl: externalVerificationRedirectURL.toString(),
        returnUrl: redirectUrl,
      })

      if (authResult.type !== 'success') {
        throw Error('Something went wrong during the OAuth flow. Try again.')
      }

      const { rotating_token_nonce: rotatingTokenNonce } = authResult.params

      await signIn.reload({ rotatingTokenNonce })

      const { createdSessionId } = signIn

      if (createdSessionId) {
        // If we have a createdSessionId, then auth was successful
        await setSession(createdSessionId)
      } else {
        // If we have no createdSessionId, then this is a first time sign-in, so
        // we should process this as a signUp instead
        // Throw if we're not in the right state for creating a new user
        if (
          !signUp ||
          signIn.firstFactorVerification.status !== 'transferable'
        ) {
          throw Error(
            'Something went wrong during the Sign up OAuth flow. Please ensure that all sign up requirements are met.',
          )
        }

        // Create user
        await signUp.create({ transfer: true })
        await signUp.reload({
          rotatingTokenNonce: authResult.params.rotating_token_nonce,
        })
        await setSession(signUp.createdSessionId)
      }
    } catch (err) {
      console.log(JSON.stringify(err, null, 2))
      console.log('error signing in', err)
    } finally {
      setIsLoading(false)
    }
  }

  async function signOut() {
    try {
      setIsLoading(true)
      await clerkSignOut()
    } catch (error) {
      throw Error(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function getSessionInfo() {
    try {
      setIsLoading(true)
      const token = await getToken()
      return { sessionId, token }
    } catch (error) {
      throw Error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (clerkUser?.id) {
      setUser({
        email: clerkUser.primaryEmailAddress.emailAddress,
        id: clerkUser.id,
        avatar: clerkUser.profileImageUrl,
        fullName: clerkUser.fullName,
      })
    } else {
      setUser(null)
    }

    setIsLoading(false)
  }, [
    clerkUser?.fullName,
    clerkUser?.id,
    clerkUser?.primaryEmailAddress.emailAddress,
    clerkUser?.profileImageUrl,
  ])

  return (
    <AuthContext.Provider
      value={{
        signInOrSignUpWithOAuth,
        signOut,
        user,
        getSessionInfo,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
