import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import homePage from './homePage';
import navigate from './navigate';


// const handlePress 
 const press = function pressed(){
  return(homePage())
}

export default function login(params) {
   const navigation = params.navigation;
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
    return (
      <View style = {styles.inputView}>
        <Text style={styles.Welcome}>Welcome To Silver City Mall!</Text>
        
        <Text style = {styles.Text}>Log in or Sign In</Text>
        
        <Text
          style={{fontSize:18, fontFamily:"Montserrat", marginBottom:10, marginTop:10}}
        >
        Email/Username:</Text>
        
        <TextInput 
        placeholder = "username/email"
        onChangeText ={(email) => setEmail(email)}
        style = {styles.TextInput}
        />
        
        <Text
          style={{fontSize:18, fontFamily:"Montserrat", marginBottom:10, marginTop: 10}}
        >Password:</Text>
        
        <TextInput 
        placeholder = "password" 
        secureTextEntry = "true" 
        autoCapitalize = "false" 
        onChangeText = {(password) => setPassword(password)}
        style = {styles.TextInput}
        />
        <Button title = "login" onPress = {()=>{navigation.navigate("Home")}} style={{marginTop:15}} /> 
        <TouchableOpacity >
          <Text style={styles.loggin }>Forgot Password...</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  loggin:{
    color:"blue",
    marginBottom: 20
    
  },
  inputView: {
    //backgroundColor: "#fff",
    //borderRadius: 5,
    //width: "50%",
    //height: 45,
    //marginBottom: 20,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  TextInput: {
    height: 50,
    //flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  Text:{
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Montserrat"
  },
  Welcome:{
    marginBottom: 30,
   // backgroundColor: "cyan",
    fontWeight: "bold",
    fontFamily: "Cochin",
    fontSize: 30,
  }
}
)