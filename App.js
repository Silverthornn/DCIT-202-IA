import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App({navigation}) {
  return (
   <View style = {styles.container}>
        <Text>Welcome To All You Can Buy Store!</Text>
        <Text>Get all your products and goods here..</Text>
        <Text>We offer delivery services too</Text>
        <TouchableOpacity>
        <Text onPress = {()=>navigation.navigate('login')} style = {} >Click here to login or sign up</Text>
        </TouchableOpacity>
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
