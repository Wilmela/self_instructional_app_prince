import { FlatList, Text, View } from "react-native";
import QuizItem from "./QuizItem";
import { menu } from "@/utils/menu";
import { useRouter } from "expo-router";
import { FONTS } from "@/constants/theme";

const QuizMenu = () => {
  const router = useRouter();
  return (
    <View style={{ gap: 7, height: "auto", marginTop: 20, marginBottom: 10 }}>
      <Text
        style={{ fontFamily: FONTS.RBold }}
        className="uppercase text-slate-700"
      >
        Test your knowledge
      </Text>

      <FlatList
        data={menu}
        renderItem={({ item }) => (
          <QuizItem
            title={item.title}
            source={item.photo}
            handlePress={() => router.push(`/quiz/${item.title}`)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default QuizMenu;
