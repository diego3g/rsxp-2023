import { ActivityIndicator, View } from 'react-native'
import { Drawer } from 'expo-router/drawer'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { purple } from 'tailwindcss/colors'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../src/lib/react-query'

import CustomDrawerContent from './CustomDrawerContent'

export default function DrawerLayout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-950">
        <ActivityIndicator color={purple[600]} size="large" />
      </View>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Drawer
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: '100%',
            backgroundColor: '#121214',
            paddingHorizontal: 24,
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      />
    </QueryClientProvider>
  )
}
