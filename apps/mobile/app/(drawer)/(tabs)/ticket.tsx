import { useQuery } from '@tanstack/react-query'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { QueryKeys } from '../../../src/utils/query-keys'
import { getUser } from '../../../src/services/get-users'

export default function Ticket() {
  const { data } = useQuery([QueryKeys.users], getUser)

  return (
    <View className="bg-zinc-900 flex-1 items-center justify-center">
      <Text className="text-gray-100 font-bold text-2xl">Ingresso</Text>

      <Text className="text-gray-100 font-bold text-2xl">{data?.login}</Text>

      <Link className="text-blue-500" href="credential">
        Acessar credencial
      </Link>
      <View className="bg-gray-900 flex-1 items-center justify-center">
        <Text className="text-gray-100 font-bold text-2xl font-heading">
          Ingresso
        </Text>
      </View>
    </View>
  )
}
