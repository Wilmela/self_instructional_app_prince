import { View, Text, Image, Pressable } from "react-native";
import { owner } from "@/assets/images";
import { FONTS, SIZES } from "@/constants/theme";

const CustomHeader = () => {
  return (
    <View className="w-full flex-row justify-between items-center mb-4">
      <View className="border border-APP_VIOLET rounded-full w-10 h-10 items-center justify-center">
        <Text
          style={{
            fontFamily: FONTS.RBold,
            fontSize: SIZES.normal - 6,
            color: "#6A0DAD",
          }}
        >
          class
        </Text>
      </View>
      <View className="flex-row gap-2 items-center">
        <Text
          className="text-APP_VIOLET"
          style={{ fontFamily: FONTS.RLight, fontSize: SIZES.normal }}
        >
          Prince
        </Text>

        <Pressable
          className="w-10 h-10 rounded-full overflow-hidden"
          onPress={() => alert("Hi, do you have a question?")}
        >
          <Image source={owner} resizeMode="cover" className="w-full h-full" />
        </Pressable>
      </View>
    </View>
  );
};

export default CustomHeader;
