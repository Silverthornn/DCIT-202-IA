import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './screens/Login';
import home from './src/homeScreen';
import cart from './screens/cart';
import social from './screens/social';



//import login from './screens/login';
// import HomeScreen from './screens/homePage';
// import products from './screens/prouctDetails';


 const MainNavigator = createNativeStackNavigator();


export default function App() {
  return (
    <View style={{ flex: 1 }}>
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{ headerShown: true ,  }}
        // initialRouteName=""
      >
        <MainNavigator.Screen name="Login" component={login} />
        <MainNavigator.Screen name="Home" component={home} />
        <MainNavigator.Screen name="Cart" component={cart} />
        <MainNavigator.Screen name="Social" component={social} />
       
      </MainNavigator.Navigator>
    </NavigationContainer>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
