import { Tabs } from 'expo-router'
import colors from 'tailwindcss/colors'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.purple[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: colors.zinc[800],
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Ingresso',
        }}
      />

      <Tabs.Screen
        name="credential"
        options={{
          href: null,
        }}
      />
    </Tabs>
  )
}
