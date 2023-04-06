import { ActivityIndicator, View } from 'react-native'
import { Drawer } from 'expo-router/drawer'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../src/lib/react-query'

import CustomDrawerContent from './CustomDrawerContent'
import { colors } from '../../src/theme/colors.js'

export default function DrawerLayout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-zinc-900">
        <ActivityIndicator color={colors.rocketseat.mid} size="large" />
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
            backgroundColor: colors.gray[900],
            paddingHorizontal: 24,
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      />
    </QueryClientProvider>
  )
}
