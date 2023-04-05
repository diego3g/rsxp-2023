import { StatusBar } from 'expo-status-bar'
import { TabsHeader } from '../components/TabsHeader'
import { Tabs } from 'expo-router'
import colors from 'tailwindcss/colors'

export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Tabs
        screenOptions={{
          // headerShown: false,
          header: () => <TabsHeader />,
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
      </Tabs>
    </>
  )
}
