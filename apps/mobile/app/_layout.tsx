import { Stack } from 'expo-router'
import {} from 'expo-router/stack'
import { View } from 'react-native'
import { StackHeader } from './components/StackHeader'

export const unstable_settings = {
  initialRouteName: '/tabs',
}

export default function AppLayout() {
  // const props = {
  //   "back": {
  //     "title": "(tabs)"
  //   },
  //   "navigation": {
  //     "addListener": [Function addListener],
  //     "canGoBack": [Function canGoBack],
  //     "dispatch": [Function dispatch],
  //     "getId": [Function getId],
  //     "getParent": [Function getParent],
  //     "getState": [Function anonymous],
  //     "goBack": [Function anonymous],
  //     "isFocused": [Function isFocused],
  //     "navigate": [Function anonymous],
  //     "pop": [Function anonymous],
  //     "popToTop": [Function anonymous],
  //     "push": [Function anonymous],
  //     "removeListener": [Function removeListener],
  //     "replace": [Function anonymous],
  //     "reset": [Function anonymous],
  //     "setOptions": [Function setOptions],
  //     "setParams": [Function anonymous]},
  //     "options": {"animation": "slide_from_right", "header": [Function header], "headerTitle": "Minha credencial"}, "route": {"key": "credential-MQMI0uVmt1yCzJSECiNeH", "name": "credential", "params": undefined, "path": undefined}}

  return (
    <View className="flex-1 bg-gray-950">
      <Stack
        screenOptions={{
          header: ({ options }) => {
            return <StackHeader title={options.title} />
          },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="credential"
          options={{
            title: 'Minhas credencias',
          }}
        />
      </Stack>
    </View>
  )
}
