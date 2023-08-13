import { FONTS } from "@/constants/theme";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  useWindowDimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  title: string;
  source: ImageSourcePropType;
  handlePress?: () => any;
};

const QuizItem = ({ source, handlePress, title }: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View className="bg-transparent items-center">
      <TouchableOpacity
        className="w-20 h-20 rounded-full overflow-hidden"
        onPress={handlePress}
        activeOpacity={0.7}
        style={{
          width: width * 0.2,
          height: width * 0.2,
          borderRadius: (width * 0.2) / 2,
        }}
      >
        <Image source={source} resizeMode="cover" className="w-full h-full" />
      </TouchableOpacity>

      <Text
        className="mt-2 text-slate-700 leading-4"
        style={{ fontFamily: FONTS.RLight }}
      >
        {title.length > 14 ? `${title.slice(0, 12)}...` : title}
      </Text>
    </View>
  );
};

export default QuizItem;
