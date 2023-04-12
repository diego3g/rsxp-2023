import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Ticket as TicketIcon, Question, Hash } from 'phosphor-react-native'

import RocketImg from '@/assets/rocket.svg'
import { Button } from '@/components/Button'
import theme from '@/theme/index'
import { LinkButton } from '@/components/LinkButton'
import { Input } from '@/components/Input'

export default function Ticket() {
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
              <Hash size={20} color={theme?.colors?.gray[400]} />
            </Input.Icon>
            <Input.Control
              placeholder="Número do ingresso no Sympla"
              returnKeyType="send"
            />
          </Input.Root>

          <LinkButton.Root className="mt-4">
            <LinkButton.Text>Como obter esse número?</LinkButton.Text>
            <LinkButton.Icon>
              <Question color={theme?.colors?.gray[300]} size={16} />
            </LinkButton.Icon>
          </LinkButton.Root>

          <Button.Root className="mt-5">
            <Button.Text>VINCULAR INGRESSO À CONTA</Button.Text>
          </Button.Root>

          <View className="my-4 h-[1px] bg-gray-700" />

          <Button.Root variant="normal">
            <Button.Icon>
              <TicketIcon color={theme?.colors?.white as string} />
            </Button.Icon>
            <Button.Text>COMPRAR INGRESSO</Button.Text>
          </Button.Root>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}
