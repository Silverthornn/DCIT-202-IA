import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import homePage from './homePage';
import navigate from './navigate';

export default function login({navigation}) {
  this.state = {
    uname:"",
    email:"",
    pass: ""
  }

  this.handleChange = this.handleChange.bind(this);
    return (
      <View>
        <Text>Login or Sign In</Text>
        <Text>Email/Username:</Text>
        <TextInput placeholder = "username/email"/>
        <Text>Password:</Text>
        <TextInput placeholder = "password" secureTextEntry = "true" autoCapitalize = "false" />
        <Button title = "login" onPress = {()=>navigation.navigate('homePage')} /> 
      </View>
    );
}

const styles = StyleSheet.create({
  loggin:{
    color:"blue"
    
  }
}
)