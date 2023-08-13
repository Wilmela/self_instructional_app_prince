import { View, Text, Image, useWindowDimensions, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomHeader } from "@/components";
import { owner } from "@/assets/images";
import { FONTS, SIZES } from "@/constants/theme";
import { FontAwesome5, AntDesign, Ionicons } from "@expo/vector-icons";

const Contact = () => {
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView className="flex-1 px-4">
      <CustomHeader />

      <View className="items-center">
        <View className="w-24 h-24 rounded-full overflow-hidden mb-2">
          <Image
            source={owner}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <Text
          style={{ fontFamily: FONTS.RBold, fontSize: SIZES.large }}
          className="text-slate-700"
        >
          Hi, I'm Prince Ajie.
        </Text>
        <Text
          style={{ fontFamily: FONTS.RLight, fontSize: SIZES.normal }}
          className="text-slate-700"
        >
          You can reach me on:
        </Text>
        <View className="flex-row gap-7 items-center">
          <AntDesign
            name="phone"
            size={30}
            color="#6A0DAD"
            onPress={() =>
              Linking.openURL("tel:+2347086099931").catch((cb: string) =>
                alert(`${cb} does not exist!>`)
              )
            }
          />
          <FontAwesome5
            name="whatsapp"
            size={30}
            color="#6A0DAD"
            onPress={() =>
              Linking.openURL(
                "whatsapp://send?=hello&phone=+2347086099931"
              ).catch((cb: string) => alert(`${cb} does not exist!>`))
            }
          />
          <Ionicons
            name="mail-outline"
            size={30}
            color="#6A0DAD"
            onPress={() =>
              Linking.openURL("mailto:ajiemiprice@gmail.com").catch(
                (cb: string) => alert(`${cb} not not exist!>`)
              )
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Contact;
