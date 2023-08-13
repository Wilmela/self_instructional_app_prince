import {
  View,
  Text,
  useWindowDimensions,
  Image,
  StyleSheet,
} from "react-native";
import { teacher } from "@/assets/images";
import { FONTS, SIZES } from "@/constants/theme";

const Banner = () => {
  const { height } = useWindowDimensions();
  return (
    <View
      className="w-ful bg-APP_VIOLET p-2 rounded-md mt-5"
      style={{ height: height * 0.2 }}
    >
      <View className="flex-row justify-between items-center relative">
        <View className="justify-center items-start h-full mt-2 ml-4">
          <Text style={styles.hi}>Hi there!</Text>
          <Text style={styles.welcome}>Welcome</Text>
          {/* <Text style={styles.class}>CLASS</Text> */}
        </View>

        <View className="absolute right-0 -top-7">
          <Image source={teacher} className="w-36 h-44" resizeMode="contain" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hi: {
    fontFamily: FONTS.RLight,
    fontSize: SIZES.normal,
    letterSpacing: 5,
    color: "#fff",
  },
  welcome: {
    fontFamily: FONTS.RBold,
    fontSize: SIZES.xLarge + 8,
    // lineHeight: 35,
    // letterSpacing: 5,
    color: "#fff",
  },
  class: {
    fontFamily: FONTS.RBold,
    fontSize: SIZES.xLarge + 8,
    letterSpacing: 10,
    color: "#fff",
  },
});
export default Banner;
