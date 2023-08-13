import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomHeader } from "@/components";
import { ad } from "@/assets/images";
import { FONTS, SIZES } from "@/constants/theme";
import { AboutSvg } from "@/components/SVG";

const About = () => {
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView className="flex-1 px-4">
      <CustomHeader />

      <View className="mt-2">
        <AboutSvg width="100%" height={height * 0.2} />

        <Text
          style={{
            fontFamily: FONTS.RBold,
            fontSize: SIZES.large,
            marginTop: height * 0.02,
          }}
          className="text-slate-700"
        >
          About this application.
        </Text>
        <Text
          className="text-slate-700 mt-2 text-justify leading-7"
          style={{ fontFamily: FONTS.RLight, fontSize: SIZES.normal }}
        >
          This is self-instructional multimedia learning application designed to
          revolutionize the way you acquire knowledge. Seamlessly blending text
          videos, engaging quizzes, audio and images.
          {"\n"}
          {"\n"}
          This platform offers a dynamic and comprehensive learning experience
          for students in the Mechanical discipline. Embrace the future of
          education with this multimedia learning application, where knowledge
          comes to life like never before.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default About;
