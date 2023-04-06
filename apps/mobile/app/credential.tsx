import { Link } from 'expo-router'
import { Text, View } from 'react-native'

var x = 2

export default function Credential() {
  return (
    <View className="bg-zinc-900 flex-1 items-center justify-center">
      <Text className="text-gray-100 font-bold text-2xl">Credencial 2</Text>
      <Link href="tabs/">Acessar tabs</Link>
    </View>
  )
}
