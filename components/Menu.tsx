import { FONTS, SIZES } from "@/constants/theme";
import { MenuProps } from "@/types/types";
import { useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const Menu = ({ photo, title, restStyles, handlePress }: MenuProps) => {
  const { height, width } = useWindowDimensions();
  const [active, setActive] = useState("Maths");

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`flex-row items-center justify-between ${restStyles} rounded-md bg-white overflow-hidden`}
      onPress={handlePress}
      style={{
        flex: 1,
        width: width * 0.92,
        height: height * 0.19,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,

        elevation: 4,
      }}
    >
      <View className="flex-[0.5] w-full h-full">
        <Image source={photo} resizeMode="cover" className="w-full h-full" />
      </View>
      <View className="flex-[0.5] ml-3">
        <Text
          style={{ fontFamily: FONTS.RBold, fontSize: SIZES.large - 4 }}
          className="text-APP_VIOLET"
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Menu;
