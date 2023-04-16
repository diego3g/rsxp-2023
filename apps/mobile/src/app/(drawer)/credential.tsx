import { ScrollView, Text, View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { TabIcon } from '@/components/TabIcon'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Button } from '@/components/Button'

import {
  AppleLogo,
  CaretDoubleDown,
  Copy,
  ShareNetwork,
} from 'phosphor-react-native'

import GithubLogoSvg from '@/assets/github-icon.svg'
import RocketseatLogoSvg from '@/assets/rocketseat-logo.svg'
import RsxpLogo from '@/assets/rsxp-logo.svg'
import QrCodeSvg from '@/assets/QRCode.svg'

export default function Credential() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="bg-gray-950 flex-1 items-center px-4 relative ">
        <View className="items-center mb-80">
          <LinearGradient
            colors={['#202024', '#121214']}
            className="w-20 h-[101px] items-center justify-center overflow-hidden z-[1] mb-1"
            start={[0.1, 0]}
            end={[0.1, 0]}
          >
            <RocketseatLogoSvg />
          </LinearGradient>

          <View className="w-full h-max bg-background items-center justify-center p-6 border-[1px] border-gray-50 rounded-2xl absolute top-20 z-[-1] backdrop-opacity-5">
            <View className="w-24 h-[10] mt-[-11px] bg-white rounded-full" />
            <View className="w-full flex-row items-center justify-between px-6">
              <RsxpLogo />

              <Text className="text-white font-bold text-sm">#00192</Text>
            </View>

            <Text className="text-white font-bold text-2xl">
              Diego Fernandes
            </Text>

            <Text className="text-gray-200 text-base mb-6">
              CTO @Rocketseat
            </Text>

            <QrCodeSvg />

            <TouchableWithoutFeedback className="mt-6">
              <Text className="text-sm text-rocketseat-light">
                Ampliar QRCode
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <TouchableWithoutFeedback className="px-5 mb-5 mt-8">
          <TabIcon icon={CaretDoubleDown} size={25} focused={false} />
        </TouchableWithoutFeedback>

        <View className="self-start mb-6">
          <Text className="text-2xl font-bold text-gray-100 mb-1">
            Compartilhar credencial
          </Text>

          <Text className="text-base text-gray-200">
            Mostre ao mundo que você vai participar do RS/XP 2023!
          </Text>
        </View>
        <View className="w-full gap-y-4 mb-12">
          <Button.Root variant="primary">
            <Button.Icon>
              <ShareNetwork size={22} weight="bold" color="#FFFFFF" />
            </Button.Icon>
            <Button.Text>COMPARTILHAR</Button.Text>
          </Button.Root>
          <Button.Root variant="normal">
            <Button.Icon>
              <AppleLogo size={22} weight="fill" color="#FFFFFF" />
            </Button.Icon>
            <Button.Text>ADICIONAR AO WALLET</Button.Text>
          </Button.Root>
        </View>

        <View className="w-full ">
          <View className="flex-row justify-between mb-2">
            <Text className="text-sm font-medium text-gray-100">
              Embed code
            </Text>

            <TouchableWithoutFeedback className="flex-row gap-x-2">
              <Copy size={25} color="#c4c4cc" />
              <Text className="text-sm font-medium text-gray-100">
                Copiar código
              </Text>
            </TouchableWithoutFeedback>
          </View>

          <View className="w-full bg-gray-800 rounded-md px-4 pt-3 mb-5">
            <Text className="text-gray-200 text-sm leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived...
            </Text>
          </View>

          <TouchableWithoutFeedback className="flex-row items-center gap-x-2">
            <GithubLogoSvg />
            <Text className="text-base font-medium text-rocketseat-light">
              Adicionar credencial ao Github
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ScrollView>
  )
}
