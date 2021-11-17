import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

export default function cart(){
    return(
        <View>
            <Icon name="home" 
                onPress ={()=>{navigation.navigate("Home")}}
            />
        </View>
    )
}