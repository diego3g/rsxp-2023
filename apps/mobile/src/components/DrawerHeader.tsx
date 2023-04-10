import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from 'expo-router/src/useNavigation'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { CaretLeft } from 'phosphor-react-native'

import theme from '@/theme/index'

type StackHeaderProps = {
  title: string
}

export function DrawerHeader({ title }: StackHeaderProps) {
  const { goBack } = useNavigation()

  const insets = useSafeAreaInsets()

  return (
    <View
      className="flex-row px-5 pb-6 items-center justify-between gap-4 bg-gray-900"
      style={{ paddingTop: insets.top }}
    >
      <TouchableOpacity onPress={goBack}>
        <CaretLeft size={28} color={theme?.colors?.gray[100]} />
      </TouchableOpacity>
      <Text className="text-base font-medium text-gray-100">{title}</Text>

      <View className="w-9" />
    </View>
  )
}
