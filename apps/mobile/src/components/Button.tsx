import { ReactNode } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { clsx } from 'clsx'

import theme from '@/theme/index'

interface ButtonProps {
  children: ReactNode
  isLoading?: boolean
  variant?: 'primary' | 'normal' | 'danger'
}

interface ButtonTextProps {
  children: ReactNode
}

interface ButtonIconProps {
  children: ReactNode
}

function ButtonRoot({ children, isLoading, variant = 'primary' }: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      className={clsx(
        'h-[52px] w-full rounded-md flex flex-row items-center justify-center transition-colors',
        {
          'bg-rocketseat-mid': variant === 'primary',
          'bg-danger-light': variant === 'danger',
          'bg-gray-800': variant === 'normal',
          'bg-rocketseat-low': variant === 'primary' && isLoading,
          'bg-danger-low': variant === 'danger' && isLoading,
          'bg-gray-900': variant === 'normal' && isLoading,
        },
      )}
    >
      {isLoading ? (
        <ActivityIndicator color={theme?.colors?.white as string} />
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}

function ButtonIcon({ children }: ButtonIconProps) {
  return <View className="mr-2">{children}</View>
}

function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text className="text-white font-heading text-sm uppercase">
      {children}
    </Text>
  )
}

export const Button = {
  Root: ButtonRoot,
  Text: ButtonText,
  Icon: ButtonIcon,
}
