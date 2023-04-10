import { useQuery } from '@tanstack/react-query'
import { Text, View } from 'react-native'
import { QueryKeys } from '../../../utils/query-keys'
import { getUser } from '../../../services/get-users'

export default function Ticket() {
  const { data } = useQuery([QueryKeys.users], getUser)

  return (
    <View className="bg-gray-950 flex-1 items-center justify-center">
      <Text className="text-gray-100 font-bold text-2xl">Ingresso</Text>

      <Text className="text-gray-100 font-bold text-2xl">{data?.login}</Text>
    </View>
  )
}
