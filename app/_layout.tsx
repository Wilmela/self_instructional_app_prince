import { COLORS } from "@/constants/theme";
import { AntDesign, Feather } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(stack)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    RobotoBold: require("../assets/fonts/Poppins-Bold.ttf"),
    RobotoMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    RobotoLight: require("../assets/fonts/Poppins-Light.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tabs>
        <Tabs.Screen
          name="(stack)"
          options={{
            headerShown: false,
            title: "Home",
            tabBarActiveTintColor: COLORS.secondary,
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="player"
          options={{
            headerShown: false,
            title: "Audio",
            tabBarActiveTintColor: COLORS.secondary,
            tabBarIcon: ({ size, color }) => (
              <Feather name="music" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="videos"
          options={{
            headerShown: false,
            title: "Video",
            tabBarActiveTintColor: COLORS.secondary,
            tabBarIcon: ({ size, color }) => (
              <Feather name="video" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="about"
          options={{
            headerShown: false,
            title: "About",
            tabBarActiveTintColor: COLORS.secondary,
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="info" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="contact"
          options={{
            headerShown: false,
            title: "Contact",
            tabBarActiveTintColor: COLORS.secondary,
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="contacts" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
