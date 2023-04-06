import { TouchableOpacity, View, Text } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router/src/useNavigation'
import { DrawerActions } from '@react-navigation/routers'

import { X } from 'phosphor-react-native'

import AuthenticationSvg from '../assets/authentication.svg'
import CredentialSvg from '../assets/credential.svg'

import colors from 'tailwindcss/colors'

import DrawerItem from '../components/DrawerItem'

import { version } from '../../package.json'

export default function CustomDrawerContent(
  props: DrawerContentComponentProps,
) {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  return (
    <View className="flex-1 justify-evenly">
      <TouchableOpacity
        className="w-full h-26 pb-4 px-6"
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
          isMenuOption
          {...props}
        />
        <DrawerItem
          href="authentication"
          icon={AuthenticationSvg}
          title="Autenticação"
          subtitle="Seus dados de acesso"
          isMenuOption
          {...props}
        />
      </DrawerContentScrollView>

      <View className="absolute bottom-0 left-0 right-0">
        <View style={{ paddingBottom: insets.bottom + 16 }}>
          <DrawerItem href="help" title="Preciso de ajuda" {...props} />
        </View>

        <View className="pb-8 pt-5">
          <Text className="text-gray-400 text-center">
            RSXP 2023 - App v{version}
          </Text>
        </View>
      </View>
    </View>
  )
}
