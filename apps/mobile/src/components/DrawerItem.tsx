import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SvgProps } from 'react-native-svg'
import { Link } from 'expo-router'

import theme from '@/theme/index'

type Props = {
  href: string
  title: string
  subtitle?: string
  icon?: React.FC<SvgProps>
  isMenuOption?: boolean
}

export default function DrawerItem({
  title,
  subtitle,
  icon: Icon,
  href,
  isMenuOption = false,
}: Props) {
  const classNameMenu = isMenuOption ? 'mx-3 px-4' : 'pr-6 pl-2'

  return (
    <Link href={href} asChild>
      <TouchableOpacity
        className={`grow border-b ${classNameMenu} py-4 border-b-gray-800 flex-row items-center`}
      >
        {Icon && <Icon />}

        <View className="ml-5 flex-1">
          <Text className="text-gray-100 font-medium text-base">{title}</Text>

          {subtitle && (
            <Text className="text-gray-300 text-sm" numberOfLines={1}>
              {subtitle}
            </Text>
          )}
        </View>

        <Ionicons
          name="chevron-forward"
          size={20}
          color={theme?.colors?.gray[400]}
        />
      </TouchableOpacity>
    </Link>
  )
}
