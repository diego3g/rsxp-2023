import { Drawer } from 'expo-router/drawer'
import { StatusBar } from 'expo-status-bar'
import { QueryClientProvider } from '@tanstack/react-query'
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'

import { theme } from '../../tailwind.config'
import { queryClient } from '../../src/lib/react-query'

import { Loading } from '@/components/Loading'
import CustomDrawerContent from '@/components/CustomDrawerContent'
import { Colors } from '@/typings/colorsTheme'

export default function DrawerLayout() {
  const [isFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  const { colors } = theme.extend as Colors

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {!isFontsLoaded ? (
        <Loading />
      ) : (
        <Drawer
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              width: '100%',
              backgroundColor: colors.gray[900],
            },
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        />
      )}
    </QueryClientProvider>
  )
}
