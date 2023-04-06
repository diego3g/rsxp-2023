import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";

import CustomDrawerContent from "./CustomDrawerContent";

export default function DrawerLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Drawer
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: '100%',
            backgroundColor: '#121214',
            paddingHorizontal: 24
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      />
    </>
  )
}
