import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from 'expo-router/src/useNavigation'

import BackIcon from '../assets/back-icon.svg'

type StackHeaderProps = {
  title: string
}

export function DrawerHeader({ title }: StackHeaderProps) {
  const { goBack } = useNavigation()

  return (
    <View className="flex-row relative px-5 pt-[58px] pb-6 items-center justify-center gap-4 bg-gray-900">
      <TouchableOpacity className="absolute left-5 top-12" onPress={goBack}>
        <BackIcon width={40} height={40} />
      </TouchableOpacity>
      <Text className="text-base font-medium text-gray-100">{title}</Text>
    </View>
  )
}
