import { View, ActivityIndicator } from 'react-native'

export function Loading() {
  return (
    <View className="flex-1 bg-gray-900 items-center justify-center">
      <ActivityIndicator color="#8257E5" />
    </View>
  )
}
