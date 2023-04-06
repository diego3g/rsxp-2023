import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function Ticket() {
  return (
    <View className="bg-gray-900 flex-1 items-center justify-center">
      <Text className="text-gray-100 font-bold text-2xl font-heading">
        Ingresso
      </Text>

      <Link className="text-ignite-mid font-body" href="credential">
        Acessar credencial
      </Link>
    </View>
  )
}
