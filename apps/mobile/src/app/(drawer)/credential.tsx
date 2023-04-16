import { Text, View } from 'react-native'

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

export default function Credential() {
  return (
    <View className="bg-gray-950 flex-1 items-center px-4">
      <View className=""></View>
      <TouchableWithoutFeedback className="px-5 mb-5">
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
        <Button
          title="COMPARTILHAR"
          icon={<ShareNetwork size={20} weight="bold" color="#ffffff" />}
        />
        <Button
          className="bg-gray-800"
          title="ADICIONAR AO WALLET"
          icon={<AppleLogo size={20} weight="fill" color="#ffffff" />}
        />
      </View>

      <View className="w-full ">
        <View className="flex-row justify-between mb-2">
          <Text className="text-sm font-medium text-gray-100">Embed code</Text>

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
          <Text className="text-base font-medium text-gray-100">
            Adicionar credencial ao Github
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}
