import { DrawerActions } from '@react-navigation/routers';
import { useNavigation } from 'expo-router/src/useNavigation'
import { Text, View, Button } from 'react-native'

export default function Home() {
  const navigation = useNavigation();

  return (
    <View className="bg-zinc-900 flex-1 items-center justify-center">
      <Text className="text-gray-100 font-bold text-2xl">O Evento</Text>

      <Button
        title="Abrir Drawer Menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  )
}
