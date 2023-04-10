import { Drawer } from 'expo-router/drawer'
import { StatusBar } from 'expo-status-bar'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '../../lib/react-query'

import CustomDrawerContent from '@/components/CustomDrawerContent'
import { DrawerHeader } from '@/components/DrawerHeader'

import theme from '@/theme/index'

export default function DrawerLayout() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}
