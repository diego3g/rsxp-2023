import { Alert, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Ticket as TicketIcon, Question, Hash } from 'phosphor-react-native'
import * as WebBrowser from 'expo-web-browser'
import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { z } from 'zod'
import { useAuth as useClerkAuth } from '@clerk/clerk-expo'

import RocketImg from '@/assets/rocket.svg'
import { Button } from '@/components/Button'
import { theme } from '@/theme/index'
import { LinkButton } from '@/components/LinkButton'
import { Input } from '@/components/Input'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser'
import { api } from '@/lib/axios'
import { useAuth } from '@/hooks/useAuth'

export default function Ticket() {
  const [ticketNumber, setTicketNumber] = useState('')
  const { getToken } = useClerkAuth()
  const { signInOrSignUpWithOAuth, user } = useAuth()
  const queryClient = useQueryClient()

  useWarmUpBrowser()

  const { data: ticket, isInitialLoading: isLoadingTicket } = useQuery(
    ['ticket'],
    async () => {
      const token = await getToken()

      const response = await api.get('/tickets/link', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.data.ticket
    },
    {
      enabled: !!user,
    },
  )

  const { mutateAsync: linkTicket } = useMutation(
    async (ticketNumber: string) => {
      const token = await getToken()

      try {
        await api.post(
          '/tickets/link',
          {
            ticketNumber,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )

        setTicketNumber('')

        queryClient.setQueryData(['ticket'], {
          symplaTicketNumber: ticketNumber,
          clerkUserId: user?.id,
        })
      } catch (err) {
        if (err instanceof AxiosError) {
          Alert.alert('Eita!', err.response?.data.message)
        } else {
          console.error(err)
        }
      }
    },
  )

  const { mutateAsync: unlinkTicket } = useMutation(
    async () => {
      const token = await getToken()

      try {
        await api.delete('/tickets/link', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      } catch (err) {
        if (err instanceof AxiosError) {
          Alert.alert('Eita!', err.response?.data.message)
        } else {
          console.error(err)
        }
      }
    },
    {
      onSuccess() {
        queryClient.setQueryData(['ticket'], null)
      },
    },
  )

  function handleUnlinkTicket() {
    unlinkTicket()
  }

  async function handleLinkTicket() {
    if (!user) {
      await signInOrSignUpWithOAuth()
    }

    const { success } = z
      .string()
      .regex(/[A-Z0-9a-z]{4}-[A-Z0-9a-z]{2}-[A-Z0-9a-z]{4}/)
      .safeParse(ticketNumber)

    if (success) {
      linkTicket(ticketNumber)
    } else {
      Alert.alert(
        'Formato inválido',
        'O número do ticket possui o seguinte formato: XXXX-XX-XXXX',
      )
    }
  }

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

  function handleFindTicketNumberLink() {
    WebBrowser.openBrowserAsync(
      'https://ajuda.sympla.com.br/hc/pt-br/articles/115005427246-Como-fa%C3%A7o-para-ter-acesso-aos-meus-ingressos-',
      {
        presentationStyle: WebBrowser.WebBrowserPresentationStyle.POPOVER,
        controlsColor: theme.colors.rocketseat.light,
        toolbarColor: theme.colors.gray[900],
      },
    )
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-zinc-950"
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
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
            {ticket ? (
              <Input.Control
                editable={false}
                value={ticket.symplaTicketNumber}
              />
            ) : (
              <Input.Control
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Número do ingresso no Sympla"
                returnKeyType="send"
                onChangeText={setTicketNumber}
                value={ticketNumber}
              />
            )}
          </Input.Root>

          <LinkButton.Root
            onPress={handleFindTicketNumberLink}
            className="mt-4"
          >
            <LinkButton.Text>Como obter esse número?</LinkButton.Text>
            <LinkButton.Icon>
              <Question color={theme.colors.gray[300]} size={16} />
            </LinkButton.Icon>
          </LinkButton.Root>

          {ticket ? (
            <Button.Root
              onPress={handleUnlinkTicket}
              variant="danger"
              className="mt-5"
            >
              <Button.Text>REMOVER INGRESSO</Button.Text>
            </Button.Root>
          ) : (
            <Button.Root
              isLoading={isLoadingTicket}
              onPress={handleLinkTicket}
              className="mt-5"
            >
              <Button.Text>VINCULAR INGRESSO À CONTA</Button.Text>
            </Button.Root>
          )}

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
