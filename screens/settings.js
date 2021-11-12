import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SettingFilled} from 'antd'



export default function settings(){
    return(
        <View>
            <TouchableOpacity>
             <SettingFilled />
                <Text>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}

function logout(){

}