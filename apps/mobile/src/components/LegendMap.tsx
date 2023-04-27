import React, { ReactNode } from 'react'
import { Text, View } from 'react-native'
import { SvgProps } from 'react-native-svg'

interface LegendMapProps {
  color?: string
  children: ReactNode
  icon?: React.FC<SvgProps>
}

export default function LegendMap({
  children,
  color,
  icon: Icon,
}: LegendMapProps) {
  return color ? (
    <View className="flex flex-row justify-start items-center">
      <View className="w-3 h-3" style={{ backgroundColor: color }} />
      <Text className="text-gray-100 text-lg left-3">{children}</Text>
    </View>
  ) : (
    <View className="flex flex-row justify-center items-center">
      <View className="w-3 h-3">{Icon && <Icon />}</View>
      <Text className="text-gray-100 text-lg left-4">{children}</Text>
    </View>
  )
}
