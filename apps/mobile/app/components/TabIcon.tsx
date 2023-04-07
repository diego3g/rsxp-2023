import React from 'react'
import { IconProps } from 'phosphor-react-native'

import theme from '@/theme'

type TabIconProps = {
  focused: boolean
  size: number
  icon: React.ComponentType<IconProps>
}

export function TabIcon({ focused, icon: Icon, size }: TabIconProps) {
  const iconColor = focused
    ? theme.colors.rocketseat.light
    : theme.colors.gray[400]

  return <Icon color={iconColor} size={size} />
}
