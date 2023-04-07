import { SignedIn, SignedOut } from '@clerk/clerk-expo'
import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import axios from 'axios'

import { SignInWithOAuthButton } from './src/components/SignInGithubOAuthButton'
import { AppProvider } from './src/contexts/AppProvider'
import { useAuth } from './src/hooks/useAuth'

export function WithAuthContext() {
  const { getSessionInfo, isLoading, signOut, user } = useAuth()

  async function handleVerifySession() {
    try {
      const { sessionId, token } = await getSessionInfo()
      const response = await axios.post('http://192.168.15.4:3333', {
        sessionId,
        token,
      })

      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) return <ActivityIndicator color="#666" size="large" />

  return (
    <View className="gap-5 items-center">
      <Image
        source={{ uri: user?.avatar }}
        className="w-20 h-20 rounded-full"
        alt="profile"
      />

      <View className="gap-2">
        <View>
          <Text className="text-white text-xl font-bold">User ID: </Text>
          <Text className="text-white">{user?.id}</Text>
        </View>
        <View>
          <Text className="text-white text-xl font-bold">Fullname: </Text>
          <Text className="text-white">{user?.fullName}</Text>
        </View>
        <View>
          <Text className="text-white text-xl font-bold">Email: </Text>
          <Text className="text-white">{user?.email}</Text>
        </View>
      </View>

      <TouchableOpacity
        className="rounded bg-slate-600 py-3 px-4"
        onPress={handleVerifySession}
      >
        <Text className="text-white uppercase">Verify session</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="rounded bg-slate-600 py-3 px-4"
        onPress={signOut}
      >
        <Text className="text-white uppercase">Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
    <AppProvider>
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
    </AppProvider>
  )
}
