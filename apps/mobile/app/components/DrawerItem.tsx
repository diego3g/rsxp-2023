import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SvgProps } from 'react-native-svg';
import { Link } from 'expo-router';

import colors from 'tailwindcss/colors';

type Props = {
  href: string;
  title: string;
  subtitle: string;
  icon: React.FC<SvgProps>;
}

export default function DrawerItem({ title, subtitle, icon: Icon, href }: Props) {

  return (
    <Link href={href} asChild>
      <TouchableOpacity className="grow border-b py-4 border-b-gray-800 flex-row items-center">
        <Icon />

        <View className="ml-5 flex-1">
          <Text className="text-gray-100 font-medium text-base">
            {title}
          </Text>

          <Text className="text-gray-300 text-sm" numberOfLines={1}>
            {subtitle}
          </Text>
        </View>

        <Ionicons
          name='chevron-forward'
          size={28}
          color={colors.gray[400]}
        />
      </TouchableOpacity>
    </Link>
  )
}
