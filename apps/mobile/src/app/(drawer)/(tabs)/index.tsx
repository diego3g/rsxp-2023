import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Ticket as TicketIcon, Question, Hash } from 'phosphor-react-native'
import * as WebBrowser from 'expo-web-browser'

import RocketImg from '@/assets/rocket.svg'
import { Button } from '@/components/Button'
import { theme } from '@/theme/index'
import { LinkButton } from '@/components/LinkButton'
import { Input } from '@/components/Input'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/lib/axios'

export default function Ticket() {
  const [ticketNumber, setTicketNumber] = useState('')

  useWarmUpBrowser()

  function handleBuyTicket() {
    WebBrowser.openBrowserAsync(
      'https://www.sympla.com.br/evento/rs-xp-2023/1893142?token=f08c7ccb161f96342112fdb9fdaee1b6',
      {
        presentationStyle: WebBrowser.WebBrowserPresentationStyle.POPOVER,
        controlsColor: theme.colors.rocketseat.light,
        toolbarColor: theme.colors.gray[900],
      },
    )
  }

  const { mutateAsync: linkTicket } = useMutation(
    async (ticketNumber: string) => {
      const response = await api.get('/')

      console.log(response.data)
    },
  )

  function handleLinkTicket() {
    linkTicket(ticketNumber)
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView className="flex-1">
        <View className="bg-gray-950 flex-1 px-5 py-10">
          <RocketImg />
          <Text className="text-gray-100 font-bold text-2xl mt-8">
            Já possui um ingresso?
          </Text>

          <Text className="text-gray-200 mt-1 font-body text-base mb-5">
            Vincule seu ingresso do Sympla com sua conta para facilitar seu
            check-in no evento!
          </Text>

          <Input.Root>
            <Input.Icon>
              <Hash size={20} color={theme.colors.gray[400]} />
            </Input.Icon>
            <Input.Control
              placeholder="Número do ingresso no Sympla"
              returnKeyType="send"
              onChangeText={setTicketNumber}
              value={ticketNumber}
            />
          </Input.Root>

          <LinkButton.Root className="mt-4">
            <LinkButton.Text>Como obter esse número?</LinkButton.Text>
            <LinkButton.Icon>
              <Question color={theme.colors.gray[300]} size={16} />
            </LinkButton.Icon>
          </LinkButton.Root>

          <Button.Root onPress={handleLinkTicket} className="mt-5">
            <Button.Text>VINCULAR INGRESSO À CONTA</Button.Text>
          </Button.Root>

          <View className="my-4 h-[1px] bg-gray-700" />

          <Button.Root onPress={handleBuyTicket} variant="normal">
            <Button.Icon>
              <TicketIcon color={theme.colors.white} />
            </Button.Icon>
            <Button.Text>COMPRAR INGRESSO</Button.Text>
          </Button.Root>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}
