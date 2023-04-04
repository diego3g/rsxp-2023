import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

export function Menu() {
  const { navigate } = useNavigation();
  return (
    <View className="flex-1 px-8 pt-16 bg-background">
      <TouchableOpacity onPress={() => navigate("home")} className="w-8">
        <Feather name="x" size={30} color="#c4c4cc" />
      </TouchableOpacity>

      <View className="flex w-full px-4 mt-24">
        <View className="flex-row items-center w-full gap-6 border-b-white">
          <Octicons name="server" color="#996dff" size={20} />
          <View>
            <Text className="font-bold text-neutral-200 text-lg">
              Minha crendencial
            </Text>
            <Text className="text-neutral-200">
              Seu perfil, redes sociais e acesso
            </Text>
          </View>
          <TouchableOpacity>
            <Octicons name="chevron-right" color="white" size={20} />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row w-full items-center gap-6 mt-6 ">
          <Octicons name="server" color="#996dff" size={20} />
          <View>
            <Text className="font-bold text-neutral-200 text-lg">
              Autenticação
            </Text>
            <Text className="text-neutral-200">Seus dados de acesso</Text>
          </View>
          <TouchableOpacity>
            <Octicons name="chevron-right" color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
