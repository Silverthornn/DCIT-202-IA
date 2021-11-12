import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homePage from "../screens/homePage";
import login from "../screens/login";

// import Login from "../screens/login";
// import About from "../screens/about";
// import Signup from "../screens/signup";
// import SignInfo from "../screens/signInfo";

const Stack = createNativeStackNavigator();

export default function navigate() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
       screenOptions={{ headerShown: false , }}
    >
      <Stack.Screen name="homePage" component={homePage} />
      <Stack.Screen name="login" component={login} />
       {/* <Stack.Screen name="Signup" component={Signup} />
      // <Stack.Screen name="About" component={About} />
      // <Stack.Screen name="SignInfo" component={SignInfo} /> */}
    </Stack.Navigator>
  );
}