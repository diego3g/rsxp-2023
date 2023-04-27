import 'expo-router/entry'

import 'react-native-reanimated'
import 'react-native-gesture-handler'

import { registerRootComponent } from 'expo'
import { ExpoRoot } from 'expo-router'

export function App() {
  const ctx = require.context('./src/app')
  return <ExpoRoot context={ctx} />
}

registerRootComponent(App)
