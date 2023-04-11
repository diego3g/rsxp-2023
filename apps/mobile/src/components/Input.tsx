import { TextInput, View, TextInputProps } from 'react-native'
import theme from '@/theme/index'
import { ReactNode } from 'react'

interface InputProps extends TextInputProps {
  children?: ReactNode
}

interface InputIconProps {
  children?: ReactNode
}

interface InputControlProps extends TextInputProps {}

export function InputRoot({ children }: InputProps) {
  return (
    <View className="w-full h-12 rounded bg-gray-800 flex flex-row items-center px-5 py-3">
      {children}
    </View>
  )
}

export function InputIcon({ children }: InputIconProps) {
  return <View className="mr-2">{children}</View>
}

export function InputControl({ ...rest }: InputControlProps) {
  return (
    <TextInput
      placeholderTextColor={theme?.colors?.gray[400]}
      className="w-full h-full rounded bg-transparent text-gray-100 font-body text-base"
      {...rest}
    />
  )
}

export const Input = {
  Root: InputRoot,
  Control: InputControl,
  Icon: InputIcon,
}
