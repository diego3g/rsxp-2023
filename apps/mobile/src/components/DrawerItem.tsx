import React, { forwardRef } from 'react'
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SvgProps } from 'react-native-svg'

import { theme } from '@/theme/index'

interface DrawerItemProps extends TouchableOpacityProps {
  title: string
  subtitle?: string
  icon?: React.FC<SvgProps>
  isMenuOption?: boolean
}

export const DrawerItem = forwardRef<TouchableOpacity, DrawerItemProps>(
  ({ title, subtitle, icon: Icon, isMenuOption = false, ...rest }, ref) => {
    const classNameMenu = isMenuOption ? 'px-6' : 'pr-6 pl-2'

    return (
      <TouchableOpacity
        ref={ref}
        className={`grow border-b ${classNameMenu} py-4 border-b-gray-800 flex-row items-center`}
        {...rest}
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
          color={theme.colors.gray[400]}
        />
      </TouchableOpacity>
    )
  },
)

DrawerItem.displayName = 'DrawerItem'
