import { Tabs } from 'expo-router'
import { House, BookmarkSimple } from 'phosphor-react-native'

import { Platform } from 'react-native'

import { TabsHeader } from '@/components/TabsHeader'
import { TabIcon } from '@/components/TabIcon'

import theme from '@/theme'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        header: () => <TabsHeader />,
        tabBarActiveTintColor: theme.colors.gray[100],
        tabBarInactiveTintColor: theme.colors.gray[400],
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: theme.colors.zinc[800],
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 88 : 94,
          paddingBottom: Platform.OS === 'android' ? 30 : 36,
          paddingTop: 16,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'O evento',
          tabBarIcon: ({ size, focused }) => (
            <TabIcon icon={House} size={size} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="ticket"
        options={{
          tabBarLabel: 'Ingresso',
          tabBarIcon: ({ focused, size }) => (
            <TabIcon icon={BookmarkSimple} size={size} focused={focused} />
          ),
        }}
      />
    </Tabs>
  )
}
