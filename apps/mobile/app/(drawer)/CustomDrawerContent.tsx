import { TouchableOpacity, View } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router/src/useNavigation'
import { DrawerActions } from '@react-navigation/routers'

import { X } from 'phosphor-react-native'

import CredentialSvg from '../assets/credential.svg'

import colors from 'tailwindcss/colors'

import DrawerItem from '../components/DrawerItem'

export default function CustomDrawerContent(
  props: DrawerContentComponentProps,
) {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  return (
    <View className="flex-1">
      <TouchableOpacity
        className="w-full h-26 pb-4"
        style={{ paddingTop: insets.top + 48 }}
        activeOpacity={0.7}
        onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
      >
        <X size={40} color={colors.white} />
      </TouchableOpacity>

      <DrawerContentScrollView {...props}>
        <DrawerItem
          href="credential"
          icon={CredentialSvg}
          title="Minha credencial"
          subtitle="Seu perfil, redes sociais e acesso"
          {...props}
        />
      </DrawerContentScrollView>
    </View>
  )
}
