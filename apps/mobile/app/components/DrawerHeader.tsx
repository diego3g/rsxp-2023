import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from 'expo-router/src/useNavigation'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import colors from 'tailwindcss/colors'

import { CaretLeft } from 'phosphor-react-native'

type StackHeaderProps = {
  title: string
}

export function DrawerHeader({ title }: StackHeaderProps) {
  const { goBack } = useNavigation()

  const insents = useSafeAreaInsets()

  return (
    <View
      className="flex-row relative px-5 pb-6 items-center justify-center gap-4 bg-gray-900"
      style={{ paddingTop: insents.top + 11 }}
    >
      <TouchableOpacity className="absolute left-5 top-14" onPress={goBack}>
        <CaretLeft size={28} color={colors.gray[100]} />
      </TouchableOpacity>
      <Text className="text-base font-medium text-gray-100">{title}</Text>
    </View>
  )
}
