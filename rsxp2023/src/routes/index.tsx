import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { AppRoutes, DrawerNavigator } from "./app.routes";

export function Routes() {
  return (
    <View className="flex-1 bg-background">
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </View>
  );
}
