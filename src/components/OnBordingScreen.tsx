import { View, Text, Pressable, StatusBar } from "react-native";
import React from "react";
import onBordingStyle from "../utils/onBordingStyle";
import SwiperCard from "./SwiperCard";

const OnBordingScreen = ({ navigation }: { navigation: any }) => {
  const handleArrowPress = () => {
    navigation.goBack();
  };
  return (
    <View style={onBordingStyle.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFC" />

      <View style={onBordingStyle.navbarStyle}>
        <Pressable onPress={handleArrowPress}>
          <Text style={onBordingStyle.navbarTxtStyle}>Back</Text>
        </Pressable>
        <Pressable onPress={() => alert("kii")}>
          <Text style={onBordingStyle.navbarTxtStyle}>Skip</Text>
        </Pressable>
      </View>
      <SwiperCard />
    </View>
  );
};

export default OnBordingScreen;
