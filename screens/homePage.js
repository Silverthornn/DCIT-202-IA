import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {Button, ThemeProvider, Card, SearchBar} from 'react-native-elements';
import navigate from './navigate';
import products from './prouctDetails';
import settings from './settings';
import cart from './cart';

export default function homePage({navigation}) {
    
  return (
    
      <View>
      <Card>
        <Text>Welcome To All You Can Buy Store!</Text>
        <Text>Get all your products and goods here..</Text>
        <Text>We offer delivery services too</Text>
      </Card>  
      <Card>
      <SearchBar 
      placeholder = "search here" 
      />
      settings()
      </Card>
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

