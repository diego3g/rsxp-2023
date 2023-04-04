import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import { Menu } from "../screens/Menu";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
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
        name="menu"
        component={Menu}
        options={{
          tabBarButton: () => false,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
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
