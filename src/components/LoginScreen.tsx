import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  Pressable,
} from "react-native";
import Svg, { G, Path } from "react-native-svg";
const { width } = Dimensions.get("window");

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const handleArrowPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFC" />

      <View style={styles.backLoginContainer}>
        <Pressable onPress={handleArrowPress}>
          <Svg
            height="12px"
            width="12px"
            id="Capa_1"
            viewBox="0 0 309.143 309.143"
            fill="#000000"
          >
            <G id="SVGRepo_bgCarrier" strokeWidth="0"></G>
            <G
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></G>
            <G id="SVGRepo_iconCarrier">
              <Path d="M112.855,154.571L240.481,26.946c2.929-2.929,2.929-7.678,0-10.606L226.339,2.197 C224.933,0.79,223.025,0,221.036,0c-1.989,0-3.897,0.79-5.303,2.197L68.661,149.268c-2.929,2.929-2.929,7.678,0,10.606 l147.071,147.071c1.406,1.407,3.314,2.197,5.303,2.197c1.989,0,3.897-0.79,5.303-2.197l14.142-14.143 c2.929-2.929,2.929-7.678,0-10.606L112.855,154.571z" />
            </G>
          </Svg>
        </Pressable>
        <Text style={styles.header}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M3.12816 18.8242C2.8515 18.8242 2.5928 18.7515 2.37183 18.6238L8.88975 12.9433L9.49814 13.4728C10.0073 13.9153 10.6447 14.1393 11.2761 14.1393C11.9106 14.1393 12.548 13.9153 13.0572 13.4728L13.6653 12.9433L15.8719 14.867C16.1214 14.4465 16.4315 14.0676 16.7912 13.7402L14.7713 11.9802L20.952 6.58789V12.545C21.5267 12.6498 22.0656 12.8553 22.5522 13.1426V5.85168C22.5522 5.64524 22.532 5.44096 22.4942 5.24329C22.3923 4.73118 22.1654 4.26257 21.8484 3.87543C21.7814 3.79105 21.7115 3.71554 21.6356 3.64002C21.0741 3.07536 20.2854 2.72314 19.4239 2.72314H3.12816C2.26673 2.72314 1.48116 3.07536 0.9165 3.64002C0.840938 3.71554 0.771094 3.79105 0.704063 3.87543C0.386813 4.26257 0.159891 4.73118 0.0610781 5.24329C0.0201562 5.44096 0 5.64524 0 5.85168V17.2968C0 17.7358 0.0931406 18.1579 0.259031 18.539C0.412922 18.9029 0.640172 19.2321 0.9165 19.5081C0.986391 19.578 1.05623 19.6422 1.1318 19.7061C1.67316 20.1543 2.37183 20.425 3.12816 20.425H16.2757C15.8952 19.9547 15.599 19.414 15.4126 18.8242H3.12816V18.8242ZM2.0483 4.77182C2.32777 4.49263 2.70328 4.32364 3.12816 4.32364H19.424C19.8489 4.32364 20.2275 4.49268 20.5039 4.77182C20.553 4.82155 20.5996 4.87696 20.6408 4.93203L12.0998 12.3759C11.864 12.5824 11.5729 12.6844 11.2761 12.6844C10.9822 12.6844 10.6913 12.5824 10.4524 12.3759L1.91484 4.92889C1.95263 4.87382 1.99922 4.82155 2.0483 4.77182ZM1.60013 17.2968V6.58504L7.78125 11.9771L1.60327 17.3635C1.60013 17.3431 1.60013 17.3201 1.60013 17.2968Z"
            fill="#A0A8B0"
          />
          <Path
            d="M20.0759 13.4292C17.9086 13.4292 16.1523 15.1861 16.1523 17.3533C16.1523 19.5203 17.9086 21.2772 20.0759 21.2772C22.2435 21.2772 24 19.5203 24 17.3533C24 15.186 22.2435 13.4292 20.0759 13.4292ZM20.6827 19.2301H19.7297V16.5853H19.7183L19.0272 16.9117L18.883 16.0764L19.8512 15.6339H20.6827L20.6827 19.2301Z"
            fill="#A0A8B0"
          />
        </Svg>
        <TextInput style={styles.input} placeholder="Enter your email" />
      </View>

      <View style={styles.inputContainer}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M20.025 24H3.975C2.61 24 1.5 22.89 1.5 21.525V9.975C1.5 8.61 2.61 7.5 3.975 7.5H20.025C21.39 7.5 22.5 8.61 22.5 9.975V21.51C22.5 22.875 21.39 23.985 20.025 23.985V24ZM3.975 9C3.435 9 3 9.435 3 9.975V21.51C3 22.05 3.435 22.485 3.975 22.485H20.025C20.565 22.485 21 22.05 21 21.51V9.975C21 9.435 20.565 9 20.025 9H3.975Z"
            fill="#A0A8B0"
          />
          <Path
            d="M18.8104 9H5.19043V6.81C5.19043 3.06 8.25043 0 12.0004 0C15.7504 0 18.8104 3.06 18.8104 6.81V9ZM6.69043 7.5H17.3104V6.81C17.3104 3.885 14.9254 1.5 12.0004 1.5C9.07543 1.5 6.69043 3.885 6.69043 6.81V7.5Z"
            fill="#A0A8B0"
          />
          <Path
            d="M18 17.25C18.8284 17.25 19.5 16.5784 19.5 15.75C19.5 14.9216 18.8284 14.25 18 14.25C17.1716 14.25 16.5 14.9216 16.5 15.75C16.5 16.5784 17.1716 17.25 18 17.25Z"
            fill="#A0A8B0"
          />
          <Path
            d="M12 17.25C12.8284 17.25 13.5 16.5784 13.5 15.75C13.5 14.9216 12.8284 14.25 12 14.25C11.1716 14.25 10.5 14.9216 10.5 15.75C10.5 16.5784 11.1716 17.25 12 17.25Z"
            fill="#A0A8B0"
          />
          <Path
            d="M6 17.25C6.82843 17.25 7.5 16.5784 7.5 15.75C7.5 14.9216 6.82843 14.25 6 14.25C5.17157 14.25 4.5 14.9216 4.5 15.75C4.5 16.5784 5.17157 17.25 6 17.25Z"
            fill="#A0A8B0"
          />
        </Svg>

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.or}>OR</Text>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Sign in with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Sign in with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signup}>Sign up for a new account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    backgroundColor: "#FFFFFC",
    paddingTop: 34,
  },
  backLoginContainer: {
    paddingLeft: 31,
    flexDirection: "row",
    alignItems: "center",
    gap: 98,
  },
  header: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 30,
    color: "#101622",
  },

  inputContainer: {
    maxWidth: 359,
    width: "100%",
    height: 56,
    borderRadius: 24,
    marginBottom: 15,
    paddingHorizontal: 35,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F6F4",
    marginTop: 37,
  },
  input: {
    width: "100%",
    paddingHorizontal: 14,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 39,
    color: "#007BFF",
  },
  loginButton: {
    backgroundColor: "#1976D2",
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 25,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "500",
  },
  or: {
    marginVertical: 15,
    fontSize: 18,
    color: "#777",
  },
  socialButton: {
    backgroundColor: "#F6F6F4",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginTop: 10,
  },
  socialButtonText: {
    fontSize: 16,
  },
  signup: {
    marginTop: 20,
    color: "#007BFF",
  },
});

export default LoginScreen;
