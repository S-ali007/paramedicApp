import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";

const SplashScreen = ({ navigation }: { navigation: any }) => {
  const handleArrowPress = () => {
    navigation.navigate("OnBordingScreen");
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar translucent backgroundColor="transparent" /> */}
      <LinearGradient colors={["#52E5E7", "#130CB7"]} style={styles.gradient}>
        <Image
          source={require("../assets/splashLogo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Paramedic</Text>

        <TouchableOpacity onPress={handleArrowPress} style={styles.arrowButton}>
          <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <Path
              d="M10 19.9998H30M30 19.9998L21.6667 11.6665M30 19.9998L21.6667 28.3332"
              stroke="#1976D2"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 50,
    color: "white",
    fontWeight: "600",
    marginTop: 20,
  },
  arrowButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    bottom: 40,
    backgroundColor: "#FFFFFC",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    right: 20,
  },
  arrow: {
    width: 40,
    height: 40,
  },
});

export default SplashScreen;
