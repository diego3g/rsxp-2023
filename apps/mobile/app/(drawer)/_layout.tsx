import { Drawer } from 'expo-router/drawer'
import { StatusBar } from 'expo-status-bar'

import CustomDrawerContent from './CustomDrawerContent'
import { DrawerHeader } from '../components/DrawerHeader'

import theme from '../theme'

export default function DrawerLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Drawer
        screenOptions={{
          header: ({ options }) => <DrawerHeader title={options.title} />,
          drawerStyle: {
            width: '100%',
            backgroundColor: theme.colors.gray[900],
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
    </>
  )
}
