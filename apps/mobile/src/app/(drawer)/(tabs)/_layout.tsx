import { Tabs } from 'expo-router'
import { Bookmark } from 'phosphor-react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { TabsHeader } from '@/components/TabsHeader'
import { TabIcon } from '@/components/TabIcon'
import { theme } from '@/theme/index'

export default function TabLayout() {
  const insets = useSafeAreaInsets()

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
          backgroundColor: theme.colors.gray[900],
          borderTopWidth: 0,
          height: 74 + insets.bottom,
          paddingBottom: 16 + insets.bottom,
          paddingTop: 16,
        },
      }}
    >
      <Tabs.Screen name="oauth-native-callback" redirect />

      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Ingresso',
          tabBarIcon: ({ focused, size }) => (
            <TabIcon icon={Bookmark} size={size} focused={focused} />
          ),
        }}
      />
    </Tabs>
  )
}
