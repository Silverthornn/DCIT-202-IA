import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import {ShoppingCartOutlined} from 'antd';

export default function cart(){
    function shoppingCart(){
        <View>
           
        </View>
    }
    return(
        <View>
            <TouchableOpacity onPress={shoppingCart}>
                <ShoppingCartOutlined />
            </TouchableOpacity>
        </View>
    )
}