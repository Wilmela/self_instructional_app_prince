import { Text, FlatList, View } from "react-native";
import { menu } from "@/utils/menu";
import Menu from "./Menu";
import { FONTS } from "@/constants/theme";
import { useRouter } from "expo-router";

const Studies = () => {
  const router = useRouter()
  return (
    <View style={{ gap: 7, marginTop: 10, flex: 1 }}>
      <Text
        style={{ fontFamily: FONTS.RBold }}
        className="uppercase text-slate-700"
      >
        Take some lessons
      </Text>

      <FlatList
        data={menu}
        renderItem={({ item }) => (
          <Menu
            title={item.title}
            photo={item.photo}
            handlePress={() => router.push(`/lessons/${item.title}`)}
            restStyles="text-red-500"
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 15 }}
        keyExtractor={(item) => item.title.toString()}
        style={{ marginBottom: 20 }}
      />
    </View>
  );
};

export default Studies;
