import { View, Text, TextInput } from "react-native";

type Props = {
  value: string;
  handleChange: (text: string) => void;
};
const SearchBar = ({ value, handleChange }: Props) => {
  return (
    <View className="my-5">
      <TextInput
        value={value}
        onChangeText={handleChange}
        placeholder="Filter topics..."
        className="p-2 rounded-md w-full bg-white border border-blue-100"
      />
    </View>
  );
};

export default SearchBar;
