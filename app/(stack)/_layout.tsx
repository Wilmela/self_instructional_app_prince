import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="quiz/[title]"
        options={{
          title: "Quiz",
          presentation: "modal",
        }}
      />
  
    </Stack>
  );
};

export default Layout;
