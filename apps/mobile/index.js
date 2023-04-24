import 'expo-router/entry'
import { registerRootComponent } from 'expo'
import { ExpoRoot } from 'expo-router'

import './server-mock'

export function App() {
  const ctx = require.context('./src/app')
  return <ExpoRoot context={ctx} />
}

registerRootComponent(App)
