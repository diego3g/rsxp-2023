import { ReactNode } from 'react'
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'

interface LinkButtonProps extends TouchableOpacityProps {
  children: ReactNode
}

interface LinkButtonTextProps {
  children: ReactNode
}

interface LinkButtonIconProps {
  children: ReactNode
}

export function LinkButtonRoot({ children, ...rest }: LinkButtonProps) {
  return (
    <TouchableOpacity
      className="text-sm text-gray-900 flex flex-row items-center"
      {...rest}
    >
      {children}
    </TouchableOpacity>
  )
}

export function LinkButtonIcon({ children }: LinkButtonIconProps) {
  return <View className="ml-1">{children}</View>
}

export function LinkButtonText({ children }: LinkButtonTextProps) {
  return (
    <Text className="text-base text-gray-300 font-subtitle">{children}</Text>
  )
}

export const LinkButton = {
  Root: LinkButtonRoot,
  Text: LinkButtonText,
  Icon: LinkButtonIcon,
}
