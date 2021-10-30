import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import navigate from './navigate';

export default function homePage(navigation) {
    return (
      <View>
        <Text>Welcome To All You Can Buy Store!</Text>
        <Text>Get all your products and goods here..</Text>
        <Text>We offer delivery services too</Text>
        <Text onPress = {()=>navigation.navigate('login')} >Click here to login or sign up</Text>
      </View>
    );
}