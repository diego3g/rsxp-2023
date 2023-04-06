import { Button, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Credential() {
  const { back } = useRouter();

  return (
    <View className="bg-zinc-900 flex-1 items-center justify-center">
      <Text className="text-gray-100 font-bold text-2xl">Minha Credencial</Text>

      <Button title="Voltar" onPress={back} />
    </View>
  )
}
