import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginSignupScreen from "@/src/components/LoginSignupScreen";
import SplashScreen from "@/src/components/SplashScreen";
import OnBordingScreen from "@/src/components/OnBordingScreen";
import LoginScreen from "@/src/components/LoginScreen";

export type RootStackParamList = {
  OnBordingScreen: undefined;
  LoginSignupScreen: undefined;
  SplashScreen: undefined;
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnBordingScreen"
        component={OnBordingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginSignupScreen"
        component={LoginSignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
