import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  StatusBar,
} from "react-native";
import onBordingStyle from "../utils/onBordingStyle";

const LoginSignupScreen = ({ navigation }: { navigation: any }) => {
  const handleArrowPress = () => {
    navigation.goBack();
  };
  return (
    <View style={onBordingStyle.container}>
      <View style={onBordingStyle.navbarStyle}>
        <Pressable onPress={handleArrowPress}>
          <Text style={onBordingStyle.navbarTxtStyle}>Back</Text>
        </Pressable>
        <Pressable onPress={() => alert("kii")}>
          <Text style={onBordingStyle.navbarTxtStyle}>Skip</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />

        {/* Logo */}

        <Image
          source={require("../assets/logo-plus.png")}
          style={styles.logo}
        />
        <Text style={styles.appName}>Paramedic</Text>

        {/* Header Text */}
        <Text style={styles.header}>Exploring the healthcare system</Text>

        {/* Sub Text */}
        <Text style={styles.subText}>
          Consider your educational background and interests. Healthcare offers
          a wide range of career options, from nursing and medicine to
          administration and research.
        </Text>

        {/* Login Button */}
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>

        {/* Sign Up Button */}
        <Pressable
          style={styles.signupButton}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginSignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  appName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1976D2",
    marginBottom: 30,
  },
  header: {
    fontSize: 22,
    fontWeight: "600",
    color: "#101622",
    marginBottom: 16,
    textAlign: "center",
    lineHeight: 33,
  },
  subText: {
    fontSize: 12,
    color: "#101622",
    textAlign: "center",
    fontWeight: "300",
    marginBottom: 85,
    lineHeight: 18,
    width: 371,
    paddingHorizontal: 20,
  },
  loginButton: {
    width: 265,
    backgroundColor: "#1976D2",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "600",
  },
  signupButton: {
    width: 265,
    borderColor: "#1976D2",
    borderWidth: 1,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  signupButtonText: {
    color: "#1976D2",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "600",
  },
});
