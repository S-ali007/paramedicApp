import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import onBordingStyle from "../utils/onBordingStyle";
import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";
import { colors } from "react-native-swiper-flatlist/src/themes";

const { width } = Dimensions.get("window");

const SwiperCard = () => {
  const navigation = useNavigation();
  const data = [
    {
      title: "The Importance of Healthcare Access",
      image: require("../assets/female-doctor.png"),
    },
    {
      title: "Access Quality Healthcare at Your Fingertips with Paramedic",
      image: require("../assets/plush.png"),
    },
    {
      title: "Stay Connected to Your Health with Our Mobile App",
      image: require("../assets/female.png"),
    },
  ];
  const renderPagination = (dataLength, currentIndex) => {
    return (
      <View style={styles.paginationContainer}>
        <LinearGradient
          key={index}
          colors="red"
          style={[styles.dot, currentIndex === index && styles.activeDot]}
        />
      </View>
    );
  };

  const handleArrowPress = () => {
    navigation.navigate("LoginSignupScreen");
  };
  return (
    <View style={styles.container}>
      <SwiperFlatList
        index={0}
        autoplay
        autoplayLoop
        autoplayDelay={10}
        showPagination
        renderPagination={(dataLength, currentIndex) =>
          renderPagination(dataLength, currentIndex)
        }
        paginationActiveColor={"#00aaff"}
        paginationStyle={styles.paginationContainer}
        paginationStyleItem={styles.paginationDot}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
      {/* Circular button with arrow */}
      <Pressable style={onBordingStyle.circleButton} onPress={handleArrowPress}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/545/545682.png",
          }}
          style={onBordingStyle.arrowImage}
        />
      </Pressable>
    </View>
  );
};

export default SwiperCard;

const styles = StyleSheet.create({
  slide: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width,
    // height: width * 0.8 * 1.2,
    resizeMode: "contain",
  },
  title: {
    fontSize: 21,
    fontWeight: "600",
    color: "#333",
    lineHeight: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  paginationContainer: {
    position: "absolute",
    bottom: -87,
    left: 25,
  },
  paginationDot: {
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: "#1e90ff",
  },

  dot: {
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    borderColor: "#000",
    borderWidth: 1,
  },
});
