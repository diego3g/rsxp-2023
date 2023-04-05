import { TouchableOpacity, View } from 'react-native'

import MenuIcon from '../assets/menu-icon.svg'
import RSXPLogo from '../assets/rsxp-logo.svg'

export function TabsHeader() {
  return (
    <View className="flex-row px-5 pt-12 pb-4 items-center gap-4 bg-gray-900">
      <TouchableOpacity>
        <MenuIcon width={40} height={40} />
      </TouchableOpacity>

      <RSXPLogo />
    </View>
  )
}
