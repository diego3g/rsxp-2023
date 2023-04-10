import { ReactNode } from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { clsx } from 'clsx'

import theme from '@/theme/index'

interface ButtonProps {
  children: ReactNode
  isLoading?: boolean
  variant?: 'primary' | 'normal' | 'danger'
}

export function Button({
  children,
  isLoading,
  variant = 'primary',
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      className={clsx(
        'h-[52px] w-full rounded-md flex flex-row items-center justify-center mt-2',
        {
          'bg-rocketseat-mid': variant === 'primary',
          'bg-danger-light': variant === 'danger',
          'bg-gray-800': variant === 'normal',
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

interface ButtonTextProps {
  children: ReactNode
}

export function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text className="text-white font-heading text-sm uppercase ml-2">
      {children}
    </Text>
  )
}
