import { Button } from '@/components/Button'
import { Text, View } from 'react-native'
import { Ticket } from 'phosphor-react-native'
import theme from '@/theme/index'
import { Input } from '@/components/Input'

export default function Home() {
  return (
    <View className="bg-gray-950 flex-1 items-center justify-center px-5">
      <Text className="text-gray-100 font-bold text-2xl">O Evento</Text>

      <View className="flex flex-col w-full mt-2">
        <Input.Root>
          <Input.Control placeholder="Número do ingresso no Sympla" />
        </Input.Root>

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
          <Button.Icon>
            <Ticket color={theme?.colors?.white as string} />
          </Button.Icon>
          <Button.Text>COMPRAR INGRESSO</Button.Text>
        </Button.Root>
      </View>
    </View>
  )
}
