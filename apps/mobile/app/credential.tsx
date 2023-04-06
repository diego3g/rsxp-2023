import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function Credential() {
  return (
    <View className="bg-gray-950 flex-1 items-center justify-center">
      <Text className="text-gray-100 font-bold text-2xl">Credencial</Text>
      <Link href="notifications/">Acessar Notificações</Link>
    </View>
  )
}
