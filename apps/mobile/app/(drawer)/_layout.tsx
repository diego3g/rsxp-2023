import { Drawer } from 'expo-router/drawer'
import { StatusBar } from 'expo-status-bar'
import { QueryClientProvider } from '@tanstack/react-query'
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'

import { queryClient } from '../../src/lib/react-query'

import CustomDrawerContent from './CustomDrawerContent'
import { Loading } from '../components/Loading'

export default function DrawerLayout() {
  const [isFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

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
              backgroundColor: '#121214',
              paddingHorizontal: 24,
            },
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        />
      )}
    </QueryClientProvider>
  )
}
