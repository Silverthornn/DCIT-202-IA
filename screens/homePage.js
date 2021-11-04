import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {Button, ThemeProvider, Card} from 'react-native-elements';
import navigate from './navigate';
import products from './prouctDetails';

export default function homePage({navigation}) {
    
  return (
    
      <View>
        <Text>Welcome To All You Can Buy Store!</Text>
        <Text>Get all your products and goods here..</Text>
        <Text>We offer delivery services too</Text>
        <Text onPress = {()=>navigation.navigate('login')} style = {styles.loggin} >Click here to login or sign up</Text>
        <Image source={require("..pictures\bag.jpg")} />
        <Image source={require("..pictures\chair.jpg")} />
        <Image source={require("..picture\jean.jpg")} />
        <Image source={require("..picture\phones.jpg")} />
        <Image source={require("..picture\shirts.jpg")} />
        <Image source={require("..picture\shoes.jpg")} />
        <Image source={require("..pictures\watch.jpg")} />
      
      </View>
      
    );
}


const styles = StyleSheet.create({
  loggin:{
    color:"blue"
    
  },
  pictures:{
    justifyContent: "center",
    alignContent: "center"
  }
}
)

