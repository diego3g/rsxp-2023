import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export const unstable_settings = {
  initialRouteName: '/tabs',
}

export default function AppLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="credential" />

      </Stack>
      
      <StatusBar style='light' />
    </>
  )
}
