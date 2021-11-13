import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SettingFilled} from 'antd';
import { Dropdown } from 'react-native-material-dropdown';
import login from './login';


export default function settings(){
    function textPress(){
        return(
            login()
        )
    }

     const handlePress = ()=> {
         <View>
                <Dropdown>
                    <Text onPress ={textPress} >Logout</Text>
                </Dropdown>
      </View>
     }                                          
    return(


        <View>
            <TouchableOpacity onPress ={handlePress}>
             <SettingFilled />
                <Text>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}

function logout(){

}