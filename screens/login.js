import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import homePage from './homePage';

export default function login() {
    return (
      <View>
        <Text>Login or Sign In</Text>
        <TextInput placeholder = "username/email"/>
        <TextInput placeholder = "password" secureTextEntry = "true" autoCapitalize = "false" />
        <Button title = "login" onPress = {<homePage/>} /> 
      </View>
    );
}