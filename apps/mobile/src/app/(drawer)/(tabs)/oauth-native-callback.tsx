import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function OAuthNativeCallback() {
  const router = useRouter()

  function goBackToRoot() {
    router.replace('/')
  }

  return (
    <View
      className="bg-zinc-900"
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}
    >
      <Text className="text-white">Opa, você não deveria estar aqui.</Text>
      <TouchableOpacity onPress={goBackToRoot}>
        <Text className="text-rocketseat-mid font-bold">
          Clique aqui para voltar ao app.
        </Text>
      </TouchableOpacity>
    </View>
  )
}
