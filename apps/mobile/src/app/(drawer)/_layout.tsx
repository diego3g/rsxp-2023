import { Drawer } from 'expo-router/drawer'
import { StatusBar } from 'expo-status-bar'
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'

import { AppProvider } from '@/contexts/AppProvider'
import CustomDrawerContent from '@/components/CustomDrawerContent'
import { DrawerHeader } from '@/components/DrawerHeader'
import { theme } from '@/theme/index'
import { Loading } from '@/components/Loading'

export default function DrawerLayout() {
  const [isFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  return (
    <AppProvider>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      {isFontsLoaded ? (
        <Drawer
          screenOptions={{
            header: ({ options }) => (
              <DrawerHeader title={options.title ?? ''} />
            ),
            drawerStyle: {
              width: '100%',
              backgroundColor: theme.colors.gray[950],
            },
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
          <Drawer.Screen
            name="credential"
            options={{ title: 'Minha credencial' }}
          />
        </Drawer>
      ) : (
        <Loading />
      )}
    </AppProvider>
  )
}
