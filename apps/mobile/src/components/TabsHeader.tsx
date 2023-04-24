import { TouchableOpacity, View } from 'react-native'
import { DrawerActions } from '@react-navigation/routers'
import { useNavigation } from 'expo-router/src/useNavigation'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import MenuIcon from '@/assets/menu-icon.svg'
import RSXPLogo from '@/assets/rsxp-logo.svg'

export function TabsHeader() {
  const navigation = useNavigation()

  const insets = useSafeAreaInsets()

  function handleOpenDrawerMenu() {
    navigation.dispatch(DrawerActions.openDrawer())
  }

  return (
    <View
      className="flex-row px-5 pt-12 pb-4 items-center gap-4 bg-gray-900"
      style={{ paddingTop: insets.top }}
    >
      <TouchableOpacity onPress={handleOpenDrawerMenu}>
        <MenuIcon width={40} height={40} />
      </TouchableOpacity>

      <RSXPLogo />
    </View>
  )
}
