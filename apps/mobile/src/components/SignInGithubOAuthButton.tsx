import { useSignUp, useSignIn } from '@clerk/clerk-expo'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import * as AuthSession from 'expo-auth-session'

export function SignInWithOAuthButton() {
  const { isLoaded, signIn, setSession } = useSignIn()
  const { signUp } = useSignUp()
  if (!isLoaded) return null

  async function handleSignInWithGithubPress() {
    try {
      const redirectUrl = AuthSession.makeRedirectUri({
        scheme: 'rsxp',
      })

      await signIn.create({
        strategy: 'oauth_github',
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

      // Get the rotatingTokenNonce from the redirect URL parameters
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

        console.log(
          "Didn't have an account transferring, following through with new account sign up",
        )

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
    }
  }

  return (
    <TouchableOpacity
      className="rounded bg-slate-600 py-3 px-4"
      onPress={handleSignInWithGithubPress}
    >
      <Text className="text-white uppercase">Sign in with Github</Text>
    </TouchableOpacity>
  )
}
