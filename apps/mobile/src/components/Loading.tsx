import { ActivityIndicator, View } from 'react-native'
import theme from '@/theme/index'

export function Loading() {
  return (
    <View className="bg-gray-900 flex-1 items-center justify-center">
      {/* @ts-ignore */}
      <ActivityIndicator color={theme?.colors?.rocketseat?.mid} />
    </View>
  )
}
