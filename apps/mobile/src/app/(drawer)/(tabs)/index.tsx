import { Button, ButtonText } from '@/components/Button'
import { Text, View } from 'react-native'
import { Ticket } from 'phosphor-react-native'
import theme from '@/theme/index'

export default function Home() {
  return (
    <View className="bg-gray-950 flex-1 items-center justify-center px-5">
      <Text className="text-gray-100 font-bold text-2xl">O Evento</Text>

      <View className="flex flex-col w-full mt-2">
        <Button isLoading>
          <ButtonText>VINCULAR INGRESSO À CONTA</ButtonText>
        </Button>

        <Button>
          <ButtonText>VINCULAR INGRESSO À CONTA</ButtonText>
        </Button>

        <Button variant="danger">
          <ButtonText>REMOVER INGRESSO</ButtonText>
        </Button>

        <Button variant="normal">
          <Ticket color={theme?.colors?.white as string} />
          <ButtonText>COMPRAR INGRESSO</ButtonText>
        </Button>
      </View>
    </View>
  )
}
