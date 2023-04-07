import { Text, TouchableOpacity } from 'react-native'

import { useAuth } from '../hooks/useAuth'

export function SignInWithOAuthButton() {
  const { signInOrSignUpWithOAuth } = useAuth()

  return (
    <TouchableOpacity
      className="rounded bg-slate-600 py-3 px-4"
      onPress={() => {
        signInOrSignUpWithOAuth('github')
      }}
    >
      <Text className="text-white uppercase">Sign in with Github</Text>
    </TouchableOpacity>
  )
}
