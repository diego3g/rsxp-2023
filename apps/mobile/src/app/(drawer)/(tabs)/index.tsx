import { useAuth } from '@/hooks/useAuth'
import { SignedIn, SignedOut } from '@clerk/clerk-expo'
import axios from 'axios'
import { ActivityIndicator, Button, Image, Text, View } from 'react-native'

export default function Home() {
  const { getSessionInfo, isLoading, signInOrSignUpWithOAuth, signOut, user } =
    useAuth()

  async function handleVerifySession() {
    const { sessionId, token } = await getSessionInfo()
    const response = await axios.post('http://192.168.15.2:3333/', {
      sessionId,
      token,
    })

    console.log(response.data)
  }

  return (
    <View className="bg-gray-950 flex-1 items-center justify-center">
      <Text className="text-gray-100 font-bold text-2xl">O Evento</Text>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <SignedIn>
            <Image
              className="w-20 h-20 rounded-full"
              source={{ uri: user?.avatar }}
            />
            <Text className="text-white">{user?.email}</Text>
            <Button title="Deslogar" onPress={signOut} />
            <Button title="Verificar sessão" onPress={handleVerifySession} />
          </SignedIn>
          <SignedOut>
            <Button title="Logar" onPress={signInOrSignUpWithOAuth} />
          </SignedOut>
        </>
      )}
    </View>
  )
}
