import { Drawer } from 'expo-router/drawer'
import { StatusBar } from 'expo-status-bar'

import { AppProvider } from '@/contexts/AppProvider'

import CustomDrawerContent from '@/components/CustomDrawerContent'
import { DrawerHeader } from '@/components/DrawerHeader'

import theme from '@/theme/index'

export default function DrawerLayout() {
  return (
    <AppProvider>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Drawer
        screenOptions={{
          header: ({ options }) => <DrawerHeader title={options.title ?? ''} />,
          drawerStyle: {
            width: '100%',
            backgroundColor: theme?.colors?.gray[900],
            paddingHorizontal: 24,
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
    </AppProvider>
  )
}
