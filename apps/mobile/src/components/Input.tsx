import { TextInput, View, TextInputProps } from 'react-native'
import theme from '@/theme/index'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface InputProps extends TextInputProps {
  icon?: ReactNode
}

export function Input({ icon, ...rest }: InputProps) {
  return (
    <View className="w-full h-12 rounded bg-gray-800 flex flex-row items-center px-5 py-3">
      {icon}
      <TextInput
        placeholderTextColor={theme?.colors?.gray[400]}
        className={clsx(
          'w-full h-full rounded bg-transparent text-gray-100 font-body text-base',
          {
            'ml-2': icon,
          },
        )}
        {...rest}
      />
    </View>
  )
}
