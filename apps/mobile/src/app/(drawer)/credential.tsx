import {
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {
  AppleLogo,
  CaretDoubleDown,
  Copy,
  ShareNetwork,
} from 'phosphor-react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MotiView } from 'moti'
import { Skeleton } from 'moti/skeleton'
import { useState } from 'react'

import { TabIcon } from '@/components/TabIcon'
import { Button } from '@/components/Button'
import GithubLogoSvg from '@/assets/github-icon.svg'
import QrCodeSvg from '@/assets/QRCode.svg'
import { theme } from '@/theme/index'
import backgroundBlur from '@/assets/ticket-background-blur.png'
import ticketHeader from '@/assets/ticket-header.png'
import ticketBand from '@/assets/ticket-band.png'
import RsxpLogo from '@/assets/rsxp-logo.svg'

export default function Credential() {
  const insets = useSafeAreaInsets()
  const { height } = useWindowDimensions()

  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false)

  return (
    <ScrollView
      className="bg-zinc-950"
      contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={backgroundBlur}
        imageStyle={{ width: 975, left: '-50%', opacity: 0.6 }}
        className="items-center px-5"
      >
        <MotiView
          className="self-stretch items-center"
          from={{
            opacity: 0,
            transform: [
              {
                translateY: -height,
              },
            ],
            rotateZ: '70deg',
            rotateY: '30deg',
            rotateX: '30deg',
          }}
          animate={{
            opacity: 1,
            transform: [
              {
                translateY: 0,
              },
            ],
            rotateZ: '0deg',
            rotateY: '0deg',
            rotateX: '0deg',
          }}
          transition={{
            type: 'spring',
            delay: 250,
            rotateZ: {
              type: 'spring',
              delay: 150,
            },
          }}
        >
          <Image source={ticketBand} className="absolute z-10 -top-36" alt="" />

          <View className="bg-black/50 self-stretch items-center pb-6 mt-10 border border-white/10 mx-3 rounded-2xl">
            <ImageBackground
              source={ticketHeader}
              imageStyle={{
                borderTopRightRadius: 16,
                borderTopLeftRadius: 16,
              }}
              className="px-6 py-8 h-40 self-stretch"
            >
              <View className="flex-row items-center justify-between">
                <RsxpLogo width={124} height={20} />
                <Text className="text-zinc-50 text-sm font-heading">
                  #00183
                </Text>
              </View>
            </ImageBackground>

            {!isAvatarLoaded && (
              <View className="absolute mt-24 z-0">
                <Skeleton
                  colors={[theme.colors.gray[700], theme.colors.gray[500]]}
                  height={160}
                  width={160}
                  radius={'round'}
                />
              </View>
            )}

            <Image
              source={{ uri: 'https://github.com/rodrigorgtic.png' }}
              className="w-40 h-40 rounded-full self-center -mt-16"
              alt=""
              onLoad={() => setIsAvatarLoaded(true)}
            />

            <Text className="font-heading text-2xl text-zinc-50 mt-4">
              Diego Fernandes
            </Text>
            <Text className="font-body text-base text-zinc-300">
              CTO @Rocketseat
            </Text>

            <QrCodeSvg className="mt-6" />

            <TouchableOpacity activeOpacity={0.7} className="mt-6">
              <Text className="font-body text-rocketseat-light text-sm">
                Ampliar QRCode
              </Text>
            </TouchableOpacity>
          </View>
        </MotiView>

        <View className="mb-5 mt-8">
          <TabIcon icon={CaretDoubleDown} size={25} focused={false} />
        </View>

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
              <ShareNetwork
                size={22}
                weight="bold"
                color={theme.colors.white}
              />
            </Button.Icon>
            <Button.Text>COMPARTILHAR</Button.Text>
          </Button.Root>
          <Button.Root variant="normal">
            <Button.Icon>
              <AppleLogo size={22} weight="fill" color={theme.colors.white} />
            </Button.Icon>
            <Button.Text>ADICIONAR AO WALLET</Button.Text>
          </Button.Root>
        </View>

        <View className="self-stretch">
          <View className="flex-row justify-between mb-3">
            <Text className="text-base font-subtitle text-gray-100">
              Embed code
            </Text>

            <TouchableWithoutFeedback className="flex-row items-center gap-x-2">
              <Copy size={20} color={theme.colors.gray['100']} />
              <Text className="text-sm font-subtitle text-gray-100">
                Copiar código
              </Text>
            </TouchableWithoutFeedback>
          </View>

          <TextInput
            textAlignVertical="top"
            multiline
            className="bg-gray-800 h-24 rounded-md px-4 pt-3 pb-3 text-gray-200 font-body text-base leading-6"
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, qui at odit molestias temporibus eaque consectetur numquam quibusdam autem? Dolorem unde iste dicta, nihil illum eaque quibusdam est repellat tempore?"
          />

          <TouchableWithoutFeedback className="flex-row items-center gap-x-2 mt-4">
            <GithubLogoSvg />
            <Text className="text-base font-subtitle text-rocketseat-light">
              Adicionar credencial ao Github
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}
