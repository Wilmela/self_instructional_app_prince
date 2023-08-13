import { ImageSourcePropType } from "react-native";

export type MenuProps = {
  photo: ImageSourcePropType;
  title: string;
  restStyles: string;
  handlePress: () => void;
};
