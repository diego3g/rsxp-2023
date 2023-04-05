import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export const unstable_settings = {
  initialRouteName: '/tabs',
}

export default function AppLayout() {
  return (
    <>
      <StatusBar style='light' backgroundColor='transparent' translucent />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="credential" />
      </Stack>
    </>
  )
}
