import { ScrollView, Text, View } from 'react-native'
import { Ticket as TicketIcon, Question } from 'phosphor-react-native'

import RocketImg from '@/assets/rocket.svg'
import { Button } from '@/components/Button'
import theme from '@/theme/index'
import { LinkButton } from '@/components/LinkButton'

export default function Ticket() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="bg-gray-950 flex-1 px-5 py-10">
        <RocketImg />
        <Text className="text-gray-100 font-bold text-2xl mt-8">
          Já possui um ingresso?
        </Text>

        <Text className="text-gray-200 mt-1 font-body text-base w-[312px] mb-5">
          Vincule seu ingresso do Sympla com sua conta para facilitar seu
          check-in no evento!
        </Text>

        <LinkButton.Root>
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
          <TicketIcon color={theme?.colors?.white as string} />
          <Button.Text>COMPRAR INGRESSO</Button.Text>
        </Button.Root>
      </View>
    </ScrollView>
  )
}
