import { ActivityIndicator, View } from 'react-native'

import { theme } from '../../tailwind.config'
import { Colors } from '../typings/colorsTheme'

export function Loading() {
  const { colors } = theme.extend as Colors

  return (
    <View className="bg-gray-900 flex-1 items-center justify-center">
      <ActivityIndicator color={colors.rocketseat.mid} />
    </View>
  )
}
