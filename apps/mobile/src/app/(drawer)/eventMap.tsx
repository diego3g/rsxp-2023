import { Button, Text, View } from 'react-native'
import { useRouter } from 'expo-router'

export default function EventMap() {
  const { back } = useRouter()

  return (
    <View className="bg-gray-950 flex-1 items-start justify-start">
      <Text className="text-gray-100 font-bold text-2xl my-8">
        Mapa do Evento
      </Text>

      <Button title="Voltar" onPress={back} />
    </View>
  )
}
