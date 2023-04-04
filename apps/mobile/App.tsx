import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from './src/components/Loading'

export default function App() {
  const [isFontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (!isFontLoaded) {
    return <Loading />
  }

  return (
    <View className="flex-1 bg-gray-800 items-center justify-center">
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Text className="text-white text-4xl font-bold font-heading">
        Hello World
      </Text>
    </View>
  )
}
