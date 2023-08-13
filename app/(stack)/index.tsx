import { Platform, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import {
  Banner,
  CustomHeader,
  QuizMenu,
  SearchBar,
  Studies,
} from "@/components";

const Home = () => {
  return (
    <SafeAreaView
      className="flex-1 px-4"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {/* <SearchBar value="Search" handleChange={() => {}} /> */}
      <CustomHeader />
      <Banner />

      <QuizMenu />

      <Studies />
    </SafeAreaView>
  );
};

export default Home;
