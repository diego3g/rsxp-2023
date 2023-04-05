import { QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import { queryClient } from '../src/lib/react-query'

export const unstable_settings = {
  initialRouteName: '/tabs',
}

export default function AppLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="credential" />
      </Stack>
    </QueryClientProvider>
  )
}
