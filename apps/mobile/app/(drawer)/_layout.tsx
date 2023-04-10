import { Drawer } from 'expo-router/drawer'
import { StatusBar } from 'expo-status-bar'

import CustomDrawerContent from '@/components/CustomDrawerContent'
import { AppProvider } from '../../src/contexts/AppProvider'

export default function DrawerLayout() {
  return (
    <AppProvider>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Drawer
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: '100%',
            backgroundColor: '#121214',
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      />
    </AppProvider>
  )
}
