import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  useWindowDimensions,
  Pressable,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomHeader } from "@/components";
import { FONTS, SIZES } from "@/constants/theme";
import { VideoSvg } from "@/components/SVG";
import videoData from "@/constants/videoData";

const Videos = () => {
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView className="flex-1 px-4">
      <CustomHeader />

      <View className="mt-2">
        <VideoSvg width="100%" height={height * 0.2} />

        <Text
          style={{
            fontFamily: FONTS.RBold,
            fontSize: SIZES.large,
            marginTop: height * 0.02,
          }}
          className="text-slate-700"
        >
          Stream Video Lessons.
        </Text>
        <>
          {videoData.map((video) => (
            <Pressable
              key={video.title}
              onPress={() =>
                Linking.openURL(video.uri).catch((e) =>
                  alert("Error playing video")
                )
              }
              className="bg-slate-300 my-1 py-2 items-center rounded-md"
            >
              <Text
                style={{ fontFamily: FONTS.RLight, fontSize: SIZES.normal }}
                className="text-slate-700"
              >
                {video.title}
              </Text>
            </Pressable>
          ))}
        </>
      </View>
    </SafeAreaView>
  );
};

export default Videos;
