import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import { Menu } from "../screens/Menu";
import { Home } from "../screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";

const { Navigator, Screen } = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="menu"
        component={Menu}
        options={{
          headerShown: false,
          swipeEnabled: false,
          drawerStyle: {
            display: "none",
          },
        }}
      />
      <Drawer.Screen name="app" component={AppRoutes} />
    </Drawer.Navigator>
  );
}

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: "#996dff",
        tabBarInactiveTintColor: "#7C7C8A",
        tabBarStyle: {
          backgroundColor: "#121214",
          position: "absolute",
          borderTopColor: "transparent",
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons color={color} size={size} name="home" />
          ),
          tabBarLabel: "O evento",
        }}
      />
    </Navigator>
  );
}
