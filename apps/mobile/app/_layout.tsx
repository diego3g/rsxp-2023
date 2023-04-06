import { Stack } from 'expo-router'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from '../components/Loading'

export const unstable_settings = {
  initialRouteName: '/tabs',
}

export default function AppLayout() {
  const [isFontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (!isFontLoaded) {
    return <Loading />
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="credential" />
    </Stack>
  )
}
