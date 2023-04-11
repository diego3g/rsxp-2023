import { ReactNode } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface LinkButtonProps extends TouchableOpacityProps {
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

interface LinkButtonTextProps {
  children: ReactNode
}

export function LinkButtonText({ children }: LinkButtonTextProps) {
  return (
    <Text className="text-sm text-gray-300 font-subtitle mr-1">{children}</Text>
  )
}

export const LinkButton = {
  Root: LinkButtonRoot,
  Text: LinkButtonText,
}
