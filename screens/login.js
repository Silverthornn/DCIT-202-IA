import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import homePage from './homePage';
import navigate from './navigate';

export default function login({navigation}) {
 
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
    return (
      <View>
        <Text>Login or Sign In</Text>
        <Text>Email/Username:</Text>
        <TextInput 
        placeholder = "username/email"
        onChangeText ={(email) => setEmail(email)}
        />
        <Text>Password:</Text>
        <TextInput 
        placeholder = "password" 
        secureTextEntry = "true" 
        autoCapitalize = "false" 
        onChangeText = {(password) => setPassword(password)}
        />
        <Button title = "login" onPress = {()=>navigation.navigate('homePage')} /> 
        <TouchableOpacity>
          <Text style={styles.loggin}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  loggin:{
    color:"blue"
    
  },
  inputView: {
    backgroundColor: "cyan",
    borderRadius: 5,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  }
}
)