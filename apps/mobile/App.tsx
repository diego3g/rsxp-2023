import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  useAuth,
  useUser,
} from '@clerk/clerk-expo'
import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import { SignInWithOAuthButton } from './src/components/SignInGithubOAuthButton'

const CLERK_PUBLISHABLE_KEY = process.env.CLERK_PUBLISHABLE_KEY

export function WithAuthContext() {
  const { userId, sessionId, isLoaded, signOut } = useAuth()
  const { user } = useUser()

  if (!isLoaded) return <ActivityIndicator color="#666" size="large" />

  return (
    <View className="gap-5 items-center">
      <Image
        source={{ uri: user.profileImageUrl }}
        className="w-20 h-20 rounded-full"
        alt="profile"
      />

      <View className="gap-2">
        <View>
          <Text className="text-white text-xl font-bold">User ID: </Text>
          <Text className="text-white">{userId}</Text>
        </View>
        <View>
          <Text className="text-white text-xl font-bold">Session ID: </Text>
          <Text className="text-white">{sessionId}</Text>
        </View>
        <View>
          <Text className="text-white text-xl font-bold">Fullname: </Text>
          <Text className="text-white">{user.fullName}</Text>
        </View>
        <View>
          <Text className="text-white text-xl font-bold">Email: </Text>
          <Text className="text-white">
            {user.primaryEmailAddress.emailAddress}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        className="rounded bg-slate-600 py-3 px-4"
        onPress={() => signOut()}
      >
        <Text className="text-white uppercase">Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <View className="flex-1 bg-zinc-900 items-center justify-center">
          <WithAuthContext />
        </View>
      </SignedIn>
      <SignedOut>
        <View className="flex-1 bg-zinc-900 items-center justify-center">
          <SignInWithOAuthButton />
        </View>
      </SignedOut>
      <StatusBar style="light" />
    </ClerkProvider>
  )
}
