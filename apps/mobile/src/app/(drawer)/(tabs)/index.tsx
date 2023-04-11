import { Button } from '@/components/Button'
import { Text, View } from 'react-native'
import { Ticket, Hash } from 'phosphor-react-native'
import theme from '@/theme/index'
import { Input } from '@/components/Input'

export default function Home() {
  return (
    <View className="bg-gray-950 flex-1 items-center justify-center px-5">
      <Text className="text-gray-100 font-bold text-2xl">O Evento</Text>

      <View className="flex flex-col w-full mt-2">
        <Input
          placeholder="Número do ingresso no Sympla"
          icon={<Hash size={20} color={theme?.colors?.gray[400]} />}
        />

        <Input
          placeholder="Número do ingresso no Sympla"
          icon={<Hash size={20} color={theme?.colors?.gray[400]} />}
        />

        <Input placeholder="Número do ingresso no Sympla" />

        <Button.Root isLoading>
          <Button.Text>VINCULAR INGRESSO À CONTA</Button.Text>
        </Button.Root>

        <Button.Root isLoading variant="danger">
          <Button.Text>VINCULAR INGRESSO À CONTA</Button.Text>
        </Button.Root>

        <Button.Root isLoading variant="normal">
          <Button.Text>VINCULAR INGRESSO À CONTA</Button.Text>
        </Button.Root>

        <Button.Root>
          <Button.Text>VINCULAR INGRESSO À CONTA</Button.Text>
        </Button.Root>

        <Button.Root variant="danger">
          <Button.Text>REMOVER INGRESSO</Button.Text>
        </Button.Root>

        <Button.Root variant="normal">
          <Ticket color={theme?.colors?.white as string} />
          <Button.Text>COMPRAR INGRESSO</Button.Text>
        </Button.Root>
      </View>
    </View>
  )
}
