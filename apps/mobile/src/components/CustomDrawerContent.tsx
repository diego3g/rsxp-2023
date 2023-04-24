import { TouchableOpacity, View, Text, Alert } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router/src/useNavigation'
import { DrawerActions } from '@react-navigation/routers'
import * as WebBrowser from 'expo-web-browser'
import { X } from 'phosphor-react-native'
import { Link } from 'expo-router'
import React from 'react'

import { useAuth } from '@/hooks/useAuth'
import { theme } from '@/theme/index'
import { DrawerItem } from '@/components/DrawerItem'
import CredentialSvg from '@/assets/credential.svg'
import AuthenticationSvg from '@/assets/authentication.svg'

import { version } from '../../package.json'

export default function CustomDrawerContent(
  props: DrawerContentComponentProps,
) {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const { user, signInOrSignUpWithOAuth, signOut } = useAuth()

  function handleHelpLink() {
    WebBrowser.openBrowserAsync('https://www.rocketseat.com.br/help', {
      presentationStyle: WebBrowser.WebBrowserPresentationStyle.POPOVER,
      controlsColor: theme.colors.rocketseat.light,
      toolbarColor: theme.colors.gray[900],
    })
  }

  async function handleAuthLink() {
    if (!user) {
      await signInOrSignUpWithOAuth()
    } else {
      Alert.alert(
        'Deseja sair?',
        'Você já se autenticou, deseja sair da sua conta?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Sair',
            style: 'destructive',
            onPress: signOut,
          },
        ],
        {
          userInterfaceStyle: 'dark',
        },
      )
    }
  }

  return (
    <View className="flex-1">
      <TouchableOpacity
        className="w-full h-26 mx-6 pb-4"
        style={{ paddingTop: insets.top + 8 }}
        activeOpacity={0.7}
        onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
      >
        <X size={32} color={theme.colors.gray[200]} />
      </TouchableOpacity>

      <DrawerContentScrollView {...props}>
        <Link href="credential" asChild>
          <DrawerItem
            icon={CredentialSvg}
            title="Minha credencial"
            subtitle="Seu perfil, redes sociais e acesso"
            isMenuOption
            {...props}
          />
        </Link>
        <DrawerItem
          onPress={handleAuthLink}
          icon={AuthenticationSvg}
          title="Autenticação"
          subtitle="Seus dados de acesso"
          isMenuOption
          {...props}
        />
      </DrawerContentScrollView>

      <View className="absolute bottom-0 left-0 right-0">
        <View className="mb-5">
          <DrawerItem
            onPress={handleHelpLink}
            title="Preciso de ajuda"
            {...props}
          />
        </View>

        <View className="mb-5" style={{ paddingBottom: insets.bottom }}>
          <Text className="text-gray-400 text-center">
            RSXP 2023 - App v{version}
          </Text>
        </View>
      </View>
    </View>
  )
}
