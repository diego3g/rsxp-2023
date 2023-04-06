import { Tabs } from 'expo-router'
import { House, BookmarkSimple } from 'phosphor-react-native';

import colors from 'tailwindcss/colors'

export default function TabLayout() {
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
          tabBarLabel: 'O evento',
          tabBarIcon: ({ color, size }) => (
            <House color={color} size={size} />
          )
        }}
      />

      <Tabs.Screen
        name="ticket"
        options={{
          tabBarLabel: 'Ingresso',
          tabBarIcon: ({ color, size }) => (
            <BookmarkSimple color={color} size={size} />
          )
        }}
      />
    </Tabs>
  )
}
