import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Alert,
  useWindowDimensions,
  SafeAreaView,
  Platform,
  StatusBar,
  Pressable,
} from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";
import { Audio } from "expo-av";

import { FONTS, SIZES } from "@/constants/theme";
import audioLink from "@/constants/audioData";

import { CustomHeader } from "@/components";
import { ListenSvg } from "@/components/SVG";

const Player = () => {
  const { width, height } = useWindowDimensions();

  const [sound, setSound] = useState<any>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioId, setAudioId] = useState<number>(0);

  useEffect(() => {
    if (audioId !== null) {
      loadSound(); // Load sound when audioId changes
    }
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [audioId]);

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(audioLink[audioId].uri);
    setSound(sound);
    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
  };

  const onPlaybackStatusUpdate = (status: any) => {
    if (status.isLoaded) {
      setDuration(status.durationMillis);
      setPosition(status.positionMillis);
      setIsPlaying(status.isPlaying);
    }
  };

  const playSound = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFastForward = async () => {
    if (sound) {
      const newPosition = position + 10000; // 10 seconds forward (adjust as needed)
      const isPlaying = await sound.getStatusAsync();

      if (newPosition < duration) {
        await sound.setPositionAsync(newPosition);
        if (isPlaying) {
          await sound.playAsync();
        }
      }
    }
  };

  const handleRewind = async () => {
    if (sound) {
      const newPosition = position - 10000; // 10 seconds backward (adjust as needed)
      const isPlaying = await sound.getStatusAsync();

      if (newPosition >= 0) {
        await sound.setPositionAsync(newPosition);
        if (isPlaying) {
          await sound.playAsync();
        }
      }
    }
  };

  const iconColor = "#6C62F8";
  return (
    <SafeAreaView
      className="flex-1 px-4"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <CustomHeader />

      <ListenSvg width="100%" height={height * 0.2} />
      <View
        className="bg-APP_VIOLET opacity-70 justify-center items-center py-2 rounded-md mb-5"
        style={{
          marginTop: height * 0.05,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.RLight,
            fontSize: SIZES.normal,
          }}
          className="text-gray-100"
        >
          {audioLink[audioId].title}
        </Text>
      </View>

      <>
        {audioId !== null ? (
          <View className="w-full flex-row items-center justify-evenly">
            <Foundation
              name="rewind"
              size={width * 0.1}
              color={iconColor}
              onPress={handleRewind}
            />
            <Ionicons
              name={!isPlaying ? "play" : "pause"}
              size={width * 0.1}
              color={iconColor}
              onPress={playSound}
            />
            <Foundation
              name="fast-forward"
              size={width * 0.1}
              color={iconColor}
              onPress={handleFastForward}
            />
          </View>
        ) : (
          Alert.alert("Stop!", "Load up an audio file from the playlist", [
            { text: "okay", style: "destructive", onPress: () => {} },
          ])
        )}
      </>
      <>
        <Text
          style={{
            fontFamily: FONTS.RBold,
            fontSize: SIZES.large,
            marginTop: height * 0.02,
          }}
          className="text-slate-700"
        >
          Listen to some lessons.
        </Text>

        {audioLink.map((lesson, index) => {
          return (
            <Pressable
              key={lesson.title}
              className="w-full items-center justify-center py-2 my-1 bg-slate-300 rounded-md"
              onPress={() => setAudioId(index)}
            >
              <Text
                className="text-slate-700"
                style={{
                  fontFamily: FONTS.RLight,
                  fontSize: SIZES.normal,
                }}
              >
                {lesson?.title}
              </Text>
            </Pressable>
          );
        })}
      </>
    </SafeAreaView>
  );
};

export default Player;
